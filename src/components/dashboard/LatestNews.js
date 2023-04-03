import DashboardBtn from "./DashboardBtn";

const LatestNews = ({ src, days, head, details }) => {
  return (
    <div className="news-row flex items-center  mt-5 sm:flex-col sm:text-center md:flex-col md:text-center sm:border-t sm:pt-3 sm:border-gray-400">
      <img
        src={src}
        className="rounded-lg w-24 mr-4 md:m-0 md:mb-2 sm:m-0 sm:mb-2 "
        alt="banner was here"
      />
      <div className="info flex-1 sm:mb-2">
        <h3>{head}</h3>
        <p className=" text-sm text-stone-400">{details}</p>
      </div>
      <DashboardBtn content={days} />
    </div>
  );
};

export default LatestNews;
