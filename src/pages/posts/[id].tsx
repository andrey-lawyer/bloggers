import { usePersonalPosts } from "@/hooks/usePersonalPosts";
import Layout from "@/components/Layout";
import { Container } from "@/components/Container";
import PersonalPostUser from "@/components/PersonalPostUser";

export default function Posts() {
  const { postsVisible } = usePersonalPosts();

  const data = "w-[100%] h-[120px]  bg-no-repeat bg-cover rounded-t ";

  return (
    <>
      <Layout title="Social network App">
        {!!postsVisible.length ? (
          <h1 className="font-bold text-center mb-[20px] text-xl py-4 bg-sky-900 text-white">
            Posts of {postsVisible[0].userName}
          </h1>
        ) : (
          <div className=" m-auto  bg-nothing bg-no-repeat bg-cover bg-center w-[100%] min-h-[300px] lg:min-h-[400px] xl:min-h-[450px] rounded "></div>
        )}
        <Container>
          <section className="mb-[50px]">
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-4 z-0">
              {!!postsVisible.length &&
                postsVisible.map((item) => {
                  return (
                    <PersonalPostUser
                      key={item.idPost}
                      item={item}
                      data={data}
                    />
                  );
                })}
            </ul>
          </section>
        </Container>
      </Layout>
    </>
  );
}
