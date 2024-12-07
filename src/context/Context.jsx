import run from '../config/ai';
import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [input, setinput] = useState('');
    const [recentprompt, setrecentprompt] = useState([]);
    const [prevprompt, setprevprompt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState('');

    const delaydata=(index,nextword)=>{
        setTimeout(() => {
            setresultdata(prev=>prev+nextword);
        }, 75*index);
    }

    const newchat=()=>{
        setloading(false)
        setshowresult(false)
    }

    const handlesent = async (prompt) => {
        setresultdata("")//removes the previous data from the page
        setloading(true)
        setshowresult(true)
        let responce;
        if(prompt!==undefined){//for data on promot
            responce=await run(prompt)
            setrecentprompt(prompt)
        }
        else{//fro data to show when clikced on the sidebar field recent tab
            setprevprompt(prev=>[...prev,input])
            setrecentprompt(input)
            responce=await run(input)
        }
        let responcearray=responce.split('**')
        let newarray;
        for(let i=0;i<responcearray.length;i++){
            if(i===0||i%2!==1){
                newarray+=responcearray[i];
            }
            else{
                newarray+="<b>"+responcearray[i]+"</b>";
            }
        }
        let newarray2=newarray.split('*').join("</br>")
        // setresultdata(newarray2)
        let newresponcearray=newarray2.split(" ");
        for(let i=0;i<newresponcearray.length;i++){
            const nextword=newresponcearray[i];
            delaydata(i,nextword+" ")
        }
        setloading(false)
        setinput("")
    }

    const contextValue = {
        input, recentprompt, prevprompt, setprevprompt, handlesent, loading, resultdata, setinput, setrecentprompt, showresult,newchat
    };


    // handlesent("what is react js")
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;