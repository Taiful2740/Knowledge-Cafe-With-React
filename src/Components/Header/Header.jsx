import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-bold my-5">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
