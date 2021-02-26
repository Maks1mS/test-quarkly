import React from 'react';
import atomize from "@quarkly/atomize";

const Gallery = ({
	children,
	...props
}) => <div {...props}>
	{children}
</div>;

export default atomize(Gallery)({
	name: "Gallery",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Gallery — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});