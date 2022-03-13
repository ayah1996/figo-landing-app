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
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ReasonSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <BrowseSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <HistorySection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <NewsSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <SubscribeSection />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}

export default App;
