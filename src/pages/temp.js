import React from "react";
import theme from "theme";
import { Theme, Link, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"temp"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.FacebookLike />
		<Components.YandexMap />
		<Components.MyFormspree />
		<Components.Gallery />
		<Components.Card />
		<Components.FacebookComment />
		<Components.FacebookComments />
		<Components.VkComments attachLink pageId="100" />
		<Components.Tooltip />
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
		<Components.Form />
		<Components.Form>
			<Components.FormInput />
			<Components.FacebookLike />
			<Components.FormLabel />
			<Components.VkComments />
			<Components.VkPage />
			<Components.FacebookLike />
		</Components.Form>
		<Components.MyFormspree endpoint="xgepoqev">
			<Box>
				<Components.FormTextarea />
			</Box>
		</Components.MyFormspree>
		<Components.VimeoVideo />
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