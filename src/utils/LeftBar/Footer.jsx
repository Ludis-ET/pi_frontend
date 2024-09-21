export const Footer = () => {
  return (
    <footer className="absolute bottom-20 text-black  lg:text-white lg:bottom-4 flex flex-col items-center text-center text-surface">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#55acee] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-google text-xl"></i>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
      </div>
      <div className="p-4">
        <p className="lg:text-neutral-200">© 2024 Copyright Ludis</p>
      </div>
    </footer>
  );
};
