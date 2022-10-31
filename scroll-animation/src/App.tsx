import { lazy, Suspense } from "react";

const Advantage = lazy(() => import("./components/sections/advantage"));
const Hero = lazy(() => import("./components/sections/hero"));
const Navbar = lazy(() => import("./layouts/navbar"));
const Review = lazy(() => import("./components/sections/review"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <Navbar />
        <Hero />
        <Advantage />
        <Review />
      </div>
    </Suspense>
  );
}

export default App;
