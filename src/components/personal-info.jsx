import GroupInputFields from './inputs';
import { Header } from './cv-application';

export default function PersonalInformation({ inputValues, onChange }) {
  return (
    <fieldset className="personalInfo">
      <Header className="title" titleText="Personal Information" />
      <GroupInputFields
        className="personalInfo"
        groupInfo={inputValues.personalInfo}
        onChange={onChange}
      />
    </fieldset>
  );
}
