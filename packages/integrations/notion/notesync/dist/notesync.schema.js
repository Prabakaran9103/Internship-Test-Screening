"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNotesSchema = void 0;
var zod_1 = require("zod");
exports.ListNotesSchema = zod_1.z.object({
    maxResults: zod_1.z.number().min(1).max(100).default(10),
    query: zod_1.z.string().optional(),
});
