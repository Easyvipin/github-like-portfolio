import { VscVscode } from "react-icons/vsc";
import { RiNavigationLine } from "react-icons/ri";
import Link from "next/link";
import { IProject } from "../FeaturedProducts";
import { Language } from "@src/app/types";

const ProjectCard: React.FunctionComponent<IProject> = ({
  id,
  desc,
  projectLink,
  name,
  majorLanguage,
  liveLink,
}) => {
  return (
    <div className="flex flex-col border rounded-md shadow-sm hover:shadow-md px-4 py-3 w-[100%] md:w-[48%] hover:cursor-pointer">
      <h4 className="text-md font-bold text-black captalize">{name}</h4>
      <p className="text-sm text-gray-500 mb-4 mt-1 truncate">{desc}</p>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center gap-2">
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              majorLanguage === Language.JAVASCRIPT
                ? "bg-yellow-300"
                : "bg-blue-400"
            }`}
          ></div>
          <span className="text-gray-600 text-xs">{majorLanguage}</span>
        </div>
        <div className="flex">
          <div className="flex gap-2">
            <Link href={projectLink}>
              <VscVscode />
            </Link>
            <Link href={liveLink}>
              <RiNavigationLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
