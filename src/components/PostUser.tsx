import { memo, FC } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Moment from "react-moment";

import { IPostUserProps } from "@/types/typeProps";

const PostUser: FC<IPostUserProps> = memo(
  ({
    item: { idPost, info, theme, timestamp, title, visible },
    onClickVisible,
    onDeletePost,
  }) => {
    return (
      <li
        className="drop-shadow-3xl shadow-md bg-slate-100 text-sm text-sky-900  flex flex-col lg:gap-[2px] p-2  border-2 rounded-[5px]   "
        key={idPost}
      >
        <h3>
          <span className="inline-block w-[58px] text-black">Title:</span>
          {title}
        </h3>
        <p>
          <span className="inline-block w-[58px] text-black">Theme:</span>
          {theme}
        </p>
        <p>
          <span className="inline-block w-[58px] text-black">Info:</span>
          {info}
        </p>
        <p className="italic">
          ...
          <Moment fromNow>{timestamp}</Moment>
        </p>
        <div className="flex justify-between">
          <button
            className="mt-3   text-xs text-white bg-sky-900 rounded-[15px] py-[3px] px-3 hover:bg-sky-800  transition-transform duration-200 ease-out "
            onClick={() => onClickVisible(idPost, visible)}
            type="button"
          >
            {visible && "Withdraw from publication"}
            {!visible && "Publish"}
          </button>
          <button
            onClick={() => onDeletePost(idPost)}
            className="mt-3  text-xs flex items-center justify-center  text-white bg-sky-900 rounded-[15px] py-[3px] px-3 hover:bg-sky-800  transition-transform duration-200 ease-out "
            type="button"
          >
            <AiOutlineDelete className="mr-1 " />
            Delete
          </button>
        </div>
      </li>
    );
  }
);

export default PostUser;
