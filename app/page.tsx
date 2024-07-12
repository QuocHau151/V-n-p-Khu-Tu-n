import About from "@/components/Home/About";
import Benefits from "@/components/Home/Benefits";
import { Brand } from "@/components/Home/Brand";
import Carousel from "@/components/Home/Carousel";
import Furniture from "@/components/Home/Furniture";
import Hero from "@/components/Home/Hero";
import Hotspots from "@/components/Home/Hotspots";
import Reviews from "@/components/Home/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Furniture />
      <Hotspots />
      <About />
      <Benefits />
      <Reviews />
      <Brand />
    </>
  );
}
