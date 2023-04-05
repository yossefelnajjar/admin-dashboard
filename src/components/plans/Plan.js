import PlanAdvantage from "./PlanAdvantage";

const Plan = ({
  children,
  planBg,
  pricing,
  type,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
}) => {
  return (
    <>
      <div
        className={
          "plan-type rounded-md p-14 flex flex-col justify-center items-center flex-1 text-5xl " +
          planBg
        }>
        <span className="mb-5">{type}</span>
        <div className="price flex justify-center items-center text-4xl">
          <span>{pricing}</span>
        </div>
      </div>
      <div className="advantages">
        <PlanAdvantage
          check={first}
          content="Access All Text Lessons"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage
          check={second}
          content="Access All Videos Lessons"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage
          check={third}
          content="Appear On Leaderboard"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage
          check={fourth}
          content="Access All Assignments"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage
          check={fifth}
          content="Get Daily Prizes"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage
          check={sixth}
          content="Earn Certificate"
          addClass="border-b border-slate-400"
        />
        <PlanAdvantage check={seventh} content="1 GB Space For Hosting Files" />
      </div>
      <div className="flex justify-center items-center">{children}</div>
    </>
  );
};

export default Plan;
