import {
  avi,
  eps,
  news1,
  news2,
  news3,
  news4,
  psd,
  team1,
  team2,
  zip,
} from "../assets/assets";
import Wrapper from "../components/Wrapper";
import Heading from "../components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCode,
  faDollarSign,
  faRectangleList,
  faRectangleXmark,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TopSearched from "../components/dashboard/TopSearched";
import LatestNews from "../components/dashboard/LatestNews";
import Tasks from "../components/dashboard/Tasks";
import Tickets from "../components/dashboard/Tickets";
import Reminders from "../components/dashboard/Reminders";
import Table from "../components/dashboard/Table";
import ProgressBar from "../components/ProgressBar";
import LatestUploads from "../components/dashboard/LatestUploads";

const Dashboard = () => {
  return (
    <Wrapper head="dashboard">
      <div className="rounded-lg p-4 bg-slate-800">
        <div className="intro p-2 bg-slate-400 rounded-lg">
          <h2 className="m-0 text-3xl text-slate-950 ">welcome</h2>
          <p className="text-gray-600 mt-0 mb-10 capitalize text-sm">
            yossef elnajjar
          </p>
        </div>
        <img
          src={team1}
          alt="avatar"
          className="rounded-full border-slate-400 w-16 absolute top-60 left-56 border-2 md:left-28  sm:left-24"
        />
        <div className="border-y border-slate-400 text-center p-5 mt-10 mb-5 flex justify-between sm:flex-col md:text-left">
          <div className="sm:mb-3">
            yossef elnajjar
            <div className="text-gray-600 text-sm mt-1 sm:mt-0">developer</div>
          </div>
          <div className="sm:mb-3">
            80
            <div className=" text-gray-600 text-sm mt-1 sm:mt-0">Projects</div>
          </div>
          <div>
            $85.400
            <div className="text-gray-600 text-sm mt-1 sm:mt-0">Earned</div>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading h2="Quick Draft" p="Write A Draft For Your Ideas" />
        <form>
          <input
            type="text"
            className="block mb-5 w-full p-2 border-none bg-slate-200 outline-none text-slate-900 placeholder:text-xs rounded-md focus:placeholder:opacity-0"
            placeholder="Title"
          />
          <textarea
            placeholder="Your Thoughts"
            class="block mb-5 rounded-md p-2 w-full mt-3 resize-none h-48 border-none bg-slate-200 outline-none text-slate-900 placeholder:text-xs focus:placeholder:opacity-0"></textarea>
          <div class="flex justify-end">
            <button className="visit block text-sm bg-slate-900 py-1 px-2 rounded-2xl hover:bg-slate-950 transition-all text-orange-500 w-fit btn-shape">
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading h2="Yearly Targets" p="Targets Of The Year" />

        <div className="target-row mb-5 flex items-center">
          <div className="w-20 h-20 mr-4 bg-sky-400/25 flex justify-center items-center">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>

          <div className="flex-1">
            <span className="text-sm text-gray-400">Money</span>
            <div className="mb-2 font-bold text-gray-300">$200.000</div>
            <ProgressBar
              innerBg="bg-blue-900"
              outerBg="bg-blue-500"
              outerW="w-full"
              innerW="w-2/3"
            />
          </div>
        </div>

        <div className="target-row mb-5 flex items-center">
          <div className="w-20 h-20 mr-4 bg-orange-400/25 flex justify-center items-center">
            <FontAwesomeIcon icon={faCode} />
          </div>

          <div className="flex-1">
            <span className="text-sm text-gray-400">Projects</span>
            <div className="mb-2 font-bold text-gray-300">26</div>
            <ProgressBar
              innerBg="bg-orange-900"
              outerBg="bg-orange-500"
              outerW="w-full"
              innerW="w-2/4"
            />
          </div>
        </div>

        <div className="target-row mb-5 flex items-center">
          <div className="w-20 h-20 mr-4 bg-green-400/25 flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="flex-1">
            <span className="text-sm text-gray-400">Team</span>
            <div className="mb-2 font-bold text-gray-300">10</div>
            <ProgressBar
              innerBg="bg-green-900"
              outerBg="bg-green-500"
              outerW="w-full"
              innerW="w-5/6"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading h2="Tickets Statistics" p="Everything About Support Tickets" />

        <div className="flex gap-5 flex-wrap justify-between sm:flex-col">
          <Tickets icon={faRectangleList} num="1820" details="Total" />
          <Tickets icon={faSpinner} num="500" details="Pending" />
        </div>

        <div className="flex gap-5 flex-wrap justify-between sm:flex-col mt-5">
          <Tickets icon={faCircleCheck} num="2500" details="Closed" />
          <Tickets icon={faRectangleXmark} num="100" details="Canceled" />
        </div>
      </div>

      <div className="rounded-lg col-span-2 lg:col-span-1  p-4 bg-slate-800">
        <Heading h2="Latest News" />

        <div className="md:flex md:justify-between md:items-center md:flex-wrap sm:block pt-1">
          <LatestNews
            src={news1}
            days="3 Days Ago"
            head="Created SASS Section"
            details="New SASS Examples & Tutorials"
          />
          <LatestNews
            src={news2}
            days="5 Days Ago"
            head="Changed The Design"
            details="A Brand New Website Design"
          />
          <LatestNews
            src={news3}
            days="9 Days Ago"
            head="Team Increased"
            details="Mohammed Joined The Team"
          />
          <LatestNews
            src={news4}
            days="11 Days Ago"
            head="Added Payment Gateway"
            details="New Payment Gateways Added"
          />
        </div>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading h2="Latest Tasks" />

        <Tasks
          head="Record One New Video"
          details="Record Python Create Exe Project"
        />
        <Tasks
          head="Write Article"
          details="Write Low Level vs High Level Languages "
        />
        <Tasks
          head="Finish Project"
          details="Publish HooBank Programming Project"
        />
        <Tasks head="Finish Lesson" details="Finish Teaching Flex Box" />
      </div>
      <div className="rounded-lg col-span-2 lg:col-span-1 p-4 bg-slate-800">
        <Heading h2="Top Searched Items" />
        <div class="items-head flex items-center justify-between text-stone-400  mb-5 mt-5">
          <span className="text-inherit">Keyword</span>
          <span className="text-inherit">Search count</span>
        </div>
        <TopSearched head="Programming" views="2.700.000" />
        <TopSearched head="JavaScript" views="1.800.000" />
        <TopSearched head="PHP" views="160.000" />
        <TopSearched head="Code" views="140.000" />
        <TopSearched head="C++" views="70.000" />
        <TopSearched head="Logic" views="30.000" />
      </div>

      <div className="rounded-lg p-4 bg-slate-800 ">
        <Heading h2="Reminders" />
        <Reminders
          bgColor="bg-blue-500"
          head="Check My Tasks List"
          date="25/03/2023 - 11:00am"
          borderColor="border-blue-500"
        />
        <Reminders
          bgColor="bg-orange-500"
          head="Check Mohammed message"
          date="20/03/2023 - 3:00am"
          borderColor="border-orange-500"
        />
        <Reminders
          bgColor="bg-red-500"
          head="Call All of My Clients"
          date="18/03/2023 - 1:30am"
          borderColor="border-red-500"
        />
        <Reminders
          bgColor="bg-green-500"
          head="Check the code"
          date="18/03/2023 - 1:00pm"
          borderColor="border-red-500"
        />
      </div>

      <div className="rounded-lg p-4  bg-slate-800 col-span-2 lg:col-span-1">
        <Heading h2="Latest Uploads" />
        <div className="md:flex md:justify-between md:items-center md:flex-wrap sm:block">
          <LatestUploads
            src={zip}
            btn="8.9MB"
            head="my-Zip-file"
            details="Ahmed"
          />
          <LatestUploads
            src={avi}
            btn="1.2GB"
            head="my-Video-file"
            details="Admin"
          />
          <LatestUploads
            src={psd}
            btn="74MB"
            head="my-Psd-file"
            details="Mohammed"
          />
          <LatestUploads
            src={eps}
            btn="2.9MB"
            head="my-Eps-file"
            details="Designer"
          />
        </div>
      </div>

      <div className="rounded-lg col-span-3 lg:col-span-1 p-4 bg-slate-800 ">
        <Heading h2="Projects" />
        <div className="overflow-x-scroll">
          <table className="text-sm w-full cursor-default">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <Table
                pName="Yossef Shop"
                date="10 oct 2023"
                client="Yossef Company"
                price="$55.000"
                btnContent="in Progress"
                btnBgColor="!bg-blue-500">
                <img src={team1} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team1} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team1} alt="avatar" />
                <img src={team1} alt="avatar" />
              </Table>
              <Table
                pName="Mahmoud website"
                date="10 jan 2023"
                client="Mahmoud"
                price="$2.000"
                btnContent="Completed"
                btnBgColor="!bg-green-500">
                <img src={team1} alt="avatar" />
                <img src={team1} alt="avatar" />
              </Table>
              <Table
                pName="Ahmed Shop"
                date="4 May 2023"
                client="Ahmed"
                price="$3.000"
                btnContent="Declined"
                btnBgColor="!bg-red-500">
                <img src={team1} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team1} alt="avatar" />
                <img src={team1} alt="avatar" />
              </Table>
              <Table
                pName="Seif Application"
                date="15 Dec 2023"
                client="Seif Company"
                price="$155.000"
                btnContent="in Progress"
                btnBgColor="!bg-blue-500">
                <img src={team1} alt="avatar" />
                <img src={team1} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team1} alt="avatar" />
                <img src={team1} alt="avatar" />
              </Table>
              <Table
                pName="MerchST Store"
                date="10 May 2023"
                client="MerchST"
                price="$5.300"
                btnContent="Pending"
                btnBgColor="bg-yellow-500">
                <img src={team1} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team2} alt="avatar" />
                <img src={team1} alt="avatar" />
              </Table>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
