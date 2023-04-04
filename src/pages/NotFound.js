import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-[calc(100vh-100px)] w-full flex flex-col justify-center items-center sm:scale-90">
      <div className="text-9xl font-extrabold">404</div>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/dashboard"
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go to the main page.
          </span>
        </Link>
      </button>
    </main>
  );
};

export default NotFound;
