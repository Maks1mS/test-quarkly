import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button, Text } from '@quarkly/widgets';
const item = 'accept_cookies';

const getAPI = () => (window || global)?.QAPI || {};

const CookieUsed = props => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		if (getAPI().mode === 'development') {
			return;
		}

		localStorage.setItem(item, true);
		setShow(false);
	};

	useEffect(() => {
		if (getAPI().mode === 'development') {
			setShow(true);
			return;
		}

		const acceptCookies = localStorage.getItem(item) || false;
		setShow(!acceptCookies);
	}, []);
	return <Box display={show ? 'block' : 'none'} text-align="center" {...props}>
		    
		<Text margin="0">
			Hello!
		</Text>
		    
		<Button onClick={handleClick}>
			Agree
		</Button>
		  
	</Box>;
};

export default atomize(CookieUsed)({
	name: 'CookieUsed',
	effects: {
		hover: ':hover'
	},
	description: {
		// paste here description for your component
		en: 'CookieUsed — my awesome component'
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: 'input'
		}
	}
});