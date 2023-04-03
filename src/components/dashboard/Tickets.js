import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tickets = ({ icon, num, details }) => {
  return (
    <div className="border flex-1 text-gray-400 flex justify-center items-center flex-col p-5 rounded-lg text-sm cursor-default">
      <FontAwesomeIcon icon={icon} size="4x" />
      <div className="text-slate-300 font-bold  mt-2 text-2xl">{num}</div>
      {details}
    </div>
  );
};

export default Tickets;
//faSpinner
