import { Skeleton, Box } from "@mui/material";

const SkeletonUserCard = () => {
  return (
    <Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={80}
        sx={{ borderRadius: 2, mt: 5 }}
      />
    </Box>
  );
};

export default SkeletonUserCard;
