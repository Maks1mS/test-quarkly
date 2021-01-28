import React from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';

const TabPanel = ({
	children,
	...props
}) => {
	return <Box tabIndex="0" {...props}>
		{children}
	</Box>;
};

export default atomize(TabPanel)({
	name: 'TabPanel',
	propInfo: {
		tabId: {
			control: 'input'
		}
	}
});