import { ButtonComp, InputComp } from "../../components";
import { LeftSide } from "./LeftSide";
import Logo from "../../assets/logo.png";

export const Login = () => {
  return (
    <div className="w-full h-full m-0 p-0 absolute overflow-hidden flex flex-wrap gap-12 bg-white text-black">
      <LeftSide />
      <div>
        <div className="bg-purple-500 absolute w-1/2 h-full bottom-1/4 rounded-[100%] right-[-20%]"></div>
        <div className="bg-purple-500 absolute w-1/2 h-full top-1/4 rounded-[100%] right-[-20%]"></div>
      </div>
      <div className="flex flex-wrap justify-left ml-16 mt-[8%] z-10">
        <div className="ml-12 w-[500px] h-[600px] bg-gray-100 rounded-md">
          <header className="text-[30px] flex flex-col justify-center items-center font-bold font-serif text-center p-4 ">
            <img src={Logo} className="w-[300px]" />
            Login
          </header>
          <form className="">
            <div className="m-8 flex flex-wrap gap-8 items-center justify-center ">
              <InputComp label="Phone-Number" type="tel" />
              <InputComp label="Password" type="password" />
            </div>
            <span className="w-full flex flex-wrap justify-center">
              <ButtonComp text={"Login"} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
