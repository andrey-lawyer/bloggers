import { Container } from "@/components/Container";
import HeroPersonal from "@/components/HeroPersonal";
import Layout from "@/components/Layout";
import PostsUser from "@/components/PostsUser";
import { useRouter } from "next/router";
import ModalFormPost from "@/components/ModalFormPost";

export default function Personal() {
  const router = useRouter();
  return (
    <>
      <Layout title="Social network App">
        <HeroPersonal />
        <Container>
          <PostsUser />
        </Container>
      </Layout>
      <ModalFormPost />
    </>
  );
}
