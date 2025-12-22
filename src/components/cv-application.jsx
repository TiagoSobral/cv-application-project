import { useState } from 'react';

export default function CvApplication() {
	const [inputValues, setInputValues] = useState({});

	function handleInput(e) {
		const id = e.target.id;
		const value = e.target.value;
		setInputValues({ ...inputValues, [id]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<>
			<header>
				<h1>Cv Application</h1>
			</header>
			<main>
				<form className="application">
					<GeneralInformation onChange={handleInput} />
					<Education onChange={handleInput} />
					<Experience onChange={handleInput} />
					<Button
						id="submit"
						type="submit"
						value="submit"
						text="Submit"
						onClick={handleSubmit}
					/>
				</form>
			</main>
		</>
	);
}

function GeneralInformation({ onChange }) {
	return (
		<>
			<Header className="title" titleText="Personal Information" />
			<Input id="firstName" text="First Name: " onChange={onChange} />
			<Input id="lastName" text="Last Name: " onChange={onChange} />
			<Input id="email" text="Email: " type="email" onChange={onChange} />
			<Input
				id="phoneNumber"
				text="Phone Number: "
				type="tel"
				onChange={onChange}
			/>
		</>
	);
}

function Education({ onChange }) {
	return (
		<section className="education">
			<Header className="title" titleText="Educational Experience" />
			<Input id="schoolName" text="School: " onChange={onChange} />
			<Input id="studyCertification" text="Type: " onChange={onChange} />
			<Input id="studyDate" text="From: " type="month" onChange={onChange} />
		</section>
	);
}

function Experience({ onChange }) {
	return (
		<section className="experience">
			<Header className="title" titleText="Work Experience" />
			<Input id="companyName" text="Employer: " onChange={onChange} />
			<Input id="jobTitle" text="Job Title: " onChange={onChange} />
			<Input id="workDateStart" text="From: " onChange={onChange} />
			<Input id="workDateEnd" text="To: " onChange={onChange} />
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

function Input({ type = 'text', id, text, onChange }) {
	return (
		<p>
			<label htmlFor={id}>{text}</label>
			<input type={type} id={id} onChange={onChange} />
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

export function Button({ id, type = 'button', value, text = '', onClick }) {
	return (
		<button key={id} type={type} value={value} onClick={onClick}>
			{text}
		</button>
	);
}
