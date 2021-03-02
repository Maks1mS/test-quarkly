import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button, Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const item = 'accept_cookies';

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const overrides = {
	Text: {
		kind: 'Text',
		props: {
			// Мы используем cookies для того, чтобы обеспечить наилучшую работу нашего сайта. Продолжая использовать наш сайт, Вы соглашаетесь с использованием cookie-файлов.
			children: 'We use cookies to improve your experience on our site. By using our site, you consent to out use of cookies.'
		}
	},
	Button: {
		kind: 'Button',
		props: {
			children: 'Accept'
		}
	}
};

const CookieUsed = ({
	variant,
	...props
}) => {
	const isDev = getAPI().mode === 'development';
	const [show, setShow] = useState(localStorage.getItem(item) || isDev);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);

	const handleClick = () => {
		if (isDev) return;
		localStorage.setItem(item, true);
		setShow(false);
	};

	return <Box
		position="fixed"
		width="100%"
		bottom="0"
		display={show ? 'flex' : 'none'}
		flex-direction={variant === "Vertical" ? 'column' : 'row'}
		justify-content="center"
		align-items="center"
		background="--color-primary"
		padding="10px 0"
		{...rest}
	>
		    
		<Text color="--color-light" vertical-align="middle" {...override('Text')} />
		    
		<Button
			margin-left={variant === 'Horizontal' && '10px'}
			color="--color-primary"
			background="--color-light"
			onClick={handleClick}
			{...override('Button')}
		/>
		  
	</Box>;
};

const propInfo = {
	variant: {
		control: "radio-group",
		variants: ["Vertical", "Horizontal"]
	}
};
const defaultProps = {
	variant: "Vertical"
};
export default atomize(CookieUsed)({
	name: 'CookieUsed',
	effects: {
		hover: ':hover'
	},
	overrides,
	description: {
		// paste here description for your component
		en: 'CookieUsed — my awesome component'
	},
	propInfo
}, defaultProps);