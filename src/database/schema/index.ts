import { ModelDefinition } from '@nestjs/mongoose';
import { UserSchema, modelName as userModelName } from './user.schema';

export const AuthModelDefs: Array<ModelDefinition> = [
  { name: userModelName, schema: UserSchema },
];

export const UsersModelDefs: Array<ModelDefinition> = [
  { name: userModelName, schema: UserSchema },
];
