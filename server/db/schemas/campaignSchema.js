import mongoose from "mongoose";

const campaignSchema = new mongoose.schema({
    name: String,
    isActive: Boolean,
    bid: Number,
    budget: Number,
    lostByAdrank: Number,
    lostByBudget: Number,
    wonImpressions: Number,
    ads: [{type: Schema.Types.objectId, ref: 'ad'}]
})