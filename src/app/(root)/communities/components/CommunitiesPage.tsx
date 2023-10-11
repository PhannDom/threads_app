import CommunityCard from "@/shared/card/CommunityCard";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { Box, Typography } from "@mui/material";

async function CommunitiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const result = await fetchCommunities({
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 25,
  });

  return (
    <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 2 }}>
      {result.communities.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            No Results
          </Typography>
        </Box>
      ) : (
        <>
          {result.communities.map((community) => (
            <CommunityCard
              key={community.id}
              id={community.id}
              name={community.name}
              username={community.username}
              imgUrl={community.image}
              bio={community.bio}
              members={community.members}
            />
          ))}
        </>
      )}
    </Box>
  );
}

export default CommunitiesPage;
