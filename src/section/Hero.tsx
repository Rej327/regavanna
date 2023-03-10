import HeroImg from "@/components/HeroImg";
import HeroContext from "../components/HeroContext";

export default function Hero() {
  return (
    <div className="md:flex mx-auto w-full">
      <HeroImg />
      <HeroContext />
    </div>
  );
}
