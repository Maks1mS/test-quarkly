import React from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Button, Image, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const defaultImage = 'https://images.unsplash.com/photo-1606246082577-2329910ef82c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000';
const overrides = {
	'name': {
		kind: 'Button',
		props: {
			children: 'Card title'
		}
	}
};

const Tab = ({ ...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	return <Box {...props}>
		<Button {...override('name')} />
	</Box>;
};

const propInfo = {};
const defaultProps = {};
export default atomize(Tab)({
	name: 'Card',
	effects: {
		hover: ':hover'
	},
	overrides,
	normalize: true,
	mixins: true,
	description: {
		en: 'Cards contain content and actions about a single subject.'
	},
	propInfo
}, defaultProps);