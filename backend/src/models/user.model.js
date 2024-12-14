import { model, Schema } from 'mongoose';

export const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String, default: '' },
        isAdmin: { type: Boolean, default: false },
        isBlocked: { type: Boolean, default: false },
        loyaltyPoints: { type: Number, default: 0 }, // Added field for loyalty points
        allergies: { type: String, default: '' }, // Added field for allergies
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

export const UserModel = model('user', UserSchema);
