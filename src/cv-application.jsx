export default function CvApplication() {
	return (
		<>
			<header>
				<h1>Cv Application</h1>
			</header>
			<main>
				<GeneralInformation />
				<Education />
			</main>
		</>
	);
}

function GeneralInformation() {
	return (
		<section key="personalInformation">
			<h1>Personal Information</h1>
			<p>
				<label for="firstName">First Name: </label>
				<input id="firstName" type="text" />
			</p>
			<p>
				<label for="LastName">Last Name: </label>
				<input id="LastName" type="text" />
			</p>
			<p>
				<label for="email">Email: </label>
				<input id="email" type="email" />
			</p>
			<p>
				<label for="phoneNumber">Phone Number: </label>
				<input id="phoneNumber" type="tel" />
			</p>
		</section>
	);
}

function Education() {
	return (
		<section key="education">
			<h1>Educational Experience</h1>
			<p>
				<label for="schoolName">School Name: </label>
				<input id="schoolName" type="text" />
			</p>
			<p>
				<label for="studyTitle">Type: </label>
				<input id="studyTitle" type="text" />
			</p>
			<p>
				<label for="studyDate">Date: </label>
				<input id="studyDate" type="text" />
			</p>
		</section>
	);
}
