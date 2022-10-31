import { Suspense, lazy } from "react";

const Advantage = lazy(() => import("./components/sections/advantage"));
const Hero = lazy(() => import("./components/sections/hero"));
const Navbar = lazy(() => import("./layouts/navbar"));
const Review = lazy(() => import("./components/sections/review"));
const More = lazy(() => import("./components/sections/more"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <Navbar />
        <Hero />
        <Advantage />
        <Review />
        <More />
      </div>
    </Suspense>
  );
}

export default App;
