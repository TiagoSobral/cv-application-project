import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Education({
  dataInfo,
  onChange,
  inputValues,
  onClick,
}) {
  return (
    <fieldset className="education">
      <Header className="title" titleText="Educational Experience" />
      {inputValues.education.children.map((inputsGroup) => (
        <GroupInputFields
          dataInfo={dataInfo}
          onChange={onChange}
          inputValues={inputValues}
          className="education"
          key={inputsGroup.id}
        />
      ))}
      <Button value="Add" onClick={onClick} className="education" />
    </fieldset>
  );
}
