import { memo, FC } from "react";
import Moment from "react-moment";

import { IPersonalPostUserProps } from "@/types/typeProps";

const PersonalPostUser: FC<IPersonalPostUserProps> = memo(
  ({ item: { idPost, info, theme, timestamp, title }, data }) => {
    return (
      <li className="  bg-gray-50 rounded  drop-shadow-4xl" key={idPost}>
        {theme === "news" && <div className={`bg-news z-0 ${data}`}></div>}
        {theme === "sport" && <div className={`bg-sport ${data}`}></div>}
        {theme === "hobbies" && <div className={`bg-hobbies  ${data}`}></div>}
        {theme === "people" && <div className={`bg-people  ${data}`}></div>}
        {theme === "other" && <div className={`bg-other  ${data}`}></div>}
        <h2 className="px-2  lg:my-2 text-center font-bold">{title}</h2>
        <p className="px-2 lg:mb-1">{info}</p>
        <p className="px-2 pb-1 italic text-sm">
          ...
          <Moment className="p-1" fromNow>
            {timestamp}
          </Moment>
        </p>
      </li>
    );
  }
);

export default PersonalPostUser;
