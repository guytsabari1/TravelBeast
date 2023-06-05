import MainPic from "../../images/MainPic.webp";
import '../Home/Home.css'
import { Context } from '../../context/context';
import { React, useContext } from "react";



function Home() {
    const {topNavName} = useContext(Context);

    return (

        <div id="container">

            <div id="pic-title">

                <img id="main-pic" src={MainPic} alt="Subject pic" />
                <div id="titles">

                    <h1 id="main-title">{`Hello ${topNavName},`}</h1>
                    <h1 id="welcome-line">Welcome To TravelBeast!</h1>
                    <h1 id="main-subtitle">
                        Introducing TravelBeast,
                        your personal hiking guide.
                        Our platform uses advanced algorithms
                        and a vast trail database to find your

                        perfect hike.
                        Simply input your hike
                        preferences and TravelBeast will do the rest for you.

                        <br></br><br></br>So, What are you waiting for? Lace up your boots and let TravelBeast guide
                        you to your next great outdoor experience.</h1>



                </div>

            </div>

        </div>







    )

}

export default Home