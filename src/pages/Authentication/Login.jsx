import { Button, Input } from "../../components";
import { LeftSide } from "./LeftSide";

export const Login = () => {
  return (
    <div className="w-full h-full m-0 p-0 absolute overflow-hidden flex flex-wrap gap-12 bg-white text-black">
      <LeftSide />
      <div>
        <div className="bg-purple-500 absolute w-1/2 h-full bottom-1/4 rounded-[100%] right-[-20%]"></div>
        <div className="bg-purple-500 absolute w-1/2 h-full top-1/4 rounded-[100%] right-[-20%]"></div>
      </div>
      <div className="flex flex-wrap justify-left mt-[15%] z-10">
        <div className="ml-12">
          <header className="block text-[25px] font-bold font-serif text-center p-4">
            Login
          </header>
          <form>
            <div className="m-8">
              <Input />
              <input type="password" name="" id="" />
            </div>
            <span className="w-full flex flex-wrap justify-center">
              <Button text={"Login"} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
