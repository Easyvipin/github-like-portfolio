import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import About from "./Components/About";
import FeaturedProducts from "./Components/FeaturedProducts";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";
import { type SanityDocument } from "next-sanity";
import { client } from "./sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PROFILE_QUERY } from "./sanity/queries";
import { notFound } from "next/navigation";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 1 } };

export default async function Home() {
  const profile = await client.fetch<SanityDocument>(
    PROFILE_QUERY,
    {},
    options
  );

  if (!profile) {
    return notFound();
  }

  const profileImg = profile[0].profileImg
    ? urlFor(profile[0].profileImg)?.width(310).height(310).url()
    : null;

  const { bio, position, socials, skills, aboutMe, projects, workExperience } =
    profile[0];
  return (
    <div className="w-[85vw] lg:w-[65vw] mx-auto py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="grid grid-rows-3 gap-4">
          <div className="px-6 row-span-3 py-4 border rounded-md shadow-sm">
            <Profile
              bio={bio}
              profileImg={profileImg!}
              position={position}
              socials={socials}
            />
          </div>
          <div className="border rounded-md shadow-sm px-6 py-4">
            <Skills data={skills} />
          </div>
        </div>
        <div className="lg:col-span-2 rounded-md">
          <div className="border px-6 py-4 rounded-md shadow-sm">
            <About content={aboutMe} />
          </div>
          <div className="mt-4">
            <FeaturedProducts projects={projects} />
          </div>
          <div className="mt-4">
            <WorkExperience experiences={workExperience} />
          </div>
        </div>
      </div>
    </div>
  );
}
