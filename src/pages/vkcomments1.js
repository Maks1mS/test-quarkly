import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vkcomments1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Override slot="SectionContent" display="flex" flex-direction="row" />
			<Components.Card
				display="block"
				showTitle={false}
				hover-box-shadow="0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)"
				transition="all 0.2s ease 0s"
				border-radius="5px"
				padding="0 0 0 0"
			>
				<Override slot="Title" />
				<Override slot="Actions" display="flex" justify-content="end" />
				<Image width="100%" src="https://images.unsplash.com/photo-1605186139626-01cc38b114ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000" />
				<Box margin="5px 5px 5px 5px">
					<Text font="16pt --fontFamily-sans" margin="0 0 0 0">
						Card Title
					</Text>
					<Text>
						Description
					</Text>
					<Box display="flex" justify-content="space-between">
						<Button>
							Show
						</Button>
						<Button>
							Learn more
						</Button>
					</Box>
				</Box>
			</Components.Card>
		</Section>
		<Components.Tooltip closeDelay="1000">
			<Text>
				Some text
			</Text>
		</Components.Tooltip>
		<Components.TabList>
			<Components.Tab />
			<Components.Tab />
			<Components.Tab />
		</Components.TabList>
		<Components.Tabs>
			<Components.TabPanels>
				<Components.TabPanel key="24ф" />
				<Components.TabPanel key="1" />
				<Components.TabPanel key="34" />
			</Components.TabPanels>
		</Components.Tabs>
		<Components.YandexMap
			height="500px"
			width="1000px"
			margin="0 auto 0 auto"
			zoom="9"
			zoomControl
			rulerControl
			trafficControl
			typeSelectorContol
			latitudeCenter="55.751574"
			longitudeCenter="37.573856"
		/>
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