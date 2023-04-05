import Wrapper from "../components/Wrapper";
import DashboardBtn from "../components/dashboard/DashboardBtn";
import Plan from "../components/plans/Plan";

const Plans = () => {
  return (
    <Wrapper head="Plans">
      <div className="rounded-lg p-4 bg-slate-800">
        <Plan
          type="Free"
          planBg="bg-green-500"
          pricing="$0.00"
          first={true}
          second={true}
          third={true}
          fourth={false}
          fifth={false}
          sixth={false}
          seventh={false}>
          <DashboardBtn
            content="join"
            bgColor="transition-all !bg-transparent border border-green-500 hover:!bg-green-500 hover:text-white text-lg px-4 py-1 text-green-500 cursor-pointer"
          />
        </Plan>
      </div>
      <div className="rounded-lg p-4 bg-slate-800">
        <Plan
          type="Basic"
          planBg="bg-blue-500"
          pricing="$7.99"
          first={true}
          second={true}
          third={true}
          fourth={true}
          fifth={true}
          sixth={false}
          seventh={false}>
          <DashboardBtn
            content="join"
            bgColor="transition-all !bg-transparent border border-blue-500 hover:!bg-blue-500 hover:text-white text-lg px-5 py-1.5 text-blue-500 cursor-pointer"
          />
        </Plan>
      </div>
      <div className="rounded-lg p-4 bg-slate-800">
        <Plan
          type="Premium"
          planBg="bg-orange-500"
          pricing="$19.99"
          first={true}
          second={true}
          third={true}
          fourth={true}
          fifth={true}
          sixth={true}
          seventh={true}>
          <span className="text-slate-400">This is your current Plan</span>
        </Plan>
      </div>
    </Wrapper>
  );
};

export default Plans;
