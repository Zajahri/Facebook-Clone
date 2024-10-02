import TopNav from "./components/TopNav";
import LeftNav from "./components/LeftNav";
import MainContent from "./components/MainContent";
import RightNav from "./components/RightNav";

const mainPage = () => {
  return (
    <div className="bg-slate-100">
      <TopNav />
      <div className=" flex">
        <div className=" w-16 xl:w-1/3 ">
          <LeftNav />
        </div>
        <div className=" w-10/12">
          <MainContent />
        </div>
        <div className="invisible md:visible w-1/3 ">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default mainPage;
