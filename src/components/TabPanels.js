import React from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import atomize from '@quarkly/atomize';
import { useTabs, getCorrectChildren } from './Tabs';

const TabPanels = ({ ...props
}) => {
	const {
		currentTabId
	} = useTabs();
	const children = getCorrectChildren(props);
	let tab = React.Children.map(children, child => {
		console.log(child.props);
		return child;
	});

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