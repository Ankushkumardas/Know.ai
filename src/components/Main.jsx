import React, { useContext } from 'react'
import { CgProfile } from "react-icons/cg";
import { BsCompass } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdImageSearch } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { LuSendHorizontal } from "react-icons/lu";
import { Context } from '../context/Context';
import { IoCodeSlash } from "react-icons/io5";
import styled from 'styled-components';

function Main() {
  const StyledWrapper = styled.div`
  .three-body {
   --uib-size: 35px;
   --uib-speed: 0.8s;
   --uib-color: #5D3FD3;
   position: relative;
   display: inline-block;
   height: var(--uib-size);
   width: var(--uib-size);
   animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
  }

  .three-body__dot {
   position: absolute;
   height: 100%;
   width: 30%;
  }

  .three-body__dot:after {
   content: '';
   position: absolute;
   height: 0%;
   width: 100%;
   padding-bottom: 100%;
   background-color: var(--uib-color);
   border-radius: 50%;
  }

  .three-body__dot:nth-child(1) {
   bottom: 5%;
   left: 0;
   transform: rotate(60deg);
   transform-origin: 50% 85%;
  }

  .three-body__dot:nth-child(1)::after {
   bottom: 0;
   left: 0;
   animation: wobble1 var(--uib-speed) infinite ease-in-out;
   animation-delay: calc(var(--uib-speed) * -0.3);
  }

  .three-body__dot:nth-child(2) {
   bottom: 5%;
   right: 0;
   transform: rotate(-60deg);
   transform-origin: 50% 85%;
  }

  .three-body__dot:nth-child(2)::after {
   bottom: 0;
   left: 0;
   animation: wobble1 var(--uib-speed) infinite
      calc(var(--uib-speed) * -0.15) ease-in-out;
  }

  .three-body__dot:nth-child(3) {
   bottom: -5%;
   left: 0;
   transform: translateX(116.666%);
  }

  .three-body__dot:nth-child(3)::after {
   top: 0;
   left: 0;
   animation: wobble2 var(--uib-speed) infinite ease-in-out;
  }

  @keyframes spin78236 {
   0% {
    transform: rotate(0deg);
   }

   100% {
    transform: rotate(360deg);
   }
  }

  @keyframes wobble1 {
   0%,
    100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
   }

   50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
   }
  }

  @keyframes wobble2 {
   0%,
    100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
   }

   50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
   }
  }`;
  const { input, recentprompt, prevprompt, setprevprompt, handlesent, loading, resultdata, setinput, setrecentprompt, showresult } = useContext(Context);
  // console.log(input)
  return (
    <div className='w-full h-full '>
      <div className='flex items-center justify-between p-4'>
        <h1>Know.ai</h1>
        <CgProfile size={24} />
      </div>
      <div className=' MAIN-CONTAINER'>
        {!showresult ?
          <>
            <div className='object-contain mt-20 ml-40 text-4xl font-semibold text-transparent bg-contain bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'>
              <p>Hello, Dev.</p>
              <p>How can I help you today?</p>
            </div>

            <div className='flex justify-center gap-10 mx-20 mt-20 cards'>
              <div className='p-3 border rounded-md shadow-sm card max-w-[200px]'>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <BsCompass size={20} />
              </div>
              <div className='p-3 border rounded-md shadow-sm card max-w-[200px]'>
                <p>Suggest new ideas to see on an upcoming road trip</p>
                <FaRegLightbulb size={20} />
              </div>
              <div className='p-3 border rounded-md shadow-sm card max-w-[200px]'>
                <p>Suggest beautiful thoughts to see on an upcoming road trip</p>
                <FaRegCommentAlt size={20} />
              </div>
              <div className='p-3 border rounded-md shadow-sm card max-w-[200px]'>
                <p>Suggest new analytics to see on an upcoming road trip</p>
                <FaCode size={20} />
              </div>
            </div>
          </>
          :
          <div className='px-20 mt-10 space-y-4 '>
            <div className='flex items-center gap-2 title'>
              <CgProfile size={24} />
              <p className='font-semibold '>{recentprompt} ?</p>
            </div>
            
            <div className='flex items-center gap-3 data '>
              <IoCodeSlash />
              {loading ?
                <>
                  <StyledWrapper>
                    <div className="three-body">
                      <div className="three-body__dot" />
                      <div className="three-body__dot" />
                      <div className="three-body__dot" />
                    </div>
                  </StyledWrapper>
                </>
                :
                <div className=' mb-[20%]'>
                <p dangerouslySetInnerHTML={{ __html: resultdata }} className='leading-relaxed '></p>
                </div>
              }

            </div>
          </div>
        }



        <div className='absolute w-[80%] mx-20 bottom-10'>
          <div className='flex items-center justify-between p-2 rounded-3xl bg-slate-200'>
            <div>
              <input type="text" placeholder='Enter What you want to search' className='px-2 py-1 bg-slate-200 min-w-[1000px] rounded-md ml-5 outline-none' onChange={e => setinput(e.target.value)} value={input} />
            </div>
            <div className='flex gap-2'>
              <MdImageSearch size={20} />
              <FaMicrophone size={20} />
              <LuSendHorizontal size={20} onClick={() => handlesent()} className='cursor-pointer ' />
            </div>
          </div>
          <div className='text-center'>
            <p className='mx-20 mt-4 rounded-md bg-slate-100'>Ai will display your result with responce could be a little inaccurate so double check the responce before using it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
