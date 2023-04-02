const SidebarBtn = (props) => {
  return (
    <>
      <li>
        <button className="active w-full text-white rounded-md mb-2 p-2 hover:bg-slate-800 transition-all">
          <a
            href={props.link}
            className=" flex items-center text-sm sm:justify-center md:justify-center">
            <div className="w-5 flex justify-center mr-1">{props.children}</div>
            <span className="sm:hidden md:hidden">{props.name}</span>
          </a>
        </button>
      </li>
    </>
  );
};

export default SidebarBtn;
