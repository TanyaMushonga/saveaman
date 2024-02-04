import saveaman from "./../assets/saveaman.png";
import disable from "./../assets/disable.jpg";
import college from "./../assets/college.jpg";
import counselling from "./../assets/counselling.jpg";
import father from "./../assets/father.jpg";
import teaching from "./../assets/teaching.jpg";
import awareness from "./../assets/awareness.png";
import TeamInfo from "../components/TeamInfo";
import phone from "./../assets/phone.png";
import SendusAMessage from "../components/SendusAMessage";
import general from "./../assets/general.jpg";
import norest from "./../assets/norest.jpg";
import simplico from "./../assets/simplicico.jpg";
import { Link } from "react-router-dom";
import murire from "./../assets/murire.jpg";
import uk from "./../assets/uk.jpg";
export const Home = () => {
  return (
    <>
      <div className="relative bg-white min-h-screen text-black p-5 md-10 lg-10 xl-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${saveaman})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="absolute inset-0 bg-blue-900 opacity-75"
            // This div will be the overlay with dark bluish color and 75% opacity
          ></div>
        </div>
        <div className="relative flex items-center px-4 sm:px-10 md:px-20 lg:px-56 xl:px-64 2xl:px-72 h-screen">
          <div
            className="p-5 flex flex-col space-y-5 sm:mt-10 md:mt-0 justify-end"
            style={{ borderLeft: "15px solid blue", height: "30rem" }}
          >
            <p className="font-bebas text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Save a Man Movement
            </p>
            <p className="font-tektur text-slate-300 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              raising morally upright generation
            </p>
            <div className="flex flex-row space-x-4">
              <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
                <a href="#donate"> Donate to Us</a>
              </button>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={"/get-involved"}>Get Our Membership</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutus" className="m-h-screen py-12 space-y-10 bg-blue-200">
        <div className="w-full h-auto dark:text-white text-white flex justify-center  bg-blue-600 p-3">
          <div className="md:w-3/4 w-full p-5 flex-col">
            <div className=" flex justify-center py-10">
              <p className="font-tektur font-bold text-sm md:text-xl lg:text-2xl">
                The objectives of the movement are to:
              </p>
            </div>
            <div className="flex justify-center">
              <ul className="space-y-10 ">
                <li className="flex space-x-5 items-center w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={counselling}
                    alt="councelling"
                    className="w-16 h-16 rounded-md object-cover "
                  />
                  <p>
                    Offer counselling to men facing challenges in order to
                    contain suicides as its rate is increasing among men.
                  </p>
                </li>
                <li className="flex space-x-5 items-center  w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={awareness}
                    alt="awareness"
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <p>
                    {" "}
                    Carry out mass awareness compaigns for our young men to put
                    themselves first and teaching them to protect their weathy
                    in order to avoid disappointments.
                  </p>
                </li>
                <li className="flex space-x-5 items-center w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={teaching}
                    alt="teaching"
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <p>
                    {" "}
                    Teach men to value their healthy through harnessing
                    traditional foods and medicine thereby offesetting lifestyle
                    modern ailments.
                  </p>
                </li>
                <li className="flex space-x-5 items-center  w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={father}
                    alt="fathers"
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <p>
                    {" "}
                    Transform boys into respectable fathers who provide, protect
                    and capable of leading their families as fatherless has
                    become a pandemic.
                  </p>
                </li>
                <li className="flex space-x-5 items-center w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={disable}
                    alt="disable"
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <p>
                    Help less priviledged, vulnerable, and disabled men and
                    boys.
                  </p>
                </li>
                <li className="flex space-x-5 items-center  w-full md- p-5 cursor-pointer shadow-xl transform transition-transform duration-500 hover:translate-x-8 animate-fadeIn">
                  <img
                    src={college}
                    alt="college"
                    className="object-cover w-16 h-16 rounded-md"
                  />
                  <p>
                    Have a private college that will offer a chance to young men
                    to be groomed as men outside the gynocentric system.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full auto bg-blue-950 dark:text-white text-white p-10">
          <p className="font-tektur font-bold text-sm md:text-xl lg:text-2xl flex justify-center py-5">
            The team behind Save a Man Movement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <TeamInfo
              name={"General Luverty"}
              profileUrl={general}
              role={"Founder and Director of Save a Man Movement"}
              alt={"general"}
              phoneUrl={phone}
              phoneNumber={"+263 77 124 3682"}
            />
            <TeamInfo
              name={"Simplicio Chinake"}
              profileUrl={simplico}
              role={"Permanent Executive Council Director for Operations"}
              alt={"simplicio"}
              phoneUrl={phone}
              phoneNumber={"+263 78 324 0387"}
            />
            <TeamInfo
              name={"Godknows Mawire"}
              profileUrl={saveaman}
              role={"Treasurer General"}
              alt={"mawire"}
              phoneUrl={phone}
              phoneNumber={"+263 77 563 3639"}
            />
            <TeamInfo
              name={"Mathew Masuka"}
              profileUrl={uk}
              role={"Permanent Executive Council Director"}
              alt={"mathew"}
              phoneUrl={phone}
              phoneNumber={"+44 7984 796583"}
            />
            <TeamInfo
              name={"Desire Murire"}
              profileUrl={murire}
              role={
                "Permanent Executive Council Director for Research and Development"
              }
              alt={"desire"}
              phoneUrl={phone}
              phoneNumber={"+263 78 374 7936"}
            />
            <TeamInfo
              name={"Michael Gwevera"}
              profileUrl={saveaman}
              role={
                "Permanent Executive Council Director for Security and Intelligence"
              }
              alt={"michael"}
              phoneUrl={phone}
              phoneNumber={"+263 78 210 3600"}
            />
            <TeamInfo
              name={"Norest Chambion"}
              profileUrl={norest}
              role={"Permanant Executive Council Director for Social Security"}
              alt={""}
              phoneUrl={phone}
              phoneNumber={"+263 77 287 6055"}
            />
          </div>
        </div>
        <div className="w-full h-auto bg-blue-500 p-5 space-y-5" id="donate">
          <p className="text-white text-lg md:text-xl font-bold">
            Support us by donating annonimously
          </p>
          <div className="flex text-white gap-5">
            <div className="border border-solid border-white rounded-lg p-5">
              <p className="font-bold">EcoCash</p>
              <p className="">Chishamba Lovemore</p>
              <p>077 124 3682</p>
            </div>
            <div className="border border-solid border-white rounded-lg p-5">
              <p className="font-bold">Innbucks</p>
              <p>Chishamba Lovemore</p>
              <p>077 124 3682</p>
            </div>
          </div>
        </div>
        <div
          id="contactus"
          className="w-full  h-auto bg-blue-700 text-white p-10 flex justify-center "
        >
          <SendusAMessage />
        </div>
      </div>
    </>
  );
};
