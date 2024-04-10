import { Schema, model, models } from 'mongoose';

import Link from './link';

const UserSchema = new Schema({
  name: {
    type: String,
  },
  links: [
    {
      type: Schema.Types.ObjectId,
      ref: Link,
    },
  ],
});

const User = models.User || model('User', UserSchema);

export default User;
