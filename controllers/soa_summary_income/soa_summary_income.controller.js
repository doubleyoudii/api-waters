"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mayajs/core");
let Soa_summary_incomeController = class Soa_summary_incomeController {
    constructor() { }
};
Soa_summary_incomeController = __decorate([
    core_1.Controller({
        model: "./soa_summary_income.model",
        route: "/soa_summary_income",
    }),
    __metadata("design:paramtypes", [])
], Soa_summary_incomeController);
exports.Soa_summary_incomeController = Soa_summary_incomeController;
