import Image from "next/image";

interface IProfilePictureProps {}

const ProfilePicture: React.FunctionComponent<IProfilePictureProps> = (
  props
) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-full w-[300px] h-[300px] object-cover mx-auto">
        <Image
          alt="profile"
          src="https://avatar.iran.liara.run/public/48"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
