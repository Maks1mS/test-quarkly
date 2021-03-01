import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button, Text } from '@quarkly/widgets';
const item = 'accept_cookies';

const getAPI = () => (global || window)?.QAPI || {};

const CookieUsed = props => {
	const [show, setShow] = useState(false);
	console.log(getAPI().mode);

	const handleClick = () => {
		localStorage.setItem(item, true);
		if (getAPI().mode === 'development') return;
		setShow(false);
	};

	useEffect(() => {
		const acceptCookies = localStorage.getItem(item) || false;

		if (getAPI().mode === 'development') {
			setShow(true);
			return;
		}

		setShow(!acceptCookies);
	}, []);
	return <Box
		display={show ? 'block' : 'none'}
		background="--color-primary"
		text-align="center"
		padding="10px"
		{...props}
	>
		    
		<Text color="--color-light">
			We use cookies to improve your experience on our site.
    By using our site, you consent to out use of cookies.
		</Text>
		    
		<Button color="--color-primary" background="--color-light" onClick={handleClick}>
			Accept
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