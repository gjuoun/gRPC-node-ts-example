"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importStar(require("logger"));
const grpc_1 = __importDefault(require("grpc"));
const proto_loader_1 = __importDefault(require("@grpc/proto-loader"));
const logger = logger_1.default.getConsoleLogger("app", logger_1.LOGGING_LEVEL.SILLY);
const packageDef = proto_loader_1.default.loadSync("./todo.proto", {});
const grpcObject = grpc_1.default.loadPackageDefinition(packageDef);
const todoPackage = grpc_1.default.todoPackage;
const server = new grpc_1.default.Server();
server.bind('0.0.0.0:40000', grpc_1.default.ServerCredentials.createInsecure());
server.addService(todoPackage.Todo.service, {
    "createTodo": createTodo,
    "readTodos": readTodos
});
server.start();
function createTodo() {
}
function readTodos() {
}
//# sourceMappingURL=app.js.map