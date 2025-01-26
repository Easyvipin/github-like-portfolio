import { VscVscode } from "react-icons/vsc";
import { RiNavigationLine } from "react-icons/ri";
import Link from "next/link";
import { IProject } from "../FeaturedProducts";
import { Language } from "@src/app/types";

const ProjectCard: React.FunctionComponent<IProject> = ({
  desc,
  codeUrl,
  name,
  language,
  liveUrl,
}) => {
  return (
    <div className="flex flex-col border rounded-md shadow-sm hover:shadow-md px-6 py-3 w-[100%] md:w-[48%] hover:cursor-pointer">
      <h4 className="text-md font-bold text-black captalize">{name}</h4>
      <p className="text-sm text-gray-500 mb-4 mt-1">{desc}</p>
      <div className="flex justify-between items-center mt-auto">
        {language && (
          <div className="flex items-center gap-2">
            <div
              className={`w-[10px] h-[10px] rounded-full ${
                language === Language.JAVASCRIPT
                  ? "bg-yellow-300"
                  : "bg-blue-400"
              }`}
            ></div>
            <span className="text-gray-600 text-xs">{language}</span>
          </div>
        )}
        <div className="flex">
          <div className="flex gap-2">
            {codeUrl && (
              <Link href={codeUrl}>
                <VscVscode />
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl}>
                <RiNavigationLine />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
