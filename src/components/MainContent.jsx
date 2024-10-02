import Story from "./stories";
import CreatePost from "./CreatePost";
import Post from "./Post";
import Luffy from "../images/luffy.jpg";
import Pic1 from "../images/pic1.jpg";
import Pic2 from "../images/pic2.png";
import Pic3 from "../images/pic3.jpg";
import ProfilePic from "../images/profilePic.jpg";
import genshin from "../images/Genshin.png";
import balmond from "../images/Balmond.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  return (
    <div className="relative only:pt-24 h-screen scrollbar-custom overflow-y-auto">
      <div className=" flex h-56 w-11/12 md:w-9/12 mx-auto gap-2">
        <span className=""><FontAwesomeIcon className="absolute top-48 right-8 md:right-20 xl:right-28 right- bg-white h-5 w-5 z-50 p-3 text-slate-500 rounded-full hover:cursor-pointer " icon={faChevronRight} /></span>
        <Story img={Luffy} text="Create story" />
        <Story img={Pic1} text="Zajahri Solar" isTrue="true" />
        <Story img={Pic2} text="Genshin Impact" isTrue="true" />
        <Story img={Pic3} text="John Doe" isTrue="true" />
      </div>
      <CreatePost />
      <Post img={ProfilePic} name="Zaj Sol" time="5" title="Just do it" reactions="657" />

      <Post img={balmond} name="Shandra" time="8" title="Na fall inlab si balmond kay zilong" reactions="234" />
       
      <Post img={Luffy} name="Kyle" time="3" title="Luffy gear 5!!!" reactions="12" />
      
    </div>
  );
};

export default MainContent;
