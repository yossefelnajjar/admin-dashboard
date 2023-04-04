const Row = ({ title, details, children, addClass }) => {
  return (
    <div className={"flex items-center mb-1 " + addClass}>
      <div className="flex-1 w-fit">
        <h3 className="text-lg text-slate-200">{title}</h3>
        <p className="text-sm text-gray-500 sm:hidden">{details}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Row;
