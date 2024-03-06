import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'aui-web-components',
	srcDir: 'src',
	plugins: [
		sass({
			includePaths: ["./node_modules/"],
    })
	],
  extras: {
    enableImportInjection: true,
  },
	outputTargets: [
		{
			type: 'dist',
      esmLoaderPath: '../loader'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			serviceWorker: null,
		}
	]
};
