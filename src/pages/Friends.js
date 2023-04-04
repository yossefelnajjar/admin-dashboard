import { Fragment } from "react";
import Wrapper from "../components/Wrapper";
import FriendCard from "../components/friends/FriendCard";

const Friends = () => {
  let friendArr = [];
  for (let i = 0; i < 20; i++) {
    friendArr.push(
      <Fragment key={i}>
        <FriendCard />
      </Fragment>
    );
  }

  return (
    <Wrapper head="Friends" modGrid="!grid-cols-5">
      {friendArr}
    </Wrapper>
  );
};

export default Friends;
