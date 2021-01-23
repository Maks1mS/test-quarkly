import React, { useState, useMemo, useCallback } from "react";
import atomize from "@quarkly/atomize";
import { Box } from "@quarkly/widgets";

const getPlacementProps = (placement, margin, size, background) => {
	const props = {
		top: {
			tooltipbox: {
				t: `-${margin}`,
				trf: "translateX(-50%)"
			},
			arrow: {
				t: "100%",
				bdtc: background
			}
		},
		right: {
			tooltipbox: {
				l: `calc(100% + ${margin})`,
				t: "50%",
				trf: "translateX(0) translateY(-50%)"
			},
			arrow: {
				l: `-${size}`,
				bdrc: background,
				t: "50%",
				trf: "translateX(0) translateY(-50%)"
			}
		},
		bottom: {
			tooltipbox: {
				b: `-${margin}`,
				trf: "translateX(-50%)"
			},
			arrow: {
				b: "100%",
				bdbc: background
			}
		},
		left: {
			tooltipbox: {
				l: "auto",
				r: `calc(100% + ${margin})`,
				t: "50%",
				trf: "translateX(0) translateY(-50%)"
			},
			arrow: {
				l: "auto",
				r: `calc(${size} * -2)`,
				t: "50%",
				trf: "translateX(0) translateY(-50%)",
				bdlc: background
			}
		}
	};
	return props[placement];
};

const getEffect = (effectName, effectTime, active, defaultTransform) => {
	const effects = {
		scale: {
			trf: `${defaultTransform} ${active ? "scale(1.0)" : "scale(0)"}`,
			trsdu: effectTime
		},
		opacity: {
			op: active ? "1" : "0",
			trsdu: effectTime
		}
	};
	return effects[effectName];
};

const Tooltip = ({
	effectName,
	effectTime,
	openDelay,
	closeDelay,
	showArrow,
	arrowSize,
	placement,
	tooltipText,
	tooltipColor,
	tooltipFont,
	tooltipMargin,
	tooltipBackground,
	closeOnClick,
	children,
	...props
}) => {
	let showTimeout, hideTimeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		clearInterval(hideTimeout);
		showTimeout = setTimeout(() => {
			setActive(true);
		}, parseFloat(openDelay));
	};

	const hideTip = () => {
		clearInterval(showTimeout);
		hideTimeout = setTimeout(() => {
			setActive(false);
		}, parseFloat(closeDelay));
	};

	const placementProps = useMemo(() => getPlacementProps(placement, tooltipMargin, arrowSize, tooltipBackground), [placement, tooltipMargin, arrowSize, tooltipBackground]);
	const effect = useMemo(() => getEffect(effectName, effectTime, active, placementProps.tooltipbox.trf), [effectName, effectTime, active, placementProps.tooltipbox.trf]);
	return <Box
		d="inline-block"
		pos="relative"
		onMouseEnter={showTip}
		onMouseLeave={hideTip}
		onClick={() => {
			if (closeOnClick) {
				hideTip();
			}
		}}
		{...props}
	>
		      
		{children}
		      
		<Box
			pos="absolute"
			bdrs="4px"
			l="50%"
			p="6px"
			lh="1"
			z="100"
			whs="nowrap"
			c={tooltipColor}
			bgc={tooltipBackground}
			fd={tooltipFont}
			{...placementProps.tooltipbox}
			{...effect}
		>
			        
			{showArrow && <Box
				pos="absolute"
				l="50%"
				bd="solid transparent"
				h="0"
				mih="0"
				w="0"
				miw="0"
				pointer-events="none"
				bdw={`${arrowSize}`}
				ml={`calc(${arrowSize} * -1)`}
				{...placementProps.arrow}
			>
				            &nbsp;
          
			</Box>}
			        
			{tooltipText}
			      
		</Box>
		    
	</Box>;
};

const propInfo = {
	effectName: {
		title: "Effect",
		category: "Effect",
		description: {
			en: "Effect (transition) of tooltip"
		},
		control: "select",
		variants: ["scale", "opacity"]
	},
	effectTime: {
		title: "Effect time",
		category: "Effect",
		description: {
			en: "Time of transition"
		},
		control: "input"
	},
	openDelay: {
		title: "Open delay",
		category: "Delay",
		description: {
			en: "Delay (in ms) before showing the tooltip"
		},
		control: "input"
	},
	closeDelay: {
		title: "Close delay",
		category: "Delay",
		description: {
			en: "Delay (in ms) before hiding the tooltip"
		},
		control: "input"
	},
	placement: {
		title: "Placement",
		category: "Tooltip",
		description: {
			en: "Placement of the tooltip"
		},
		control: "select",
		variants: ["right", "top", "bottom", "left"]
	},
	showArrow: {
		title: "Show arrow",
		category: "Arrow",
		description: {
			en: "If selected, the tooltip will show an arrow tip"
		},
		control: "checkbox"
	},
	arrowSize: {
		title: "Arrow size",
		category: "Arrow",
		description: {
			en: "Size of arrow"
		},
		control: "input"
	},
	tooltipText: {
		title: "Text",
		category: "Tooltip",
		description: {
			en: "The label of the tooltip"
		},
		weight: 1,
		control: "input"
	},
	tooltipFont: {
		title: "Font",
		category: "Tooltip",
		description: {
			en: "Font of label"
		},
		control: "font"
	},
	tooltipMargin: {
		title: "Margin",
		category: "Tooltip",
		description: {
			en: "Distance to tooltip"
		},
		control: "input"
	},
	tooltipColor: {
		title: "Color",
		category: "Tooltip",
		description: {
			en: "Color of widget"
		},
		control: "color"
	},
	tooltipBackground: {
		title: "Background color",
		category: "Tooltip",
		description: {
			en: "Background color of widget"
		},
		control: "color"
	},
	closeOnClick: {
		title: "Close on click",
		category: "Tooltip",
		description: {
			en: "If selected, the tooltip will hide on click"
		},
		control: "checkbox"
	}
};
const defaultProps = {
	effectName: "scale",
	effectTime: "0.2s",
	placement: "top",
	arrowSize: "7px",
	showArrow: true,
	openDelay: 400,
	closeDelay: 400,
	tooltipText: "Tooltip",
	tooltipMargin: "20px",
	tooltipBackground: "rgba(0, 0, 0, 0.85)",
	tooltipColor: "white",
	tooltipFont: "inheirt",
	closeOnClick: false
};
export default atomize(Tooltip)({
	name: "Tooltip",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Tooltip — my awesome component"
	},
	propInfo
}, defaultProps);