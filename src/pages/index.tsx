import { Inter } from "next/font/google";
import Users from "@/components/Users";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title="Social network App">
        <Hero />
        <Users />
      </Layout>
    </>
  );
}
