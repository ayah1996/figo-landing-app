import { Suspense, lazy } from "react";
import Loading from "./Components/Loading/Loading";

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
      <Suspense fallback={<Loading />}>
        <Header />

        <AboutSection />

        <ReasonSection />

        <BrowseSection />

        <HistorySection />

        <TestimonialsSection />

        <NewsSection />

        <SubscribeSection />

        <Footer />
      </Suspense>
    </>
  );
}

export default App;
