import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Header from "../../components/Header/Header";
import styles from "./Admission.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { fadeUp, inViewProps } from "../../utils/motion";
import { downloadFile } from "../../utils/download";
import SEO from "../../components/SEO/SEO";
import { breadcrumbSchema } from "../../utils/seoSchemas";

const classOptions = [
  { value: "pre_nursery", label: "Pre Nursery" },
  { value: "nursery", label: "Nursery" },
  { value: "lowerkg", label: "Lower KG" },
  { value: "upperkg", label: "Upper KG" },
  { value: "class1", label: "Class 1" },
  { value: "class2", label: "Class 2" },
  { value: "class3", label: "Class 3" },
  { value: "class4", label: "Class 4" },
  { value: "class5", label: "Class 5" },
  { value: "class6", label: "Class 6" },
  { value: "class7", label: "Class 7" },
  { value: "class8", label: "Class 8" },
  { value: "class9", label: "Class 9" },
  { value: "class10", label: "Class 10" },
  { value: "class11_arts", label: "Class 11 (Arts)" },
  { value: "class11_commerce", label: "Class 11 (Commerce)" },
  { value: "class11_science", label: "Class 11 (Science)" },
  { value: "class12_arts", label: "Class 12 (Arts)" },
  { value: "class12_commerce", label: "Class 12 (Commerce)" },
  { value: "class12_science", label: "Class 12 (Science)" },
];

const ageBands = [
  {
    title: "Foundation",
    age: "Age 3+ years",
    detail: "as on 31st March of the year of admission",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Junior",
    age: "Age 4+ years",
    detail: "as on 31st March of the year of admission",
    color: "from-orange-500 to-rose-500",
  },
  {
    title: "Senior",
    age: "Age 5+ years",
    detail: "as on 31st March of the year of admission",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Grade 1",
    age: "Age 6+ years",
    detail: "as on 31st March of the year of admission",
    color: "from-indigo-500 to-violet-700",
  },
];

const documentsRequired = [
  "One Copies of Passport Size Photographs of the child & one of each parent, duly affixed on the form.",
  "Photocopy of the Birth Certificate issued by the Municipal/Civil Authorities",
  "Photocopy of the latest Progress Report Card",
  "Photocopy of Aadhar Card of student",
  "Photocopy of Transfer Certificate issued by previous school. Transfer certificate to be signed by DEO if transferred from other states (Not Applicable for Pre primary classes)",
  "Photocopy of residential proof (Copy of Aadhar Card/Passport).",
  "Certificate issued by a registered medical practitioner capturing the details of vaccinations/immunizations underwent by the child. The school should also be informed about any existing ailments or health conditions if applicable.",
  "PEN (Permanent Education Number) of the student issued from Previous school.",
];

const documentsOriginal = [
  "Birth Certificate issued by MCD/Civic Authorities",
  "Evidence of passing the last class or promotion to the present class",
  "Proof of residence of the child (Ration Card/voter's ID/Passport)",
];

const admissionCriteria = [
  "The selection of the candidates will depend upon the child's performance in the test/interview and availability of seats in the concerned class.",
  "Assessment of the child for admission is also based on academic readiness and motivation, social and emotional development, family cooperation in working with the school and meeting the needs of the students, the ability of the school to fulfill the needs of the child.",
  "The date of the result of the interview & the last date for the submission of fee will be specified at the time of the test/interview.",
  "Based on the Admission Test and other criteria, the School reserves the right to admit any student who is found fit for admission or refuse admission without assigning any reason whatsoever. For all matters related to admissions, the decision of the School Head/Management will be final.",
];

const Admission = () => {
  const [admissionFormData, setAdmissionFormData] = useState({
    childname: "",
    fathername: "",
    whatsappnumber: "",
    class: "",
    email: "",
    address: "",
    query: "",
  });
  const form = useRef(null);

  const admissionFormChangeHandler = (e) => {
    let value = e.target.value;
    // Phone fields: keep digits only, max 10
    if (e.target.name === "whatsappnumber") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }
    setAdmissionFormData({
      ...admissionFormData,
      [e.target.name]: value,
    });
    setError(e.target.parentNode.id, "");
  };

  const setError = (id, error) => {
    const element = document.getElementById(id);
    if (!element) return;
    const errorEl = element.getElementsByClassName(
      "AdmissionFormErrorClass"
    )[0];
    if (errorEl) errorEl.innerHTML = error;
  };

  const admissionFormSubmitHandler = (e) => {
    e.preventDefault();
    const admissionFormSubmitBtn = document.getElementById(
      "admissionFormSubmitbtn"
    );

    let flag = true;
    const childname = document.forms["admissionForm"]["childname"].value;
    const fathername = document.forms["admissionForm"]["fathername"].value;
    const whatsappnum = document.forms["admissionForm"]["whatsappnumber"].value;
    const classgr = admissionFormData.class;
    const email = document.forms["admissionForm"]["email"].value;
    const address = document.forms["admissionForm"]["address"].value;
    const query = document.forms["admissionForm"]["query"].value;
    const regName = /^[a-zA-Z ]*$/;
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (childname.length === 0) {
      setError("childName", "*Child name cannot be empty");
      flag = false;
    }
    if (childname.length < 3 && childname.length !== 0) {
      setError("childName", "*Child name too short");
      flag = false;
    }
    if (!regName.test(childname) && childname.length !== 0) {
      setError("childName", "*Please write a valid name");
      flag = false;
    }
    if (fathername.length === 0) {
      setError("fatherName", "*Father name cannot be empty");
      flag = false;
    }
    if (fathername.length < 3 && fathername.length !== 0) {
      setError("fatherName", "*Father name too short");
      flag = false;
    }
    if (!regName.test(fathername) && fathername.length !== 0) {
      setError("fatherName", "*Please write a valid name");
      flag = false;
    }
    if (whatsappnum.length !== 10) {
      setError("whatsappNum", "*Whatsapp number must be 10 digits");
      flag = false;
    }
    if (classgr.length === 0) {
      setError("classgr", "*Class cannot be empty");
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
    if (address.length === 0) {
      setError("address", "*Address cannot be empty");
      flag = false;
    }
    if (query.length === 0) {
      setError("query", "*Query cannot be empty");
      flag = false;
    }

    if (flag) {
      admissionFormSubmitBtn.disabled = true;
      admissionFormSubmitBtn.innerHTML = "Please Wait..";
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post(
          "https://formsubmit.co/ajax/thegreenschoolinternational@gmail.com",
          {
            childname: admissionFormData.childname,
            fathername: admissionFormData.fathername,
            whatsappnumber: admissionFormData.whatsappnumber,
            class: admissionFormData.class,
            email: admissionFormData.email,
            address: admissionFormData.address,
            query: admissionFormData.query,
          }
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Form Submitted",
            text: "Someone will connect to you soon",
          });
          admissionFormSubmitBtn.disabled = false;
          admissionFormSubmitBtn.innerHTML = "Submit";
          form.current.reset();
          setAdmissionFormData({
            childname: "",
            fathername: "",
            whatsappnumber: "",
            class: "",
            email: "",
            address: "",
            query: "",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong",
          });
          admissionFormSubmitBtn.disabled = false;
          admissionFormSubmitBtn.innerHTML = "Submit";
          form.current.reset();
          setAdmissionFormData({
            childname: "",
            fathername: "",
            whatsappnumber: "",
            class: "",
            email: "",
            address: "",
            query: "",
          });
        });
    }
  };

  function ActionButton() {
    return (
      <button
        type="button"
        className={styles.download_btn}
        onClick={() =>
          downloadFile(
            "https://api.greenschoolguwahati.com/public_disclosure/green-school-admission-form.pdf",
            "green-school-admission-form.pdf"
          )
        }
      >
        <HiOutlineDocumentArrowDown size={20} />
        Download Admission Form
      </button>
    );
  }

  return (
    <>
      <SEO
        title="Admissions 2026-27"
        description="Apply for admission to The Green School International, Guwahati. CBSE-affiliated. Pre-Nursery to Class 12. Download the admission form, view eligibility criteria and required documents."
        path="/admission"
        keywords="Green School Guwahati admission, CBSE admission Guwahati 2026, school admission Sarusajai, K-12 admission Assam, school registration form download"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Admissions", path: "/admission" },
        ])}
      />
      <Header title="Admission" ActionButton={ActionButton} />

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_head}
      >
        <span className="section-eyebrow">Begin your journey</span>
        <h2>
          The Green School{" "}
          <span className="gradient-text">International</span>
        </h2>
        <p>
          Education is the passport to the future — create your passport today
          by enrolling at The Green School International.
        </p>
      </motion.section>

      <section className={styles.admission_details}>
        <div className={styles.section_header_left}>
          <span className="section-eyebrow">Age Eligibility</span>
          <h2>Admission details</h2>
        </div>
        <div className={styles.admission_details_head}>
          {ageBands.map((band, idx) => (
            <motion.div
              key={band.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className={`${styles.admission_details_card} bg-gradient-to-br ${band.color}`}
            >
              <h3>{band.title}</h3>
              <p className={styles.age_text}>{band.age}</p>
              <span className={styles.age_detail}>{band.detail}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_list}
      >
        <h3>Documents to submit with the Registration Form</h3>
        <ul>
          {documentsRequired.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_list}
      >
        <h3>
          Original documents to carry (returned post verification)
        </h3>
        <ul>
          {documentsOriginal.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_list}
      >
        <h3>Admission criteria</h3>
        <p>
          There is no written admission test for junior classes (no interview
          till Class II), but for Grade III onwards, the child has to take an
          interview & a written test. For Grades below III, an informal
          interaction/interview shall be conducted. The test will be held for
          English, Mathematics and/or any other subject which may be considered
          necessary.
        </p>
        <ul>
          {admissionCriteria.map((criteria, i) => (
            <li key={i}>{criteria}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_list}
      >
        <h3>For more information</h3>
        <p>
          Our Admission Team is ready to work with you on processing your
          child&apos;s application to The Green School International, Guwahati
          and to get you started on their path to success. If you have
          questions about admission policies or procedures, please call or
          e-mail the Admissions Office of the respective branch.
        </p>
      </motion.section>

      <motion.section
        {...inViewProps}
        variants={fadeUp}
        className={styles.admission_form}
      >
        <div className={styles.form_header}>
          <span className="section-eyebrow">Admission Query</span>
          <h2>Tell us about your child</h2>
          <p>
            Fill out the form below — our admissions team will reach out
            shortly.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={admissionFormSubmitHandler}
          name="admissionForm"
          className={styles.admission_query_form}
        >
          <div className={styles.form_row}>
            <div id="childName" className={styles.form_item}>
              <input
                type="text"
                placeholder="Child's Name"
                name="childname"
                onChange={admissionFormChangeHandler}
              />
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
            <div id="fatherName" className={styles.form_item}>
              <input
                type="text"
                placeholder="Father's Name"
                name="fathername"
                onChange={admissionFormChangeHandler}
              />
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
          </div>
          <div className={styles.form_row}>
            <div id="whatsappNum" className={styles.form_item}>
              <input
                type="tel"
                placeholder="Whatsapp Number"
                name="whatsappnumber"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]{10}"
                maxLength={10}
                value={admissionFormData.whatsappnumber}
                onChange={admissionFormChangeHandler}
              />
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
            <div id="email" className={styles.form_item}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                inputMode="email"
                autoComplete="email"
                value={admissionFormData.email}
                onChange={admissionFormChangeHandler}
              />
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
          </div>
          <div id="classgr" className={styles.form_item}>
            <p className={styles.classSelectLabel}>
              Select Class <span style={{ color: "red" }}>*</span>
            </p>
            <div className={styles.classGrid}>
              {classOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  className={`${styles.classOption} ${
                    admissionFormData.class === opt.value
                      ? styles.classOptionSelected
                      : ""
                  }`}
                  onClick={() => {
                    setAdmissionFormData({
                      ...admissionFormData,
                      class: opt.value,
                    });
                    setError("classgr", "");
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
          </div>
          <div className={styles.form_row}>
            <div id="address" className={styles.form_item}>
              <textarea
                name="address"
                placeholder="Address"
                cols="30"
                rows="4"
                onChange={admissionFormChangeHandler}
              ></textarea>
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
            <div id="query" className={styles.form_item}>
              <textarea
                name="query"
                placeholder="Query"
                cols="30"
                rows="4"
                onChange={admissionFormChangeHandler}
              ></textarea>
              <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
            </div>
          </div>
          <div id="submit" className={styles.form_item}>
            <button
              type="submit"
              className={styles.button_primary_submit}
              id="admissionFormSubmitbtn"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.section>
    </>
  );
};

export default Admission;
