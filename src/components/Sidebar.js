import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faChartBar,
  faCircle,
  faCircleUser,
  faCreditCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import SidebarBtn from "./SidebarBtn";
import {
  faDiagramProject,
  faGear,
  faGraduationCap,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  useEffect(() => {
    const btns = document.querySelectorAll("#btn-ul li a");

    btns.forEach((btn) => {
      if (btn.href === window.location.href) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  }, []);

  return (
    <>
      <div className="sidebar p-3 fixed h-screen w-40 z-50 sm:w-fit md:w-fit sm:p-1 md:p-1 shadow-2xl">
        <h3 className="uppercase mt-0 text-center sm:text-xs md:text-xs sm:my-2 md:my-2 cursor-default ">
          yossef
        </h3>
        <div className="mb-2 text-center -mt-1 text-sm sm:hidden md:hidden ">
          <FontAwesomeIcon icon={faMinus} />
          <FontAwesomeIcon icon={faMinus} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faMinus} />
          <FontAwesomeIcon icon={faMinus} />
        </div>
        <ul id="btn-ul">
          <SidebarBtn name="Dashboard" link="/dashboard">
            <FontAwesomeIcon icon={faChartBar} />
          </SidebarBtn>
          <SidebarBtn name="Settings" link="/settings">
            <FontAwesomeIcon icon={faGear} />
          </SidebarBtn>
          <SidebarBtn name="Profile" link="/profile">
            <FontAwesomeIcon icon={faUser} />
          </SidebarBtn>
          <SidebarBtn name="Projects" link="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
          </SidebarBtn>
          <SidebarBtn name="Courses" link="/courses">
            <FontAwesomeIcon icon={faGraduationCap} />
          </SidebarBtn>
          <SidebarBtn name="Friends" link="/friends">
            <FontAwesomeIcon icon={faCircleUser} />
          </SidebarBtn>
          <SidebarBtn name="Plans" link="/plans">
            <FontAwesomeIcon icon={faCreditCard} />
          </SidebarBtn>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
