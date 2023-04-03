import DashboardBtn from "./DashboardBtn";

const TopSearched = ({ head, views }) => {
  return (
    <div class="item flex items-center justify-between mt-4">
      <span>{head}</span>
      <DashboardBtn content={views} />
    </div>
  );
};

export default TopSearched;
