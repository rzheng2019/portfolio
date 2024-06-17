import { useRef, useState } from 'react';

import "../../components_css/contact_css/ContactContent.css"


function ContactContent() {
    const [fieldData, setFieldData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        description: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        description: ""
    })

    let [submitStatus, setStatus] = useState({ status: false })

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault(); 
        validate();
    }

    function validate()  
    {
        const fieldErrors = {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            description: ""
        };

        const validName = /^[a-zA-Z]+$/;
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!validName.test(fieldData.firstName)) {
            fieldErrors.firstName = "Invalid first name.";
            if (firstNameRef.current) {
                firstNameRef.current.focus();
            }
        }
        else {
            fieldErrors.firstName = ""
        }

        if (!validName.test(fieldData.lastName)) {
            fieldErrors.lastName = "Invalid last name.";
            if (lastNameRef.current) {
                lastNameRef.current.focus();
            }
        }
        else {
            fieldErrors.lastName = ""
        }

        if (!validEmail.test(fieldData.email)) {
            fieldErrors.email = "Invalid email. Ex: user@email.com";
            if (emailRef.current) {
                emailRef.current.focus();
            }
        }
        else {
            fieldErrors.email = ""
        }

        if (fieldData.subject === "") {
            fieldErrors.subject = "Invalid subject. Subject cannot be empty.";
            if (subjectRef.current) {
                subjectRef.current.focus();
            }
        }
        else {
            fieldErrors.subject = ""
        }

        if (fieldData.description === "") {
            fieldErrors.description = "Invalid description. Description cannot be empty.";
            if (descriptionRef.current) {
                descriptionRef.current.focus();
            }
        }
        else {
            fieldErrors.description = ""
        }

        setErrors(fieldErrors)

        if (fieldErrors.firstName === "" 
            && fieldErrors.lastName === ""
            && fieldErrors.email === ""
            && fieldErrors.subject === ""
            && fieldErrors.description === "")
        {
            const submissionStatus = {status: true};
            setStatus(submissionStatus);
        }
        else {
            const submissionStatus = {status: false};
            setStatus(submissionStatus);
        }
    }

    return(
        <div>        
            <div id="contact-content">
                <div id="contact-block">
                    <form>
                        <div id="contact-form-title">
                            <h1>Contact Form</h1>
                            <p>To contact about any inquiries, please fill out this form. </p>
                        </div>
                        <div id="contact-form-first-name">
                            <h3>First Name</h3>
                            <input 
                                ref={firstNameRef}
                                id="contact-form-first-name-field"
                                onChange={(e) => setFieldData({...fieldData, firstName: e.target.value })} 
                                value={fieldData.firstName}
                            />
                            <div id="error-first-name">
                                {errors.firstName && <p>{errors.firstName}</p>}
                            </div>
                        </div>
                        <div id="contact-form-last-name">
                            <h3>Last Name</h3>
                            <input 
                                ref={lastNameRef}
                                id="contact-form-last-name-field" 
                                onChange={(e) => setFieldData({...fieldData, lastName: e.target.value })} 
                                value={fieldData.lastName}
                            />
                            <div id="error-last-name">
                                {errors.lastName && <p>{errors.lastName}</p>}
                            </div>
                        </div>
                        <div id="contact-form-email">
                            <h3>Email</h3>
                            <input 
                                ref={emailRef}
                                id="contact-form-email-field" 
                                onChange={(e) => setFieldData({...fieldData, email: e.target.value })} 
                                value={fieldData.email}                                
                            />
                            <div id="error-email-name">
                                {errors.email && <p>{errors.email}</p>}
                            </div>
                        </div>
                        <div id="contact-form-subject">
                            <h3>Subject</h3>
                            <input
                                ref={subjectRef} 
                                id="contact-form-subject-field" 
                                onChange={(e) => setFieldData({...fieldData, subject: e.target.value })} 
                                value={fieldData.subject}                            
                            />
                            <div id="error-subject-name">
                                {errors.subject && <p>{errors.subject}</p>}
                            </div>                            
                        </div>
                        <div id="contact-form-inquiry">
                            <h3>Please describe your inquiry below.</h3>
                            <textarea 
                                ref={descriptionRef}
                                id="contact-form-inquiry-field" 
                                onChange={(e) => setFieldData({...fieldData, description: e.target.value })} 
                                value={fieldData.description}   
                            />
                            <div id="error-description">
                                {errors.description && <p>{errors.description}</p>}
                            </div>                            
                        </div>
                        <div id="contact-form-submit">
                            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)} id="contact-form-submit-button">
                                Submit
                            </button>
                            <div id="submission-status">
                                {submitStatus.status && <p>Your submission has been sent!</p>}
                            </div> 
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactContent;