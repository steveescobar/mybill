import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
    },
    parentUser: {
        type: String,
        required: true,
    },
    invitationCode: {
        type: String,
        required: true,
        unique: true,
    },
    adminPasscode: {
        type: Number,
        default: null
    },
    accountStatus: {
        type: Boolean,
        default: true
    },
    securityCode: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });


export const User = mongoose.models.User || mongoose.model("User", userSchema);