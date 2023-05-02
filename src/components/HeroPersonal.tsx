import { memo } from "react";
import { useRecoilState } from "recoil";
import { ImArrowDown } from "react-icons/im";

import { Container } from "./Container";
import { modalState } from "@/atom/modalState";

const HeroPersonal = memo(function HeroPersonal() {
  const [_, setOpen] = useRecoilState(modalState);
  return (
    <div className="bg-black bg-heroUser bg-no-repeat bg-cover bg-center">
      <Container>
        <section className="py-[50px] text-white   xl:py-[100px]   ">
          <h1 className=" font-bold text-center mb-[30px] text-[20px] lg:text-[26px]">
            Do you want to add a post?
          </h1>
          <div>
            <ImArrowDown className=" w-10 h-10 text-center m-auto mb-[30px] hover:translate-y-2 transition-transform duration-200 ease-out " />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="text-black block m-auto w-[100px] text-center  bg-sky-300 rounded-[15px]  p-[4px] hover:bg-sky-400 transition-transform duration-200 ease-out"
          >
            Add post
          </button>
        </section>
      </Container>
    </div>
  );
});
export default HeroPersonal;
