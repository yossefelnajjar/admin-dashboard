import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanAdvantage = ({ check, content, addClass }) => {
  return (
    <div
      className={
        "row flex justify-center items-center my-2 pt-2 pb-4 text-xl " +
        addClass
      }>
      <FontAwesomeIcon icon={check ? faCheck : faXmark} className="text-xl" />
      <span className="flex-1 text-lg ml-1">{content}</span>
    </div>
  );
};

export default PlanAdvantage;
