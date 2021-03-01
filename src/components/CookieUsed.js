import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button, Text } from '@quarkly/widgets';
const item = 'accept_cookies';

const getAPI = () => (window || global)?.QAPI || {};

const CookieUsed = props => {
	const [show, setShow] = useState(false);
	console.log(getAPI().mode);

	const handleClick = () => {
		localStorage.setItem(item, true);
		setShow(false);
	};

	useEffect(() => {
		const acceptCookies = localStorage.getItem(item) || false;
		setShow(!acceptCookies);
	}, []);
	return <Box display={show ? 'block' : 'none'} background="--color-primary" {...props}>
		    
		<Text>
			We use cookies to improve your experience on our site.
    By using our site, you consent to out use of cookies.
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