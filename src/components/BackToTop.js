import React, { useState, useEffect } from 'react';
import atomize from '@quarkly/atomize';
import { Button, Icon, Box } from "@quarkly/widgets";
import { useOverrides } from '@quarkly/components';
import { Link, Element } from 'react-scroll';
import scroll from 'scroll';
import { FaArrowUp } from "react-icons/fa";
const defaultProps = {
	visibilityHeight: 50
};
const BackToTopLink = atomize(Link)();
const overrides = {
	backToTopButton: {
		props: {
			b: 15,
			r: 15,
			c: "--primary",
			bgc: "--lightD2",
			bdrs: 10,
			h: 40,
			w: 40
		}
	}
};
const config = {
	visibilityHeight: {
		title: 'Visibility Height',
		type: 'number',
		control: 'input',
		description: {
			en: 'Visability header'
		}
	}
};

const BackToTop = ({ ...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > visibilityHeight) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= visibilityHeight) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScrollTop);
	}, []);
	return <Box pos="relative" {...rest}>
		      
		<Element name="test">
			      
			{children}
			      
		</Element>
		      
		<BackToTopLink
			d="flex"
			p={0}
			jc="center"
			ai="center"
			pos="absolute"
			z={1000}
			v={true ? 'visible' : 'hidden'}
			to="test"
			onClick={() => scroll.top(children, 200)}
			{...override('backToTopButton')}
		>
			        
			<Icon category="fa" icon={FaArrowUp} />
			      
		</BackToTopLink>
		    
	</Box>;
};

export default atomize(BackToTop)({
	description: {
		en: 'Some component description'
	},
	propInfo: config
}, // configuration
defaultProps);