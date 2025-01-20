import About from "./Components/About";
import FeaturedProducts from "./Components/FeaturedProducts";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";
import { mockProjects } from "./utils/constants";

export default function Home() {
  return (
    <div className="w-[85vw] lg:w-[65vw] mx-auto py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <div className="grid grid-rows-3 gap-4">
          <div className="border-2 px-6 row-span-3 py-4 rounded-md">
            <Profile />
          </div>
          <div className="border-2 px-6 py-4 rounded-md">
            <Skills />
          </div>
        </div>
        <div className="lg:col-span-2 rounded-md">
          <div className="border-2 px-6 py-4 rounded-md ">
            <About />
          </div>
          <div className="mt-4">
            <FeaturedProducts projects={mockProjects} />
          </div>
          <div className="mt-4">
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
}
