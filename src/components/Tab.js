import React from 'react';
import atomize from '@quarkly/atomize';
import { Button } from '@quarkly/widgets';
import { useTabs } from './Tabs';

const Tab = ({
	children,
	tabId,
	...props
}) => {
	const {
		setTabId,
		currentTabId,
		align
	} = useTabs();
	const active = currentTabId === tabId;

	const onClick = () => {
		setTabId(tabId);
	};

	return <Button
		role="tab"
		tabIndex="-1"
		aria-selected={active}
		color="black"
		background="none"
		border-radius="0"
		onClick={onClick}
		{...align === 'full width' && {
			width: '100%'
		}}
		{...active && {
			'border-bottom': 'solid 2px black',
			'margin-bottom': '-2px',
			tabIndex: 0
		}}
		{...props}
	>
		    
		{children}
		  
	</Button>;
};

export default atomize(Tab)({
	name: 'Tab',
	propInfo: {
		tabId: {
			control: 'input'
		}
	}
});