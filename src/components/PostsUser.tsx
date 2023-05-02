import PostUser from "./PostUser";
import { usePostsUser } from "@/hooks/usePostsUser";
import { onClickVisible, onDeletePost } from "@/services/postsUserFunction";

export default function PostsUser() {
  const { postsUser } = usePostsUser();


  return (
    <>
      <section className="pb-[50px]">
        {!!postsUser.length ? (
          <h2 className="font-bold text-center my-[10px] text-xl py-4  ">
            Your posts
          </h2>
        ) : (
          <div className="flex items-center   italic">
            <p className="hidden sm:inline">There is nothing here yet...</p>
            <div className="mx-2 my-5 bg-nothing bg-no-repeat bg-cover bg-center w-[100%] h-[200px] rounded "></div>
            <p className="hidden sm:inline">There is nothing here yet...</p>
          </div>
        )}
        <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4  ">
          {!!postsUser.length &&
            postsUser.map((item) => (
              <PostUser
                key={item.idPost}
                item={item}
                onClickVisible={onClickVisible}
                onDeletePost={onDeletePost}
              />
            ))}
        </ul>
      </section>
    </>
  );
}
