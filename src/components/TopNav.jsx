import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

////////for modal
import { useState } from 'react';
import Modal from './Modal';  
import ModalNotif from './ModalNotif';

const TopNav = () => {
  const [openMessenger, setOpenMessenger] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)

  const messengerHandler = () => {
    setOpenMessenger(prev => !prev)
    setOpenNotif(false)
  }

  const notifHandler = () => {
    setOpenNotif(prev => !prev)
    setOpenMessenger(false)
  }
  const closeModal = () => {
    setOpenMessenger(false)
    setOpenNotif(false)
  }

  



    return (
      <div>
        <div className="fixed top-0 left-0 w-full bg-slate-50 shadow-md z-50 ">
          {/* Your existing navigation bar */}
          <div className="flex justify-between items-center h-16">
            <h1 className='text-fbColor font-bold text-3xl pl-5 '>facebook</h1>
            <div className='relative md:h-12 h-10 w-10 md:w-2/5 rounded-full md:ml-10 ml-5 mr-auto xl:ml-64  bg-slate-200'>
              <FontAwesomeIcon className="absolute top-3 left-3 md:top-4 md:left-5 h-4 text-slate-500" icon={faSearch} />
              <input className="invisible md:visible w-full h-full rounded-full pl-12 bg-slate-200 focus:outline-none" type="text" placeholder="Search Facebook"/>
            </div>
            <div className='flex gap-2 mr-7'>   
              <div onClick={messengerHandler} className='h-12 w-12 rounded-full bg-slate-200 flex justify-center items-center hover: cursor-pointer hover:bg-slate-300'><FontAwesomeIcon className={openMessenger ? "h-5 text-fbColor": "h-5" }  icon={faFacebookMessenger} /></div>
              <div onClick={notifHandler} className='h-12 w-12 rounded-full bg-slate-200 flex justify-center items-center hover: cursor-pointer hover:bg-slate-300'><FontAwesomeIcon className={openNotif ? "h-5 text-fbColor": "h-5"} icon={faBell} /></div>
              <div onClick={closeModal} className='h-12 w-12 rounded-full bg-slate-200 flex justify-center items-center hover: cursor-pointer hover:bg-slate-300'><FontAwesomeIcon className="h-5 " icon={faUser} /></div>
            </div>
          </div>
        </div>
        <div>
          
          {openMessenger && <Modal></Modal>}
          {openNotif && <ModalNotif></ModalNotif>}
        </div>

        

      </div>
      
      
    )
}

export default TopNav