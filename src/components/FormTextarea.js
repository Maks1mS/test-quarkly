import React, { useState, useEffect } from 'react';
import atomize from "@quarkly/atomize";
const TextArea = atomize.textarea();

const FormTextarea = ({
	children,
	defaultValue,
	autocomplete,
	autofocus,
	cols,
	disabled,
	maxLength,
	minLength,
	name,
	placeholder,
	readOnly,
	required,
	rows,
	spellcheck,
	groupName,
	...props
}) => {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);
	console.log('Groupname', groupName);
	return <TextArea
		autocomplete={autocomplete ? 'on' : 'off'}
		autofocus={autofocus}
		cols={cols}
		disabled={disabled}
		maxLength={maxLength}
		minLength={minLength}
		name={name}
		placeholder={placeholder}
		readOnly={readOnly}
		required={required}
		rows={rows}
		spellcheck={spellcheck}
		value={value}
		onChange={e => setValue(e.target.value)}
		{...props}
	/>;
};

const propInfo = {
	autocomplete: {
		title: "Autocomplete",
		description: {
			en: "This attribute indicates whether the value of the control can be automatically completed by the browser"
		},
		category: "Settings",
		control: "checkbox"
	},
	autofocus: {
		title: "Autofocus",
		description: {
			en: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified."
		},
		category: "Settings",
		control: "checkbox"
	},
	cols: {
		title: "Cols",
		description: {
			en: "The visible width of the text control, in average character widths."
		},
		category: "Size",
		control: "input"
	},
	disabled: {
		title: "Disabled",
		description: {
			en: "This attribute indicates that the user cannot interact with the control."
		},
		category: "Settings",
		control: "checkbox"
	},
	maxLength: {
		title: "Max length",
		description: {
			en: "The maximum number of characters (UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters."
		},
		category: "Content",
		control: "input"
	},
	minLength: {
		title: "Min length",
		description: {
			en: "The minimum number of characters (UTF-16 code units) required that the user should enter."
		},
		category: "Content",
		control: "input"
	},
	name: {
		title: "Name",
		description: {
			en: "The name of the control."
		},
		category: "Settings",
		control: "input"
	},
	placeholder: {
		title: "Placeholder",
		description: {
			en: "A hint to the user of what can be entered in the control."
		},
		category: "Settings",
		control: "input"
	},
	readOnly: {
		title: "Read only",
		description: {
			en: "This attribute indicates that the user cannot modify the value of the control."
		},
		category: "Settings",
		control: "checkbox"
	},
	required: {
		title: "Required",
		description: {
			en: "This attribute specifies that the user must fill in a value before submitting a form."
		},
		category: "Settings",
		control: "checkbox"
	},
	rows: {
		title: "Rows",
		description: {
			en: "The number of visible text lines for the control."
		},
		category: "Size",
		control: "input"
	},
	spellcheck: {
		title: "Spellcheck",
		description: {
			en: "Specifies whether the Textarea is subject to spell checking by the underlying browser/OS."
		},
		category: "Settings",
		control: "select",
		variants: ["true", "default", "false"]
	},
	defaultValue: {
		title: "Default value",
		description: {
			en: "Default value of textarea"
		},
		category: "Content",
		control: "input"
	}
};
const defaultProps = {
	autocomplete: false,
	autofocus: false,
	cols: 20,
	disabled: false,
	placeholder: '',
	readonly: false,
	required: false,
	spellcheck: 'default',
	defaultValue: '',
	"border-width": "2px",
	"border-color": "lightD2",
	"border-style": "solid"
};
export default atomize(FormTextarea)({
	name: "FormTextarea",
	effects: {
		hover: ":hover",
		focus: ":focus",
		disabled: ":disabled"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."
	},
	propInfo
}, defaultProps);