import {
  DatabaseClient,
  DevModeler,
  Modeler,
  SequelizeClient,
  Collection } from 'vineyard-ground'
import { FullConfig } from '../../config/config-types'
import { User } from './model-types'

export interface Model {
  EmailVerification: Collection<any>
  User: Collection<User>
  Onetimecode: Collection<any>
  Session: Collection<any>
  TempPassword: Collection<any>

  ground: Modeler
}

export function createModel (
  dbConfig: FullConfig['database'],
  schema: any = require('./schema.json'),
  client: DatabaseClient = new SequelizeClient(dbConfig)
): Model {
  const modeler = !dbConfig.devMode
    ? new Modeler(schema, client)
    : new DevModeler(schema, client)

  return Object.assign({
    ground: modeler,
    db: modeler.getLegacyDatabaseInterface()
  }, modeler.collections) as any
}
