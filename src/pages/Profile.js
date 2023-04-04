import { activity1, activity2, activity3, team1 } from "../assets/assets";
import Heading from "../components/Heading";
import ProgressBar from "../components/ProgressBar";
import Wrapper from "../components/Wrapper";
import DashboardBtn from "../components/dashboard/DashboardBtn";
import InfoRow from "../components/profile/InfoRow";
import ActivityRow from './../components/profile/ActivityRow';

const Profile = () => {
  return (
    <Wrapper head="Profile" modGrid="!grid-cols-5">
      <div className="rounded-lg p-4 col-span-5  bg-slate-800">
        <div className="profile-info flex sm:flex-col md:flex-col lg:flex-col ">
          <div className="profile-info-logo flex items-center flex-col border-r pr-4 m-4 lg:mb-4 lg:p-0 lg:m-0 lg:border-r-0">
            <img
              src={team1}
              alt="logo was here"
              className="w-56 rounded-full mb-3"
            />
            <h3 className="capitalize">yossef elnajjar</h3>
            <p className="text-slate-400 mt-1 mb-1">Level 20</p>
            <ProgressBar
              innerBg="bg-blue-900"
              outerBg="bg-blue-500"
              outerW="w-full"
              innerW="w-3/4"
            />
          </div>

          <div className="profile-info-text flex-1 flex flex-col justify-around md:hidden sm:hidden">
            <InfoRow
              header="General Information"
              first="Full Name:"
              firstInfo="yossef mohamed"
              second="Gender:"
              secondInfo="Male"
              last="Country:"
              lastInfo="Egypt"
            />
            <InfoRow
              header="Personal Information"
              first="Email:"
              firstInfo="yossefelnajjar@gmail.com"
              second="Phone:"
              secondInfo="+20 12 7911 5830"
              last="Date Of Birth:"
              lastInfo="11/12/1426"
            />
            <InfoRow
              header="Job Information"
              first="Title:"
              firstInfo="Frontend Developer"
              second="Main Skill:"
              secondInfo="JavaScript"
              last="Years Of Experience:"
              lastInfo="+15 Years"
            />
            <InfoRow
              header="Billing Information"
              first="Payment Method:"
              firstInfo="PayPal"
              second="Email:"
              secondInfo="yossefelnajjar@gmail.com"
              last="Subscription:"
              lastInfo="Monthly"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-slate-800 lg:col-span-5">
        <Heading h2="My Skills" p="Complete Skills List" />
        <div className="border-y border-slate-400  flex flex-wrap justify-center items-center flex-col ">
          <DashboardBtn content="HTML" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="CSS" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="JavaScript" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="Reactjs" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="Redux" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="SASS" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="Tailwind" bgColor="ml-4 px-2  mt-3" />
          <DashboardBtn content="Git" bgColor="ml-4 px-2 mb-2 mt-3" />
        </div>
      </div>

      <div className="rounded-lg p-4 col-span-4  lg:col-span-5 bg-slate-800">
        <Heading
          h2="Latest Activities"
          p="Latest Activities Done By The User"
        />

        <div className="profile-activites-content">
          <ActivityRow
            src={activity1}
            title="Store"
            description="Bought The Mastering Python Course"
            time="8:10"
            day="Yesterday"
          />
          <ActivityRow
            src={activity2}
            title="Academy"
            description="Got The PHP Certificate"
            time="7:46"
            day="Yesterday"
          />
          <ActivityRow
            src={activity3}
            title="Badges"
            description="Unlocked The 10 Skills Badge"
            time="3:01"
            day="Sunday"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
