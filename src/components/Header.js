import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [isSignedOut, setIsSignedOut] = useState(true);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
    //setIsSignedOut(false);
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src="https://occ-0-4857-3662.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABf1T8EefMIO93OUYg60dbcm27Dlt9BjyU6DMpQqYa_wps0p-kgAzuERJ5ddFGr3q6GWSGLsKjRYHYDGkuUBlF76K_Z6sBIJF6S0A.png?r=229"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 h-5/6 rounded-sm mx-4 font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>

    // <div className="absolute inset-0 bg-black bg-opacity-55">
    //   <div className="w-full absolute top-0 left-0 flex justify-between items-center px-32 py-1 z-10">
    //     <div>
    //       <img
    //         className="w-48"
    //         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-16/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
    //         alt="logo"
    //       />
    //     </div>
    //     <div className="flex items-center gap-4">
    //       <div>
    //         <select className="px-4 py-1 rounded-sm" name="Language">
    //           <option>English</option>
    //           <option>Telugu</option>
    //           <option>Hindi</option>
    //         </select>
    //       </div>
    //       <div>
    //         <button className="bg-red-600 text-white px-4 py-1 rounded-sm">
    //           Sign In
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
