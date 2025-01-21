import React from 'react'
import styles from './Footer.module.css'
import logo from "../../../public/assets//logo_white.png"
import {MdLocationOn} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.footer_container}>
            <div className={styles.footer_about}>
                <h3>About us</h3>
                <p>Founded in 2018, The Green School International is situated amid the enchanting green hills on the outskirts of the lovely city of Guwahati. The school's design is carefully crafted to blend seamlessly with the beauty of Mother Nature, aligning with the goal of sustainability.</p>
            </div>
            <div className={styles.footer_links}>
                <h3>Quick Links</h3>
                <ul>
                <li> <Link to={'/'} className={styles.footer_navlink}>Home</Link></li>
                <li> <Link to={'/about'} className={styles.footer_navlink}>Our School</Link></li>
                <li> <Link to={'/threesformula'} className={styles.footer_navlink}>3S Formula</Link></li>
                <li><Link to={'/publicdisclosure'} className={styles.footer_navlink} >Public Disclosure</Link></li>
                <li><Link to={'/admission'} className={styles.footer_navlink}>Admissions</Link></li>
                <li><Link to={'/gallery'} className={styles.footer_navlink}>Gallery</Link></li>
                <li><Link to={'/blogs'} className={styles.footer_navlink}>Blogs</Link></li>
                <li><Link to={'/contact'} className={styles.footer_navlink}>Contact Us</Link></li>
                </ul>
            </div>
            <div className={styles.footer_contacts}>
                <h3>Contact</h3>
                <div className={styles.footer_contact}>
                    <div><MdLocationOn color='yellow' size={20} /></div>
                    <p>Mahapurush Madhabdev Path, Nalapara, Sarusajai, Guwahati-781040</p>
                </div>
                <div className={styles.footer_contact}>
                <div><AiFillPhone color='yellow'/></div>
                    <p>+91 9387130617 / +919856199105</p>
                </div>
                <div className={styles.footer_contact}>
                <div><BsFillEnvelopeFill color='yellow'/></div>
                    <p>thegreenschoolinternational@gmail.com</p>
                </div>
                {/* <div className={styles.social_links}>
                    <a href="https://www.facebook.com/greenschoolinternational/" target='_blank'><FaFacebookF color='yellow' size={20}/></a>
                    <a href="https://www.instagram.com/the_green_school_international?igsh=azAxbHdiMXQ3eTU=" target='_blank'><FaInstagram color='yellow' size={20}/></a>
                    <a href="https://www.youtube.com/@thegreenschoolinternational" target='_blank'><FaYoutube color='yellow' size={20}/></a>
                </div> */}
            </div>
        </div>
    </div>
    <div className={styles.copyright}>
        <p className={styles.copyright_text}>Copyright© 2024 | All Rights Reserved. Designed & Developed by <a href="https://ekodus.com/" target='_blank'>Ekodus Technologies</a>.</p>
    </div>
    </>
  )
}

export default Footer