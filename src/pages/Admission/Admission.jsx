import React,{useState, useRef} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from "./Admission.module.css"
import axios from 'axios'
import Swal from 'sweetalert2'
import Button from '../../components/Button/Button'


const Admission = () => {

    const [admissionFormData,setAdmissionFormData] = useState({childname:'',fathername:'',whatsappnumber:'',class:'', email: '',address:'',query: ''});
    const form = useRef(null);
    const admissionFormChangeHandler = (e) => {
        setAdmissionFormData({
            ...admissionFormData,
            [e.target.name]: e.target.value,
            
          });
          setError(e.target.parentNode.id,'')

    }

    const admissionFormSubmitHandler = (e) => {
        e.preventDefault()
        const admissionFormSubmitBtn = document.getElementById('admissionFormSubmitbtn');

        let flag = true;
        const childname=  document.forms['admissionForm']['childname'].value;
        const fathername =  document.forms['admissionForm']['fathername'].value;
        const whatsappnum =  document.forms['admissionForm']['whatsappnumber'].value;
        const classgr =  document.forms['admissionForm']['class'].value;
        const email =  document.forms['admissionForm']['email'].value;
        const address= document.forms['admissionForm']['address'].value;
        const query= document.forms['admissionForm']['query'].value;
        const regName = /^[a-zA-Z ]*$/;
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

        if(childname.length==0){
            setError('childName','*Child name cannot be empty')
            flag=false
      
          }
          if(childname.length <3 && childname.length!=0){
            setError('childName','*Child name too short');
            flag=false;
      
          }
          if(!regName.test(childname) && childname.length!=0){
            setError('childName','*Please write a valid name');
            flag=false;
          }
          if(fathername.length==0){
            setError('fatherName','*Father name cannot be empty')
            flag=false
      
          }
          if(fathername.length <3 && fathername.length!=0){
            setError('fatherName','*Father name too short');
            flag=false;
      
          }
          if(!regName.test(fathername) && fathername.length!=0){
            setError('fatherName','*Please write a valid name');
            flag=false;
          }
          if(whatsappnum.length!=10){
            setError('whatsappNum', '*Whatsapp number must be 10 digits')
            flag=false
          }
          if(classgr.length==0){
            setError('classgr','*Class cannot be empty')
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
          if(address.length==0){
            setError('address','*Address cannot be empty')
            flag=false
      
          }
          if(query.length==0){
            setError('query','*Query cannot be empty')
            flag=false
      
          }

          if(flag==true){
            admissionFormSubmitBtn.disabled = true;
            admissionFormSubmitBtn.innerHTML='Please Wait..'
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/thegreenschoolinternational@gmail.com', {
                childname: admissionFormData.childname,
                fathername: admissionFormData.fathername,
                whatsappnumber: admissionFormData.whatsappnumber ,
                class: admissionFormData.class ,
                email: admissionFormData.email ,
                address: admissionFormData.address ,
                query: admissionFormData.query 
            }).then(response =>{
                    Swal.fire({
                        icon: 'success',
                        title: 'Form Submitted',
                        text: 'Someone will connect to you soon',
                      })
                      admissionFormSubmitBtn.disabled = false
                      admissionFormSubmitBtn.innerHTML='Submit'
                    form.current.reset();
                    }

                    )
                .catch(error => {Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong',
                  })
                  admissionFormSubmitBtn.disabled = false
                  admissionFormSubmitBtn.innerHTML='Submit'
                form.current.reset();
                });


          }
      
          



    }
    const setError = (id,error) => {
        const element = document.getElementById(id);
        element.getElementsByClassName('AdmissionFormErrorClass')[0].innerHTML = error;
      }
  
    return (
    <>
        <Header title="Admission"/>

        <div className={styles.admission_head}>
            <h2>The Green School International</h2>
            <p>Education is the passport to the future
so create your passport today by enrolling yourself in The Green School International</p>
        </div>

        <div className={styles.admission_details}>
            <h2>Admission Details</h2>
            <div className={styles.admission_details_head}>
                <div className={styles.admission_details_card} style={{backgroundColor:'#f7931e'}}>
                    <h3>Foundation:</h3>
                    <p>Age 3+ years as on 31st March of the year of admission</p>
                </div>
                <div className={styles.admission_details_card} style={{backgroundColor:'#d66a21'}}>
                    <h3>Junior:</h3>
                    <p>Age 4+ years as on 31st March of the year of admission</p>
                </div>
                <div className={styles.admission_details_card} style={{backgroundColor:'#0071bc'}}>
                    <h3>Senior:</h3>
                    <p>Age 5+ years as on 31st March of the year of admission</p>
                </div>
                <div className={styles.admission_details_card} style={{backgroundColor:'#3e4095'}}>
                    <h3>Grade 1:</h3>
                    <p>Age 6+ years as on 31st March of the year of admission</p>
                </div>
            </div>
        </div>
        <div className={styles.admission_list}>
            <h3>Students offered admission are required to submit the following documents along with their Registration Forms:</h3>
            <ul>
                <li>One Copies of Passport Size Photographs of the child & one of each parent, duly affixed on the form.</li>
                <li>Photocopy of the Birth Certificate issued by the Municipal/Civil Authorities</li>
                <li>Photocopy of the latest Progress Report Card</li>
                <li>Photocopy of Aadhar Card of student</li>
                <li>Photocopy of Transfer Certificate issued by previous school. Transfer certificate to be signed by DEO if transferred from other states (Not Applicable for Pre primary classes)</li>
                <li>Photocopy of residential poof (Copy of Aadhar Card/Passport).</li>
                <li>Certificate issued by a registered medical practitioner capturing the details of vaccinations/immunizations underwent by the child. The school should also be informed about any existing ailments or health conditions if applicable.</li>
                <li>PEN (Permanent Education Number) of the student issued from Previous school.</li>
            </ul>
        </div>
        <div className={styles.admission_list}>
            <h3>Parents are requested to carry the following Original Documents along, which shall be duly returned post verification:</h3>
            <ul>
                <li>Birth Certificate issued by MCD/Civic Authorities</li>
                <li>Evidence of passing the last class or promotion to the present class</li>
                <li>Proof of residence of the child (Ration Card/ voter’s ID/Passport)</li>
                
            </ul>
        </div>
        <div className={styles.admission_list} >
            <h3>Admission Criteria:</h3>
            <p>There is no written admission test for junior classes (No interview till class II), but for Grade III onwards, the child has to take an interview & a written test. For Grades below III, an informal interaction/interview shall be conducted. The test will be held for English, Mathematics and/or any other subject which may be considered necessary.</p>
            <ul style={{width:'100%'}}>
                <li>The selection of the candidates will depend upon the child’s performance in the test/interview and availability of seats in the concerned class.</li>
                <li>Assessment of the child for admission is also based on academic readiness and motivation, social and emotional development, family cooperation in working with the school and meeting the needs of the students, the ability of the school to fulfill the needs of the child</li>
                <li>The date of the result of the interview & the last date for the submission of fee will be specified at the time of the test/interview</li>
                <li>Based on the Admission Test and other criteria, the School reserves the right to admit any student who is found fit for admission or refuse admission without assigning any reason whatsoever. For all matters related to admissions, the decision of the School Head/Management will be final.</li>
                
            </ul>
        </div>
        <div className={styles.admission_list} >
            <h3>For more Information:</h3>
            <p>Our Admission Team is ready to work with you on processing your child’s application to The Greenschool International Guwahati and to get you started on their path to success. If questions pertaining to any of the admission policies or procedures arise, please do not hesitate to call or e-mail the Admissions Office of the respective branch.</p>
        </div>

        <div className={styles.admission_form}>
            <h2><span>Admission</span><span>Query</span><span>Form</span></h2>
            <form  ref={form} onSubmit={admissionFormSubmitHandler} name='admissionForm' className={styles.admission_query_form}>
                <div>
                    <div id='childName' className={styles.form_item}>
                        <input type="text" placeholder="Child's Name" name='childname'  onChange={admissionFormChangeHandler} />
                        <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    <div id='fatherName' className={styles.form_item}>
                        <input type="text" placeholder="Father's Name" name='fathername' onChange={admissionFormChangeHandler} />
                        <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    <div id='whatsappNum' className={styles.form_item}>
                        <input type="number" placeholder="Whatsapp Number" name='whatsappnumber' onChange={admissionFormChangeHandler} />
                        <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    <div id='classgr' className={styles.form_item}>
                        <select name="class" id="" onChange={admissionFormChangeHandler} defaultValue={""}>
                            <option value="" disabled>Select Class</option>
                            <option value="pre_nursery">Pre Nursery</option>
                            <option value="nursery">Nursery</option>
                            <option value="lowerkg">Lower KG</option>
                            <option value="upperkg">Upper KG</option>
                            <option value="class1">Class 1</option>
                            <option value="class2">Class 2</option>
                            <option value="class3">Class 3</option>
                            <option value="class4">Class 4</option>
                            <option value="class5">Class 5</option>
                            <option value="class6">Class 6</option>
                            <option value="class7">Class 7</option>
                            <option value="class8">Class 8</option>
                            <option value="class9">Class 9</option>
                            <option value="class9">Class 10</option>
                            <option value="class7">Class 11(Arts)</option>
                            <option value="class7">Class 11(Commerce)</option>
                            <option value="class7">Class 11(Science)</option>
                            <option value="class8">Class 12(Arts)</option>
                            <option value="class8">Class 12(Commerce)</option>
                            <option value="class8">Class 12(Science)</option>
                        </select>
                        <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    <div id='email' className={styles.form_item}>
                        <input type="email" placeholder="Email" name='email' onChange={admissionFormChangeHandler} />
                        <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    </div>
                    <div>
                    <div>
                        <div id='address' className={styles.form_item}>
                            <textarea name="address" placeholder='Address' id="" cols="30" rows="10" onChange={admissionFormChangeHandler}></textarea>
                            <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                        </div>
                    </div>
                    <div id='query' className={styles.form_item}>
                    <textarea name="query" placeholder='Query' id="" cols="30" rows="10" onChange={admissionFormChangeHandler}></textarea>
                    <p className={`${styles.formError} AdmissionFormErrorClass`}></p>
                    </div>
                    <div id='submit' className={styles.form_item}>
                        <button className={styles.button_primary_submit} id='admissionFormSubmitbtn'>Submit</button>
                    </div>
                </div>
            </form>
        </div>

      
    </>
  )
}

export default Admission