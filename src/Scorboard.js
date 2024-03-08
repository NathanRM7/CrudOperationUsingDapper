import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import '../src/Scoreboard.css'

const Scorboard = () => {
    let data = ["Ruturaj Gaikwad", "Devon Conway", "Darly Mitchel", "MS Dhoni", "Ravindra jadeja", "Shardul Thakura", "Deepak chahar", "Ravindra jadejaa", "Ravindra rachin", "M choudry", "pathirana"];
    let [batsmanlist, setbastmanList] = useState(["Ruturaj Gaikwad", "Devon Conway", "Darly Mitchel", "MS Dhoni", "Ravindra jadeja", "Shardul Thakura", "Deepak chahar", "Ravindra jadejaa", "Ravindra rachin", "M choudry", "pathirana"])
    let YetTobatdata = ["Darly Mitchel", "MS Dhoni", "Ravindra jadeja", "Shardul Thakura", "Deepak chahar", "Ravindra jadejaa", "Ravindra rachin", "M choudry", "pathirana"];
    const[bruns,sbruns]=useState(0)
    const[bwickets,sbwickets]=useState(0)
    
    let bowlersobject=[{name:"",runs:"",Wickets:""}];
    // let rolelist = [" right hand batsman", "left Hand batsman", "Right hand batsman ", "All Rounder Spin/left Batter", "Wk/ right hand Batsman", "All rounder Seamer ", "Bowler Seamer", "Wk/ right hand Batsman", "All rounder Seamer ", "Bowler Seamer"];
    let [bowlerlist, setbowlerlist] = useState(["Bumrah", "Hardik", "H.shokken", "Tilak Varma", "p.chawla"]);
    const [overs, setovers] = useState(0);
    const [oversballs, setoversballs] = useState(0);
    const [score, setscore] = useState(0);
    const [batsman, setbatsman] = useState([])
    const [wickets, setwickets] = useState(0);
    const [visible, setvisible] = useState(false);
    const [visible1, setvisible1] = useState(false);
    const [visible2, setvisible2] = useState(false);
    const [nbatsman, nsetbatsman] = useState([])
    const [ball, setball] = useState(0);
    const [nball, nsetball] = useState(0);
    const [sbatsmanscore, ssetbatsmanscore] = useState(0);
    const [nbatsmanscore, nsetbatsmanscore] = useState(0);
    const [bowlername, setbowlername] = useState("");
    const [batsmanname, setbatsmanname] = useState("");
    const [striker, setstriker] = useState(false);
    const [nonstriker, setnonstriker] = useState(false);
    let [scorearray, setscorearray] = useState([{ bastmanname: "", runs: "", sixer: "", fours: "", strate: "" }]);
    let [fours, setfours] = useState(0);
    let [sixers, setsixera] = useState(0);
    let [wide, setwide] = useState(0);
    let [noball, setnoball] = useState(0);
    console.log(sixers);
    console.log(fours);

    const bowlerdata = (num) => {
        setvisible(true);
        setbowlername(bowlerlist[num]);

    }
    const batsmandata = (num) => {

        if (batsmanlist == batsmanlist[num]) {
            return;
        }
        setvisible1(true);
        setbatsmanname(batsmanlist[num]);
        return;

    }
    const Extrasscore = (num, score, valid) => {
        setscore(num + score);
        if (valid == 2) {
            setwide(wide + 1);
        }
        if (valid == 3) {
            setnoball(noball + 1);
        }

    }




    const strikerscore = (num, score, oversballs, numm, s, balls) => {
        if (num % 2 == 0) {
            setstriker(true);
        }
        else {
            setstriker(false);
            setnonstriker(true);
        }

        console.log(wickets == 10);

        // Stop the function to reach the Wicket equal to 10
        if (wickets == 10) {
            setvisible(false);
            return
        }
        //stop the Yet to bat and batsman List Untill the last two batsman
        balls = balls + numm;
        setball(balls);
        //logic for the score board for striker batsman
        if (num != 10) {
            s = s + num;

            ssetbatsmanscore(s)
            // counting the ball faced by  strinker

            //counting the over all balls 
            oversballs = oversballs + numm;
            setoversballs(oversballs);
            console.log(oversballs)
            //counting the score

            score = score + num;
            setscore(score);
            // if over ball > 6 then iincrese the over
            if (oversballs == 6) {

                setoversballs(0);
                setovers(overs + 1);
            }

        }
        if (num % 2 != 0 && oversballs == 6) {
            setstriker(true);
            setnonstriker(false);

        }
        else if (num % 2 == 0 && oversballs == 6) {
            setstriker(false);
            setnonstriker(true);
        }
        if (num == 4) {
            setfours(fours + 1);


        }
        if (num == 6) {
            setsixera(sixers + 1);
        }

        if (num == 7) {
            setscore(0);
            setoversballs(0);
            setovers(0);
            ssetbatsmanscore(0);
            setball(0);
            setwickets(0);
            setbastmanList(data);


        }

        if (num == 10) {
            var scoreboardscore = sbatsmanscore + " (" + balls + ")";

            setscorearray([...scorearray, { bastmanname: batsmanlist[0], runs: scoreboardscore, sixer: sixers, fours: fours, strate: Math.floor((sbatsmanscore / (ball + 1)) * 100) }])
            console.log(scorearray);
            setsixera(0);
            setfours(0);
            setoversballs(oversballs + numm);
            setball(0);
            if (oversballs <= 6) {


                setoversballs(0);

                setovers(overs + 1);
            }

            batsmanlist.shift();
            ssetbatsmanscore(0);
            setwickets(wickets + 1);


        }


    }
    const nonstrikerscore = (num, score, oversballs, numm, s, balls) => {
        console.log(wickets == 10);
        if (num % 2 == 0) {
            setnonstriker(true);
        }
        else {
            setnonstriker(false);
            setstriker(true);
        }
        if (wickets == 10) {
            setvisible(false);
            return
        }
        balls = nball + numm;
        nsetball(balls);


        if (num != 10) {
            s = s + num;

            nsetbatsmanscore(s)

            oversballs = oversballs + numm;
            setoversballs(oversballs);

            score = score + num;
            setscore(score);
            if (oversballs == 6) {

                setoversballs(0);
                setovers(overs + 1);
            }

        }
        if (num % 2 != 0 && oversballs == 6) {
            setstriker(false);
            setnonstriker(true);

        }
        else if (num % 2 == 0 && oversballs == 6) {
            setstriker(true);
            setnonstriker(false);
        }
        if (num == 7) {
            setscore(0);
            setoversballs(0);
            setovers(0);
            nsetbatsmanscore(0);
            nsetball(0);
            setwickets(0);
            setbastmanList(data);

        }


        if (num == 10) {
            var nscoreboardscore = nbatsmanscore + " (" + nball + ")";
            setscorearray([...scorearray, { bastmanname: batsmanlist[0], runs: nscoreboardscore, sixer: sixers, fours: fours, strate: Math.floor((nbatsmanscore / (nball + 1)) * 100) }])
            console.log(batsmanlist[1] + " " + nbatsmanscore + " (" + balls + ")");

            setsixera(0);
            setfours(0);
            nsetball(0)
           
            batsmanlist.shift();
             batsmanlist[1] = batsmanlist[0];

            nsetbatsmanscore(0);

            setwickets(wickets + 1);
            setoversballs(oversballs + numm);
            if (oversballs <= 6) {
                setoversballs(0);
                setovers(overs + 1);
            }




        }


    }


    return (
        <>
            <div className="header">
                <div className="scoreboard">
                    <h3 className="score">CSK:{score}/{wickets}</h3>
                    <h3 className='over'>Overs:{overs}:{oversballs} </h3>
                </div>
                <div className='batsmanscorebord'>
                    <h3>{visible1 ? batsmanname : batsmanlist[0]}: {sbatsmanscore + "  ("} {ball + ")"} </h3>
                    <h3>{batsmanlist[1]}:{nbatsmanscore + "  ("}  {nball + ")"}</h3>
                </div>
                <div className="image">
                    <img src={require('../src/Assets/csk.webp')}></img>
                </div>
            </div>
            <div className="description" style={{ display: 'flex' }}>
                <h3 style={{ width: '750px' }}> Csk Scorecard</h3>
                <h3>Batsman Scoreboard</h3>
            </div>
            <div className="Parent">
                <div className="main">

                    <div className="sidebar">
                        <h2>Batsman</h2>

                        {
                            data.map((value, index,) => (
                                <div className='name' key={value} >

                                    {value}

                                </div>
                            ))
                        }
                    </div>
                    <div className='role'>
                        <h2>Runs</h2>
                        <div className="sidebar">
                            {
                                scorearray.map((value,index) => (
                                    <div className='name' key={index} >

                                        {value.runs}
                                    </div>


                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='sidebar'>
                            <h2>4s</h2>
                            {
                                scorearray.map((value) => (
                                    <div className='name' key={value.bastmanname} >

                                        {value.fours}
                                    </div>


                                ))
                            }

                        </div>
                    </div>
                    <div>
                        <div className='sidebar'>
                            <h2>6s</h2>
                            {
                                scorearray.map((value) => (
                                    <div className='name' key={value.bastmanname} >

                                        {value.sixer}
                                    </div>


                                ))
                            }

                        </div>
                    </div>

                    <div>
                        <div className='sidebar2'>
                            <h2>St Rate</h2>
                            {
                                scorearray.map((value) => (
                                    <div className='name1' key={value.bastmanname}  >

                                        {(value.strate)}
                                    </div>


                                ))
                            }

                        </div>
                    </div>



                </div>

                <div className="strike">
                    <div className="striker">

                        <h3>{visible1 ? batsmanname : batsmanlist[0]}: {sbatsmanscore + "  ("} {ball + ")"} </h3>
                        <p style={{ visibility: (striker) ? 'visible' : 'hidden' }}></p>
                        <button onClick={() => strikerscore(0, score, oversballs, 1, sbatsmanscore, ball)}  >0</button>
                        <button onClick={() => strikerscore(1, score, oversballs, 1, sbatsmanscore, ball)}  >1</button>
                        <button onClick={() => strikerscore(2, score, oversballs, 1, sbatsmanscore, ball)}>2</button>
                        <button onClick={() => strikerscore(3, score, oversballs, 1, sbatsmanscore, ball)} >3</button>
                        <button onClick={() => strikerscore(4, score, oversballs, 1, sbatsmanscore, ball)} >4</button>
                        <button onClick={() => strikerscore(6, score, oversballs, 1, sbatsmanscore, ball)} >6</button>
                        <button onClick={() => strikerscore(10, score, oversballs, 1, sbatsmanscore, ball)} >Wicket</button>
                        <button onClick={() => strikerscore(7, score, oversballs, 1, sbatsmanscore, ball)}>reset</button>


                    </div>
                    <div className="nonstriker">
                        <p style={{ visibility: nonstriker ? 'visible' : 'hidden' }}></p>
                        <h3>{batsmanlist[1]}:{nbatsmanscore + "  ("}  {nball + ")"}   </h3>
                        <button onClick={() => nonstrikerscore(0, score, oversballs, 1, nbatsmanscore, ball)} >0</button>
                        <button onClick={() => nonstrikerscore(1, score, oversballs, 1, nbatsmanscore, ball)} >1</button>
                        <button onClick={() => nonstrikerscore(2, score, oversballs, 1, nbatsmanscore, ball)}>2</button>
                        <button onClick={() => nonstrikerscore(3, score, oversballs, 1, nbatsmanscore, ball)}>3</button>
                        <button onClick={() => nonstrikerscore(4, score, oversballs, 1, nbatsmanscore, ball)} >4</button>
                        <button onClick={() => nonstrikerscore(6, score, oversballs, 1, nbatsmanscore, ball)}>6</button>
                        <button onClick={() => nonstrikerscore(10, score, oversballs, 1, nbatsmanscore, ball)}>Wicket</button>
                        <button onClick={() => nonstrikerscore(7, score, oversballs, 1, nbatsmanscore, ball)}>reset</button>
                    </div>
                    <div className="extras">
                        <h3>Extras</h3>
                        <button onClick={() => Extrasscore(1, score, 2)}>Wd</button>
                        <button onClick={() => Extrasscore(1, score, 3)}>Nb</button>

                        <button onClick={() => Extrasscore(1, score)}>Byes</button>

                    </div>
                    <div className='yet'>Yet to bat
                        <div className='bat'>{batsmanlist + "  ,"} </div>
                    </div>
                </div>


            </div>
            <article style={{ display: 'flex', justifyContent: 'space-between', width: '100%', textAlign: 'center', backgroundColor: 'navy', color: 'white', height: '30px', paddingRight: '20px' }}>
                <div className='div1'>Score:{score}/{wickets}</div>
                <div className='div'>Extras:{noball}nb ,{wide} wd </div>
            </article>

            <div className="parent2">
                <div className="main2">
                    <div className="sidebar">
                        <h2>Bowlers</h2>
                        {
                            bowlerlist.map((value, index,) => (
                                <div className='name' key={value} onClick={() => bowlerdata(index)}>

                                    {index + 1}  {value}

                                </div>


                            ))
                        }
                    </div>
                    <div className="sidebar">
                        <h2>Overs</h2>
                        {
                            bowlerlist.map((value, index,) => (
                                <div className='name' key={value} onClick={() => bowlerdata(index)}>

                                    0

                                </div>


                            ))
                        }
                    </div>
                    <div className="sidebar">
                        <h2>Runs</h2>
                        {
                            bowlerlist.map((value, index,) => (
                                <div className='name' key={value} onClick={() => bowlerdata(index)}>

                                    0

                                </div>


                            ))
                        }
                    </div>
                    <div className="sidebar">
                        <h2>Wickets</h2>
                        {
                            bowlerlist.map((value, index,) => (
                                <div className='name' key={value} onClick={() => bowlerdata(index)}>

                                    0

                                </div>


                            ))
                        }
                    </div>
                    <div className="sidebar">
                        <h2>Economy</h2>
                        {
                            bowlerlist.map((value, index,) => (
                                <div className='name' key={value} onClick={() => bowlerdata(index)}>

                                    0
                                </div>


                            ))
                        }
                    </div>



                </div>
                <div className="strikebowler">
                    <div className="bowler">
                        <h3> {visible ? bowlername : bowlerlist[0]}</h3>
                        <button  >0</button>
                        <button  >1</button>
                        <button >2</button>
                        <button >3</button>
                        <button >4</button>
                        <button >6</button>
                        <button >Wicket</button>
                        <button>reset</button>
                    </div>
                    
                </div>

            </div>
            <div>


            </div>



        </>





    )
}

export default Scorboard