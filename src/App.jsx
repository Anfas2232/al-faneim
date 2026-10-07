// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Categories from "./components/Categories";
// import Offers from "./components/Offers";
// import FeaturedCollection from "./components/FeaturedCollection";
// import NewArrivals from "./components/NewArrivals";
// import BranchFinder from "./components/BranchFinder";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Footer from "./components/Footer";
// import Careers from "./components/Careers";

// import OffersCollection from "./components/OffersCollection";
// import MensCollection from "./components/MensCollection";
// import WomensCollection from "./components/WomensCollection";
// import KidsCollection from "./components/KidsCollection";
// import FootwearCollection from "./components/FootwearCollection";
// import BagsCollection from "./components/BagsCollection";
// import SportswearCollection from "./components/SportswearCollection";
// import ToysCollection from "./components/ToysCollection";
// import SearchResults from "./components/SearchResults";


// function Home() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />
//         <Stats />
//         <Categories />
//         <Offers />
//         <FeaturedCollection />
//         <NewArrivals />
//         <BranchFinder />
//         <WhyChooseUs />
//         <Careers />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function OffersPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <OffersCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function MensCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <MensCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function WomensCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <WomensCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function KidsCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <KidsCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function FootwearCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <FootwearCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function BagsCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <BagsCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function SportswearCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <SportswearCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function ToysCollectionPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <ToysCollection />
//       </main>

//       <Footer />
//     </>
//   );
// }


// /* =========================================
//    SEARCH RESULTS PAGE
// ========================================= */

// function SearchResultsPage() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <SearchResults />
//       </main>

//       <Footer />
//     </>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* HOME */}

//         <Route
//           path="/"
//           element={<Home />}
//         />


//         {/* OFFERS */}

//         <Route
//           path="/offers"
//           element={<OffersPage />}
//         />


//         {/* MEN */}

//         <Route
//           path="/mens-collection"
//           element={<MensCollectionPage />}
//         />


//         {/* WOMEN */}

//         <Route
//           path="/womens-collection"
//           element={<WomensCollectionPage />}
//         />


//         {/* KIDS */}

//         <Route
//           path="/kids-collection"
//           element={<KidsCollectionPage />}
//         />


//         {/* FOOTWEAR */}

//         <Route
//           path="/footwear-collection"
//           element={<FootwearCollectionPage />}
//         />


//         {/* BAGS */}

//         <Route
//           path="/bags-collection"
//           element={<BagsCollectionPage />}
//         />


//         {/* SPORTSWEAR */}

//         <Route
//           path="/sportswear-collection"
//           element={<SportswearCollectionPage />}
//         />


//         {/* TOYS */}

//         <Route
//           path="/toys-collection"
//           element={<ToysCollectionPage />}
//         />


//         {/* SEARCH */}

//         <Route
//           path="/search"
//           element={<SearchResultsPage />}
//         />

//         <Route path="/careers" element={<Careers />} />

//       </Routes>

//     </BrowserRouter>
//   );
// }


// export default App;




import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
import Careers from "./components/Careers";

import OffersCollection from "./components/OffersCollection";
import MensCollection from "./components/MensCollection";
import WomensCollection from "./components/WomensCollection";
import KidsCollection from "./components/KidsCollection";
import FootwearCollection from "./components/FootwearCollection";
import BagsCollection from "./components/BagsCollection";
import SportswearCollection from "./components/SportswearCollection";
import ToysCollection from "./components/ToysCollection";
import SearchResults from "./components/SearchResults";


function Home() {
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
         <Careers />
        <WhyChooseUs />
       
      </main>

      <Footer />
    </>
  );
}


function OffersPage() {
  return (
    <>
      <Navbar />

      <main>
        <OffersCollection />
      </main>

      <Footer />
    </>
  );
}


function MensCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <MensCollection />
      </main>

      <Footer />
    </>
  );
}


function WomensCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <WomensCollection />
      </main>

      <Footer />
    </>
  );
}


function KidsCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <KidsCollection />
      </main>

      <Footer />
    </>
  );
}


function FootwearCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <FootwearCollection />
      </main>

      <Footer />
    </>
  );
}


function BagsCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <BagsCollection />
      </main>

      <Footer />
    </>
  );
}


function SportswearCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <SportswearCollection />
      </main>

      <Footer />
    </>
  );
}


function ToysCollectionPage() {
  return (
    <>
      <Navbar />

      <main>
        <ToysCollection />
      </main>

      <Footer />
    </>
  );
}


/* =========================================
   SEARCH RESULTS PAGE
========================================= */

function SearchResultsPage() {
  return (
    <>
      <Navbar />

      <main>
        <SearchResults />
      </main>

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* OFFERS */}

        <Route
          path="/offers"
          element={<OffersPage />}
        />


        {/* MEN */}

        <Route
          path="/mens-collection"
          element={<MensCollectionPage />}
        />


        {/* WOMEN */}

        <Route
          path="/womens-collection"
          element={<WomensCollectionPage />}
        />


        {/* KIDS */}

        <Route
          path="/kids-collection"
          element={<KidsCollectionPage />}
        />


        {/* FOOTWEAR */}

        <Route
          path="/footwear-collection"
          element={<FootwearCollectionPage />}
        />


        {/* BAGS */}

        <Route
          path="/bags-collection"
          element={<BagsCollectionPage />}
        />


        {/* SPORTSWEAR */}

        <Route
          path="/sportswear-collection"
          element={<SportswearCollectionPage />}
        />


        {/* TOYS */}

        <Route
          path="/toys-collection"
          element={<ToysCollectionPage />}
        />


        {/* SEARCH */}

        <Route
          path="/search"
          element={<SearchResultsPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
