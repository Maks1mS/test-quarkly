import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"map"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Override slot="SectionContent" display="flex" />
			<Components.Card
				displayMode="Vertical"
				showButton
				showTitle
				showImage
				imageType="Icon"
				showText
				width="400px"
			>
				<Override slot="Card Icon" />
				<Override slot="Card Content" />
				<Override slot="Card Image Vertical" height="200px" object-fit="cover" />
			</Components.Card>
			<Components.Card
				displayMode="Horizontal"
				showButton
				showTitle
				showImage
				imageType="Image"
				showText
				width="400px"
			>
				<Override slot="Card Icon" />
				<Override slot="Card Content" />
			</Components.Card>
		</Section>
		<Components.YandexMap
			zoomValue="4"
			width="400px"
			height="400px"
			fullscreenControl
			rulerControl
			typeSelectorContol={false}
			zoomControl
			trafficControl
			apikey="266e8312-b1db-473e-a521-20a7f4b804ec"
			geolocationControl={false}
			searchControl
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