import { memo } from "react";
import { Container } from "./Container";

const Hero = memo(function Hero() {
  return (
    <div className="bg-black bg-hero bg-no-repeat bg-cover bg-center">
      <Container>
        <section className="text-white py-[50px] sm:px-[150px]  md:px-[190px] lg:px-[295px] xl:px-[300px] lg:py-[100px]   ">
          <h1 className=" font-bold text-center mb-[20px] text-xl">
            Social network
          </h1>
          <p className="text-center mb-[20px] text-lg">
            Social networks and the analysis of them is an inherently
            interdisciplinary academic field which emerged from social
            psychology, sociology, statistics, and graph theory. Georg Simmel
            authored early structural theories in sociology emphasizing the
            dynamics of triads and "web of group affiliations"...
          </p>
          <a
            href="#users"
            className="text-black block m-auto w-[100px] text-center  bg-sky-300 rounded-[15px]  p-[4px] hover:bg-sky-400 transition-transform duration-200 ease-out"
          >
            Members
          </a>
        </section>
      </Container>
    </div>
  );
});

export default Hero;
