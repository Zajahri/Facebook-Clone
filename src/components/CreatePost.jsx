
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
 
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const CreatePost = () => {

  return (
    <div className="mx-auto max-w-xl md:w-2/3 h-32 bg-white mt-5 rounded-md shadow-md">
      <div className="pt-2 flex justify-center items-center gap-3">
        <span>
          <FontAwesomeIcon
            className="  p-2 border-blue-700 bg-slate-200 border-4 rounded-full "
            icon={faUser}
          />
        </span>
        <input
          className=" h-10 w-10/12 bg-slate-100 rounded-full pl-3"
          type="text"
          placeholder="What's on your mind, Zaj?"
        />
      </div>
      <hr className="mt-4 mb-1 mx-5" />
      <ul className="flex justify-around mx-5">
        <li className="flex items-center hover:bg-slate-200 hover:cursor-pointer py-1 px-5 rounded-lg">
          <span className="mr-3 ">
            <FontAwesomeIcon
              className=" h-6 pt-2 text-red-500"
              icon={faVideo}
            />
          </span>
          <span className=" font-medium text-slate-500">Live video</span>
        </li>
        <li className="flex items-center hover:bg-slate-200 hover:cursor-pointer py-1 px-5 rounded-lg">
          <span className="mr-3">
            <FontAwesomeIcon
              className=" h-6 pt-2 text-green-500"
              icon={faImages}
            />
          </span>
          <span className=" font-medium text-slate-500">Photo/video</span>
        </li>
        <li className=" flex items-center hover:bg-slate-200 hover:cursor-pointer py-1 px-5 rounded-lg">
          <span className="mr-3">
            <FontAwesomeIcon
              className=" h-6 pt-2 text-red-500"
              icon={faCirclePlay}
            />
          </span>
          <span className=" font-medium text-slate-500">Reel</span>
        </li>
      </ul>
    </div>
  );
};
export default CreatePost;
