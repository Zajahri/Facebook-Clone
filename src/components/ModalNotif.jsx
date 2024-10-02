import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


const ModalNotif = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 mt-14 w-96 ml-auto shadow-lg   ">
                <div className="absolute inset-0 bg-white right-0 top-0 rounded-lg mr-5 h-auto  scrollbar-custom overflow-y-auto ">
                    <div className="flex justify-between items-center p-5">
                        <h1 className=" text-2xl font-bold">Notifications</h1>
                        <span className="text-slate-600">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </div>
                    
                </div>
            </div>
          
        </>
    )
    
}
export default ModalNotif