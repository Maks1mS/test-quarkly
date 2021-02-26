import React from 'react';
import atomize from "@quarkly/atomize";

const FacebookComment = props => <div {...props}>
	Say hello FacebookComment
</div>;

export default atomize(FacebookComment)({
	name: "FacebookComment",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "FacebookComment — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});