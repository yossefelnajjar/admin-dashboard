const DashboardBtn = ({ content, bgColor }) => {
  return (
    <div
      className={
        ("bg-slate-400 text-sm rounded-md px-1 text-black w-fit "+ bgColor)
      }>
      {content}
    </div>
  );
};

export default DashboardBtn;
