import Comment from "@/components/forms/Comment";
import ThreadCard from "@/components/shared/card/ThreadCard";
import PageLayout from "@/components/shared/layout/PageLayout";
import { fetchThreadById } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { Box } from "@mui/material";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  // const user = await currentUser();

  // if (!user) return null;

  const userInfo = await fetchUser(userId);

  if (!userInfo?.onboarded) redirect("/onboarding");

  const thread = await fetchThreadById(params.id);

  return (
    <PageLayout>
      <Box sx={{ position: "relative" }}>
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={userInfo.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />

        <Box sx={{ mt: "1.75rem" }}>
          <Comment
            threadId={params.id}
            currentUserImg={userInfo.image}
            currentUserId={JSON.stringify(userInfo._id)}
          />
        </Box>

        <Box sx={{ mt: "2.5rem" }}>
          {thread.children.map((childItem: any) => (
            <ThreadCard
              key={childItem._id}
              id={childItem._id}
              currentUserId={userInfo.id}
              parentId={childItem.parentId}
              content={childItem.text}
              author={childItem.author}
              community={childItem.community}
              createdAt={childItem.createdAt}
              comments={childItem.children}
              isComment
            />
          ))}
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Page;
