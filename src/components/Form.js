import React from 'react';
import atomize from "@quarkly/atomize";
import { useForm, FormProvider } from "react-hook-form";
import { useOverrides } from '@quarkly/components';
const StyledForm = atomize.form();

const Form = props => {
	const methods = useForm();
	const {
		override,
		children,
		rest
	} = useOverrides(props, {});
	const scriptURL = "https://script.google.com/macros/s/AKfycbwMjJcH5cUfkpNP0MwWoCvnhyt2uNQHcRGYQJiJ2DnZ82n0DLV2/exec";

	const onSubmit = data => {
		fetch(scriptURL, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	};

	return <FormProvider {...methods}>
		      
		<StyledForm p="10px" onSubmit={methods.handleSubmit(onSubmit)} {...props}>
			        
			{children}
			      
		</StyledForm>
		    
	</FormProvider>;
};

export default atomize(Form)({
	name: "Form",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Form — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});