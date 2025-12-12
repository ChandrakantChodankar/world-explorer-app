import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center p-5 overflow-hidden">
      <img
        src="/images/38376665_gst_bg_054_20.jpg"
        alt="404 error"
        className="max-w-md w-full h-auto mb-8 rounded-lg shadow-lg object-cover"
      />
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
        Error {error?.status || "404"}: Page Not Found
      </h1>
      <p className="text-xs md:text-xl lg:text-2xl py-6 md:py-8 lg:py-10 text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <NavLink to="/">
        <button className="p-2 rounded-2xl bg-blue-600 hover:bg-blue-800 text-white transition duration-300 hover:scale-105">
          Home Page
        </button>
      </NavLink>
    </div>
  );
};
