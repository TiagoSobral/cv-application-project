export default function CvApplication({
	inputValues,
	setInputValues,
	setPage,
}) {
	function handleInput(e) {
		const id = e.target.id;
		const value = e.target.value;
		setInputValues({ ...inputValues, [id]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setPage(1);
	}

	return (
		<>
			<header>
				<h1>Cv Application</h1>
			</header>
			<main>
				<form className="application">
					<GeneralInformation
						onChange={handleInput}
						inputValues={inputValues}
					/>
					<Education onChange={handleInput} inputValues={inputValues} />
					<Experience onChange={handleInput} inputValues={inputValues} />
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

function GeneralInformation({ onChange, inputValues }) {
	return (
		<>
			<Header className="title" titleText="Personal Information" />
			<Input
				id="firstName"
				text="First Name: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="lastName"
				text="Last Name: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="email"
				text="Email: "
				type="email"
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="phoneNumber"
				text="Phone Number: "
				type="tel"
				onChange={onChange}
				inputValues={inputValues}
			/>
		</>
	);
}

function Education({ onChange, inputValues }) {
	return (
		<section className="education">
			<Header className="title" titleText="Educational Experience" />
			<Input
				id="schoolName"
				text="School: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="studyCertification"
				text="Type: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="studyDate"
				text="From: "
				type="month"
				onChange={onChange}
				inputValues={inputValues}
			/>
		</section>
	);
}

function Experience({ onChange, inputValues }) {
	return (
		<section className="experience">
			<Header className="title" titleText="Work Experience" />
			<Input
				id="companyName"
				text="Employer: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="jobTitle"
				text="Job Title: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="workDateStart"
				text="From: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<Input
				id="workDateEnd"
				text="To: "
				onChange={onChange}
				inputValues={inputValues}
			/>
			<JobDescription onChange={onChange} />
		</section>
	);
}

function Header({ className, titleText }) {
	return (
		<div className={className}>
			<h1>{titleText}</h1>
		</div>
	);
}

function Input({ type = 'text', id, text, onChange, inputValues }) {
	return (
		<p>
			<label htmlFor={id}>{text}</label>
			<input type={type} id={id} onChange={onChange} value={inputValues[id]} />
		</p>
	);
}

function JobDescription({ onChange }) {
	return (
		<p>
			<label htmlFor="jobDescription">Description: </label>
			<textarea
				name="jobDescription"
				id="jobDescription"
				onChange={onChange}
			></textarea>
		</p>
	);
}

function Button({ type = 'button', value, text = '', onClick }) {
	return (
		<button type={type} value={value} onClick={onClick}>
			{text}
		</button>
	);
}

export { Button };
