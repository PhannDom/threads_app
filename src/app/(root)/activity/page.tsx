import Image from "next/image";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser, getActivities } from "@/lib/actions/user.actions";
import PageLayout from "@/components/shared/layout/PageLayout";
import { Box, Typography } from "@mui/material";

async function Page() {
  // const user = await currentUser();
  // if (!user) return null;

  const userId = "user_2VKghV81xrggTVp4z6ErKJq5hFa";

  const userInfo = await fetchUser(userId);
  // if (!userInfo?.onboarded) redirect("/onboarding");

  const activities = await getActivities(userInfo._id);

  return (
    <PageLayout>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ fontSize: "30px", lineHeight: "140%", fontWeight: 700 }}
        >
          Activity
        </Typography>
        <Box
          sx={{
            mt: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {activities.length > 0 ? (
            <>
              {activities.map((activity) => (
                <Link
                  key={activity._id}
                  href={`/thread/${activity.parentId}`}
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.375rem",
                      px: "1.25rem",
                      backgroundColor: "rgb(50 50 120)",
                      py: "1rem",
                    }}
                  >
                    <Image
                      src={activity.author.image}
                      alt="user_logo"
                      width={20}
                      height={20}
                      style={{ borderRadius: "100%", objectFit: "cover" }}
                    />
                    <Typography color="white">
                      <Typography
                        sx={{ mr: "0.25rem", color: "rgb(135 126 255 / 1)" }}
                      >
                        {activity.author.name}
                      </Typography>
                      replied to your thread
                    </Typography>
                  </Box>
                </Link>
              ))}
            </>
          ) : (
            <Typography>No activity yet</Typography>
          )}
        </Box>
      </Box>
    </PageLayout>
  );
}

export default Page;
