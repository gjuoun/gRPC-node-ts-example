"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = __importDefault(require("grpc"));
const todo_1 = require("./services/todo");
const logger_1 = __importStar(require("./logger"));
const logger = logger_1.default.getConsoleLogger("app", logger_1.LOGGING_LEVEL.SILLY);
// const packageDef = protoLoader.loadSync("./src/todo.proto", {});
// const grpcObject = grpc.loadPackageDefinition(packageDef);
// const todoPackage = grpcObject.todoPackage;
const server = new grpc_1.default.Server();
server.bind("0.0.0.0:40000", grpc_1.default.ServerCredentials.createInsecure());
server.addService(todo_1.todoGrpc.TodoService, {
    createTodo,
    readTodos,
});
server.start();
const todos = [];
function createTodo(call, callback) {
    console.log(call);
    const todoItem = new todo_1.todoModel.TodoItem;
    todoItem.setId(todos.length + 1);
    todoItem.setText(call.request.getText());
    todos.push(todoItem);
    callback(null, todoItem);
}
function readTodos(call, callback) {
    const todoItems = new todo_1.todoModel.TodoItems;
    todoItems.setItemsList(todos);
    callback(null, todoItems);
}
// function readTodoStream(call, callback) {
// todos.forEach((item) => call.write(item))
// call.end()
// }
//# sourceMappingURL=app.js.map