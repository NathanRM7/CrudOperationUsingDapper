import React, { useEffect } from 'react'
import { useState } from "react";


export const Example = () => {
    const [bowlersdata, setbowlersdata] = useState([{ bowler: '', overs: 0, wickets: 0 }]);
    const bowlerlist = ["Anil kumle", "bumrah", "Ashwin", "Jadeja", "Shabaxz"]
    let setimages=["https://th.bing.com/th/id/OIP.eq7HKkwtoTZMXEXdXKocPgHaE5?pid=ImgDet&w=474&h=313&rs=1","https://th.bing.com/th/id/OIP.k5rIWF8kZMl12Z3EYMafIAHaE6?pid=ImgDet&w=474&h=314&rs=1","https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg","https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg","https://th.bing.com/th/id/OIP.tLWSBvejqoae9PnytxvXOQHaE8?w=2122&h=1415&rs=1&pid=ImgDetMain"];
    const [overs,setovers] = useState(0);
    const [wickets,setwickets] = useState(0);
    const [bowlername, setbowlername] = useState('');
    
    const[i,si]=useState('https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg');
    const findingdata = (num) => {

        setbowlername(bowlerlist[num])
        setovers(num+1);
        setwickets(wickets+1)

    }
    const imageslider=(num)=>{
        if(num==4){
            return
           }
        setovers(overs+1);
       si(setimages[num+1]);
       
    }
    const imagedownslider=(overs)=>{
        if(overs==1){
            return
           }
        setovers(overs-1);
        si(setimages[overs-2])
        
    }
    const objectreturn = () => {
        console.log(bowlername)
         bowlersdata.push({ bowler: bowlername, overs: overs, wickets: wickets})
        console.log(bowlersdata);
        return bowlersdata;
    }

    //console.log("bowlersdata", objectreturn());
    return (
        
        <div >
            <img src={i} style={{width:'100%',height:'500px'}}></img>
            <h1 >India</h1>
            <div style={{display:'flex',justifyContent:'space-around'}}>
             <button onClick={()=>imageslider(overs)}>UpNext{overs}</button>
            <button onClick={()=>imagedownslider(overs)}>back{setimages.length}</button>
               
            </div>
            
            
           </div>
    )
}
export default Example