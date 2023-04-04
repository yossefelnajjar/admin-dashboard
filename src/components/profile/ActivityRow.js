const ActivityRow = ({ src, title, description, time, day }) => {
  return (
    <div className="row flex items-center my-7">
      <img src={src} alt="logo was here" className="w-14 mr-2" />
      <div className="text flex-1">
        <h3 className="text-lg">{title}</h3>
        <p className=" text-slate-400 -mt-1">{description}</p>
      </div>
      <div className="date text-slate-400 text-end ml-4">
        <span className="text-inherit">{time}</span>
        <p className="text-inherit -mt-1">{day}</p>
      </div>
    </div>
  );
};

export default ActivityRow;
