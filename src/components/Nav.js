import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { team1 } from "../assets/assets";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="p-3 ml-40 sm:ml-14 md:ml-14 flex justify-between items-center">
        <div className="ml-5 sm:ml-1 md:ml-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xs"
            className="-mr-5"
          />
          <input
            className="p-1 pl-6 w-48 rounded-md text-sm placeholder:text-xs bg-transparent outline-none border border-slate-900 transition-all duration-300 focus:border-white focus:bg-slate-700 focus:pl-1 focus:w-56"
            type="search"
            placeholder="Type a Keyword"
          />
        </div>
        <div className="w-10 cursor-pointer hover:scale-105 transition-all">
          <Link to="/profile">
            <img src={team1} alt="profile avatar" className="rounded-full" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
