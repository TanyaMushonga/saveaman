import facebook from "./../assets/facebook.png";
const SocialHandles = () => {
  return (
    <div className="w-full bg-black flex justify-end">
      {" "}
      <img src={facebook} alt="facebook" className="fixed w-24 h-24 " />
    </div>
  );
};

export default SocialHandles;
