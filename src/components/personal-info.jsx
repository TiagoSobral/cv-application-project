import GroupInputFields from './inputs';

export default function PersonalInformation({
	dataInfo,
	onChange,
	inputValues,
}) {
	return (
		<fieldset className="personalInformation">
			<Header className="title" titleText="Personal Information" />
			<GroupInputFields
				dataInfo={dataInfo}
				onChange={onChange}
				inputValues={inputValues}
			/>
		</fieldset>
	);
}
