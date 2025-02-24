import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// {t("")}   const { t } = useTranslation();
const resources = {
	en: {
		translation: {
			titles: {
				titleB: "Welcome to ",
				titleR: "MyCareFlex",
				titlePRegister: "Create your account",
			},
			titleB: "Welcome to ",
			titleR: "MyCareFlex",
			titlePRegister: "Create your account",
			gender: "Gender",
			male: "Mr.",
			female: "Mrs.",
			language: "Language",
			french: "French",
			english: "English",
			firstName: "First Name ",
			lastName: "Last Name",
			profession: "Profession",
			CHD: "Dentist Surgeon",
			speciality: "Speciality",
			GD: "General Dentist",
			Endo: "Endodontist",
			Maxilo: "Maxillofacial Surgeon",
			Ortho: "Orthodontist",
			Perio: "Periodontist",
			Pedod: "Pedodontist",
			Country: "Country",
			CountFr: "France",
			CountBel: "Belgium",
			city: "City",
			CP: "PostCode",
			number: "Number",
			box: "Box",
			adress: "Address",
			phone: "Phone",
			mobile: "Mobile",
			email: "Email",
			confirmation: "Confirmation",
			BtnRegister: "CREAT YOUR ACCOUNT",
			RegisterLink1: "Already a member ? Log in",
			//////////////////////////////////////
			titlePLogin: "Please log in",
			psw: "Password",
			StayCo: "Stay connected",
			btnLogin: "Log IN",
			LoginLink1: "Forgot password?",
			LoginLink2: "Not a member yet ?",

			////////////////Forgot///////////////////
			titlePForgot: "Request a new password",
			btnForgot: "RESET",
			ForgotLink1: "Log In",
			ForgotLink2: "Not a member yet ?",
			/////////////////ResetPsw///////////////////////
			titlePReset: "Reset password",
			TextRstPsw:
				"Please enter a new password that meets the following requirements:",
			Req12: "At least 12 characters",
			ReqUprCase: "At least 1 uppercase letter",
			ReqLwrCase: "At least 1 lowercase letter",
			ReqDigit: "At least 1 digit",
			ReqSpetial: "At least 1 special character",
			ReqMatchPsw: "Confirmation must match the password",
			ResetBtn: "SEND",

			////////////////errors//////////////////
			Required: "Required field",
			InvalidEmail: "Invalid email",
			EmailConf: "Confirmation must match the email",
			Phone10d: "Must be 10 characters",
		},
	},
	fr: {
		translation: {
			////////////////Register///////////////////
			titleB: "Bienvenue sur ",
			titleR: "MyCareFlex",
			titlePRegister: "Créer votre compte",
			gender: "Civilité",
			male: "M.",
			female: "Mme.",
			language: "Langue",
			french: "Frençais",
			english: "Anglais",
			firstName: "Prénom",
			lastName: "Nom",
			profession: "Profession",
			CHD: "Chirurgien Dentiste",
			speciality: "Spécialité",
			GD: "Dentiste Généraliste",
			Endo: "Endodontiste",
			Maxilo: "Chirurgien Maxillo-Facial",
			Ortho: "Orthodontiste",
			Perio: "Periodontiste",
			Pedod: "Pedodontiste",
			Country: "Pays",
			CountFr: "France",
			CountBel: "Belgique",
			city: "Ville",
			CP: "CP",
			number: "Numéro",
			box: "Boîte",
			adress: "Adresse",
			phone: "Telephone",
			mobile: "Mobile",
			email: "Email",
			confirmation: "Confirmation",
			BtnRegister: "Créer Votre Compte",
			RegisterLink1: "Dejé membre? Sidentifier",
			////////////////Login///////////////////
			titlePLogin: "Veuillez vous identifier",
			psw: "Mot de passe",
			StayCo: "Rester connecté",
			btnLogin: "S'identifier",
			LoginLink1: "Forgot password?",
			LoginLink2: "Not a member yet ?",
			////////////////Forgot///////////////////
			titlePForgot: "Demander un nouveau mot de passe",
			btnForgot: "Réinitialiser",
			ForgotLink1: "S'identifier",
			ForgotLink2: "Pas encore membre?",
			/////////////////ResetPsw///////////////////////
			titlePReset: "Réinitialiser le mot de passe",
			TextRstPsw:
				"Veuillez renseigner un nouveau mot de passe qui respecte les contraintes suivantes:",
			Req12: "Au moins 12 caractères",
			ReqUprCase: "Au moins 1 majuscule",
			ReqLwrCase: "Au moins 1 minuscule",
			ReqDigit: "Au moins 1 chiffre",
			ReqSpetial: "Au moins 1 caractère spécial",
			ReqMatchPsw: "La confirmation doit correspondre au mot de passe",
			ResetBtn: "ENVOYER",

			////////////////errors//////////////////
			Required: "champ requis",
			InvalidEmail: "email invalide",
			EmailConf: "La confirmation doit correspondre à l'email",
			Phone10d: "Doit être de 10 caractères",
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "fr",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
