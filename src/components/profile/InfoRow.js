const InfoRow = ({
  header,
  first,
  firstInfo,
  second,
  secondInfo,
  last,
  lastInfo,
}) => {
  return (
    <div className="general-information flex flex-col lg:text-center lg:border-t lg:pt-3 border-slate-400 lg:mb-5 lg:mt-2">
      <p className="font-bold text-blue-500 text-lg  lg:pb-1">{header}</p>
      <div className="text flex justify-between items-center">
        <div className="flex flex-1 self-start lg:flex-col  ">
          <p className="text-gray-400 mr-1">{first}</p>
          <p>{firstInfo}</p>
        </div>
        <div className="flex flex-1 self-start lg:flex-col">
          <p className="text-gray-400 mr-1">{second}</p>
          <p>{secondInfo}</p>
        </div>
        <div className="flex flex-1 self-start lg:flex-col">
          <p className="text-gray-400 mr-1">{last}</p>
          <p>{lastInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoRow;
