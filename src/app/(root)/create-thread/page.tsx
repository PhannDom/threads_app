import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import PageLayout from "@/components/shared/layout/PageLayout";
import { Box, Typography } from "@mui/material";
import PostThread from "@/components/shared/form/PostThread";

async function Page() {
  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  // const user = await currentUser();
  // if (!user) return null;

  // fetch organization list created by user
  const userInfo = await fetchUser(userId);
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ fontSize: "30px", lineHeight: "140%", fontWeight: 700 }}
        >
          Create Thread
        </Typography>
      </Box>

      <PostThread userId={userInfo._id.toString()} />
    </PageLayout>
  );
}

export default Page;
