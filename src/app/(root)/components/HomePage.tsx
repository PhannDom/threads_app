import ThreadCard from "@/shared/card/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { Box } from "@mui/material";

async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  const sleep = () =>
    new Promise((r) => {
      setTimeout(() => {
        r(fetchPosts(searchParams.page ? +searchParams.page : 1, 20));
      }, 1000);
    });

  const result: any = await sleep();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 3 }}>
      {result.posts.map((post: any) => {
        return (
          <ThreadCard
            key={post._id}
            id={post._id.toString()}
            currentUserId={userId}
            parentId={post.parentId}
            content={post.text}
            author={post.author}
            community={post.community}
            createdAt={post.createdAt}
            comments={post.children}
          />
        );
      })}
    </Box>
  );
}

export default HomePage;
