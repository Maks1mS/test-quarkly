import React from 'react';
import atomize from "@quarkly/atomize";
import { useFormContext } from "react-hook-form";

const FormInput = ({
	children,
	name,
	...props
}) => {
	const {
		register
	} = useFormContext(); // retrieve all hook methods

	return <input ref={register} name={name} {...props} />; // return <input name="test" {...props} />;
};

const propInfo = {
	name: {
		control: "input"
	}
};
export default atomize(FormInput)({
	name: "FormInput",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "FormInput — my awesome component"
	},
	propInfo
});