// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

import {MM_TABLES} from '@constants/database';

const {SERVERS} = MM_TABLES.DEFAULT;

/**
 * The Server model will help us to identify the various servers a user will log in; in the context of
 * multi-server support system.  The dbPath field will hold the App-Groups file-path
 */
export default class Servers extends Model {
    /** table (entity name) : servers */
    static table = SERVERS;

    /** db_path : The file path where the database is stored */
    @field('db_path') dbPath: string;

    /** display_name : The server display name */
    @field('display_name') displayName: string;

    /** mention_count : The number of mention on this server */
    @field('mention_count') mentionCount: number;

    /** unread_count : The number of unread messages on this server */
    @field('unread_count') unreadCount: number;

    /** url : The online address for the Mattermost server */
    @field('url') url: string;
}