import React, { useState, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Image, Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const overrides = {
	Label: {
		kind: 'Box'
	},
	'Label Text': {
		kind: 'Text'
	},
	'Before Label Text': {
		kind: 'Text',
		props: {
			children: 'Before'
		}
	},
	'After Label Text': {
		kind: 'Text',
		props: {
			children: 'After'
		}
	},
	'Before Image': {
		kind: 'Image',
		props: {
			src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000'
		}
	},
	'After Image': {
		kind: 'Image',
		props: {
			src: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000'
		}
	},
	Slider: {
		kind: 'Box',
		props: {
			width: '10px'
		}
	},
	Arrow: {
		kind: 'Box'
	}
};

const parseAspectRatio = aspectRatio => {
	const aspect = {
		square: '1:1'
	}[aspectRatio] || aspectRatio;
	const [width, height] = aspect.split(':');
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

	const {
		height,
		width
	} = parseAspectRatio(aspectRatio);
	return {
		pb: height / width * 100 + '%'
	};
};

const Canvas = atomize.canvas();

const AspectRatioWrapper = ({
	aspectRatio = 'none',
	displayMode,
	children,
	...props
}) => {
	if (aspectRatio === 'none' || displayMode === 'none') {
		return <Box {...props}>
			{children}
		</Box>;
	}

	return <Box
		pos="relative"
		h="0"
		mih="0"
		miw="0"
		{...aspectProps(aspectRatio, displayMode)}
		{...props}
	>
		    
		{displayMode === 'Horizontal' && <Canvas {...parseAspectRatio(aspectRatio)} h="100%" d="block" />}
		    
		<Box
			ov="hidden"
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

const preventEvent = e => {
	if (!['touchstart', 'touchend', 'touchmove'].includes(e.type)) {
		e.preventDefault();
	}
};

const Arrow = props => <Box
	mih="0"
	miw="0"
	border-style="solid"
	border-width="0 3px 3px 0"
	display="inline-block"
	padding="3px"
	border-color="white"
	{...props}
/>;

const Label = props => <Box
	pos="absolute"
	display="inline-block"
	background="white"
	padding="5px"
	border-radius="5px"
	{...props}
/>;

const getDisplayMode = (height, width) => {
	let mode = 'none';

	if (!height) {
		mode = 'Vertical';
	} else if (width === 'auto') {
		mode = 'Horizontal';
	}

	return mode;
};

const BeforeAfterImage = ({
	width,
	height,
	aspectRatio,
	activationType,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [isDrag, setDrag] = useState(activationType !== 'onDrag');
	const [pos, setPos] = useState('50%');
	const displayMode = getDisplayMode(height, width);
	const isOnDrag = activationType === 'onDrag';
	const mouseDown = useCallback(e => {
		preventEvent(e);

		if (isOnDrag) {
			setDrag(true);
		}
	}, [isOnDrag]);
	const mouseUp = useCallback(e => {
		preventEvent(e);

		if (isOnDrag) {
			setDrag(false);
		}
	}, [isOnDrag]);
	const mouseMove = useCallback(e => {
		preventEvent(e);
		if (isOnDrag && !isDrag) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const target = e.type === 'touchmove' ? e.touches[0] : e;
		let newPos = target.clientX - rect.left;
		newPos = Math.min(Math.max(newPos, 0), rect.width);
		setPos(newPos + 'px');
	}, [isOnDrag, isDrag]);
	return <Box
		display={displayMode === 'Horizontal' && 'inline-block'}
		pos="relative"
		h="100%"
		ov="hidden"
		{...rest}
	>
		    
		<AspectRatioWrapper
			pos="relative"
			mih="0"
			miw="0"
			w="100%"
			h="100%"
			displayMode={displayMode}
			aspectRatio={aspectRatio}
			onMouseDown={mouseDown}
			onMouseMove={mouseMove}
			onMouseUp={mouseUp}
			onTouchStart={mouseDown}
			onTouchMove={mouseMove}
			onTouchEnd={mouseUp}
		>
			      
			<Box
				pos="absolute"
				t="0"
				l="0"
				w="100%"
				style={{
					clipPath: `polygon(
            0% 0%, 
            0% 100%, 
            ${pos} 100%, 
            ${pos} 0%
          )`
				}}
				h="100%"
			>
				        
				<Image
					pos="absolute"
					t="0"
					l="0"
					w="100%"
					h="100%"
					of="cover"
					{...override('Before Image')}
				/>
				        
				<Label l="10px" b="10px" {...override('Label', 'Before Label')}>
					          
					<Text m="0" {...override('Label Text', 'Before Label Text')} />
					        
				</Label>
				      
			</Box>
			      
			<Box
				pos="absolute"
				t="0"
				l="0"
				w="100%"
				h="100%"
				style={{
					clipPath: `polygon(
            100% 0%, 
            100% 100%, 
              ${pos} 100%, 
              ${pos} 0%
            )`
				}}
			>
				        
				<Image
					pos="absolute"
					t="0"
					l="0"
					w="100%"
					h="100%"
					of="cover"
					{...override('After Image')}
				/>
				        
				<Label r="10px" b="10px" {...override('Label', 'After Label')}>
					          
					<Text m="0" {...override('Label Text', 'After Label Text')} />
					        
				</Label>
				      
			</Box>
			      
			<Box position="absolute" height="100%" style={{
				left: `calc(${pos} 
              - (${override('Slider').width} + 20px) / 2
            `,
				cursor: 'col-resize'
			}}>
				        
				<Box
					mih="0"
					miw="0"
					h="100%"
					background="white"
					m="0 10px"
					{...override('Slider')}
				/>
				        
				<Box
					m="0 10px"
					t="50%"
					pos="absolute"
					transform="translate(0%,-25%);"
					h="15px"
					w={override('Slider').width}
				>
					          
					<Arrow position="absolute" left="-15px" transform="translate(0, -25%) rotate(135deg)" {...override('Arrow', 'Left Arrow')} />
					          
					<Arrow position="absolute" right="-10px" transform="translate(0, -25%) rotate(-45deg)" {...override('Arrow', 'Right Arrow')} />
					        
				</Box>
				      
			</Box>
			    
		</AspectRatioWrapper>
		  
	</Box>;
};

const propInfo = {
	activationType: {
		title: 'Activation type',
		decritption: {
			en: ''
		},
		control: 'radio-group',
		variants: ['onDrag', 'onMove']
	},
	aspectRatio: {
		title: 'Aspect Ratio',
		category: 'Image',
		control: 'select',
		variants: ['none', 'square', '4:3', '3:4', '16:9', '9:16']
	}
};
const defaultProps = {
	width: 'auto',
	aspectRatio: 'square',
	activationType: 'onDrag'
};
export default atomize(BeforeAfterImage)({
	name: 'BeforeAfterImage',
	overrides,
	description: {
		en: 'Before and after slider is a visual diff tool, makes it easy to highlight the differences between two images.'
	},
	propInfo
}, defaultProps);