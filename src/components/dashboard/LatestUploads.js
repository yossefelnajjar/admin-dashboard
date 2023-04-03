import DashboardBtn from "./DashboardBtn";

const LatestUploads = ({ src, btn, head, details }) => {
  return (
    <div className="files-row flex items-center  mt-5 sm:flex-col sm:text-center md:flex-col md:text-center sm:border-t sm:pt-3 sm:border-gray-400">
      <img
        src={src}
        className="rounded-lg w-12 mr-3 md:m-0 md:mb-2 sm:m-0 sm:mb-2 "
        alt="banner was here"
      />
      <div className="info flex-1 sm:mb-2">
        <h3>{head}</h3>
        <p className=" text-sm text-stone-400">{details}</p>
      </div>
      <DashboardBtn content={btn} />
    </div>
  );
};

export default LatestUploads;