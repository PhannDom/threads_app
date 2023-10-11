"use client";

import { Favorite } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  id?: string;
  name?: string;
  username?: string;
  imgUrl: string;
  personType?: string;
}

function UserCard({ id, name, username, imgUrl, personType }: Props) {
  const router = useRouter();

  // const isCommunity = personType === "Community";

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardHeader
          avatar={
            <Image
              src={imgUrl}
              alt="user_community_image"
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
          }
          title={name}
          subheader={"@" + username}
        />
      </Box>
      <CardActions disableSpacing>
        <IconButton
          color="primary"
          disableRipple
          onClick={() => {
            router.push(`/profile/${id}`);
          }}
        >
          <Button variant="contained" color="primary">
            View
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default UserCard;
