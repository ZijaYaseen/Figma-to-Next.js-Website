import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import users from './users'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, users],
}
