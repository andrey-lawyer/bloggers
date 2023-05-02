import { memo, FC } from "react";
import Link from "next/link";
import { IUserProps } from "@/types/typeProps";

const User: FC<IUserProps> = memo(({ name, userImg, uid }) => {
  return (
    <li className="drop-shadow-4xl justify-between flex lg:flex-col p-2 items-center border-2 rounded-[5px]  border-sky-900 ">
      <div className="flex items-center">
        <img
          className="w-5 h-5 rounded-full "
          src={userImg}
          alt={`user ${name}`}
        />

        <p className="ml-1 ">{name}</p>
      </div>
      <Link
        className=" underline text-sky-900 font-bold"
        href={`/posts/[id]`}
        as={`/posts/${uid}`}
      >
        Go to posts ...
      </Link>
    </li>
  );
});

export default User;
