"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("@mayajs/mongo");
const schema = mongo_1.MongoSchema({
    MemberId: {
        type: String
    }
});
exports.default = mongo_1.MongoModel("CutoffDates", schema);
