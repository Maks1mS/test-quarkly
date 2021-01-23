import React from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";

const Tabs = ({ ...props
}) => {
	const {
		children
	} = useOverrides(props, {});
	children.forEach(el => {
		if (el) {
			console.log(el.type);
		}
	});
	return <div {...props}>
		{children}
	</div>;
};

export default atomize(Tabs)({
	name: "Tabs",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Tabs — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});