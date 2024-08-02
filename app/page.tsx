import Booking from "@/components/common/Booking";
import MenuItem from "@/components/common/MenuItem";
import SectionTitle from "@/components/common/SectionTitle";
import { AboutHome } from "@/components/home/AboutHome";
import { Features } from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";

export default function Home() {
  return (
    <main>
      <Hero image="/fork.png" firstText="Az" lastText="Uro" />
      <Welcome />
      <div className="container">
        <Features />
        <AboutHome />
        <SectionTitle title="The selected menu More great meals await you inside Azzuro Restaurant" />
        <MenuItem name="appetizers" />
        <MenuItem name="pasta" reverse={true} />
        <MenuItem name="pizza" />
        <MenuItem name="dessert" reverse={true} />
      </div>
      <Booking className="my-36" />
    </main>
  );
}