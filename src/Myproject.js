import React, { useEffect } from 'react'
import { useState } from "react";
import './App.css';
export const Myproject = () => {
 let batters=["Ruturaj Gaikwad","Deven Convey","Shivam Dube","Daryl mitchel","Ms dhoni","Ravindra Jadeja","Deepak Chakar","Mukesh Choudry","Teekshana","Pathirana","Shardul Thakur","Sameer Rishvi"];
 
  const [overs,setovers]=useState(0);
  const [oversballs,setoversballs]=useState(0);
  const[score,setscore]=useState(0);
  const[batsman,setbatsman]=useState([]) 
  const[wickets,setwickets]=useState(0);
  const [visible,setvisible]=useState(true);
  const[sbatsmanscore,ssetbatsmanscore]=useState(0);
  const[nbatsmanscore,nsetbatsmanscore]=useState(0);
  useEffect(() => {
    setbatsman(batters)
  },[])
  
  
 
  const scoringfunction=(num,score,oversballs,numm,s,n)=>{
    console.log(wickets==10);
    if(wickets==10){
      setvisible(false);
      
    }
   if(num!=10){
    
// var b=false;



// if(num%2==0){
//    b=true;
// }
// var k=(b)?ssetbatsmanscore(s+num):nsetbatsmanscore(n+num);
    
     oversballs=oversballs+numm;
     setoversballs(oversballs);
     
     console.log(oversballs)
     score=score+num;
     setscore(score);
     
     if(oversballs==7){
      setoversballs(0);
      setovers(overs+1);
     }
  
    }
     if(num==7){
      setscore(0);
      setoversballs(0);
      setovers(0);
      ssetbatsmanscore(0);
      nsetbatsmanscore(0);
      setwickets(0);
      setbatsman(batters);
     }
   
     if(num==10){
       
      batsman.shift();
      ssetbatsmanscore(0);
      setwickets(wickets+1);

     }
       
      
     }
    
    
  
   

  return (
    <>
    <header>
    <div className='main'style={{visibility:(visible)?'visible':'hidden'}}>
    <img src={require('../src/Assets/CSK-v-MI.jpg')}></img>
    <h1 >overs: {overs}:{oversballs}</h1>
    <h1> Csk :{score} /  {wickets}</h1>
    </div>
    <div style={{visibility:(visible)?'hidden':'visible',display:'flex',justifyContent:'center',textAlign:'center'}}><h1>Your Team IS All out  Mi need {score} To win  </h1>
   
   
    </div>

    <div className='main2' style={{visibility:(visible)?'visible':'hidden'}}>
      <h1>Batter:{(batsman[0])}: {sbatsmanscore}  </h1>
      <h1>Batter:{(batsman[1])}:  {nbatsmanscore}</h1>
      
    </div>
    <div className='main5'>
    
    <button onClick={() =>scoringfunction(1,score,oversballs,1,sbatsmanscore,nbatsmanscore) } >1</button>
    <button onClick={() =>scoringfunction(2,score,oversballs,1,sbatsmanscore,nbatsmanscore)}>2</button>
    <button onClick={() =>scoringfunction(3,score,oversballs,1,sbatsmanscore,nbatsmanscore)}>3</button>
    </div>
    <div className='space'></div>
    <div >
    <button onClick={() =>scoringfunction(4,score,oversballs,1,sbatsmanscore,nbatsmanscore)}>4</button>
    <button onClick={() =>scoringfunction(6,score,oversballs,1,sbatsmanscore,nbatsmanscore)}>6</button>
    <button onClick={() =>scoringfunction(7,score,oversballs,1,0,0)}>reset</button>
    </div>
    <div className='space'></div>
    <div >
    <button onClick={() =>scoringfunction(1,score,oversballs,0,0,0)}>wd</button>
    <button onClick={() =>scoringfunction(1,score,oversballs,0,0,0)}>nb</button>
    <button onClick={() =>scoringfunction(10,score,oversballs,1,0,0)}>Wicket</button>
    </div>
    <div className='space'></div>
    <div >
    <button onClick={() =>scoringfunction(0,score,oversballs,1,0,0)}>Lb</button>
    <button onClick={() =>scoringfunction(0,score,oversballs,1,0,0)}>byes</button>
    <button onClick={() =>scoringfunction(0,score,oversballs,1,0,0)}>0</button>
    </div>
    </header>
    </>
  )
  }
