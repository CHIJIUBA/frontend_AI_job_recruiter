import { useState } from 'react';
import {personalDetails, educationDetails, resumeInputsDetails, experienceDetails, skillsDetails, projectsDetails} from "./data"
import { ResumeBody } from './ResumeBody';

function LabelInput({label, inputId, handlerFunction}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <input type="text"  id={inputId} onChange={handlerFunction}/>
        </>
    )
}

function LabelTextArea({label, inputId, handlerFunction}) {
    return (
        <>
            <label htmlFor={inputId}>{label}</label>
            <textarea id={inputId} onInput={handlerFunction}></textarea>
        </>
    )
}


export function SideNav() {
    
    const [fullName, setPersonalDetails] = useState(personalDetails);

    function handlePersonalDetails(e) {
        /**
         * this function changes the corresponding resume field in accordance
         * to the input field controlling it
         */
        if(resumeInputsDetails[e.target.id] in personalDetails) {
            personalDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(personalDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in educationDetails) {
            educationDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(educationDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in experienceDetails) {
            experienceDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(experienceDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in projectsDetails) {
            projectsDetails[resumeInputsDetails[e.target.id]] = e.target.value;
            setPersonalDetails(projectsDetails[resumeInputsDetails[e.target.id]]);
        }

    }

    function handleLists(e){

        if (resumeInputsDetails[e.target.id] in experienceDetails){
            experienceDetails[resumeInputsDetails[e.target.id]] = e.target.value.split("\n");
            setPersonalDetails(experienceDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in skillsDetails) {
            skillsDetails[resumeInputsDetails[e.target.id]] = e.target.value.split("\n");
            setPersonalDetails(skillsDetails[resumeInputsDetails[e.target.id]]);
        }
        else if(resumeInputsDetails[e.target.id] in projectsDetails) {
            projectsDetails[resumeInputsDetails[e.target.id]] = e.target.value.split("\n");
            setPersonalDetails(projectsDetails[resumeInputsDetails[e.target.id]]);
        }
    }

    return(
        <>
        <section className={"side-nav"}>
            <div className={"personaldetails"}>
                <h3>Personal Details</h3>
                <LabelInput  label={"Full Name"} inputId={"fullNameInput"}  handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Email"} inputId={"emailInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Phone Number"} inputId={"phoneNumber"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Address"} inputId={"addressInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"Summary"} inputId={"summaryInput"} handlerFunction={handlePersonalDetails} />
                <LabelInput  label={"LinkedIn Profile"} inputId={"linkedinput"} handlerFunction={handlePersonalDetails} />
            </div>

            <div className={"personaldetails"}>
                <h3>Education</h3>
                <LabelInput  label={"School"} inputId={"schoolInput"}  handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Degree"} inputId={"degreeInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Start Date"} inputId={"startEdDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"End Date"} inputId={"endEdDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Location"} inputId={"locationInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Relevant CourseWork"} inputId={"courseWorkInput"} handlerFunction={handlePersonalDetails}/>
            </div>

            <div className={"personaldetails"}>
                <h3>Profesional Experience</h3>
                <LabelInput  label={"Company"} inputId={"companyInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Position Title"} inputId={"positionTitleInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Start Date"} inputId={"exstartDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"End Date"} inputId={"exendExDateInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Location"} inputId={"exlocationInput"} handlerFunction={handlePersonalDetails}/>
                <LabelTextArea label={"Duty Descriptions"} inputId={"expDescriptionInput"}  handlerFunction={handleLists}/>
            </div>

            <div className={"personaldetails"}>
                <h3>Additional Skills</h3>
                <LabelTextArea label={"Skills List"} inputId={"skillDescriptionInput"}  handlerFunction={handleLists}/>
            </div>

            <div className={"personaldetails"}>
                <h3>Project</h3>
                <LabelInput  label={"Project Name"} inputId={"projectNameInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Project Link"} inputId={"projectLinkInput"} handlerFunction={handlePersonalDetails}/>
                <LabelInput  label={"Project Description"} inputId={"projectDescriptionInput"} handlerFunction={handlePersonalDetails}/>
                <LabelTextArea label={"Project Achievements"} inputId={"projectAchievementsInput"} handlerFunction={handleLists}/>
            </div>
        </section>
        <ResumeBody details={personalDetails} education={educationDetails} experience={experienceDetails} skills={skillsDetails} projects={projectsDetails}/>
        </>
    )
}
