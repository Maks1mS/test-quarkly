import React from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import atomize from '@quarkly/atomize';
import { useTabs } from './Tabs';

const TabPanels = ({ ...props
}) => {
	const {
		currentTabId
	} = useTabs();
	const {
		children
	} = useOverrides(props, {}); //console.log(props.children)
	//console.log(children)

	let tab = React.Children.map(children, child => {
		return child;
	});
	console.log(tab);

	if (tab.length === 0) {
		tab = 'Set correct tabId!';
	}

	return <Box {...props}>
		{tab}
	</Box>;
};

export default atomize(TabPanels)({
	name: 'Tab',
	description: {}
});