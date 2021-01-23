import React from 'react';
import atomize from "@quarkly/atomize";

const TabPanels = ({
	children,
	...props
}) => <div {...props}>
	{children}
</div>;

const AtomizedTabPanels = atomize(TabPanels)({
	name: "TabPanels",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "TabPanels — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});
AtomizedTabPanels.tabsRole = 'TabPanels';
export default AtomizedTabPanels;