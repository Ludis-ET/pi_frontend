import { Footer } from "./Footer";
import { Header } from "./Header";
import { Links } from "./Links";

export const LeftBar = () => {
  return (
    <div className="bg-[#af84ff] w-1/5 hidden lg:flex flex-col gap-12">
      <Header />
      <Links />
      <Footer />
    </div>
  );
};
