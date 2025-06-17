import React, { useState } from "react";



function Layout() {
    const [result,setResult] = useState('');


    const calculate = ()=>{
        const ans =(result);
        console.log(ans);
        if(ans.includes('+')){
            const newans= ans.split('+');
            const firstnum= Number(newans[0]);
            const secondnum=Number(newans[1]);
            const finalAns = firstnum + secondnum;
            //  console.log(finalAns);
             setResult(finalAns);
        // console.log(typeof(secondnum),secondnum);
        }
        else if(ans.includes('-')){
            const newans= ans.split('-');
            const firstnum= Number(newans[0]);
            const secondnum=Number(newans[1]);
            const finalAns = firstnum - secondnum;
            //  console.log(finalAns);
             setResult(finalAns);
        }
        else if (ans.includes('*')){
             const newans= ans.split('*');
            const firstnum= Number(newans[0]);
            const secondnum=Number(newans[1]);
            const finalAns = firstnum * secondnum;
            //  console.log(finalAns);
             setResult(finalAns);
        }
        else if(ans.includes('/')){
            const newans= ans.split('/');
            const firstnum= Number(newans[0]);
            const secondnum=Number(newans[1]);
            const finalAns = firstnum / secondnum;
            console.log(finalAns);
            setResult(finalAns);

            //   if(secondnum !== 0){
            //     const finalAns = firstnum / secondnum;
            // //  console.log(finalAns);
            //  setResult(finalAns);
            //   }else{
            //    const finalAns="Cannot divide by zero";
            //    setResult(finalAns);
            //   }

        }
       
       
        
    }
  return (
    <>
      <div className="flex flex-col m-20 w-45 border-2 rounded-2xl">
        <div className="m-3 p-2 border-2 rounded-2xl">
             {result}
        </div>
        <button onClick={e=>setResult('')} className="m-1 p-1 pr-2 pl-2  bg-red-500 border-2 rounded-xl">clear</button>
        <div className="">
          <button value={1} onClick={e=>setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            1
          </button>
          <button value={2} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            2
          </button>
          <button value={3} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            3
          </button>
          <button value={'/'} onClick={e=>setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            /
          </button>
        </div>
        <div>
          <button value={4} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            4
          </button>
          <button value={5} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            5
          </button>
          <button value={6} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            6
          </button>
          <button value={'*'} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            *
          </button>
        </div>
        <div>
          <button value={7} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            7
          </button>
          <button value={8} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            8
          </button>
          <button value={9} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            9
          </button>
          <button value={'-'} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            -
          </button>
        </div>
        <div>
          <button value={'.'} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3.5 pl-3.5 bg-blue-300 border-2 rounded-xl">
            .
          </button>
          <button value={0} onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            0
          </button>

          <button value={'='} onClick={calculate} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            =
          </button>
          <button value={'+'}  onClick={e=> setResult(result + e.target.value)} className="m-1 p-1.5 pr-2.5 pl-2.5 bg-yellow-400 border-2 rounded-xl">
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
