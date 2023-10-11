import PageLayout from "@/shared/layout/PageLayout";
import HomePage from "./components/HomePage";
import { Suspense } from "react";
import SkeletonUserCardList from "@/shared/card/SkeletonUserCardList";
import SkeletonUserCard from "@/shared/card/SkeletonUserCard";
import { Box, Typography } from "@mui/material";

function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // const sleep = () =>
  //   new Promise((r) => {
  //     setTimeout(() => {
  //       r("aaaaa");
  //     }, 100000000);
  //   });

  // // Fetch users
  // await sleep();
  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ fontSize: "30px", lineHeight: "140%", fontWeight: 700 }}
        >
          Home
        </Typography>
        <div key={Math.random()}>
          <Suspense
            fallback={
              <SkeletonUserCardList
                pageSize={3}
                skeletonCard={SkeletonUserCard}
              />
            }
          >
            <HomePage searchParams={searchParams} />
          </Suspense>
        </div>
      </Box>
    </PageLayout>
  );
}

export default Home;
