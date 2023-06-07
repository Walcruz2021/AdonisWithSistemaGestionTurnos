/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_USER'),
        password: Env.get('PG_PASSWORD', ''),
        database: Env.get('PG_DB_NAME')
      },
      migrations: {
        naturalSort: true
      },
      healthCheck: false,
      debug: false
    },
    cft_pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_CFT_FORM_USER'),
        password: Env.get('PG_CFT_FORM_PASSWORD', ''),
        database: Env.get('PG_CFT_FORM_DATABASE')
      },
      pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
      healthCheck: true,
      debug: true
    },
    forest_request_pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_NATIVE_FOREST_HOST'),
        port: Env.get('PG_NATIVE_FOREST_PORT'),
        user: Env.get('PG_NATIVE_FOREST_USER'),
        password: Env.get('PG_NATIVE_FOREST_PASSWORD', ''),
        database: Env.get('PG_NATIVE_FOREST_DB_NAME')
      },
      pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
      healthCheck: true,
      debug: true
    },
    ms_farms_pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_MS_FARMS_HOST'),
        port: Env.get('PG_MS_FARMS_PORT'),
        user: Env.get('PG_MS_FARMS_USER'),
        password: Env.get('PG_MS_FARMS_PASSWORD', ''),
        database: Env.get('PG_MS_FARMS_DB_NAME')
      },
      pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
      healthCheck: true,
      debug: true
    }
  }
}

export default databaseConfig
