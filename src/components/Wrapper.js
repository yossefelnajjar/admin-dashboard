const Wrapper = (props) => {
  return (
    <div className="p-5 ml-40 sm:ml-12 md:ml-12 sm:p-4 sm:pr-2 md:p-5 md:pr-3 flex-1">
      <h1 className="text-5xl capitalize relative w-36 mb-4 pb-2 text-slate-100">
        {props.head}
      </h1>
      <div
        className={
          "grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 gap-3 " +
          props.modGrid
        }>
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
