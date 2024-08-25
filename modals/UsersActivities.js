import mongoose from "mongoose";

const usersActivitiesSchema = new mongoose.Schema({
    operation: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        required: true,
    }
}, { timestamps: true });


export const UsersActivities = mongoose.models.UsersActivities || mongoose.model("UsersActivities", usersActivitiesSchema);