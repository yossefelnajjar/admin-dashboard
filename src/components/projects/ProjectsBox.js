import ProgressBar from "../ProgressBar";
import DashboardBtn from "../dashboard/DashboardBtn";

const ProjectsBox = ({
  title,
  description,
  date,
  children,
  tech1,
  tech2,
  tech3,
  tech4,
  price,
  progress,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-16">
        <div className="flex-1">
          <h3 className="text-xl">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
        <span className="text-slate-300">{date}</span>
      </div>
      <div className="">{children}</div>
      <div className="py-3 border-y border-slate-400 my-2 flex justify-end xl:flex-wrap">
        <DashboardBtn content={tech1} bgColor="mr-2 " />
        <DashboardBtn content={tech2} bgColor="mr-2" />
        <DashboardBtn content={tech3} bgColor="mr-2" />
        <DashboardBtn content={tech4} bgColor="xl:mt-2"/>
      </div>
      <div className="flex justify-center items-center">
        <ProgressBar
          innerBg="bg-blue-900"
          outerBg="bg-blue-500"
          outerW="w-full"
          innerW={progress}
        />
        <span className="ml-5 text-orange-300">{price}</span>
      </div>
    </div>
  );
};

export default ProjectsBox;
