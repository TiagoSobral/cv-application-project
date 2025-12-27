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
				schoolName: '',
				studyCertification: '',
				studyDate: '',
			},
		],
	},
	workExperience: {
		children: [
			{
				companyName: '',
				jobTitle: '',
				workDateStart: '',
				workDateEnd: '',
			},
		],
	},
};

export const dataElementGeneration = {
	generalInfo: [
		{ title: 'First Name: ', id: 'firstName' },
		{ title: 'Last Name: ', id: 'lastName' },
		{ title: 'Email: ', id: 'email' },
		{ title: 'Phone Number: ', id: 'phoneNumber' },
	],
	education: [
		{ title: 'School: ', id: 'schoolName' },
		{ title: 'Certification: ', id: 'studyCertification' },
		{ title: 'Year: ', id: 'studyDate' },
	],
	work: [
		{ title: 'Employer: ', id: 'companyName' },
		{ title: 'Title: ', id: 'jobTitle' },
		{ title: 'From: ', id: 'workDateStart' },
		{ title: 'To: ', id: 'workDateEnd' },
	],
};
