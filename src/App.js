import SectionAbout from './pages/SectionAbout'
import SectionHeader from './pages/SectionHeader';
import SectionSpecial from './pages/SectionSpecial';
import SectionMnue from './pages/SectionMnue'
import Booking from "./pages/Booking";
import SectionCooking from "./pages/SectionCooking";
import SectioFeature from "./pages/SectionFeature";
import SectionReviews from "./pages/SectionReviews";
import SectionBlogs from "./pages/SectionBlogs";
import Subscribe from './pages/Subscribe';
import Footer from './components/Footer';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App" >
      <SectionHeader />
      <SectionAbout />
      <SectionSpecial />
      <SectionMnue />
      <Booking />
      <SectionCooking />
      <SectioFeature />
      <SectionReviews />
      <SectionBlogs />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
