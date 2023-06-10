import {
  Articles,
  DSA,
  GlobalCollection,
  Hero,
  Navbar,
  ProblemDay,
  Videos,
} from "./components";
import Courses from "./components/courses/Courses";
import GoToTop from "./components/GoToTop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GlobalCollection />
      <DSA />
      <Courses />
      <ProblemDay />
      <Videos />
      <Articles />
      <GoToTop />
    </div>
  );
}
