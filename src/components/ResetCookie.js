import React from 'react';
import atomize from "@quarkly/atomize";
import { Button } from '@quarkly/widgets';

const ResetCookie = props => <Button onClick={() => {
	localStorage.removeItem('accept_cookies');
	window.location.reload();
}}>
	  Сбросить
</Button>;

export default atomize(ResetCookie)({
	name: "ResetCookie",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ResetCookie — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});