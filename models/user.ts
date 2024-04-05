import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
  },
  links: [
    {
      platform: String,
      url: String,
    },
  ],
});

const User = models.User || model('User', UserSchema);

export default User;
