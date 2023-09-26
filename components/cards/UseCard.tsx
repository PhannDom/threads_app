"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

function UserCard(props: Props) {
  const { id, name, username, imgUrl, personType } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/profile/${id}`);
  };
  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-12 w-12">
          <Image
            src={imgUrl}
            alt="user_logo"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      <Button className="user-card-btn" onClick={handleClick}>
        View
      </Button>
    </article>
  );
}

export default UserCard;
