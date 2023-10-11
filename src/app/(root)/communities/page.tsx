import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import Searchbar from "@/components/shared/Searchbar";
// import Pagination from "@/components/shared/Pagination";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";
import { Box, Typography } from "@mui/material";
import Searchbar from "@/components/shared/app/Searchbar";
import PageLayout from "@/components/shared/layout/PageLayout";
import CommunitiesPage from "./components/CommunitiesPage";

function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ fontSize: "30px", lineHeight: "140%", fontWeight: 700 }}
        >
          Communities
        </Typography>

        <Box sx={{ mt: "1.25rem" }}>
          <Searchbar routeType="communities" />
        </Box>
        <CommunitiesPage searchParams={searchParams} />
        {/* <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 2 }}>
        {result.communities.length === 0 ? (
          <p className="no-result">No Result</p>
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
      </Box> */}

        {/* <h1 className="head-text">Communities</h1>

      <div className="mt-5">{<Searchbar routeType="communities" />}</div>

      <section className="mt-9 flex flex-wrap gap-4">
        {result.communities.length === 0 ? (
          <p className="no-result">No Result</p>
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
        )}<Typography>Communities</Typography>
      <Searchbar routeType="search" />
      </section> */}

        {/* <Pagination
        path="communities"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      /> */}
      </Box>
    </PageLayout>
  );
}

export default Page;
