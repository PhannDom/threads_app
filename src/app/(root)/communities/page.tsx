import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import Searchbar from "@/components/shared/Searchbar";
// import Pagination from "@/components/shared/Pagination";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchCommunities } from "@/lib/actions/community.actions";
import { Box, Typography } from "@mui/material";
import Searchbar from "@/shared/app/Searchbar";
import PageLayout from "@/shared/layout/PageLayout";
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
      </Box>
    </PageLayout>
  );
}

export default Page;
