import React from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store?.user?.data);
  return (
    <div className='w-screen bg-gradient-to-b from-black z-20 absolute flex flex-row justify-between items-center px-3 md:px-10'>
      <img src={logo} alt='DevTinder' className='w-28 md:w-60' />
      {user && (
        <img
          src={user.photoURL}
          className='rounded-full h-8 md:h-14
        '
        ></img>
      )}
    </div>
  );
};

export default Header;
