import * as React from "react";
import ProfilePicture from "../ProfilePicture";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <div className="">
      <ProfilePicture />
      <h4 className="font-bold text-2xl mt-4">Vipin Chandra</h4>
      <h6 className="font-extralight text-gray-500">UI Engineer</h6>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        voluptatibus maxime perspiciatis iusto optio ut tenetur quibusdam enim
        nobis est.
      </p>
    </div>
  );
};

export default Profile;
