import React, { useRef, useEffect } from 'react';
import atomize from "@quarkly/atomize";
const MyFB = {
	create: ({
		language,
		appId
	}) => {
		if (!canDOM()) return;

		((d, s, id) => {
			const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
			if (d.getElementById(id)) return;
			const js = d.createElement(s);
			js.id = id;
			js.src = `//connect.facebook.net/${language}/sdk.js#xfbml=1&version=v2.12&appId=${appId}`;
			console.log(js);
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	},
	remove: () => {
		let elm = document.getElementById('facebook-jssdk');

		if (elm) {
			elm.outerHTML = '';
		}

		elm = document.getElementById('fb-root');

		if (elm) {
			elm.outerHTML = '';
		}

		window.FB = undefined;
	},
	parse: () => {
		if (window.FB && typeof window.FB !== 'undefined') {
			window.FB.XFBML.parse();
		}
	}
};

const canDOM = () => document && typeof document !== 'undefined';

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}

const FacebookComments = props => {
	const didMountRef = useRef(false);
	const language = 'en_US';
	const appId = 767471200701076;
	const oldLang = usePrevious(language);
	const oldAppId = usePrevious(appId);
	useEffect(() => {
		if (didMountRef.current) {
			if (oldLang != language || oldAppId != appId && canDOM()) {
				MyFB.remove();
				MyFB.create({
					language,
					appId
				});
			}

			MyFB.parse();
		} else {
			MyFB.create({
				language,
				appId
			});
			MyFB.parse();
			didMountRef.current = true;
		}
	});
	return <div {...props}>
		    
		<div className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts="10"></div>
		  
	</div>;
};

export default atomize(FacebookComments)({
	name: "FacebookComments",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "FacebookComments — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});