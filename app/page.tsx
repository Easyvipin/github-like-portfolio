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
import { Metadata, ResolvingMetadata } from "next";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function generateMetadata(): Promise<Metadata> {
  // Fetch the profile data
  const profile = await client.fetch<SanityDocument>(
    PROFILE_QUERY,
    {},
    { next: { revalidate: 30 } }
  );

  // Handle the case where no profile is found
  if (!profile || profile.length === 0) {
    return {
      title: "Profile Not Found",
    };
  }

  const { profileImg, position, bio } = profile[0];
  const profileImageUrl = profileImg
    ? urlFor(profileImg)?.width(100).height(100).url()
    : null;

  return {
    title: "Vipin Chandra", // Set the title as the profile name
    description: bio,
    // Include the bio in the metadata description
    openGraph: {
      title: "Vipin Chandra", // Open Graph title
      description: bio, // Open Graph description
      images: profileImageUrl ? [profileImageUrl] : [], // Use profile image for social sharing
    },
    twitter: {
      card: "summary_large_image", // Set Twitter card type
      title: "Vipin Chandra", // Twitter title
      description: bio, // Twitter description
      images: profileImageUrl ? [profileImageUrl] : [], // Twitter image
    },
  };
}

const options = { next: { revalidate: 30 } };

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
