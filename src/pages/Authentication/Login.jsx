import { ButtonComp, InputComp } from "../../components";
import { LeftSide } from "./LeftSide";
import Logo from "../../assets/logo.png";

export const Login = () => {
  return (
    <div className="w-full h-full m-0 p-0 absolute overflow-hidden flex flex-wrap gap-12 bg-white text-black">
      <div className="hidden z-20 xl:block">
        <LeftSide />
      </div>
      <div className="absolute hidden xl:block bg-purple-500 w-[600px] h-[600px] rounded-[100%] left-[-10%] top-[-20%]"></div>
      <div className="absolute flex flex-wrap justify-center md:right-[15%] md:top-[15%] z-10">
        <div className="absolute bg-purple-500 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-[100%] right-[-20%] top-[-10%] md:right-[-80%] md:top-[-50%]"></div>
        <div className="absolute bg-purple-500 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-[100%] left-[-20%] bottom-[-30%] md:left-[-80%] md:bottom-[-60%]"></div>
        <div className="mt-20 py-10 px-5 md:mt-0 md:ml-12 w-[80%] h-[90%] md:w-[500px] md:h-[650px] bg-gray-100/30 rounded-md backdrop-blur-md border border-white/20 shadow-xl">
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
