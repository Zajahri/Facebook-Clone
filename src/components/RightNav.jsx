import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RightNavInbox from "./RightNavInbox";

const RightNav = () => {
  return (
    <div className="scrollbar-custom overflow-y-auto h-screen">
      <div className="flex mt-20 justify-between px-5">
        <div className="  font-semibold text-lg text-slate-600">
          Your Pages and profiles
        </div>
        <span className=" text-slate-500">
          <FontAwesomeIcon icon={faEllipsis} />
        </span>
      </div>
      <div className="flex ml-5 mt-5 gap-2">
        <FontAwesomeIcon
          className=" p-1 border-blue-700 bg-slate-200 border-2 rounded-full "
          icon={faUser}
        />
        <p className=" font-semibold">Zaj Sol</p>
      </div>
      <div className="flex ml-8 mt-5 gap-2 items-center">
        <FontAwesomeIcon icon={faBullhorn} className=" text-slate-600" />
        <p className=" text-sm text-slate-600 font-semibold">
          Create promotion
        </p>
      </div>
      <hr className="   border-slate-400 my-5 mx-4" />
      <div className="ml-5">
        <p>Birthdays</p>
        <div className="flex mt-3">
          <span className="mr-2 text-2xl">
            <FontAwesomeIcon icon={faGift} />
          </span>
          <p className="text-slate-900">
            <span className=" font-semibold ">John Doe </span> and{" "}
            <span className=" font-semibold">2 others</span> have <br />
            birthdays today.
          </p>
        </div>
      </div>
      <hr className="   border-slate-400 my-4 mx-4" />
      <div className="flex justify-between mx-4 ">
        <p className="text-slate-600 font-semibold">Contacts</p>
        <div>
          <span className="mr-5 text-slate-600">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <span className=" text-slate-500">
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
        </div>
      </div>

      <div className="ml-1 mt-2 mr-4">
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.j-PrMMkE2G7vS1y71Lw_LAHaNK%26pid%3DApi&f=1&ipt=abf0e14956410cde248c3c7dd5b2911965cc0906ef92f7097edac27b377d7eb4&ipo=images" name="Boa Hancock" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q33o3a_GQ0rjQDnVhEUnYQHaE8%26pid%3DApi&f=1&ipt=b4ec5cfa6f5b90c4340bb78588c4361d6f3057a49c9f7f04a1212a801068d62f&ipo=images" name="Lebron James" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uxeSyzVrsWkMySSEi4ILcgHaEK%26pid%3DApi&f=1&ipt=5203b4021b5817dcf83a3ad9ba9c42e7dfd48e0d669512984adc4d4477f411b7&ipo=images" name="Monkey D. Luffy" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r9swth8N5-clNxLc7_PhfQHaD5%26pid%3DApi&f=1&ipt=209ad9725f5245cc403e947474d657b8713a9fc5d856100237ec959d76340cfa&ipo=images" name="John Cena" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rWt0Gt5TaA45SlSz4NISkwHaFp%26pid%3DApi&f=1&ipt=e4a060ff7f6a1894e496c329b2fa05598e7e43cea50eaad0ea38f7af28b62ab7&ipo=images" name="Magnus Carlsen" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wWHOWVWNoqfMlPDth7vjkwHaF2%26pid%3DApi&f=1&ipt=35ed22b50619ca368200f11079e7a05381dbd47052c9a3d76a327b395f4c323c&ipo=images" name="Roronoa Zoro" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._9Dexziung2txVZCTPHkgwHaE8%26pid%3DApi&f=1&ipt=353a52722be5fd87066b26752f6de5be08a66d45d616e6552feae543e5685f45&ipo=images" name="Bill Gates" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.X9ac_YU704J0UIQ5bR1mRQHaE7%26pid%3DApi&f=1&ipt=6cff0a322181b39316400e6bc8acbdca75465603a12f808c7b974b4aadb4349d&ipo=images" name="Stephen Curry" />
        < RightNavInbox active="true" img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1848465.jpg&f=1&nofb=1&ipt=4064b1ec4df0e8ac71c3ea196462cebffeab8b6223d7488bffa3c8a1a1d90c5e&ipo=images" name="Hanamichi Sakuragi" />

          

      </div>
    </div>
  );
};
export default RightNav;
