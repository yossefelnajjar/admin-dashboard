import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faPhone,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { team1 } from "../../assets/assets";
import DashboardBtn from "./../dashboard/DashboardBtn";

const FriendCard = () => {
  let handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  };

  return (
    <div className="rounded-lg p-4 bg-slate-800 lg:col-span-5 xl:col-span-5">
      <div className="contact flex items-center justify-between">
        <FontAwesomeIcon
          icon={faPhone}
          className="bg-slate-400 p-1.5 border border-slate-400 text-lg rounded-full transition-all hover:bg-transparent hover:border-blue-500 "
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="bg-slate-400 p-1.5 border border-slate-400 text-lg rounded-full transition-all hover:bg-transparent hover:border-blue-500 "
        />
      </div>
      <div className="box-content flex flex-col items-center justify-between my-2">
        <img src={team1} alt="logo was here" className="rounded-full w-36" />
        <h3 className="mt-3">yossef elnajjar</h3>
        <p className="text-slate-400 text-sm ">Front-end Developer</p>
      </div>
      <div className="status border-y py-2 border-slate-500">
        <div className="status-row flex mb-2 items-center ">
          <span className="w-5">
            <FontAwesomeIcon icon={faFaceSmile} />
          </span>
          <span>35k Followers</span>
        </div>
        <div className="status-row flex mb-2 items-center ">
          <span className="w-5">
            <FontAwesomeIcon icon={faCodeFork} />
          </span>
          <span>357 Forks</span>
        </div>
        <div className="status-row flex items-center ">
          <span className="w-5">
            <FontAwesomeIcon icon={faPhoneSquare} />
          </span>
          <span>107 Friends</span>
        </div>
      </div>
      <div className="control flex items-center justify-between mt-2">
        <div className="text-sm text-slate-500">Joined 02/10/2021</div>
        <div className="buttons flex">
          <DashboardBtn
            content="Profile"
            bgColor="mr-2 !bg-blue-500 cursor-pointer"
          />
          <span
            onClick={(e) => {
              handleDelete(e);
            }}>
            <DashboardBtn
              content="Remove"
              bgColor="mr-2 !bg-red-500 cursor-pointer"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
