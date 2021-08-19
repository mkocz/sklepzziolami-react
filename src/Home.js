import React from 'react'
import { Link } from "react-router-dom";
import Slider from './Slider';
import './Home.css'
import EcoIcon from '@material-ui/icons/Eco';

function Home() {
    return (
        <div className="home">
            <div className="home__baner">
                <img src="images/biebrza.jpg" alt="" />
                <h1 className="title">
                    <div>Najlepsze zioła</div>
                    <div>prosto z natury</div>
                </h1>
            </div>
            <div className="home__info">
                <div className="home__infoContainer">
                    <h2>Odkryj nasze zioła</h2>
                    <EcoIcon className="ecoIcon" />
                    <div className="home__infoText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <Slider />
            <div className="home__bottom">
                <Link to="/shop" className="home__button">Przejdź do sklepu</Link>
            </div>
        </div>
    )
}

export default Home

