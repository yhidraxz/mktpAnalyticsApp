import mongoose from "mongoose";

const adMetricsSchema = new mongoose.Schema({
    ad: {type: Schema.Types.objectId, ref: "ad"},
    campaign: {type: Schema.Types.objectId, ref: "campaign"},
    impressions: Number,
    clicks: Number,
    sales: Number,
    revenue: Number,
    adSpend: Number,
})