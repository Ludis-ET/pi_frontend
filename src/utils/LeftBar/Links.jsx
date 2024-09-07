import { Link } from "react-router-dom";

export const Links = () => {
  const cls = `w-full hover:bg-white hover:p-2 hover:text-black rounded-lg transition-all duration-2000 ease-in-out items-center flex gap-4 hover:text-2xl text-xl`;
  return (
    <div className="w-full ml-8 justify-center text-white items-center p-12 flex flex-col gap-4 ">
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-comments"></i>
        <p>Discussion</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
      <Link to="/" className={`${cls} `}>
        <i className="fa fa-home"></i>
        <p>Dashboard</p>
      </Link>
    </div>
  );
};
