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
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));

	return (
		<>
			<Header className="title" titleText="Personal Information" />
			{generateInput}
		</>
	);
}

function Education({ dataInfo, onChange, inputValues }) {
	const generateInput = dataInfo.map((value) => (
		<Input
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));
	return (
		<section className="education">
			<Header className="title" titleText="Educational Experience" />
			{generateInput}
		</section>
	);
}

function Experience({ dataInfo, onChange, inputValues }) {
	const generateInput = dataInfo.map((value) => (
		<Input
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));
	return (
		<section className="experience">
			<Header className="title" titleText="Work Experience" />
			{generateInput}
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
