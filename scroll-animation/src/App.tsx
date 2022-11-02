import { Suspense, lazy } from "react";

const Advantage = lazy(() => import("./components/sections/advantage"));
const Hero = lazy(() => import("./components/sections/hero"));
const Navbar = lazy(() => import("./layouts/navbar"));
const Review = lazy(() => import("./components/sections/review"));
const More = lazy(() => import("./components/sections/more"));
const Feature = lazy(() => import("./components/sections/feature"));
const FeatureLg = lazy(() => import("./components/sections/feature-lg"));
const FeatureMd = lazy(() => import("./components/sections/feature-md"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <Navbar />
        <Hero />
        <Advantage />
        <Review />
        <More />
        <FeatureLg />
        <FeatureMd />
        <Feature />
      </div>
    </Suspense>
  );
}

export default App;
