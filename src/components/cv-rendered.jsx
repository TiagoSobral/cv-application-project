import '../styles/cv-rendered.css';
import '../index.css';
import Button from './buttons.jsx';
import { format } from 'date-fns';

export default function CvRendered({ form, onEdit }) {
  const personalInfo = form.personalInfo;
  const education = form.education;
  const experience = form.experience;

  return (
    <div className="renderPage">
      <AboutMe
        firstName={personalInfo.firstName}
        LastName={personalInfo.lastName}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
      />
      <RenderedEducation children={education} />
      <RenderedWork children={experience} />
      <div className="edit">
        <Button className="editBtn" value="edit" text="Edit" onClick={onEdit} />
      </div>
    </div>
  );
}

function AboutMe({ firstName, LastName, email, phoneNumber }) {
  const emailLink = `mailito:${email}`;
  const phoneLink = `tel:${phoneNumber}`;
  return (
    <section className="personalInfo">
      <h1 className="personName">
        {firstName} {LastName}
      </h1>
      <ul className="contacts">
        <li>
          <a href={emailLink}>{email}</a>
        </li>
        <li>
          <a href={phoneLink}>{phoneNumber}</a>
        </li>
      </ul>
    </section>
  );
}

function RenderedEducation({ children }) {
  return (
    <section className="education">
      <h1>Education</h1>
      {children.map((child) => (
        <ul className="school" key={child.id}>
          <li className="schoolName">
            <b>{child.schoolName}</b>
          </li>
          <li className="certification">{child.studyCertification}</li>
          <li className="date">{child.studyDate}</li>
        </ul>
      ))}
    </section>
  );
}

function RenderedWork({ children }) {
  return (
    <section className="experience">
      <h1>Work Experience</h1>
      {children.map((child) => (
        <ul className="job" key={child.id}>
          <li className="jobTitle">{child.jobTitle}</li>
          <li className="workDate">
            {format(new Date(child.workDateStart), 'MMM yyyy')} {' - '}
            {format(new Date(child.workDateEnd), 'MMM yyyy')}
          </li>
          <li className="companyName">{child.companyName}</li>
          <li className="jobDescription">{child.description}</li>
        </ul>
      ))}
    </section>
  );
}
