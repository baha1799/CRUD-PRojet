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
exports.ProduitsController = void 0;
const common_1 = require("@nestjs/common");
const produits_service_1 = require("./produits.service");
const produit_dto_1 = require("../dto/produit.dto");
let ProduitsController = exports.ProduitsController = class ProduitsController {
    constructor(service) {
        this.service = service;
    }
    ;
    Ajout(Body) {
        return this.service.Ajout(Body);
    }
    rechercheT() {
        return this.service.rechercheT();
    }
    rechercheS(id) {
        return this.service.rechercheS(id);
    }
    maj(id, Body) {
        return this.service.maj(id, Body);
    }
    DELETE(id) {
        return this.service.DELETE(id);
    }
    Search(key) {
        return this.service.Search(key);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produit_dto_1.proddto]),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "Ajout", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "rechercheT", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "rechercheS", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, produit_dto_1.proddto]),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "maj", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "DELETE", null);
__decorate([
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProduitsController.prototype, "Search", null);
exports.ProduitsController = ProduitsController = __decorate([
    (0, common_1.Controller)('produits'),
    __metadata("design:paramtypes", [produits_service_1.ProduitsService])
], ProduitsController);
//# sourceMappingURL=produits.controller.js.map