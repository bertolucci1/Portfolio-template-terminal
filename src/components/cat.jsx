import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"Mi nombre es Elias Costilla, tengo 24 años, soy un desarrollador web junior y me recibí de Técnico Electromecánico en 2018, mi pasión es la música y el deporte competitivo, me dedico a dar soporte técnico y en mis tiempo libres hago reparaciones de hardware en mi taller.",
		education:
			"Estudié en la Escuela Técnica N° 1 de la localidad de La Unión en la provincia de Buenos Aires, Argentina. Me recibí de Técnico Electromecánico en 2018. Actualmente estoy estudiando la carrera de Tecnicatura Universitaria en Programación en la Universidad Nacional de Almirante Brown, Argentina. Soy Técnico en dipositivos electrónicos inteligentes, me recibi en 2018 en el CFP N° 402 Ing. Franco Speranza de la Localidad de Spegazzini, Provincia de Buenos Aires, Argentina.",
		projects: [
			{
				projectName: "Generador de ciudades en blender",
				liveDemo: "https://github.com/bertolucci1/template-generador-de-ciudades-blender",
				linkToGithub: "https://github.com/bertolucci1/template-generador-de-ciudades-blender"
			},
			{
				projectName: "Sistema Dinamico de Parkour",
				liveDemo: "https://github.com/bertolucci1/Dynamic-Parkour-System",
				linkToGithub: "https://github.com/bertolucci1/Dynamic-Parkour-System"
			}
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/bertolucci1"
			},

			{
				platform: "Linkedin",
				link: "https://ar.linkedin.com/in/eliascostillacovey"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "projects" || lower === "project") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="_blank">
										Live Link
									</a>
									<a href={everyProject.linkToGithub} target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contacto" ||
				lower === "contact" ||
				lower === "contacta"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="_blank">
										{everySocial.platform}
									</a>
									<a href="https://github.com/bertolucci1" target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">La opcion ingresada es invalida</p>;
			}
		} else {
			return <p className="result">La opcion ingresada es invalida</p>;
		}
	};
}

export default Cat;
