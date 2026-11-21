import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    name: String,
    isActive: Boolean,
    Price: Number,
    campaigns: [{type: Schema.Types.objectId, ref: 'campaign'}],
    metrics: [{type: Schema.Types.objectId, ref: 'adMetrics'}],
})