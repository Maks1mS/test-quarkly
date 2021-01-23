import React from 'react';
import atomize from "@quarkly/atomize";
import { Button } from "@quarkly/widgets";

const Tab = props => <Button {...props}>
	Say hello Tab
</Button>;

export default atomize(Tab)({
	name: "Tab",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Tab — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});