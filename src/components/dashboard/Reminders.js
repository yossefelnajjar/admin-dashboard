import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reminders = ({ bgColor, head, date, borderColor }) => {
  return (
    <div className="mb-5 flex items-center justify-center">
      <div className={"w-5 h-5 rounded-full " + bgColor}></div>
      <div className={"border-l flex-1 pl-1 ml-2 " + borderColor}>
        <h3>{head}</h3>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={(e) => {
            e.target.parentElement.parentElement.parentElement.remove();
          }}
        />
      </div>
    </div>
  );
};

export default Reminders;
