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
			{inputValues.experience.children.map(() => (
				<GroupInputFields
					dataInfo={dataInfo}
					onChange={onChange}
					inputValues={inputValues}
					className="experience"
				/>
			))}
			<Button value="Add" onClick={onClick} className="experience" />
		</fieldset>
	);
}
