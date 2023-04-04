const ProgressBar = ({ innerBg, outerBg, outerW, innerW }) => {
  return (
    <div className={innerBg + " progress h-1 relative rounded-lg " + outerW}>
      <span
        className={
          outerBg + " rounded-lg absolute top-0 left-0 h-full " + innerW
        }>
      </span>
    </div>
  );
};

export default ProgressBar;
