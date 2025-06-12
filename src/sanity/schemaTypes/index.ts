import { type SchemaTypeDefinition } from 'sanity'
import { Project } from './Projects'
import gig from './gig'
import pkg from './package'
import feature from './feature'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Project, gig, pkg, feature],
}
