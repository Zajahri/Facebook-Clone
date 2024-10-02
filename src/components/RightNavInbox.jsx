import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const RightNavInbox = (props) => {

    const active = props.active
    return (
        <div className="flex items-center gap-2 hover:cursor-pointer hover:bg-slate-200 p-2 rounded-lg">
            <div className='relative'>
                {active? <FontAwesomeIcon className='absolute top-4 left-5 text-green-600 h-2 border-2 border-white rounded-full ' icon={faCircle} /> : null}
                
                <img className="rounded-full h-7 w-7  object-cover " src={props.img} alt="" />
            </div>
            <p className="font-semibold">{props.name}</p>
        </div>
    )
}
export default RightNavInbox