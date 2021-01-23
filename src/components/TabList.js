import React from 'react';
import atomize from "@quarkly/atomize";

const TabList = ({
	children,
	...props
}) => <div {...props}>
	{children}
</div>;

export default atomize(TabList)({
	name: "TabList",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "TabList — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});