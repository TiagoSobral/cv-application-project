export let cvData = {
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

export const dataElementGeneration = {
  personalInfo: [
    { title: 'First Name: ', id: 'firstName' },
    { title: 'Last Name: ', id: 'lastName' },
    { title: 'Email: ', id: 'email' },
    { title: 'Phone Number: ', id: 'phoneNumber' },
  ],
  education: [
    { title: 'School: ', id: 'schoolName' },
    {
      title: 'Certification: ',
      id: 'studyCertification',
    },
    { title: 'Year: ', id: 'studyDate' },
  ],
  experience: [
    { title: 'Employer: ', id: 'companyName' },
    { title: 'Title: ', id: 'jobTitle' },
    { title: 'From: ', id: 'workDateStart' },
    { title: 'To: ', id: 'workDateEnd' },
    { title: 'Description: ', id: 'jobDescription' },
  ],
};
