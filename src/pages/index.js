import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section display="flex" flex-direction="row" min-width="21px">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box>
				<Components.Tooltip>
					<Text>
						Default tooltip
					</Text>
				</Components.Tooltip>
			</Box>
			<Box>
				<Components.Tooltip placement="right" tooltipText="Right" showArrow>
					<Text>
						aa
					</Text>
				</Components.Tooltip>
			</Box>
			<Box>
				<Components.Tooltip tooltipBackground="rgba(255, 103, 103, 0.85)" tooltipColor="#000000">
					<Text>
						Custom colors
					</Text>
				</Components.Tooltip>
			</Box>
			<Box>
				<Components.Tooltip showArrow={false} placement="bottom">
					<Text>
						Without arrow
					</Text>
				</Components.Tooltip>
			</Box>
			<Box>
				<Components.Tooltip
					placement="left"
					effectName="opacity"
					effectTime="1s"
					openDelay="1000"
					closeDelay="300"
					closeOnClick
					tooltipText="Slow"
					arrowSize="9px"
					tooltipMargin="40px"
				>
					<Text>
						Hide on click
					</Text>
				</Components.Tooltip>
			</Box>
		</Section>
		<Components.YandexMap
			zoomControl
			width="600px"
			height="600px"
			margin="0 auto 0 auto"
			rulerControl
			trafficControl
			typeSelectorContol
			searchControl
			apikey="266e8312-b1db-473e-a521-20a7f4b804ec"
			geolocationControl
			fullscreenControl={false}
		/>
		<Components.YandexMap
			zoomControl
			width="600px"
			height="600px"
			margin="0 auto 0 auto"
			rulerControl
			trafficControl
			typeSelectorContol
			searchControl
			apikey="266e8312-b1db-473e-a521-20a7f4b804ec"
			geolocationControl
			fullscreenControl={false}
		/>
		<Box display="flex" align-items="flex-start">
			<Components.Card
				displayMode="Horizontal"
				showImage
				display="flex"
				imageType="Icon"
				aspectRatio="4:3"
			>
				<Override slot="Card Image Horizontal" display="block" />
				<Override slot="Card Title">
					Card titl
				</Override>
			</Components.Card>
			<Components.Card
				displayMode="Horizontal"
				showImage
				display="flex"
				imageType="Icon"
				aspectRatio="square"
			>
				<Override slot="Card Image Horizontal" display="block" />
				<Override slot="Card Icon AspectRatio" color="#8f3232" background="#290303" />
				<Override slot="Card Content Horizontal" />
				<Override slot="Card Title" font="26.6667px ">
					Card titl
				</Override>
				<Override slot="Card Button" disabled={false} type="submit" />
				<Override slot="Card Text">
					aaasesad
				</Override>
			</Components.Card>
		</Box>
		<Box display="flex" align-items="flex-start">
			<Components.Tabs>
				<Components.TabList>
					<Components.Tab />
				</Components.TabList>
			</Components.Tabs>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});