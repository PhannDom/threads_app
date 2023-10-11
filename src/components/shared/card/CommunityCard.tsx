import { Box, Button, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  members: {
    image: string;
  }[];
}

function CommunityCard({ id, name, username, imgUrl, bio, members }: Props) {
  return (
    <Box
      sx={{
        borderRadius: "0.5rem",
        px: "1.25rem",
        py: "1rem",
        width: {
          xs: "100%",
          sm: "24rem",
        },
        backgroundColor: "gray",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Link
          style={{ position: "relative", width: "3rem", height: "3rem" }}
          href={`/communities/${id}`}
        >
          <Image
            src={imgUrl}
            alt="community_logo"
            fill
            style={{ borderRadius: "100%", objectFit: "cover" }}
          />
        </Link>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Link
            href={`/communities/${id}`}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Typography variant="h5" color="primary">
              {name}
            </Typography>
          </Link>
          <Typography fontSize="14px" lineHeight="140%" fontWeight={500}>
            @{username}
          </Typography>
        </Box>
      </Box>

      <Typography
        fontSize="12px"
        lineHeight="16px"
        fontWeight={500}
        sx={{ mt: "1rem" }}
      >
        {bio}
      </Typography>

      <Box
        sx={{
          mt: "1.25rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
        }}
      >
        <Link href={`/communities/${id}`}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "0.5rem",
              fontSize: "14px",
              lineHeight: "140%",
              fontWeight: 400,
              px: "1.25rem",
              py: "0.375rem",
              height: "2.25rem",
            }}
          >
            View
          </Button>
        </Link>
        {members.length > 0 && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {members.map((member, index) => (
              <Image
                key={index}
                src={member.image}
                alt={`user_${index}`}
                width={28}
                height={28}
                style={{
                  marginLeft: index !== 0 ? "-0.5rem" : 0,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
              />
            ))}
            {members.length > 3 && (
              <Typography
                sx={{
                  ml: "0.25rem",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: 500,
                }}
              >
                {members.length}+ Users
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default CommunityCard;
