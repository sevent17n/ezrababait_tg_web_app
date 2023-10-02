import { FC } from "react";
import Image from "next/image";
import { IUser } from "@/src/app/store/user/user.interface";
import Link from "next/link";

const UserCard: FC<{
  user: IUser;
}> = ({ user }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <div
        className={"w-24 h-36 flex flex-col"}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Image
          src={
            //@ts-ignore
            user.photo_url
          }
          alt={user.first_name}
          width={100}
          height={100}
          style={{ width: 100, height: 100 }}
        />
        <h1>{user.first_name}</h1>
        <h1>{user.last_name}</h1>
      </div>
    </Link>
  );
};

export default UserCard;
