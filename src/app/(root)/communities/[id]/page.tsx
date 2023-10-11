import { communityTabs } from "@/constants";

import { fetchCommunityDetails } from "@/lib/actions/community.actions";
import ProfileHeader from "@/components/shared/app/ProfileHeader";
import PageLayout from "@/components/shared/layout/PageLayout";
import { Box } from "@mui/material";
import CustomTab from "@/components/shared/tab/CustomTab";
import ThreadsTab from "@/components/shared/tab/ThreadsTab";

async function Page({ params }: { params: { id: string } }) {
  const communityDetails = await fetchCommunityDetails(params.id);
  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <ProfileHeader
          accountId={communityDetails.createdBy.id}
          authUserId={params.id}
          name={communityDetails.name}
          username={communityDetails.username}
          imgUrl={communityDetails.image}
          bio={communityDetails.bio}
          type="Community"
        />
      </Box>
      <Box>
        <CustomTab key={Math.random()} tabs={communityTabs}>
          <ThreadsTab
            key={communityDetails.id}
            accountId={communityDetails._id}
            currentUserId={userId}
            accountType="Community"
          />
        </CustomTab>
      </Box>
    </PageLayout>
  );
}

export default Page;
