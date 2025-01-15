import InputField from "../components/InputField";
import MySelect from "../components/Fields/MySelect";
import PublicPage from "../components/PublicPage";
import MyRadio from "../components/Fields/MyRadio";
import MyEmail from "../components/Fields/MyEmail";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconField from "../components/Fields/IconField";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MyPswrd from "../components/Fields/MyPswrd";
import MyPhone from "../components/Fields/MyPhone";
import MyMobile from "../components/Fields/MyMobile";

const Test = () => {
	const SelectOptions = [
		{
			label: "Option1 ",
			value: "Option1",
		},
		{
			label: "Option2 ",
			value: "Option2",
		},
		{
			label: "Option3 ",
			value: "Option3",
		},
	];
	const RadioOptions = ["Mr", "Mrs"];
	return (
		<div>
			<MySelect Options={SelectOptions} Label="MySelect" />
			<MyRadio Options={SelectOptions} Label="MySelect" />
			<MyEmail />
			<MyPswrd />
			<MyPhone />
			<MyMobile />
			<IconField
				label="Email"
				placeholder="Email"
				name="Email"
				Start={<AlternateEmailIcon />}
				// End={<VpnKeyIcon />}
			/>
		</div>
	);
};

export default Test;
