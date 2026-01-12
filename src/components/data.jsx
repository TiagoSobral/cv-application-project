let cvData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  },
  education: [
    {
      id: crypto.randomUUID(),
      schoolName: '',
      studyCertification: '',
      studyDate: '',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      companyName: '',
      jobTitle: '',
      workDateStart: '',
      workDateEnd: '',
      description: '',
    },
  ],
};

const education = {
  id: '',
  schoolName: '',
  studyCertification: '',
  studyDate: '',
};

const experience = {
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

export { cvData, education, experience, dataElementGeneration };
