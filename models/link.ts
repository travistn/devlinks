import { Schema, model, models } from 'mongoose';

const LinkSchema = new Schema({
  platform: {
    type: String,
  },
  url: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Link = models.Link || model('Link', LinkSchema);

export default Link;
