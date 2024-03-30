import { Query, PrimaryKey } from '@directus/types';
import { Context, User } from '../models';
import { UsersService } from '@directus/api/dist/services'


export interface InviteUser {
   email: string;
   role: string; 
   url: string | null; 
   subject?: string | null;
}
class UserServiceApi {
   
   private usersService: UsersService;
   // private usersService;
   
   constructor( private context: Context, isAdmin: boolean = false ) {
      const { services, database, accountability, schema } = this.context;
      const { UsersService } = services; 
      this.usersService = new UsersService({
         knex: database,
         accountability: isAdmin ? { ...accountability, admin: true } : accountability,
         schema: schema
      });
   }

   requestPasswordReset = async (email: string, url: string | null, subject?: string | null) => {
      try {
         return await this.usersService.requestPasswordReset(email, url, subject);
      } catch (error: any) {
         console.log('<--------------- JK User.service error --------------->');
         console.log(error);
         throw new Error(error?.message ?? 'Error en user service request password reset');
      }
   }

   inviteNewUser = async ( dataInviteUser: InviteUser ) => {
      try {
         const { email, role, url, subject } = dataInviteUser; 
         return this.usersService.inviteUser( email, role, url, subject );
      } catch (error: any) {
         console.log('<--------------- JK User.service Error inviteNewUser--------------->');
         console.log(error);
         throw new Error( error?.message ?? 'Error in inviteNewUser');
      }
   }

   getUsersByQuery = async ( query: Query ) => {
      return this.usersService.readByQuery(query);
   }

   updateUserById = async ( id: PrimaryKey, user: User ) => {
      return this.usersService.updateOne( id, user );
   }
}

export { UserServiceApi };