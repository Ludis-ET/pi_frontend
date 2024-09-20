import { useContext } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Notification } from "./Notification";
import { AuthContext } from "../context";

export const Header = () => {
  const { myprofile } = useContext(AuthContext);
  return (
    <div className="w-full p-4 flex justify-between items-center border-b-2">
      <b className="text-2xl text-black dark:text-white">
        Hello, {myprofile && myprofile.full_name}
      </b>
      <div className="flex gap-4 items-center">
        <Notification />
        <DarkModeToggle />
      </div>
    </div>
  );
};
