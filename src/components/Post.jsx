import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUps } from "@fortawesome/free-regular-svg-icons";

import { faComment as faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike((prev) => !prev);
  };

  const youLike = isLike
    ? "You and " + props.reactions + " others"
    : props.reactions;

  return (
    <div className="mx-auto md:w-2/3 h-auto bg-white mt-5 pt-3  rounded-xl shadow-md">
      <div className="flex justify-between items-center pl-3 pr-3 ">
        <div className="flex gap-2">
          <span>
            <FontAwesomeIcon
              className=" p-2 ml-1 border-blue-700 bg-slate-200 border-4 rounded-full "
              icon={faUser}
            />
          </span>
          <div className="  ">
            <h3 className=" font-semibold ">{props.name}</h3>
            <p className=" text-xs">{props.time} hours ago</p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="hover:cursor-pointer">
            <FontAwesomeIcon icon={faEllipsis} />
          </span>

          <div className="hover:cursor-pointer hover:bg-slate-300 rounded-full">
            <span className="p-3">
              <FontAwesomeIcon className=" " icon={faXmark} />
            </span>
          </div>
        </div>
      </div>

      <div>
        <p className="pl-3 py-2">{props.title}</p>
        <img className="h-full w-full" src={props.img} alt="" />
      </div>

      <div className=" flex justify-between  h-14 first-letter: bg-white items-center">
        <div className="flex  pl-5 relative ">
          <span className="absolute left-[38px] border-white border-2 bg-fbColor h-6 w-6 rounded-full flex justify-center items-center">
            <FontAwesomeIcon className="text-white h-3 w-3" icon={faThumbsUp} />
          </span>

          <span className=" z-30 border-white border-2 bg-red-600 rounded-full h-6 w-6 flex items-center justify-center">
            <FontAwesomeIcon
              className=" h-3 w-3 text-white "
              icon={faHeart}
            />
          </span>

          <span className="ml-5">
            <p>{youLike}</p>
          </span>
        </div>

        <div className="flex gap-1 pr-5">
          <p>76</p>
          <span>
            <FontAwesomeIcon className="pr-2" icon={faComment} />
          </span>
          <p>5</p>
          <span>
            <FontAwesomeIcon icon={faShare} />
          </span>
        </div>
      </div>
      <div className=" h-12">
        <hr />
        <div className="pt-1 flex justify-around">
          <div
            onClick={likeHandler}
            className="flex gap-1 rounded-md hover:bg-slate-100 px-10 py-2 hover:cursor-pointer"
          >
            <span>
              {!isLike ? (
                <FontAwesomeIcon
                  className="text-slate-600"
                  icon={faThumbsUps}
                />
              ) : (
                <FontAwesomeIcon className="text-fbColor" icon={faThumbsUp} />
              )}
            </span>
            <div className=" select-none">Like</div>
          </div>
          <div className="flex gap-1 rounded-md hover:bg-slate-100 px-10 py-2 hover:cursor-pointer">
            <span>
              <FontAwesomeIcon className="pr-2" icon={faComment} />
            </span>
            <div className=" select-none">Comment</div>
          </div>

          <div className="flex gap-1 rounded-md hover:bg-slate-100 px-10 py-2 hover:cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faShare} />
            </span>
            <div className=" select-none">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
