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
		console.log(key);

		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
			return;
		}

		e.preventDefault();
		const nextElement = {
			ArrowLeft: target.previousElementSibling || ref.current.lastChild,
			ArrowRight: target.nextElementSibling || ref.current.firstChild,
			Home: ref.current.firstChild,
			End: ref.current.lastChild
		}[key];
		console.log(nextElement);
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