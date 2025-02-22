import React,{useState, useRef} from 'react'
import styles from './Contact.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {MdLocationPin} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {


    const [contactData,setContactData] = useState({fname:'',contact:'',email:'',subject:'', message: ''});
    const form = useRef(null);
    const contactChangeHandler = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
            
          });
          setError(e.target.parentNode.id,'')
    }
    const contactSubmitHandler = (e) => {
        e.preventDefault()
        const contactSubmitBtn = document.getElementById('contactSubmitbtn');

        let flag = true;
        const fname =  document.forms['contactForm']['fname'].value;
        const contact =  document.forms['contactForm']['contact'].value;
        const email =  document.forms['contactForm']['email'].value;
        const subject =  document.forms['contactForm']['subject'].value;
        const message =  document.forms['contactForm']['message'].value;
        const regName = /^[a-zA-Z ]*$/;
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if(fname.length==0){
            setError('name','*Name cannot be empty')
            flag=false
      
          }
          if(fname.length <3 && fname.length!=0){
            setError('name','*Name too short');
            flag=false;
      
          }
          if(!regName.test(fname) && fname.length!=0){
            setError('name','*Please write a valid name');
            flag=false;
          }
          if(contact.length!=10){
            setError('contact', '*Phone Number must be 10 digits')
            flag=false
          }
          if(email.length == 0){
            setError('email','*Email id cannot be empty')
            flag=false
          }
          if(!regEmail.test(email) &&email.length!=0){
            setError('email','*Invalid Email')
            flag=false;
          }
          if(subject.length==0){
            setError('subject','*Subject cannot be empty')
          }
          if(message.length==0){
            setError('message','*Message cannot be empty')
          }

          if(flag==true){
            contactSubmitBtn.disabled = true;
            contactSubmitBtn.innerHTML='Please Wait..'
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/thegreenschoolinternational@gmail.com', {
                 name: contactData.fname,
                contact: contactData.contact,
                email: contactData.email ,
                subject: contactData.subject ,
                message: contactData.message 
            })
                .then(response =>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Form Submitted',
                        text: 'Someone will connect to you soon',
                      })
                      contactSubmitBtn.disabled = false
                    contactSubmitBtn.innerHTML='Submit'
                    form.current.reset();
                    }

                    )
                .catch(error => {Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong',
                  })
                  contactSubmitBtn.disabled = false
                contactSubmitBtn.innerHTML='Submit'
                form.current.reset();
                });


          }

    }

    const setError = (id,error) => {
        const element = document.getElementById(id);
        element.getElementsByClassName('contactFormErrorClass')[0].innerHTML = error;
      }
  return (
    <>
       
        <Header title='Contact Us'/>
        <div className={styles.contactus}>
            <div className={styles.contactus_info}>
                <div className={styles.contactus_info_item}>
                    <MdLocationPin size={40}/>
                    <p>
                    Mahapurush Madhabdev Path, Nalapara, Sarusajai, Guwahati-781040</p>
                </div>
                <div className={styles.contactus_info_item}>
                    <AiFillPhone size={40}/>
                    <p>+91 9387130617 / +919856199105</p>
                </div>
                <div className={styles.contactus_info_item}>
                    <BsFillEnvelopeFill size={40}/>
                    <p>thegreenschoolinternational@gmail.com</p>
                </div>

            </div>
            <div className={styles.contactus_map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.848307063235!2d91.75879517455255!3d26.10386999438336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58eca86aaaab%3A0x45f8047d7c6b526a!2sThe%20Green%20School%20International!5e0!3m2!1sen!2sin!4v1710139437640!5m2!1sen!2sin" width="600" height="450" style={{border:'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>

        <div className={styles.contact_form}>
            <div className={styles.contact_form_head}>
                <h2>GET IN TOUCH</h2>
            </div>
            <form ref={form} onSubmit={contactSubmitHandler} name='contactForm'>
                <div>
                    <div id='name' className={styles.form_input}>
                            <input type="text" placeholder="Name" name='fname'  onChange={contactChangeHandler} />
                            <p className={`${styles.formError} contactFormErrorClass`}></p>
                    </div>
                    <div id='contact' className={styles.form_input}>
                        <input type="number" placeholder="Contact Number" name='contact'  onChange={contactChangeHandler} />
                        <p className={`${styles.formError} contactFormErrorClass`}></p>
                    </div>
                    <div id='email' className={styles.form_input}>
                        <input type="email" placeholder="Email ID" name='email'  onChange={contactChangeHandler} />
                        <p className={`${styles.formError} contactFormErrorClass`}></p>
                    </div>
                    <div id='subject' className={styles.form_input}>
                        <input type="text" placeholder="Subject" name='subject'  onChange={contactChangeHandler} />
                        <p className={`${styles.formError} contactFormErrorClass`}></p>
                    </div>
                </div>
                <div>
                    <div id='message' className={styles.form_input}>
                        <textarea name="message" placeholder='Message'  id="" cols="30" rows="10"  onChange={contactChangeHandler}></textarea>
                        <p className={`${styles.formError} contactFormErrorClass`}></p>
                    </div>
                    <div id='submit'>
                        <button className={styles.button_primary_submit} id='contactSubmitbtn'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
        
    </>
  )
}

export default Contact