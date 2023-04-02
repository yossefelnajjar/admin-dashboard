import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import SidebarBtn from "./components/SidebarBtn";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="page d-flex">
        {/* ----------------------------content------------------------------ */}
        <div className="content w-full">
          {/* Start header */}
          <header className="bg-white p-15 flex-center-between">
            <div className="search p-relative">
              <input
                className="p-10"
                type="search"
                placeholder="Type a Keyword"
              />
            </div>
            <div className="icons flex-center-between">
              <span className="notification p-relative">
                <i className="fa-regular fa-bell fa-lg" />
              </span>
              <a href="profile.html">
                <img src="imgs/team-01.png" alt="profile avatar" />
              </a>
            </div>
          </header>
          {/* End header */}
          <h1 className="p-relative">Dashboard</h1>
          {/*----------- Start wrapper ------------*/}
          <div className="wrapper d-grid gap-20 mb-10 dashboard">
            {/* Start welcome */}
            <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
              <div className="intro p-20 bg-eee">
                <div>
                  <h2 className="m-0">welcome</h2>
                  <p className="c-grey mt-5">Yossef</p>
                </div>
              </div>
              <img src="imgs/team-01.png" alt="avatar" className="avatar" />
              <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                <div>
                  yossef elnajjar
                  <span className="d-block c-grey fs-14 mt-10">developer</span>
                </div>
                <div>
                  80
                  <span className="d-block c-grey fs-14 mt-10">Projects</span>
                </div>
                <div>
                  $8500
                  <span className="d-block c-grey fs-14 mt-10">Earned</span>
                </div>
              </div>
              <a
                href="profile.html"
                className="visit d-block fs-14 bg-blue c-white w-fit btn-shape">
                Profile
              </a>
            </div>
            {/* End  welcome */}
            {/* Start Quick draft */}
            <div className="quick-draft p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Quick Draft</h2>
              <p className="mt-0 mb-20 c-grey fs-14">
                Write A Draft For Your Ideas
              </p>
              <form>
                <input
                  type="text"
                  className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
                  placeholder="Title"
                />
                <textarea
                  className="d-block mb-20 w-full p-10 b-none bg-eee rad-6"
                  placeholder="Your Thoughts"
                  defaultValue={""}
                />
                <input
                  className="save d-block fs-14 bg-blue c-white b-none w-fit btn-shape"
                  type="submit"
                  defaultValue="Save"
                />
              </form>
            </div>
            {/* End Quick draft */}
            {/* Start Yearly target */}
            <div className="yearly p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Yearly Targets</h2>
              <p className="mt-0 mb-20 c-grey fs-14">Targets Of The Year</p>
              <div className="target-row mb-20 blue d-flex align-center">
                <div className="icon flex-center-center">
                  <i className="fa-solid fa-dollar-sign fa-lg c-blue" />
                </div>
                <div className="details">
                  <span className="fs-14 c-grey">Money</span>
                  <span className="d-block mt-5 mb-10 fw-bold">$20.000</span>
                  <div className="progress p-relative rad-6">
                    <span
                      className="bg-blue rad-6 blue"
                      style={{ width: "80%" }}>
                      <span className="bg-blue c-white rad-10 fs-14">80%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="target-row mb-20 orange d-flex align-center">
                <div className="icon flex-center-center">
                  <i className="fa-solid fa-code fa-lg c-orange" />
                </div>
                <div className="details">
                  <span className="fs-14 c-grey">Projects</span>
                  <span className="d-block mt-5 mb-10 fw-bold">24</span>
                  <div className="progress p-relative rad-6">
                    <span
                      className="bg-orange rad-6 orange"
                      style={{ width: "55%" }}>
                      <span className="bg-orange c-white rad-10 fs-14">
                        55%
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="target-row mb-20 green d-flex align-center">
                <div className="icon flex-center-center">
                  <i className="fa-solid fa-user fa-lg c-green" />
                </div>
                <div className="details">
                  <span className="fs-14 c-grey">Team</span>
                  <span className="d-block mt-5 mb-10 fw-bold">10</span>
                  <div className="progress p-relative rad-6">
                    <span
                      className="bg-green rad-6 orange"
                      style={{ width: "70%" }}>
                      <span className="bg-green c-white rad-10 fs-14">70%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* End Yearly target */}
            {/* Start Tickets Statistics */}
            <div className="tickets p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Tickets Statistics</h2>
              <p className="mt-0 mb-20 c-grey fs-14">
                Everything About Support Tickets
              </p>
              <div className="boxes d-flex gap-20 f-wrap">
                <div className="box c-grey flex-center-center p-20 rad-10 fs-14">
                  <i className="fa-regular fa-rectangle-list fa-2x c-orange mb-10" />
                  <span className="c-black fw-bold mb-5 d-block fs-25">
                    2500
                  </span>
                  Total
                </div>
                <div className="box c-grey flex-center-center p-20 rad-10 fs-14">
                  <i className="fa-solid fa-spinner fa-2x mb-10 c-blue" />
                  <span className="c-black fw-bold mb-5 d-block fs-25">
                    500
                  </span>
                  Pending
                </div>
                <div className="box c-grey flex-center-center p-20 rad-10 fs-14">
                  <i className="fa-regular fa-circle-check fa-2x mb-10 c-green" />
                  <span className="c-black fw-bold mb-5 d-block fs-25">
                    1900
                  </span>
                  Closed
                </div>
                <div className="box c-grey flex-center-center p-20 rad-10 fs-14">
                  <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red" />
                  <span className="c-black fw-bold mb-5 d-block fs-25">
                    100
                  </span>
                  Deleted
                </div>
              </div>
            </div>
            {/* End Tickets Statistics  */}
            {/* Start Latest News  */}
            <div className="news p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Latest News</h2>
              <div className="news-row d-flex align-center">
                <img
                  src="imgs/news-01.png"
                  className="rad-10"
                  alt="image was here"
                />
                <div className="info">
                  <h3>Created SASS Section</h3>
                  <p className="m-0 fs-14 c-grey">
                    New SASS Examples &amp; Tutorials
                  </p>
                </div>
                <div className="days btn-shape bg-eee fs-14">3 Days Ago</div>
              </div>
              <div className="news-row d-flex align-center">
                <img
                  src="imgs/news-02.png"
                  className="rad-10"
                  alt="image was here"
                />
                <div className="info">
                  <h3>Changed The Design</h3>
                  <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
                </div>
                <div className="days btn-shape bg-eee fs-14">5 Days Ago</div>
              </div>
              <div className="news-row d-flex align-center">
                <img
                  src="imgs/news-03.png"
                  className="rad-10"
                  alt="image was here"
                />
                <div className="info">
                  <h3>Team Increased</h3>
                  <p className="m-0 fs-14 c-grey">Mohammed Joined The Team</p>
                </div>
                <div className="days btn-shape bg-eee fs-14">9 Days Ago</div>
              </div>
              <div className="news-row d-flex align-center">
                <img
                  src="imgs/news-04.png"
                  className="rad-10"
                  alt="image was here"
                />
                <div className="info">
                  <h3>Added Payment Gateway</h3>
                  <p className="m-0 fs-14 c-grey">
                    Many New Payment Gateways Added
                  </p>
                </div>
                <div className="days btn-shape bg-eee fs-14">11 Days Ago</div>
              </div>
            </div>
            {/* End Latest News  */}
            {/* Start Latest Tasks */}
            <div className="tasks p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Latest Tasks</h2>
              <div className="info d-flex align-center">
                <div className="text">
                  <h3 className="m-0 mt-10">Record One New Video</h3>
                  <p className="c-grey m-0 mt-10">
                    Record Python Create Exe Project
                  </p>
                </div>
                <i className="fa-regular fa-trash-can delete" />
              </div>
              <div className="info d-flex align-center">
                <div className="text">
                  <h3 className="m-0 mt-10">Write Article</h3>
                  <p className="c-grey m-0 mt-10">
                    Write Low Level vs High Level Languages
                  </p>
                </div>
                <i className="fa-regular fa-trash-can delete" />
              </div>
              <div className="info d-flex align-center">
                <div className="text">
                  <h3 className="m-0 mt-10">Finish Project</h3>
                  <p className="c-grey m-0 mt-10">
                    Publish Academy Programming Project
                  </p>
                </div>
                <i className="fa-regular fa-trash-can delete" />
              </div>
              <div className="info d-flex align-center">
                <div className="text">
                  <h3 className="m-0 mt-10">Finish Lesson</h3>
                  <p className="c-grey m-0 mt-10">Finish Teaching Flex Box</p>
                </div>
                <i className="fa-regular fa-trash-can delete" />
              </div>
            </div>
            {/* End Latest Tasks */}
            {/* Start Top Search Items */}
            <div className="top-search p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Top Search Items</h2>
              <div className="items-head d-flex flex-center-between c-grey mb-20 mt-20">
                <span>Keyword</span>
                <span>Search count</span>
              </div>
              <div className="item d-flex flex-center-between">
                <span>Programming</span>
                <span className="btn-shape bg-eee fs-14">220</span>
              </div>
              <div className="item d-flex flex-center-between mt-20">
                <span>JavaScript</span>
                <span className="btn-shape bg-eee fs-14">180</span>
              </div>
              <div className="item d-flex flex-center-between mt-20">
                <span>PHP</span>
                <span className="btn-shape bg-eee fs-14">160</span>
              </div>
              <div className="item d-flex flex-center-between mt-20">
                <span>Code</span>
                <span className="btn-shape bg-eee fs-14">139</span>
              </div>
              <div className="item d-flex flex-center-between mt-20">
                <span>Design</span>
                <span className="btn-shape bg-eee fs-14">107</span>
              </div>
              <div className="item d-flex flex-center-between mt-20">
                <span>Logic</span>
                <span className="btn-shape bg-eee fs-14">32</span>
              </div>
            </div>
            {/* End Top Search Items */}
            {/* Start Latest Uploads */}
            <div className="uploads p-20 bg-white rad-10">
              <h2 className="mt-0 mb-20">Latest Uploads</h2>
              <div className="file-row flex-center-center mb-10">
                <img src="imgs/zip.svg" alt="image was here" />
                <div className="text d-flex">
                  <h3 className="fs-14 m-0 mb-5">my-Zip-file</h3>
                  <span className="d-block c-gray fs-12">Ahmed</span>
                </div>
                <span className="btn-shape bg-eee fs-14">8.9MB</span>
              </div>
              <div className="file-row flex-center-center mb-10">
                <img src="imgs/eps.svg" alt="image was here" />
                <div className="text d-flex">
                  <h3 className="fs-14 m-0 mb-5">My-Eps-File</h3>
                  <span className="d-block c-gray fs-12">Designer</span>
                </div>
                <span className="btn-shape bg-eee fs-14">2.9MB</span>
              </div>
              <div className="file-row flex-center-center mb-10">
                <img src="imgs/avi.svg" alt="image was here" />
                <div className="text d-flex">
                  <h3 className="fs-14 m-0 mb-5">My-Video-File</h3>
                  <span className="d-block c-gray fs-12">admin</span>
                </div>
                <span className="btn-shape bg-eee fs-14">5.6GB</span>
              </div>
              <div className="file-row flex-center-center">
                <img src="imgs/psd.svg" alt="image was here" />
                <div className="text d-flex">
                  <h3 className="fs-14 m-0 mb-5">My-Psd-File</h3>
                  <span className="d-block c-gray fs-12">Mohammed</span>
                </div>
                <span className="btn-shape bg-eee fs-14">32.5MB</span>
              </div>
            </div>
            {/* End Latest Uploads */}
            {/* Start Last Project Progress */}
            <div className="projects p-20 bg-white rad-10 p-relative">
              <h2 className="mt-0 mb-20">Last Project Progress</h2>
              <ul className="p-relative">
                <li className="done p-relative">Got The Project</li>
                <li className="done p-relative">Started The Project</li>
                <li className="done p-relative">The Project About To Finish</li>
                <li className="current p-relative">Test The Project</li>
                <li className="p-relative">
                  Finish The Project &amp; Get Money
                </li>
              </ul>
              <img
                className="hide-mobile"
                src="imgs/project.png"
                alt="image was here"
              />
            </div>
            {/* End Last Project Progress */}
            {/* Start Reminders */}
            <div className="reminders p-20 bg-white rad-10">
              <h2 className="mt-0 mb-20">Reminders</h2>
              <div className="reminders-row p-relative mb-10 flex-center-between">
                <span className="circle" />
                <div className="info">
                  <h3 className="fs-14 m-0 mb-5">Check My Tasks List</h3>
                  <span className="c-grey fs-12">25/03/2023 - 11:00am</span>
                </div>
              </div>
              <div className="reminders-row p-relative mb-10 flex-center-between">
                <span className="circle" />
                <div className="info">
                  <h3 className="fs-14 m-0 mb-5">Check Mohammed message</h3>
                  <span className="c-grey fs-12">20/03/2023 - 11:00am</span>
                </div>
              </div>
              <div className="reminders-row p-relative mb-10 flex-center-between">
                <span className="circle" />
                <div className="info">
                  <h3 className="fs-14 m-0 mb-5">Call All of My Clients</h3>
                  <span className="c-grey fs-12">18/03/2023 - 11:00am</span>
                </div>
              </div>
              <div className="reminders-row p-relative mb-10 flex-center-between">
                <span className="circle" />
                <div className="info">
                  <h3 className="fs-14 m-0 mb-5">Check the code</h3>
                  <span className="c-grey fs-12">17/03/2023 - 1:00am</span>
                </div>
              </div>
            </div>
            {/* End Reminders */}
            {/* Start last post */}
            <div className="post p-20 bg-white rad-10">
              <h2 className="mt-0 mb-10">Last Post</h2>
              <div className="post-info d-flex">
                <div className="account flex-center-between">
                  <img src="imgs/team-01.png" alt="profile image" />
                  <div className="info flex-1">
                    <h3 className="m-0 mb-5">yossef elnajjar</h3>
                    <span className="fs-14 c-grey"> About 3 Hours Ago</span>
                  </div>
                </div>
                <span className="post-content mt-20 mb-20">
                  If a heart becomes attached to anything other than Allah,
                  Allah makes him dependent on what he is attached to. And he
                  will be betrayed by it
                  <br className="mb-10" />
                  --Ibn Qayyim Al-Jawziyya--
                </span>
                <div className="post-stats flex-center-between c-grey">
                  <div>
                    <i className="fa-regular fa-heart" />
                    <span>1.8K</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-comments" />
                    <span>500</span>
                  </div>
                </div>
              </div>
            </div>
            {/* End last post */}
            {/* Start projects */}
            <div className="projects-2 p-20 bg-white rad-10">
              <h2 className="mt-0 mb-20">Projects</h2>
              <div className="responsive-table">
                <table className="fs-14 w-full">
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
                    <tr>
                      <td>Yossef Shop</td>
                      <td>10 oct 2023</td>
                      <td>Yossef Company</td>
                      <td>$55.000</td>
                      <td>
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                      </td>
                      <td>
                        <span className="btn-shape bg-blue c-white">
                          in Progress
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Mahmoud website</td>
                      <td>10 jan 2023</td>
                      <td>Mahmoud</td>
                      <td>$500</td>
                      <td>
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                      </td>
                      <td>
                        <span className="btn-shape bg-green c-white">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ahmed Shop</td>
                      <td>4 May 2023</td>
                      <td>Ahmed</td>
                      <td>$3.000</td>
                      <td>
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                      </td>
                      <td>
                        <span className="btn-shape bg-red c-white">
                          Declined
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Seif Application</td>
                      <td>15 Dec 2023</td>
                      <td>Seif Company</td>
                      <td>$155.000</td>
                      <td>
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                      </td>
                      <td>
                        <span className="btn-shape bg-blue c-white">
                          in Progress
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ministry Wikipedia</td>
                      <td>10 May 2023</td>
                      <td>Ministry</td>
                      <td>$5.300</td>
                      <td>
                        <img src="imgs/team-01.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-02.png" alt="avatar" />
                        <img src="imgs/team-01.png" alt="avatar" />
                      </td>
                      <td>
                        <span className="btn-shape bg-orange c-white">
                          Completed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* End projects */}
          </div>
          {/*----------- End wrapper ------------*/}
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Sidebar />
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>
);

/*
  <FontAwesomeIcon icon={faEnvelope} />
  <FontAwesomeIcon icon={faHamburger} /> 
*/
