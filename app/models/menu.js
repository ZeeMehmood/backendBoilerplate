const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { Status } = require('../enums');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    label: { type: String, required: true }, // Menu Name
    slug: { type: String, required: true }, // URL End point
    parent_id: { type: Schema.Types.ObjectId, ref: 'Menu' },
    status: { type: String, enum: Object.values(Status) } // Status of the User active, inactive etc
  },
  {
    versionKey: false,
    timestamps: true
  }
);
UserSchema.plugin(mongooseDelete, { overrideMethods: true });
module.exports = mongoose.model('Menu', UserSchema);
