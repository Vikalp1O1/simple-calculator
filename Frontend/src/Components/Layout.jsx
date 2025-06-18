import React, { useState } from "react";



function Layout() {
    const [prev,setPrev] = useState('');
    const [operator,setOperator] = useState('');
    const [current,setCurrent] = useState('');
    const [res,setRes] = useState('');

    const handleNum = (e)=>{

      console.log("value",e.target.value)
      const value = e.target.value
      // console.log(current,"current value");
      const decimalInCurrent= current.includes('.');
      if(value==='.' && decimalInCurrent) return;
      setCurrent((previousValue)=> previousValue + e.target.value);
      
    };

    // console.log(current.includes('.') , "Currentvalue",typeof(current));
   
    

    const handleOperator = (e)=>{
      if(current==''){
        return;
      }
      if(current && operator && prev){
        handleCalculate();
      }
      else{
        setPrev(current);
        setCurrent('');
        // setRes('');
      }

      

      setOperator(e.target.value);      
    };
    console.log("operator",operator);
    
     
    console.log(prev,operator,current,"= expression");

    const handleCalculate = (e)=>{

      const n1= Number(prev);
      const n2 = Number(current);
      let ans;
      switch(operator){
        case '+':
         ans = n1 + n2;
          break;
        case '-':
        ans=  n1-n2;
          break;
        case '*':
         ans = n1*n2;
          break;
        case '/':
         ans = n1/n2;
          break;
        case '%':
          ans = n1*(n2/100);
          break;
        case '^':
          ans = n1**n2;
          break;
        case 'R':
          ans = Math.pow(n1,(1/n2));
          break;
        default : 
          return;
      }
      console.log(ans);
      setRes(ans);
      setCurrent(ans);
      setOperator('');
      setPrev('');
      

    };
    console.log(prev,"prev");
    console.log(res,"result");
    

    // const calculate = ()=>{
    //     const ans = (prev);
    //     console.log(typeof(ans),"ans type",ans);

    //     if(ans.includes('+')){
    //         const newans= ans.split('+');
    //         // console.log(typeof(newans));
    //         // console.log(Array.isArray(newans));
            
            
    //         const firstnum= Number(newans[0]);
    //         const secondnum=Number(newans[1]);
    //         const finalAns = firstnum + secondnum ;
    //          console.log(typeof(finalAns),"final ans type");
    //          setPrev(finalAns);
    //     // console.log(typeof(secondnum),secondnum);
    //     }
    //     else if(ans.includes('-')){
    //         const newans= ans.split('-');
    //         const firstnum= Number(newans[0]);
    //         const secondnum=Number(newans[1]);
    //         const finalAns = firstnum - secondnum;
    //         //  console.log(finalAns);
    //          setPrev(finalAns);
    //     }
    //     else if (ans.includes('*')){
    //          const newans= ans.split('*');
    //         const firstnum= Number(newans[0]);
    //         const secondnum=Number(newans[1]);
    //         const finalAns = firstnum * secondnum;
    //         //  console.log(finalAns);
    //          setPrev(finalAns);
    //     }
    //     else if(ans.includes('/')){
    //         const newans= ans.split('/');
    //         const firstnum= Number(newans[0]);
    //         const secondnum=Number(newans[1]);
    //         const finalAns = firstnum / secondnum;
    //         // console.log(finalAns);
    //         setPrev(finalAns);

    //         //   if(secondnum !== 0){
    //         //     const finalAns = firstnum / secondnum;
    //         // //  console.log(finalAns);
    //         //  setPrev(finalAns);
    //         //   }else{
    //         //    const finalAns="Cannot divide by zero";
    //         //    setPrev(finalAns);
    //         //   }

    //     }
       
      
        
    // }
  return (
    <div className="flex justify-center content-center">
      <div className="flex flex-col m-20 w-45 border-2 rounded-2xl">
        <input type="text" className="m-3 p-2 border-2 rounded-2xl bg-amber-50"  value={`${prev} ${operator} ${current}`} />
        {/* <div className="m-3 p-2 border-2 rounded-2xl" value={prev}>
          {prev}
        </div> */}
        <div className="">
        <button onClick={()=>{setPrev(''); setCurrent(''); setOperator(''); setRes('');}} className="m-1 p-1 pr-2.5 pl-2.5  bg-red-500 border-2 rounded-xl">C</button>
        <button value={'%'} onClick={handleOperator} className="m-1 p-1.5 pr-2.5 pl-2.5 bg-yellow-400 border-2 rounded-xl">
            %
          </button>
          <button value={'^'} onClick={handleOperator} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            ^
          </button>
           <button value={'R'} onClick={handleOperator} className="m-1 p-1.5 pr-2.5 pl-2.5 bg-yellow-400 border-2 rounded-xl">
            R
          </button>
        </div>
        <div className="">
          <button value={1} onClick={(e)=>handleNum(e)} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            1
          </button>
          <button value={2} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            2
          </button>
          <button value={3} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            3
          </button>
          <button value={'/'} onClick={handleOperator} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            /
          </button>
        </div>
        <div>
          <button value={4} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            4
          </button>
          <button value={5} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            5
          </button>
          <button value={6} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            6
          </button>
          <button value={'*'} onClick={handleOperator} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            *
          </button>
        </div>
        <div>
          <button value={7} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            7
          </button>
          <button value={8} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            8
          </button>
          <button value={9} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            9
          </button>
          <button value={'-'} onClick={handleOperator} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            -
          </button>
        </div>
        <div>
          <button value={'.'} onClick={handleNum} className="m-1 p-1.5 pr-3.5 pl-3.5 bg-blue-300 border-2 rounded-xl">
            .
          </button>
          <button value={0} onClick={handleNum} className="m-1 p-1.5 pr-3 pl-3 bg-blue-300 border-2 rounded-xl">
            0
          </button>

          <button value={'='} onClick={handleCalculate} className="m-1 p-1.5 pr-3 pl-3 bg-yellow-400 border-2 rounded-xl">
            =
          </button>
          <button value={'+'}  onClick={handleOperator} className="m-1 p-1.5 pr-2.5 pl-2.5 bg-yellow-400 border-2 rounded-xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
