import { DarkModeToggle } from "./DarkModeToggle";
import { Notification } from "./Notification";

export const Header = () => {
  return (
    <div className="w-full p-4 flex justify-between items-center border-b-2">
      <b className="text-2xl text-black dark:text-white">Hello, Susan</b>
      <div className="flex gap-4 items-center">
        <Notification />
        <DarkModeToggle />
      </div>
    </div>
  );
};
