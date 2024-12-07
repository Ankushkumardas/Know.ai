import React, { useContext, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Context } from '../context/Context';

function Sidebar() {
    const [extend, setextend] = useState(true)
    const {handlesent,prevprompt,setrecentprompt,newchat}=useContext(Context)
    
    const handleextend = () => {
        setextend(!extend)
    }
    const loadprompt=async(prompt)=>{
        setrecentprompt(prompt)
        await handlesent(prompt)
    }
    return (
        <div className='flex flex-col justify-between h-full mr-4'>
            <div className='space-y-6 top'>
                <div className='px-2 '>
                    <IoMenu size={28} onClick={handleextend} />
                </div>
                <div className='flex items-center justify-between px-2 py-1 mx-1 rounded-md new-chat'>
                    {extend ? <p>New Chat</p> : null}
                    <div className='p-1 border rounded-full'>
                        <IoMdAdd color='green' size={22} onClick={()=>newchat()}/>
                    </div>
                </div>
                <div className=' recent'>
                    <div className='flex items-center px-2'>
                        <div className='p-1.5 border rounded-full'>
                            <FiMessageSquare size={20} className='' />
                        </div>
                        {extend ? <p className='px-2 mb-2'>Recent</p> : null}
                    </div>

                    {extend ? <div className='mt-3 space-y-1' >
                    {prevprompt.map((item,i)=>{
                        return (
                            <div className='flex items-center justify-between px-2 py-1 mx-1  rounded-md  recent-msg hover:shadow-md w-[150px] border mr-4 ' onClick={()=>loadprompt(item)}>
                            <p>{item.slice(0,12)}..</p>
                            <FiMessageSquare />
                            </div>
                        )
                    })}
                        
                    </div> : null}

                </div>
            </div>

            <div className='mb-2 space-y-2 bottom'>
                <div className='flex items-center gap-4 px-4 py-1 mx-2 border rounded-md botton-item'>
                    <FaRegQuestionCircle />
                    {extend ? <p>Help</p> : null}
                </div>
                <div className='flex items-center gap-4 px-4 py-1 mx-2 border rounded-md botton-item'>
                    <FaHistory />
                    {extend ? <p>Help</p> : null}
                </div>
                <div className='flex items-center gap-4 px-4 py-1 mx-2 border rounded-md botton-item'>
                    <IoSettingsOutline />
                    {extend ? <p>Help</p> : null}
                </div>
            </div>

        </div>
    )
}

export default Sidebar
