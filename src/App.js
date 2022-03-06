import { lazy } from "react";

import AboutSection from "./Components/AboutSection/AboutSection";
import BrowseSection from "./Components/BrowseSection/BrowseSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HistorySection from "./Components/HistorySection/History";
import NewsSection from "./Components/NewsSection/NewsSection";
import ReasonSection from "./Components/ReasonSection/ReasonSection";
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";
import TestimonialsSection from "./Components/Testimonials/TestimonialsSection";

// const Header = lazy(() => import("./Components/Header/Header"));
// const Footer = lazy(() => import("./Components/Footer/Footer"));
// const AboutSection = lazy(() =>
//   import("./Components/AboutSection/AboutSection")
// );
// const BrowseSection = lazy(() =>
//   import("./Components/BrowseSection/BrowseSection")
// );
// const HistorySection = lazy(() =>
//   import("./Components/HistorySection/History")
// );
// const NewsSection = lazy(() => import("./Components/NewsSection/NewsSection"));
// const ReasonSection = lazy(() =>
//   import("./Components/ReasonSection/ReasonSection")
// );
// const SubscribeSection = lazy(() =>
//   import("./Components/SubscribeSection/SubscribeSection")
// );
// const TestimonialsSection = lazy(() =>
//   import("./Components/Testimonials/TestimonialsSection")
// );

function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <ReasonSection />
      <BrowseSection />
      <HistorySection />
      <TestimonialsSection />
      <NewsSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
