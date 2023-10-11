import { fetchUser } from "@/lib/actions/user.actions";

import { profileTabs } from "@/constants";
import ProfileHeader from "@/shared/app/ProfileHeader";
import { Box } from "@mui/material";
import PageLayout from "@/shared/layout/PageLayout";
import CustomTab from "@/shared/tab/CustomTab";
import ThreadsTab from "@/shared/tab/ThreadsTab";

async function Page({ params }: { params: { id: string } }) {
  // const user = await currentUser();

  // if (!user) return null;

  // const userInfo = await fetchUser(params.id);

  // if (!userInfo?.onboarded) redirect("/onboarding");

  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  const userInfo = await fetchUser(userId);

  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <ProfileHeader
          accountId={userInfo.id}
          authUserId={userId}
          name={userInfo.name}
          username={userInfo.username}
          imgUrl={userInfo.image}
          bio={userInfo.bio}
        />
      </Box>
      <Box>
        <CustomTab key={Math.random()} tabs={profileTabs}>
          <ThreadsTab
            key={userInfo.id}
            accountId={userInfo.id}
            currentUserId={userInfo.id}
            accountType="User"
          />
        </CustomTab>
      </Box>
    </PageLayout>
  );
}

export default Page;
