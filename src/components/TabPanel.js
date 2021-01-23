import React from 'react';
import atomize from "@quarkly/atomize";

const TabPanel = props => <div {...props}>
	Say hello TabPanel
</div>;

export default atomize(TabPanel)({
	name: "TabPanel",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "TabPanel — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		key: {
			control: "input"
		}
	}
});