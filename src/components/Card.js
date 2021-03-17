import React from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Button, Image, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { FaDiceD6 } from "react-icons/fa";
const defaultImage = 'https://images.unsplash.com/photo-1606246082577-2329910ef82c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000';
const overrides = {
	'Card Title': {
		kind: 'Text',
		props: {
			"children": "Card title"
		}
	},
	'Card Text': {
		kind: 'Text',
		props: {
			children: 'Card text'
		}
	},
	'Card Image': {
		kind: 'Image',
		props: {
			src: defaultImage
		}
	},
	'Card Icon': {
		kind: 'Icon',
		props: {
			m: 'auto',
			size: '75px',
			category: 'fa',
			icon: FaDiceD6
		}
	},
	'Card Button': {
		kind: 'Button',
		props: {
			children: 'Button text'
		}
	},
	'Card Content': {
		kind: 'Box'
	}
};
overrides['Card Content Horizontal'] = {
	kind: 'Box',
	props: { ...overrides['Card Content'].props
	}
};
overrides['Card Image Horizontal'] = {
	kind: 'Image',
	props: { ...overrides['Card Image'].props,
		h: '100%'
	}
};
overrides['Card Image Vertical'] = {
	kind: 'Image',
	props: { ...overrides['Card Image'].props,
		w: '100%'
	}
};
overrides['Card Content Vertical'] = {
	kind: 'Box',
	props: { ...overrides['Card Content'].props,
		w: '100%'
	}
};
overrides['Card Image AspectRatio'] = {
	kind: 'Image',
	props: { ...overrides['Card Image'].props,
		pos: 'absolute',
		t: '0',
		l: '0',
		w: '100%',
		h: '100%',
		of: 'cover'
	}
};
overrides['Card Icon Vertical'] = {
	kind: 'Icon',
	props: { ...overrides['Card Icon'].props,
		w: '100%'
	}
};
overrides['Card Icon Horizontal'] = {
	kind: 'Icon',
	props: { ...overrides['Card Icon'].props,
		h: '100%'
	}
};
overrides['Card Icon AspectRatio'] = {
	kind: 'Icon',
	props: { ...overrides['Card Icon'].props,
		pos: 'absolute',
		w: '100%',
		h: '100%'
	}
};
const mainOverrides = {
	'Card Vertical': {
		fxd: 'column',
		width: '200px'
	},
	'Card Horizontal': {
		fxd: 'row',
		height: '200px',
		width: '400px'
	}
};

const canvasProps = aspectRatio => {
	const aspect = {
		square: '1:1',
		circle: '1:1'
	}[aspectRatio] || aspectRatio;
	const [height, width] = aspect.split(':');
	return {
		height,
		width
	};
};

const aspectProps = (aspectRatio, displayMode) => {
	if (displayMode === 'Horizontal') {
		return {
			h: '100%',
			fl: 'left'
		};
	}

	return {
		pb: {
			square: 100,
			circle: 100,
			'4:3': 4 / 3 * 100,
			'3:4': 3 / 4 * 100
		}[aspectRatio] + '%'
	};
};

const Canvas = atomize.canvas();

const AspectRatioWrapper = ({
	aspectRatio,
	displayMode,
	children
}) => {
	if (aspectRatio === 'none') {
		return children;
	}

	return <Box
		pos="relative"
		h="0"
		mih="0"
		miw="0"
		{...aspectProps(aspectRatio, displayMode)}
	>
		    
		{displayMode === 'Horizontal' && <Canvas {...canvasProps(aspectRatio)} h="100%" d="block" />}
		    
		<Box
			ov="auto"
			pos="absolute"
			t="0"
			r="0"
			b="0"
			l="0"
		>
			      
			{children}
			    
		</Box>
		  
	</Box>;
};

const Card = ({
	displayMode,
	imageType,
	aspectRatio,
	showImage,
	showTitle,
	showText,
	showButton,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	const modificator = aspectRatio !== 'none' ? 'AspectRatio' : displayMode;
	const overrideName = `Card ${imageType} ${modificator}`;
	const bdrs = aspectRatio === 'circle' && '100%';
	const ImageComponent = {
		Image,
		Icon
	}[imageType];
	return <Box
		d="flex"
		bdc="#b6b6b6"
		bdw="1px"
		bds="solid"
		bdrs="5px"
		p="5px"
		m="5px"
		{...mainOverrides[`Card ${displayMode}`]}
		{...rest}
	>
		      
		{showImage && <AspectRatioWrapper displayMode={displayMode} aspectRatio={aspectRatio}>
			          
			<ImageComponent bdrs={bdrs} {...override(overrideName)} />
			        
		</AspectRatioWrapper>}
		    
		<Box p="10px" m="auto" bxsz="border-box" {...override(`Card Content ${displayMode}`)}>
			      
			{showTitle && <Text fz="20pt" {...override('Card Title')} />}
			      
			{showText && <Text {...override('Card Text')} />}
			      
			{showButton && <Button w="100%" {...override('Card Button')} />}
			      
			<Box>
				        
				{children}
				      
			</Box>
			    
		</Box>
		  
	</Box>;
};

const propInfo = {
	displayMode: {
		title: 'View',
		control: 'select',
		category: 'Card',
		description: {
			en: 'Variant of card'
		},
		variants: ['Vertical', 'Horizontal']
	},
	showImage: {
		title: 'Show image',
		category: 'Image',
		description: {
			en: 'If enabled shows image.'
		},
		control: 'checkbox'
	},
	imageType: {
		title: 'Image type',
		description: {
			en: 'Selecting the view of the image.'
		},
		category: 'Image',
		control: 'select',
		variants: ['Image', 'Icon']
	},
	showTitle: {
		title: 'Show title',
		category: 'Content',
		description: {
			en: 'If enabled shows title.'
		},
		control: 'checkbox'
	},
	showText: {
		title: 'Show text',
		category: 'Content',
		description: {
			en: 'If enabled shows text.'
		},
		control: 'checkbox'
	},
	showButton: {
		title: 'Show button',
		category: 'Content',
		description: {
			en: 'If enabled shows button.'
		},
		control: 'checkbox'
	},
	aspectRatio: {
		title: 'Aspect Ratio',
		category: 'Image',
		control: 'select',
		variants: ['none', 'square', 'circle', '4:3', '3:4']
	}
};
const defaultProps = {
	displayMode: 'Vertical',
	imageType: 'Image',
	showImage: true,
	showTitle: true,
	showText: true,
	showButton: true,
	aspectRatio: 'none'
};
export default atomize(Card)({
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