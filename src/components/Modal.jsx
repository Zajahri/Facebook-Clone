 import React, { useState } from "react";
import Inbox from "./Inbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


import Luffy from '../images/luffy.jpg'
import Genshin from '../images/genshin.png'
import Pic1 from '../images/pic1.jpg'
import Pic3 from '../images/pic3.jpg'

const Modal = () => {

  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  }
  return (
        <>
            <div className="fixed inset-0 z-50 mt-14 w-96 ml-auto shadow-lg ">
                <div className="absolute inset-0 bg-white right-0 top-0 rounded-lg mr-5 h-auto  scrollbar-custom overflow-y-auto ">
                    <div className="flex justify-between items-center p-5">
                        <h1 className=" text-2xl font-bold">Chats</h1>
                        <div className="flex gap-6">
                            <span className="text-slate-600">
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                            <span className="text-slate-600">
                                <FontAwesomeIcon icon={faExpand} />
                            </span>
                            <span className="text-slate-600">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </span>
                        </div>  
                    </div>
                    <div className="relative w-11/12 h-9 mx-auto rounded-full ">
                        <span><FontAwesomeIcon className=" absolute top-3 left-3 text-slate-500" icon={faSearch} /></span>
                        <input className=" w-full h-full ml-auto  bg-slate-100 rounded-full pl-8 focus:outline-none" placeholder="Search Messenger" />
                    </div>

                    <div className="flex pl-3 pt-3">
                        <p className={`p-2 hover:bg-slate-200 hover:rounded-full hover:cursor-pointer font-semibold ${selectedButton === 1 && 'bg-blue-100 hover:bg-blue-200 rounded-full text-fbColor'}`} onClick={() => handleButtonClick(1)}>Inbox</p>
                        <p className={`p-2 hover:bg-slate-200 hover:rounded-full hover:cursor-pointer font-semibold ml-2 ${selectedButton === 2 && 'bg-blue-100 hover:bg-blue-200 rounded-full text-fbColor'}`} onClick={() => handleButtonClick(2)}>Communities</p>
                    </div>

                { selectedButton === 1 &&
                    <div>
                        <Inbox name='Zajahri F. Solar' name1='Zajahri called you 10m' img={Pic1} active={true}/>
                        <Inbox name='Patdok N. Ferrer' name1='Patdok sent a voice message 23m' img={Genshin}/>
                        <Inbox name='Shandra' name1='Shandra sent 3 photos. 1d' img={Pic3} active={true}/>
                    </div>
                }

                {
                    selectedButton === 2 && 
                    <div>
                        <Inbox name='General Chat' img='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2016%2F02%2FAutumn-river-sky-wooden-bridge-ultra-HD-3840x2160-wallpaper.jpg&f=1&nofb=1&ipt=ffd8e046050f19be0ac949b98e97c687d4e5e52256f6e84e53ab5aa4f276219a&ipo=images' />
                        <Inbox name='Web Developers' img='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.computercareers.org%2Fwp-content%2Fuploads%2Fbe-a-Programmer.jpg&f=1&nofb=1&ipt=07e3455f056bddf86ed846b0444af0195e8bcf827b0f82305fc66ae0ab1197db&ipo=images' />
                    </div>
                }
                    
                </div>
            </div>
          
        </>
    
       
        
 
  );
};

export default Modal;
