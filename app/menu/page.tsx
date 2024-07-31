import Booking from "@/components/common/Booking";
import MenuItem from "@/components/common/MenuItem";
import Hero from "@/components/home/Hero";

export default function Menu() {
  return (
    <>
      <Hero image="/menu_thumb.png" firstText="me" lastText="nu" />
      <MenuItem reverse={true} name="appetizers" page="menu" />
      <MenuItem name="pasta" page="menu" />
      <MenuItem reverse={true} name="pizza" page="menu" />
      <MenuItem name="dessert" page="menu" />
      <Booking className="my-36" />
    </>
  );
}
