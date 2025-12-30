import '../styles/cv-rendered.css';
import '../index.css';
import Button from './buttons.jsx';
import { format } from 'date-fns';

export default function CvRendered({ form, changePage }) {
  const personalInfo = form.personalInfo;
  const education = form.education.children;
  const experience = form.experience.children;

  function handleEdit() {
    changePage(0);
  }

  return (
    <>
      <AboutMe
        firstName={personalInfo.firstName}
        LastName={personalInfo.lastName}
        email={personalInfo.email}
        phoneNumber={personalInfo.phoneNumber}
      />
      <RenderedEducation children={education} />
      <RenderedWork children={experience} />
      <Button className="aboutBtn" value="edit" onClick={handleEdit} />
    </>
  );
}

function AboutMe({ firstName, LastName, email, phoneNumber }) {
  const emailLink = `mailito:${email}`;
  const phoneLink = `tel:${phoneNumber}`;
  return (
    <>
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
    </>
  );
}

function RenderedEducation({ children }) {
  return (
    <section className="education">
      <h1>Education</h1>
      {children.map((child) => (
        <ul className="school" key={child.id}>
          <li>
            <b>{child.schoolName}</b>
          </li>
          <li>{child.studyCertification}</li>
          <li>{child.studyDate}</li>
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
          <li>{child.jobTitle}</li>
          <li>
            {format(new Date(child.workDateStart), 'MMM-yyyy')} {' - '}
            {format(new Date(child.workDateEnd), 'MMM-yyyy')}
          </li>
          <li>{child.companyName}</li>
          <li>{child.description}</li>
        </ul>
      ))}
    </section>
  );
}
