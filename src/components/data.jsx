let cvData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  },
  education: {
    children: [
      {
        id: crypto.randomUUID(),
        schoolName: '',
        studyCertification: '',
        studyDate: '',
      },
    ],
  },
  experience: {
    children: [
      {
        id: crypto.randomUUID(),
        companyName: '',
        jobTitle: '',
        workDateStart: '',
        workDateEnd: '',
        description: '',
      },
    ],
  },
};

const educationChild = {
  id: '',
  schoolName: '',
  studyCertification: '',
  studyDate: '',
};

const experienceChild = {
  id: '',
  companyName: '',
  jobTitle: '',
  workDateStart: '',
  workDateEnd: '',
  description: '',
};

const dataElementGeneration = {
  personalInfo: {
    firstName: 'First Name: ',
    lastName: 'Last Name: ',
    email: 'Email: ',
    phoneNumber: 'Phone Number: ',
  },
  education: {
    schoolName: 'School: ',
    studyCertification: 'Certification: ',
    studyDate: 'Year: ',
  },
  experience: {
    companyName: 'Employer: ',
    jobTitle: 'Title: ',
    workDateStart: 'From: ',
    workDateEnd: 'To: ',
    description: 'Description: ',
  },
};

export { cvData, educationChild, experienceChild, dataElementGeneration };
