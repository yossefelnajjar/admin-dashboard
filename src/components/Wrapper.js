const Wrapper = (props) => {
  return (
    <div className="p-5 ml-40 sm:ml-12 md:ml-12">
      <h1 className="text-5xl capitalize relative w-36 mb-4 text-slate-100">
        {props.head}
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 gap-3">
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
