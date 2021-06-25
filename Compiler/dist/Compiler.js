"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = __importDefault(require("./Parser"));
let parser = new Parser_1.default('لوحة.سجل("السلام عليك يا وسام")');
console.log(parser.parse());
/*
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
*/
/*
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "sourceMap": false,
    "lib": ["ES6", "dom"]
  },
  "include": ["src/*"],
  "exclude": ["node_modules", "\*\*\/*.spec.ts"]
}
*/
//# sourceMappingURL=Compiler.js.map