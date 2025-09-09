function PersonalDetails({details}) {
    
    return (
        <div className={"personalDetilsSection"}>
            <h3 id={"fullName"}>{details.fullName}</h3>
            <p id={"addressDisplay"}>{details.address} | {details.phoneNumber} | {details.email} | {details.linkedInProfile}</p>
            <p id={"summaryDisplay"}>{details.profileSummary}</p>
        </div>
    )
}

function EducationDetails({details}) {

    return (
        <div className={"resumeSections"}>
            <h3>EDUCATION</h3>
            <div className={"innerSections"}>
                <section>
                    <h3 className="institution">{details.school}</h3>
                    <p>{details.degree}</p>
                </section>
                <section>
                    <h3>{details.location}</h3>
                    <p><i>{details.eduStartDate} - {details.eduEndDate}</i></p>
                </section>
            </div>
            <p id="courseWork"><b>Relevant Coursework: </b>{details.courseWork}</p>
        </div>

    )
}



export function ResumeBody({details, education, experience, skills, projects}) {

    const personalDetails = details;
    // console.log(experience.expDescription.split("|"))

    return (
        <section id={"resumebody"}>

            <PersonalDetails details={personalDetails} />
            <EducationDetails details={education} />

            <div className={"resumeSections"}>
                <h3>PROFESSIONAL EXPERIENCE</h3>
                <div className={"innerSections"}>
                    <section>
                        <h3 className="institution">{experience.company}</h3>
                        <p>{experience.positionTitle}</p>
                    </section>
                    <section>
                        <h3>{experience.exLocation}</h3>
                        <p><i>{experience.exStartDate} - {experience.exEndDate}</i></p>
                    </section>
                </div>
                <ul className={"listOfDuties"}>
                {experience.expDescription.map((duty, index) => {
                    return <li key={index}>{duty}</li>;
                    })}
                </ul>
            </div>

            <div className={"resumeSections"}>
                <h3>ADDITIONAL SKILLS</h3>
                <ul className={"listOfDuties"}>
                    {skills.skills.map((skills, index) => {
                        return <li key={index}>{skills}</li>;
                    })}
                </ul>
            </div>

            <div className={"resumeSections"}>
                <h3>PROJECTS</h3>
                <div className={"innerSections"}>
                    <section>
                        <h3 className="institution">{projects.name}</h3>
                        <p><i>{projects.link}</i></p>
                    </section>
                </div>
                <p><b>Description: </b>{projects.description}</p>
                <ul className={"listOfDuties"}>
                    {projects.achievements.map((achievement, index) => {
                            return <li key={index}>{achievement}</li>;
                    })}
                </ul>
            </div>
            
        </section>
    )
}