import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Inbox = (props) => {

    const active = props.active
    return (
        
        <div className=" mt-2 h-20 w-11/12 mx-auto flex items-center hover:bg-slate-200 hover:cursor-pointer rounded-md p-2">
            <span className='relative'>  
            {active && <span className='absolute top-9 left-9'>
                    <FontAwesomeIcon className=' text-green-600 text-sm border-2 border-white rounded-full ' icon={faCircle} />
                </span> }
                
                <img className='h-14 w-14 rounded-full mr-3 border-1 border-slate-400' src={props.img} alt="" />
            </span>
            <div className='my-auto'>
                <h1>{props.name}</h1>
                <p className='text-slate-500 text-sm'>{props.name1}</p>
            </div>
        </div>
    )
}
export default Inbox