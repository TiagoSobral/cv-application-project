import { dataElementGeneration } from './data';

export default function CvApplication({
	inputValues,
	setInputValues,
	setPage,
}) {
	const elementsInfo = dataElementGeneration;

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
						dataInfo={elementsInfo.generalInfo}
						onChange={handleInput}
						inputValues={inputValues}
					/>
					<Education
						dataInfo={elementsInfo.education}
						onChange={handleInput}
						inputValues={inputValues}
					/>
					<Experience
						dataInfo={elementsInfo.work}
						onChange={handleInput}
						inputValues={inputValues}
					/>
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

function GeneralInformation({ dataInfo, onChange, inputValues }) {
	const generateInput = dataInfo.map((value) => (
		<Input
			type={findType(value.id)}
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));

	return (
		<fieldset className="personalInformation">
			<Header className="title" titleText="Personal Information" />
			{generateInput}
		</fieldset>
	);
}

function Education({ dataInfo, onChange, inputValues }) {
	const generateInput = dataInfo.map((value) => (
		<Input
			type={findType(value.id)}
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));
	return (
		<fieldset className="education">
			<Header className="title" titleText="Educational Experience" />
			{generateInput}
		</fieldset>
	);
}

function Experience({ dataInfo, onChange, inputValues }) {
	const generateInput = dataInfo.map((value) => (
		<Input
			type={findType(value.id)}
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));
	return (
		<fieldset className="experience">
			<Header className="title" titleText="Work Experience" />
			{generateInput}
			<JobDescription onChange={onChange} />
		</fieldset>
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

// helper function that returns the type of input correspondent to the id received.
function findType(id) {
	switch (id) {
		case 'email':
			return 'email';
		case 'phoneNumber':
			return 'tel';
		case 'studyDate':
			return 'number';
		case 'workDateStart':
			return 'month';
		case 'workDateEnd':
			return 'month';
		default:
			return 'text';
	}
}

export { Button };
