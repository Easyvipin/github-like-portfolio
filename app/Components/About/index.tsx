interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <h1 className="text-xl text-black captalize font-extrabold">About Me</h1>
      <p className="text-md text-gray-500 tracking-wide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptate commodi, adipisci blanditiis temporibus, quis facilis
        provident inventore impedit dolorum neque similique doloremque quae nam
        expedita modi iure officiis esse!
      </p>
    </div>
  );
};

export default About;
