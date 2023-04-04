import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardBtn from "../dashboard/DashboardBtn";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ title, details, stNum, price, imgSrc, bannerSrc }) => {
  return (
    <>
      <div className="course-img relative">
        <img
          src={bannerSrc}
          alt="course logo"
          className="rounded-t-lg w-full "
        />
        <img
          src={imgSrc}
          alt="team logo"
          className="absolute top-3 left-3 rounded-full w-20 border"
        />
      </div>

      <div className="course-content p-4">
        <h3 className="mb-1 text-xl text-slate-300">{title}</h3>
        <p className="text-slate-500 text-sm mb-5 ">{details}</p>

        <div className="info relative flex justify-center items-center">
          <DashboardBtn
            content="course info"
            bgColor="!bg-blue-500 course-btn relative"
          />
        </div>
        <div className="subscibers flex items-center justify-between mt-2">
          <span className="text-slate-400 text-sm">
            <FontAwesomeIcon icon={faUser} className="mr-1" />
            {stNum}
          </span>
          <span className="text-slate-400 text-sm">
            <FontAwesomeIcon icon={faDollarSign} className="mr-1" />
            {price}
          </span>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
