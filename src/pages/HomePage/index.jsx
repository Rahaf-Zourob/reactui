import Booking from "./sections/Booking";
import SectionBlogs from "./sections/SectionBlogs";
import SectionReviews from "./sections/SectionReviews";
import SectionFeature from "./sections/SectionFeature";
import SectionCooking from "./sections/SectionCooking";
import SectionMnue from "./sections/SectionMnue";
import SectionSpecial from "./sections/SectionSpecial";
import SectionAbout from "./sections/SectionAbout";
import Footer from "../../components/Footer";
import SectionHeader from "./sections/SectionHeader";

export default function HomePage() {
  return (
    <>
      <SectionHeader />
      <SectionAbout />
      <SectionSpecial />
      <SectionMnue />
      <Booking />
      <SectionCooking />
      <SectionFeature />
      <SectionReviews />
      <SectionBlogs />
      <Footer />
    </>
  );
}