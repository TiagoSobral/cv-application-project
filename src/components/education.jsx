import GroupInputFields from './inputs';

export default function Education({ dataInfo, onChange, inputValues }) {
	return (
		<fieldset className="education">
			<Header className="title" titleText="Educational Experience" />
			<GroupInputFields
				dataInfo={dataInfo}
				onChange={onChange}
				inputValues={inputValues}
			/>
		</fieldset>
	);
}
