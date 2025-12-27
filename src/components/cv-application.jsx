import { dataElementGeneration } from './data';
import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';

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
					<PersonalInformation
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

function Header({ className, titleText }) {
	return (
		<div className={className}>
			<h1>{titleText}</h1>
		</div>
	);
}

export { Button };
