import PaperForm from "../components/PaperForm";
import InputField from "../components/InputField";

const Test = () => {
	const SelectOptions = ["Option1", "Option2", "Option3"];
	const RadioOptions = ["Mr", "Mrs"];
	return (
		<div
		// style={{
		// 	display: "flex",
		// 	justifyContent: " center",
		// 	alignItems: "center",
		// 	height: "100vh",
		// 	width: "500px",
		// 	margin: "auto",
		// }}
		>
			<PaperForm typeForm="register" />
			{/* <InputField
				typeInput="Radio"
				InputLabel="Select"
				Options={SelectOptions}
			/> */}
		</div>
	);
};

export default Test;
