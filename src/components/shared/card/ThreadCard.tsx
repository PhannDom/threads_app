import Image from "next/image";
import Link from "next/link";

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

import heartLogo from "@/assets/heart.svg";
import replyLogo from "@/assets/reply.svg";
import reportLogo from "@/assets/report.svg";
import shareLogo from "@/assets/share.svg";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

function ThreadCard({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) {
  console.log("🚀 ~ file: ThreadCard.tsx:55 ~ comments:", comments);
  return (
    <>
      <Card sx={{ maxWidth: "100%", borderRadius: 2 }}>
        <CardHeader
          avatar={
            <Link href={`/profile/${author.id}`}>
              <Image
                src={author.image}
                alt="user_community_image"
                width={24}
                height={24}
                style={{ borderRadius: "100%", cursor: "pointer" }}
              />
            </Link>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="favorites">
            <Image
              src={heartLogo}
              alt="favorites"
              width={24}
              height={24}
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </IconButton>
          <IconButton aria-label="reply">
            <Image
              src={replyLogo}
              alt="reply"
              width={24}
              height={24}
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Image
              src={reportLogo}
              alt="report"
              width={24}
              height={24}
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Image
              src={shareLogo}
              alt="share"
              width={24}
              height={24}
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </IconButton>
        </CardActions>

        {isComment && comments.length > 0 && (
          <Link href={`/thread/${id}`}>
            <Typography
              sx={{
                mt: "0.25rem",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: 500,
                color: "rgb(105 124 137 / 1)",
              }}
            >
              {comments.length} repl{comments.length > 1 ? "ies" : "y"}
            </Typography>
          </Link>
        )}

        {!isComment && comments.length > 0 && (
          <Box
            sx={{
              m: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {comments.slice(0, 2).map((comment, index) => (
              <Image
                key={index}
                src={comment.author.image}
                alt={`user_${index}`}
                width={24}
                height={24}
                style={{
                  borderRadius: "100%",
                  objectFit: "cover",
                  marginLeft: index !== 0 ? "-1.25rem" : 0,
                }}
              />
            ))}

            <Link href={`/thread/${id}`}>
              <Typography
                sx={{
                  mt: "0.25rem",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: 500,
                  color: "rgb(105 124 137 / 1)",
                }}
              >
                {comments.length} repl{comments.length > 1 ? "ies" : "y"}
              </Typography>
            </Link>
          </Box>
        )}
      </Card>
    </>
  );
}

export default ThreadCard;
