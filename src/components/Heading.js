import React from "react";

const Heading = ({ h2, p }) => {
  return (
    <div>
      <h2 className="m-0 text-3xl text-slate-300  mt-3 capitalize">{h2}</h2>
      <p className="text-gray-600 mt-0 mb-5 capitalize text-sm">{p}</p>
    </div>
  );
};

export default Heading;
