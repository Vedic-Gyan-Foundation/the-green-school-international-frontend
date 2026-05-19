import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import Header from "../../components/Header/Header";
import { MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaDirections } from "react-icons/fa";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";
import { fadeUp, inViewProps } from "../../utils/motion";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fname: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef(null);

  const contactChangeHandler = (e) => {
    let value = e.target.value;
    if (e.target.name === "contact") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }
    setContactData({
      ...contactData,
      [e.target.name]: value,
    });
    setError(e.target.parentNode.id, "");
  };

  const setError = (id, error) => {
    const element = document.getElementById(id);
    if (!element) return;
    const errEl = element.getElementsByClassName("contactFormErrorClass")[0];
    if (errEl) errEl.innerHTML = error;
  };

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    const contactSubmitBtn = document.getElementById("contactSubmitbtn");

    let flag = true;
    const fname = document.forms["contactForm"]["fname"].value;
    const contact = document.forms["contactForm"]["contact"].value;
    const email = document.forms["contactForm"]["email"].value;
    const subject = document.forms["contactForm"]["subject"].value;
    const message = document.forms["contactForm"]["message"].value;
    const regName = /^[a-zA-Z ]*$/;
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (fname.length === 0) {
      setError("name", "*Name cannot be empty");
      flag = false;
    }
    if (fname.length < 3 && fname.length !== 0) {
      setError("name", "*Name too short");
      flag = false;
    }
    if (!regName.test(fname) && fname.length !== 0) {
      setError("name", "*Please write a valid name");
      flag = false;
    }
    if (contact.length !== 10) {
      setError("contact", "*Phone Number must be 10 digits");
      flag = false;
    }
    if (email.length === 0) {
      setError("email", "*Email id cannot be empty");
      flag = false;
    }
    if (!regEmail.test(email) && email.length !== 0) {
      setError("email", "*Invalid Email");
      flag = false;
    }
    if (subject.length === 0) {
      setError("subject", "*Subject cannot be empty");
      flag = false;
    }
    if (message.length === 0) {
      setError("message", "*Message cannot be empty");
      flag = false;
    }

    if (flag) {
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.innerHTML = "Please Wait..";
      axiosInstance
        .post("send-contact-message", {
          name: contactData.fname,
          contact: contactData.contact,
          email: contactData.email,
          subject: contactData.subject,
          message: contactData.message,
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Form Submitted",
            text: "Someone will connect to you soon",
          });
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.innerHTML = "Send Message";
          form.current.reset();
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong",
          });
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.innerHTML = "Send Message";
          form.current.reset();
        });
    }
  };

  return (
    <>
      <Header title="Contact Us" />

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.contactus}
      >
        <div className={styles.contactus_info}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.info_top}>
            <span className={styles.info_eyebrow}>We&apos;re here to help</span>
            <h2>Reach The Green School International</h2>
            <p>
              Whether you&apos;re curious about admissions, programs, or
              partnerships — our team is happy to talk.
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=The+Green+School+International+Guwahati"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactus_info_item}
          >
            <span className={styles.info_icon}>
              <MdLocationPin size={22} />
            </span>
            <div>
              <p className={styles.info_label}>Visit us</p>
              <p>
                Mahapurush Madhabdev Path, Nalapara, Sarusajai, Guwahati-781040
              </p>
            </div>
          </a>
          <a href="tel:+919387130617" className={styles.contactus_info_item}>
            <span className={styles.info_icon}>
              <AiFillPhone size={20} />
            </span>
            <div>
              <p className={styles.info_label}>Call us</p>
              <p>+91 9387130617 / +91 9856199105</p>
            </div>
          </a>
          <a
            href="mailto:thegreenschoolinternational@gmail.com"
            className={styles.contactus_info_item}
          >
            <span className={styles.info_icon}>
              <BsFillEnvelopeFill size={18} />
            </span>
            <div>
              <p className={styles.info_label}>Email us</p>
              <p>thegreenschoolinternational@gmail.com</p>
            </div>
          </a>
        </div>

        <div className={styles.contactus_map}>
          <div className={styles.map_frame}>
            <iframe
              title="Green School International location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.848307063235!2d91.75879517455255!3d26.10386999438336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58eca86aaaab%3A0x45f8047d7c6b526a!2sThe%20Green%20School%20International!5e0!3m2!1sen!2sin!4v1710139437640!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Place card below the map — keeps the iframe controls fully usable */}
          <div className={styles.map_card}>
            <div className={styles.map_card_head}>
              <span className={styles.map_card_pin}>
                <HiOutlineMapPin size={18} />
              </span>
              <div className={styles.map_card_text}>
                <p className={styles.map_card_name}>
                  The Green School International
                </p>
                <p className={styles.map_card_addr}>
                  Mahapurush Madhabdev Path · Sarusajai · Guwahati 781040
                </p>
              </div>
            </div>
            <div className={styles.map_card_actions}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=The+Green+School+International+Guwahati"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.map_action_primary}
              >
                <FaDirections size={14} />
                Get Directions
              </a>
              <a
                href="tel:+919387130617"
                className={styles.map_action_secondary}
              >
                <AiFillPhone size={13} />
                Call school
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.contact_form}
      >
        <div className={styles.contact_form_head}>
          <span className="section-eyebrow">Get in touch</span>
          <h2>Send us a message</h2>
          <p>We typically respond within one working day.</p>
        </div>
        <form
          ref={form}
          onSubmit={contactSubmitHandler}
          name="contactForm"
          className={styles.form_grid}
        >
          <div id="name" className={styles.form_input}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              name="fname"
              onChange={contactChangeHandler}
            />
            <p className={`${styles.formError} contactFormErrorClass`}></p>
          </div>
          <div id="contact" className={styles.form_input}>
            <label>Contact Number</label>
            <input
              type="tel"
              placeholder="10-digit number"
              name="contact"
              inputMode="numeric"
              autoComplete="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              value={contactData.contact}
              onChange={contactChangeHandler}
            />
            <p className={`${styles.formError} contactFormErrorClass`}></p>
          </div>
          <div id="email" className={styles.form_input}>
            <label>Email ID</label>
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              inputMode="email"
              autoComplete="email"
              value={contactData.email}
              onChange={contactChangeHandler}
            />
            <p className={`${styles.formError} contactFormErrorClass`}></p>
          </div>
          <div id="subject" className={styles.form_input}>
            <label>Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              name="subject"
              onChange={contactChangeHandler}
            />
            <p className={`${styles.formError} contactFormErrorClass`}></p>
          </div>
          <div id="message" className={`${styles.form_input} ${styles.full}`}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message…"
              cols="30"
              rows="6"
              onChange={contactChangeHandler}
            ></textarea>
            <p className={`${styles.formError} contactFormErrorClass`}></p>
          </div>
          <div id="submit" className={`${styles.form_input} ${styles.full}`}>
            <button
              type="submit"
              className={styles.button_primary_submit}
              id="contactSubmitbtn"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
