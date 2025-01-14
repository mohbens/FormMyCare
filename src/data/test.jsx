import InputField from "../components/InputField";
import MySelect from "../components/Fields/MySelect";
import PublicPage from "../components/PublicPage";
import MyRadio from "../components/Fields/MyRadio";

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
		</div>
	);
};

export default Test;
