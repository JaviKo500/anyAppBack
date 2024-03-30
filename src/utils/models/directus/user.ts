import { PrimaryKey } from '@directus/types';
export interface User {
   id?: PrimaryKey;
   first_name?: string;
   last_name?: string;
   email?: string;
   password?: string;
   location?: null;
   title?: string;
   description?: string;
   tags?: string;
   avatar?: string;
   language?: null;
   tfa_secret?: null;
   status?: string;
   role?: string;
   token?: string;
   last_access?: Date;
   last_page?: null;
   provider?: string;
   external_identifier?: string;
   auth_data?: null;
   email_notifications?: boolean;
   appearance?: null;
   theme_dark?: null;
   theme_light?: null;
   theme_light_overrides?: null;
   theme_dark_overrides?: null;
}