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
const logger = logger_1.default.getConsoleLogger("client", logger_1.LOGGING_LEVEL.SILLY);
const client = new todo_1.todoGrpc.TodoClient("localhost:40000", grpc_1.default.credentials.createInsecure());
const text = process.argv[2];
const todo = new todo_1.todoModel.TodoItem;
todo.setId(1);
todo.setText(text);
client.createTodo(todo, (err, response) => {
    logger.debug("callback from server, " + response.getText());
});
const noparams = new todo_1.todoModel.noparams;
client.readTodos(noparams, (err, response) => {
    // console.log("received todoitems from server, ", JSON.stringify(response, null, 2));
    if (response) {
        logger.debug("client get todo - " + todo);
    }
});
// const call = todoGrpc.TodoService.readTodoStream();
// call.on("data", (item) => {
// console.log("received stream - ", JSON.stringify(item));
// });
// 
// call.on("end", (e) => {
// console.log("server stream done");
// });
//# sourceMappingURL=client.js.map