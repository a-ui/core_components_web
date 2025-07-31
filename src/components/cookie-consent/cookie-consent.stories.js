export default {
	title: 'Components/Cookie Consent',
	component: 'aui-cookie-consent',
	render: (args) => {
		const icon = document.createElement(`aui-cookie-consent`);
		for (const [key, value] of Object.entries(args)) {
			icon.setAttribute(key, value);
		}
		return icon;
	},
	argTypes: {
		config: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '[see below]' }
      },
      description: 'Configuration of your cookie consent window',
		},
		branding: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'aui' }
      },
      description: 'Extra CSS class(es) to add',
		},
		openPreferences: {
			control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'If set to true, the modal will show the cookie preferences and not the default screen with the title and description',
		},
		environment: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. "acceptance"',
		},
		domain: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'Set the domain where you want your cookiepreferences to be saved. eg. "antwerpen.be"',
		},
		excludepaths: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'Single path or comma seperated list of paths on which the cookie consent will not open',
		},
		preferencesSaved: {
			control: { type: 'function' },
		},
	}
};

export const Example = {
  args: {
  },
};
