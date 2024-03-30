import { defineEndpoint } from '@directus/extensions-sdk';
import { UserServiceApi } from './../../../utils/services/user.service';

export default defineEndpoint((router, context) => {
	router.post('/request-password', async ( _req: any, res: any ) => {
		try {
			const { accountability, schema, body } = _req;
			const mainContext = {accountability, schema, ...context};
			const userService = new UserServiceApi( mainContext, true );
			await userService.requestPasswordReset(body.email, body?.reset_url || null, body?.subject || 'Solicitud de cambio de contraseña' );
			res.status(200).send();
		} catch (error: any) {
			console.log('<--------------- JK Index Error --------------->');
			console.log(error);
			res.status(400).json({
				errors: [
					{
						message:  error?.message ?? 'Bad Request'
					}
				]
			});
		}
	});
});
