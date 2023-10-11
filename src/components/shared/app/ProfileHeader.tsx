"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  const MaxSmHidden = styled("div")({
    display: "block",
    "@media (max-width: 640px)": {
      display: "none",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          placeItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            placeItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "5rem",
              width: "5rem",
              objectFit: "cover",
            }}
          >
            <Image
              src={imgUrl}
              alt="logo"
              fill
              style={{
                borderRadius: "100%",
                objectFit: "cover",
                boxShadow: "0 25px 50px -12px rgb(0 0 0), 0.25)",
              }}
            />
          </Box>
          <Box sx={{ flex: "1 1 0%" }}>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "24px",
                lineHeight: "140%",
                fontWeight: 700,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "140%",
                fontWeight: 500,
                color: "rgb(105 124 137), 1)",
              }}
            >
              @{username}
            </Typography>
          </Box>
        </Box>
        {accountId === authUserId && type !== "Community" && (
          <Link
            href="/profile/edit"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Box
              px={2}
              py={2}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: 2,
                cursor: "pointer",
                backgroundColor: (theme) =>
                  `rgb(${theme.vars.palette.primary.darkChannel}/ 1)`,
              }}
            >
              <Image src="/assets/edit.svg" alt="edit" width={16} height={16} />

              <MaxSmHidden>
                <Typography>Edit</Typography>
              </MaxSmHidden>
            </Box>
          </Link>
        )}
      </Box>
      <Typography
        sx={{
          mt: "1.5rem",
          maxWidth: "32rem",
          fontSize: "16px",
          lineHeight: "140%",
          fontWeight: "400",
          color: (theme) => `rgb(${theme.vars.palette.text.primary}/ 1)`,
        }}
      >
        {bio}
      </Typography>

      <Box
        sx={{
          mt: "3rem",
          height: "0.125rem",
          width: "100%",
          backgroundColor: (theme) =>
            `rgb(${theme.vars.palette.background.default}/ 1)`,
        }}
      ></Box>
    </Box>
  );
}

export default ProfileHeader;
