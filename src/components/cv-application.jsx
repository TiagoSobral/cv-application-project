export default function CvApplication() {
	return (
		<>
			<header>
				<h1>Cv Application</h1>
			</header>
			<main>
				<form key="application-form">
					<GeneralInformation />
					<Education />
					<Experience />
					<Button id="submit" type="submit" value="submit" text="Submit" />
				</form>
			</main>
		</>
	);
}

function GeneralInformation() {
	return (
		<>
			<Header className="title" titleText="Personal Information" />
			<Input id="firstName" text="First Name: " />
			<Input id="lastName" text="Last Name: " />
			<Input id="email" text="Email: " type="email" />
			<Input id="phoneNumber" text="Phone Number: " type="tel" />
		</>
	);
}

function Education() {
	return (
		<section className="education">
			<Header className="title" titleText="Educational Experience" />
			<Input id="schoolName" text="School: " />
			<Input id="studyCertification" text="Type: " />
			<Input id="studyDate" text="From: " type="month" />
		</section>
	);
}

function Experience() {
	return (
		<section className="experience">
			<Header className="title" titleText="Work Experience" />
			<Input id="companyName" text="Employer: " />
			<Input id="jobTitle" text="Job Title: " />
			<Input id="workDateStart" text="From: " />
			<Input id="workDateEnd" text="To: " />
			<JobDescription />
		</section>
	);
}

function Header({ className, titleText }) {
	return (
		<div className={className}>
			<h1>{titleText}</h1>
			<Button id="edit" type="button" value="edit" />
		</div>
	);
}

function Input({ type = 'text', id, text }) {
	return (
		<p>
			<label htmlFor={id}>{text}</label>
			<input type={type} id={id} />
		</p>
	);
}

function JobDescription() {
	return (
		<p>
			<label for="jobDescription">Description: </label>
			<textarea name="jobDescription" id="jobDescription"></textarea>
		</p>
	);
}

export function Button({ id, type = 'button', value, text = '' }) {
	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<button key={id} type={type} value={value} onClick={handleSubmit}>
			{text}
		</button>
	);
}
