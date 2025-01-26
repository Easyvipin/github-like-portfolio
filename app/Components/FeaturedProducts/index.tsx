import { Language } from "@src/app/types";
import ProjectCard from "../ProjectCard";

export interface IProject {
  name: string;
  desc: string;
  language: Language;
  codeUrl: string;
  liveUrl: string;
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
            key={eachProject.name}
            name={eachProject.name}
            desc={eachProject.desc}
            language={eachProject.language}
            codeUrl={eachProject.codeUrl ?? ""}
            liveUrl={eachProject.liveUrl ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
