import React, { useRef } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useTabs } from './Tabs';
const alignConvert = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	'full width': 'center'
};

const TabList = ({
	children,
	...props
}) => {
	const {
		align
	} = useTabs();
	const ref = useRef(null);

	const onKeyDown = e => {
		const {
			target,
			key
		} = e;

		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
			return;
		}

		e.preventDefault();
		const htmlChildren = ref.current.children;
		const nextElement = {
			ArrowLeft: target.previousElementSibling || htmlChildren[htmlChildren.length - 1],
			ArrowRight: target.nextElementSibling || htmlChildren[0],
			Home: htmlChildren[0],
			End: htmlChildren[htmlChildren.length - 1]
		}[key];
		if (!nextElement) return;
		nextElement.focus();
		nextElement.click();
	};

	return <Box
		ref={ref}
		role="tablist"
		display="flex"
		justify-content={alignConvert[align]}
		border-bottom="solid 2px rgb(186, 186, 186)"
		onKeyDown={onKeyDown}
		{...props}
	>
		    
		{children}
		  
	</Box>;
};

export default atomize(TabList)({
	name: 'Tab',
	description: {}
});