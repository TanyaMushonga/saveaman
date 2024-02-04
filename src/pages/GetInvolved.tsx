import Membership from "../components/Membership";

export const GetInvolved = () => {
  return (
    <div className="bg-blue-700 min-h-screen p-5 flex justify-center">
      <div className="flex w-full md:w-2/3 justify-around">
        <div className="md:w-2/3 w-full h-auto space-y-10">
          <p className="font-tektur font-bold text-sm md:text-xl lg:text-2xl flex justify-center py-5 text-white">
            Fill in the form to get our membership
          </p>
          <div className="divider divider-primary"></div>
          <Membership />
        </div>
      </div>
    </div>
  );
};
