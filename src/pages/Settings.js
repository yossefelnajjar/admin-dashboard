import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import DashboardBtn from "../components/dashboard/DashboardBtn";
import Input from "../components/settings/Input";
import Row from "../components/settings/Row";
import Toggle from "./../components/settings/Toggle";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <Wrapper head="Settings">
      <div className="rounded-lg p-4 bg-slate-800 w-full col-span-2 lg:col-span-1">
        <Heading
          h2="Site Control"
          p=" Control The Website If There Is Maintenance"
        />
        <Row
          title="Website Control"
          details="Open/Close Website And Type The Reason">
          <Toggle />
        </Row>
        <textarea
          placeholder="Close message"
          class="rounded-md p-2 w-full mt-3 resize-none h-48 border-none bg-slate-200 outline-none text-slate-900 placeholder:text-xs focus:placeholder:opacity-0"></textarea>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading h2="General Info" p="General Information About Your Account" />
        <Input label="First Name" id="first" />
        <Input label="Last Name" id="last" />
        <div className="mt-3 flex sm:flex-col md:flex-col">
          <div class="relative flex-1 ">
            <input
              type="text"
              id="gmail"
              className="cursor-not-allowed block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-600 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer"
              placeholder=""
              disabled
            />
            <label
              for="gmail"
              className="cursor-not-allowed absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              yossefelnajjar@gmail.com
            </label>
          </div>
          <button className="ml-2 text-blue-500 sm:mt-2 md:mt-3">Change</button>
        </div>
      </div>

      <div className="rounded-lg p-4 bg-slate-800">
        <Heading
          h2="Security Info"
          p="Security Information About Your Account"
        />
        <Row
          title="Website Control"
          details="Open/Close Website And Type The Reason"
          addClass="mb-5 pb-5 border-b border-slate-400">
          <DashboardBtn
            content="Change"
            bgColor="cursor-pointer hover:bg-blue-500 transition-all"
          />
        </Row>
        <Row
          title="Two-Factor Authentication"
          details="Enable/Disable The Feature"
          addClass="mb-5 pb-5 mt-5 border-b border-slate-400">
          <Toggle />
        </Row>
        <Row
          title="Devices"
          details="Check The Devices Login List"
          addClass="mt-5">
          <DashboardBtn
            content="Devices"
            bgColor="cursor-pointer hover:bg-blue-500 transition-all"
          />
        </Row>
      </div>

      <div className="rounded-lg p-4  bg-slate-800">
        <Heading h2="Social Info" p="Social Media Information" />
        <Input label="Gmail" id="social-1" />
        <Input label="Twitter" id="social-2" />
        <Input label="Youtube" id="social-3" />
        <Input label="Linkedin" id="social-4" />
        <div className="flex justify-end">
          <DashboardBtn
            content="Save"
            bgColor=" cursor-pointer hover:bg-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="rounded-lg p-4  bg-slate-800 min-h-fit">
        <Heading h2="Backup Manager" p="Control Backup Time And Location" />

        <div className="date flex gap-2 flex-col">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full "
              htmlFor="daily"
              data-ripple-dark="true">
              <input
                id="daily"
                name="date"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor">
                  <circle data-name="ellipse" cx={8} cy={8} r={8} />
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light ml-1"
              htmlFor="daily">
              Daily
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full "
              htmlFor="weekly"
              data-ripple-dark="true">
              <input
                id="weekly"
                name="date"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                defaultChecked
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor">
                  <circle data-name="ellipse" cx={8} cy={8} r={8} />
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light ml-1"
              htmlFor="weekly">
              Weekly
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full "
              htmlFor=" monthly"
              data-ripple-dark="true">
              <input
                id=" monthly"
                name="date"
                type="radio"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor">
                  <circle data-name="ellipse" cx={8} cy={8} r={8} />
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light ml-1"
              htmlFor=" monthly">
              Monthly
            </label>
          </div>
        </div>

        <div className="server-types mt-3 pt-3 border-t border-slate-400 w-full h-fit gap-1 flex justify-between items-center sm:flex-col">
          <div className="server-type flex relative w-1/3 h-40 sm:w-full sm:mb-1">
            <input
              type="radio"
              id="zero"
              name="server-type"
              className="appearance-none w-full bg-transparent border rounded-md  transition-all checked:border-blue-500"
            />
            <label
              htmlFor="zero"
              className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-2xl flex items-center flex-col">
              <FontAwesomeIcon icon={faServer} className="text-5xl " />
              <p>Zero</p>
            </label>
          </div>

          <div className="server-type flex relative w-1/3 h-40 sm:w-full sm:mb-1">
            <input
              type="radio"
              id="admin"
              name="server-type"
              className="appearance-none w-full bg-transparent border rounded-md  transition-all checked:border-blue-500"
            />
            <label
              htmlFor="admin"
              className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-2xl flex items-center flex-col">
              <FontAwesomeIcon icon={faServer} className="text-5xl " />
              <p>Admin</p>
            </label>
          </div>

          <div className="server-type flex relative w-1/3 h-40 sm:w-full sm:mb-1">
            <input
              type="radio"
              id="linux"
              name="server-type"
              className="appearance-none w-full bg-transparent border rounded-md  transition-all checked:border-blue-500"
              defaultChecked
            />
            <label
              htmlFor="linux"
              className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-2xl flex items-center flex-col">
              <FontAwesomeIcon icon={faServer} className="text-5xl " />
              <p>Linux</p>
            </label>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;

// [&>*:nth-child()]:bg-gray-300
