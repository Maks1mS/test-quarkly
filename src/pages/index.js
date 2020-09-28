import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Components.BackToTop>
			<Section height="400vh" background="--color-greyD2">
				<Components.BackToTop>
					<Box background="#588e8e" height="200vh" />
				</Components.BackToTop>
			</Section>
		</Components.BackToTop>
	</Theme>;
});