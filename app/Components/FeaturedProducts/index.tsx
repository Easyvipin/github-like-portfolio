import { Language } from "@src/app/types";
import ProjectCard from "../ProjectCard";

export interface IProject {
  id: string;
  name: string;
  desc: string;
  majorLanguage: Language;
  projectLink: string;
  liveLink: string;
}

interface IFeaturedProductsProps {
  projects: IProject[];
}

const FeaturedProducts: React.FunctionComponent<IFeaturedProductsProps> = ({
  projects,
}) => {
  return (
    <div>
      <h4 className="text-lg text-black captalize font-extrabold">
        Featured Projects
      </h4>

      <div className="flex flex-row flex-wrap justify-between gap-4 mt-4">
        {projects.map((eachProject: IProject) => (
          <ProjectCard
            key={eachProject.id}
            id={eachProject.id}
            name={eachProject.name}
            desc={eachProject.desc}
            majorLanguage={eachProject.majorLanguage}
            projectLink={eachProject.projectLink}
            liveLink={eachProject.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
