import { Suspense, lazy } from "react";

import Header from "./Components/Header/Header";
// import AboutSection from "./Components/AboutSection/AboutSection";
// import BrowseSection from "./Components/BrowseSection/BrowseSection";
// import HistorySection from "./Components/HistorySection/History";
// import NewsSection from "./Components/NewsSection/NewsSection";
// import ReasonSection from "./Components/ReasonSection/ReasonSection";
// import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";
// import TestimonialsSection from "./Components/Testimonials/TestimonialsSection";
// import Footer from "./Components/Footer/Footer";

// const Header = lazy(() => import("./Components/Header/Header"));
const AboutSection = lazy(() =>
  import("./Components/AboutSection/AboutSection")
);
const BrowseSection = lazy(() =>
  import("./Components/BrowseSection/BrowseSection")
);
const HistorySection = lazy(() =>
  import("./Components/HistorySection/History")
);
const NewsSection = lazy(() => import("./Components/NewsSection/NewsSection"));
const ReasonSection = lazy(() =>
  import("./Components/ReasonSection/ReasonSection")
);
const SubscribeSection = lazy(() =>
  import("./Components/SubscribeSection/SubscribeSection")
);
const TestimonialsSection = lazy(() =>
  import("./Components/Testimonials/TestimonialsSection")
);
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading ...</div>}>
        <ReasonSection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <BrowseSection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <HistorySection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <NewsSection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <SubscribeSection />
      </Suspense>

      <Suspense fallback={<div>Loading ...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
