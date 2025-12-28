import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Experience({
	dataInfo,
	onChange,
	inputValues,
	onClick,
}) {
	return (
		<fieldset className="experience">
			<Header className="title" titleText="Work Experience" />
			<GroupInputFields
				dataInfo={dataInfo}
				onChange={onChange}
				inputValues={inputValues}
				className="experience"
			/>
			<JobDescription onChange={onChange} />
			<Button value="Add" onClick={onClick} className="education" />
		</fieldset>
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
