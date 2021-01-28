import React, { useState, createContext, useContext } from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
const TabsContext = createContext({
	currentTabId: '',
	setTabId: '',
	align: 'start'
});
export const useTabs = () => useContext(TabsContext);
export const getCorrectChildren = ({
	children
}) => React.Children.toArray(children).filter(c => c.key !== '.$placeholder');

const Tabs = ({
	defaultTab,
	align,
	children,
	...props
}) => {
	const [currentTabId, setTabId] = useState(defaultTab);
	const value = {
		currentTabId,
		setTabId,
		align
	};
	return <Box {...props}>
		      
		<TabsContext.Provider value={value}>
			        
			{children}
			      
		</TabsContext.Provider>
		    
	</Box>;
};

const propInfo = {
	defaultTab: {
		title: 'Default Tab',
		description: {
			en: 'Set default tab (required)'
		},
		control: 'input'
	},
	align: {
		title: 'Align',
		description: {
			en: 'Where to align'
		},
		control: 'select',
		variants: ['start', 'center', 'end', 'full width']
	}
};
const defaultProps = {
	align: 'start'
};
export default atomize(Tabs)({
	name: 'Tabs',
	effects: {
		hover: ':hover'
	},
	normalize: true,
	mixins: true,
	description: {
		en: 'Tabs'
	},
	propInfo
}, defaultProps);