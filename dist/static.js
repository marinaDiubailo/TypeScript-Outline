"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    static getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserService.db.findById(id);
        });
    }
    create() {
        UserService.db;
    }
}
(() => {
    UserService.db = 'mongo';
})();
const db = UserService.db;
const user112 = UserService.getUser(1);
const inst = new UserService();
inst.create();
//# sourceMappingURL=static.js.map