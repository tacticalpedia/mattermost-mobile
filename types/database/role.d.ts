import { Model } from '@nozbe/watermelondb';
export default class Role extends Model {
    static table: string;
    name: string;
    permissions: string;
    roleId: string;
}