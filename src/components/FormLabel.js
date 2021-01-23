import React from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from '@quarkly/components';
const Label = atomize.label();
const overrides = {
	'Label Text': {
		kind: 'Text',
		props: {
			mb: 5,
			mt: 5,
			children: 'Label:'
		}
	}
};

const FormLabel = ({
	htmlFor,
	text,
	...props
}) => {
	return <Label htmlFor={htmlFor} {...props}>
		      
		{text}
		    
	</Label>;
};

const propInfo = {
	htmlFor: {
		title: 'For',
		description: {
			ru: 'Идентификатор элемента, с которым следует установить связь.'
		},
		control: 'text'
	},
	text: {
		title: 'Text',
		description: {
			en: 'Теxt of label'
		},
		control: 'text'
	}
};
const defaultProps = {
	text: 'Label:'
};
export default atomize(FormLabel)({
	name: "FormLabel",
	kind: 'Text',
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "FormLabel — my awesome component"
	},
	propInfo,
	overrides
}, defaultProps);