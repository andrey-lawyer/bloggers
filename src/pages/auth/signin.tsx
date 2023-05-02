import { useRouter } from "next/router";
import { FaLongArrowAltDown } from "react-icons/fa";
import Layout from "@/components/Layout";
import { onGoogleClick } from "@/services/onGoogleClick";

export default function Signin() {
  const router = useRouter();

  return (
    <Layout title="Social network App">
      <section className="flex justify-center space-x-7 py-[50px]  bg-gradient-to-tr from-sky-400 to-sky-500">
        <div className="">
          <h1 className="hidden">Registration page</h1>
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover rounded-[5px]"
              src="https://www.cmscritic.com/wp-content/themes/cmscritic/img/cloudinary/top-social-networking-sites_wmysmq.jpg"
              alt=""
            />
            <div className="flex text-white  my-8 hover:translate-y-2 transition-transform duration-200 ease-out ">
              <FaLongArrowAltDown className="w-8 h-8" />
              <FaLongArrowAltDown className="w-8 h-8" />
              <FaLongArrowAltDown className="w-8 h-8" />
            </div>
            <button
              onClick={() => onGoogleClick(router)}
              className="bg-sky-900 text-white rounded-[15px] px-3 py-2 hover:bg-sky-800"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
