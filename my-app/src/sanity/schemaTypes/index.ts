import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import users from './users'
import cart from './cart'
import cartItem from './cartItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, users, cartItem, cart],
}
