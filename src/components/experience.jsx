import GroupInputFields from './inputs';

export default function Experience({ dataInfo, onChange, inputValues }) {
	return (
		<fieldset className="experience">
			<Header className="title" titleText="Work Experience" />
			<GroupInputFields
				dataInfo={dataInfo}
				onChange={onChange}
				inputValues={inputValues}
			/>
			<JobDescription onChange={onChange} />
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
