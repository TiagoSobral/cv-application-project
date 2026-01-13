import GroupInputFields from './inputs';
import { Header } from './cv-application';

export default function PersonalInformation({
  inputValues,
  errors,
  onChange,
  onBlur,
}) {
  return (
    <fieldset className="personalInfo">
      <Header className="title" titleText="Personal Information" />
      <GroupInputFields
        className="personalInfo"
        groupInfo={inputValues}
        errors={errors}
        onChange={onChange}
        onBlur={onBlur}
      />
    </fieldset>
  );
}
