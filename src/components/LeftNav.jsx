import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faBowlingBall } from "@fortawesome/free-solid-svg-icons";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const LeftNav = () => {
  return (
    <div className="pt-20 h-screen scrollbar-custom overflow-y-auto">
      <ul className=" font-semibold">
        <li className="p-2 pl-5 m-auto hover:cursor-pointer hover:bg-slate-200 flex items-center  ">
          <span className="pr-3">
            <FontAwesomeIcon className=" h-5 w-5  text-fbColor" icon={faHouse} />
          </span>
          <p className="invisible xl:visible">Home</p>
        </li>
        <li className=" p-2 pl-5 hover:cursor-pointer  hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="   p-1 border-blue-700 bg-slate-200 border-2 rounded-full "
              icon={faUser}
            />
          </span>
          <p className="invisible xl:visible">Zaj Sol</p>
        </li>
        <hr className=" border-t-1 border-slate-400 m-3 mx-7 my-2" />
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="  h-5 w-5 text-fbColor"
              icon={faCirclePlay}
            />
          </span>
          <p className="invisible xl:visible">Video</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon className=" h-5 w-5 text-fbColor" icon={faStore} />
          </span>
          <p className="invisible xl:visible">Marketplace</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className=" h-5 w-5 text-fbColor"
              icon={faGamepad}
            />
          </span>
          <p className="invisible xl:visible">Gaming</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon className="w-5 h-5" icon={faBars} />
          </span>
          <p className="invisible xl:visible">See all</p>
        </li>
        <hr className=" border-t-1 border-slate-400 m-3 mx-7 my-2" />
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="  h-5 w-5 text-slate-500"
              icon={faUserDoctor}
            />
          </span>
          <p className="invisible xl:visible">CNNA 200-301</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="  h-5 w-5 text-slate-800"
              icon={faComputer}
            />
          </span>
          <p className="invisible xl:visible">I.T JOBS PHILIPPINES</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="  h-5 w-5 text-red-400"
              icon={faFileCode}
            />
          </span>
          <p className="invisible xl:visible">Web Developers</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3">
            <FontAwesomeIcon
              className="  h-5 w-5 text-green-500"
              icon={faPeopleGroup}
            />
          </span>
          <p className="invisible xl:visible">See all groups</p>
        </li>
        <hr className=" border-t-1 border-slate-400 m-3 mx-7 my-2" />
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3"><FontAwesomeIcon icon={faBowlingBall} /></span>
          <p className="invisible xl:visible">8 Bowling ball</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3"><FontAwesomeIcon className=" text-green-600" icon={faChess} /></span>
          <p className="invisible xl:visible">Chess</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3"><FontAwesomeIcon className=" text-red-700" icon={faDragon} /></span>
          <p className="invisible xl:visible">Legend of Dragons</p>
        </li>
        <li className="p-2 pl-5 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3"><FontAwesomeIcon icon={faPuzzlePiece} /></span>
          <p className="invisible xl:visible">Puzzle Blocks</p>
        </li>
        <li className="p-2 pl-5 mb-10 hover:cursor-pointer hover:bg-slate-200 flex items-center">
          <span className="pr-3"><FontAwesomeIcon className="text-slate-600" icon={faLink} /></span>
          <p className="invisible xl:visible">See all shortcuts</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
