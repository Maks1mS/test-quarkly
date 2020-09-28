import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Components.BackToTop>
			<Section height="100vh" />
		</Components.BackToTop>
	</Theme>;
});