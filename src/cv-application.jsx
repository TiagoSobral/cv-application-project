export default function CvApplication() {
	return (
		<>
			<header>
				<h1>Cv Application</h1>
			</header>
			<main>
				<GeneralInformation />
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
