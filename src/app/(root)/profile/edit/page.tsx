import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import PageLayout from "@/components/shared/layout/PageLayout";
import { Box, Typography } from "@mui/material";
import AccountProfile from "@/components/shared/form/AccountProfile";

// Copy paste most of the code as it is from the /onboarding

async function Page() {
  //   const user = await currentUser();
  //   if (!user) return null;

  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  const userInfo = await fetchUser(userId);
  //   if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: userId,
    objectId: userInfo?._id,
    username: userInfo?.username,
    name: userInfo?.name,
    bio: userInfo?.bio,
    image: userInfo?.image,
  };

  return (
    <PageLayout>
      <Box>
        <Typography
          sx={{ fontSize: "30px", lineHeight: "140%", fontWeight: 700 }}
        >
          Edit Profile
        </Typography>
        <Typography
          sx={{
            mt: "0.75rem",
            fontSize: "16px",
            lineHeight: "140%",
            fontWeight: 700,
          }}
        >
          Make any changes
        </Typography>

        <Box sx={{ mt: "3rem" }}>
          <AccountProfile user={userData} btnTitle="Continue" />
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Page;
