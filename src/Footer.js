import React from 'react'
import './Footer.css'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function Footer() {
    return (
        <>
            <footer>
                <div className="footer__container">
                    <div className="footer__box">
                        <RoomOutlinedIcon className="footer__icon" />
                        <div className="footer__text">
                            <p>Niezłe Ziółko</p>
                            <p>ul. Zielna 1</p>
                            <p>30-221 Warszawa</p>
                        </div>
                    </div>
                    <div className="footer__box">
                        <PhoneOutlinedIcon className="footer__icon" />
                        <div className="footer__text">
                            <p>XXX XXX XXX</p>
                        </div>
                    </div>
                    <div className="footer__box">
                        <EmailOutlinedIcon className="footer__icon" />
                        <div className="footer__text">
                            <p>kontakt@niezleziolko.pl</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer__bottom">Copyright © NiezłeZiółko</div>
        </>
    )
}

export default Footer
