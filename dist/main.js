"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const filter_validation_1 = require("./util/filter.validation");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const port = process.env.PORT;
    app.useGlobalFilters(new filter_validation_1.ValidationFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        skipMissingProperties: false,
        exceptionFactory: (errors) => {
            const errMsg = {};
            errors.forEach((err) => {
                errMsg[err.property] = [...Object.values(err.constraints)];
            });
            return new filter_validation_1.ValidationException(errMsg);
        },
    }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map