import Wrapper from "../components/Wrapper";
import CourseCard from "../components/courses/CourseCard";
import { course, team1 } from "../assets/assets";

const Courses = () => {
  const courseArr = [];
  for (let i = 0; i < 23; i++) {
    courseArr.push(
      <div
        key={i}
        className="rounded-lg bg-slate-800 flex flex-col cursor-default overflow-hidden ">
        <CourseCard
          title="Mastering Web Design"
          details="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
          stNum="1,523"
          price="950"
          imgSrc={team1}
          bannerSrc={course}
        />
      </div>
    );
  }

  return (
    <Wrapper head="Courses" modGrid="!grid-cols-5 ">
      {courseArr}
    </Wrapper>
  );
};

export default Courses;
