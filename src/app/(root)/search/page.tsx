import Searchbar from "@/components/shared/app/Searchbar";
import PageLayout from "@/components/shared/layout/PageLayout";

import { Box, Typography } from "@mui/material";

import { Suspense } from "react";

import FilterSection from "./components/FilterSection";
import SkeletonUserCardList from "@/components/shared/card/SkeletonUserCardList";
import SkeletonUserCard from "@/components/shared/card/SkeletonUserCard";

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
          Search
        </Typography>
        <Box sx={{ mt: "1.25rem" }}>
          <Searchbar routeType="search" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 3 }}>
          <div key={Math.random()}>
            <Suspense
              fallback={
                <SkeletonUserCardList
                  pageSize={1}
                  skeletonCard={SkeletonUserCard}
                />
              }
            >
              <FilterSection searchParams={searchParams} />
            </Suspense>
          </div>
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Page;
