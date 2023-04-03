import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({ details, head }) => {
  return (
    <div class="border-y  border-gray-500 pb-3 flex items-center">
      <div class="text flex-1">
        <h3 class="mt-2">{head}</h3>
        <p class="text-stone-400 text-sm  mt-1">{details}</p>
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

export default Tasks;
