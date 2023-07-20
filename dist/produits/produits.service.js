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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProduitsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const produits_models_1 = require("../models/produits.models");
let ProduitsService = exports.ProduitsService = class ProduitsService {
    constructor(prodmodel) {
        this.prodmodel = prodmodel;
    }
    Ajout(Body) {
        return this.prodmodel.create(Body);
    }
    rechercheT() {
        return this.prodmodel.find();
    }
    rechercheS(id) {
        return this.prodmodel.findOne({ _id: id });
    }
    maj(id, Body) {
        return this.prodmodel.findByIdAndUpdate({ _id: id }, { $set: Body }, { new: true });
    }
    DELETE(id) {
        return this.prodmodel.deleteOne({ _id: id });
    }
    Search(key) {
        const keyword = key ? {
            $or: [{ nom: { $regex: key, $options: 'i' } }]
        } : {};
        return this.prodmodel.find(keyword);
    }
};
exports.ProduitsService = ProduitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(produits_models_1.produit.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProduitsService);
//# sourceMappingURL=produits.service.js.map