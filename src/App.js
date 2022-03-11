import { Suspense, lazy } from "react";

const Header = lazy(() => import("./Components/Header/Header"));
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
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
      </Suspense>

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
