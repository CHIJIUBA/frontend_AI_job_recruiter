
export const personalDetails = {
    /**
     * This section contains the data fields for the user
     * personal details for the resume
     */

    fullName: "Chijiuba Victory",
    address: "Ikeja, Lagos Nigeria",
    phoneNumber: "+234 8132547926",
    email: "chijiubamichael@gmail.com",
    linkedInProfile: "www.linkedin.com/in/chijiubavictory",
    profileSummary: "A Computer Science graduate with fundamental knowledge of software design and development. Seeking to utilize broadeducational background with excellent analytical, technical, and programming skills to thrive as software engineer."
}

export const educationDetails = {
    /***
     * this objects contains the data fields for the 
     * educational section of the resume
     */

    school: "University of Nigeria",
    degree: "Bachelor of Science in Computer Science (BSC)",
    eduStartDate: "Nov 2017",
    eduEndDate: "Nov 2022",
    location: "Nsukka, Enugu",
    courseWork: " Python Programming, Java, Data Structures, Object-Oriented Design, Database Management Systems, Computer Organization & Architecture, SoftwareEngineering Process Management, Enterprise Software Overview, Software Quality Testing"
}

export const experienceDetails = {
    /***
     * this objects contains the data fields for the 
     * professional experience section of the resume
     */
    company: "Strabic Construction Company",
    positionTitle: "Information Technology Officer",
    exStartDate: "Aug 2023",
    exEndDate: "Jun 2024",
    exLocation: "Ikeja, Lagos",
    expDescription: [
        "Oversaw the installation, configuration, and maintenance of hardware and Project.", 
        "Managed servers, networks, and other IT infrastructure to ensure smooth and secure operation.", 
        "Provided technical support to employees, troubleshooting hardware and software issues, and resolving IT-related problems."
    ],
    
}

export const skillsDetails = {
    /***
     * this objects contains the data fields for the 
     * professional experience section of the resume
     */

    skills: [
        "Microsoft Excel, Microsoft Word, Visual Studio Code and Postman",
        "Python, Java, C, HTML, CSS, JavaScript, Linux, API Development Fastapi",
        "Communication, Problem-solving, Teamwork, Adaptability"
    ]
}

export const projectsDetails = {
    /***
     * this objects contains the data fields for the 
     * professional experience section of the resume
     */

    name: "Online Payment Application",
    link: "https://github.com/CHIJIUBA/Payment-Application-VioPay",
    description: "Online payment application that enables users to make secure and seamless online transactions.",
    achievements: [
        "Developed dynamic components for the app and created a new landing page that streamlined customer experience",
        "Learned to connect and use MySQL in PHP and integrate Flutterwave APIs for seamless payment processing",
    ]
}

export const resumeInputsDetails = {
    /**
     * This objects maps the id of the inputs to the data
     * field that they manipulate
     */

    /*for the personal details fields*/
    fullNameInput: "fullName",
    addressInput: "address",
    emailInput: "email",
    phoneNumber: "phoneNumber",
    summaryInput: "profileSummary",
    linkedinput: "linkedInProfile",

    /*for the education details fields*/
    schoolInput: "school",
    degreeInput: "degree",
    locationInput: "location",
    courseWorkInput: "courseWork",
    startEdDateInput: "eduStartDate",
    endEdDateInput: "eduEndDate",

    /*for the experience details fields*/
    companyInput: "company",
    positionTitleInput: "positionTitle",
    exstartDateInput: "exStartDate",
    exendExDateInput: "exEndDate",
    exlocationInput: "exLocation",
    expDescriptionInput: "expDescription",
    skillDescriptionInput: "skills",

    /*for the projects details fields*/
    projectNameInput: "name",
    projectLinkInput: "link",
    projectDescriptionInput: "description",
    projectAchievementsInput: "achievements"
}