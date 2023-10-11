import { FC, Fragment } from "react";
import SkeletonUserCard from "./SkeletonUserCard";

type Props = {
  pageSize: number;
  skeletonCard: FC;
};

const SkeletonUserCardList = (props: Props) => {
  return (
    <>
      {Array.from(Array(props.pageSize).keys()).map((_, idx) => {
        return <Fragment key={idx}>{<SkeletonUserCard />}</Fragment>;
      })}
    </>
  );
};

export default SkeletonUserCardList;
