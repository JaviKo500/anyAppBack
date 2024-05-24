import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ init }) => {
	init('routes.before',() => {
		const pg = require('pg');
		pg.types.setTypeParser(1700, (value: string) => {
			return parseFloat(value);
		});
	});
});
