import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import FeaturedCollection from "./components/FeaturedCollection";
import NewArrivals from "./components/NewArrivals";
import BranchFinder from "./components/BranchFinder";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Stats />

        <Categories />

        <Offers />

        <FeaturedCollection />

        <NewArrivals />

        <BranchFinder />

        <WhyChooseUs />
      </main>

      <Footer />
    </>
  );
}

export default App;