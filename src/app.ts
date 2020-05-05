import grpc, { ServerUnaryCall, sendUnaryData } from "grpc";
import { todoGrpc, todoModel } from './services/todo'
import Logger, { LOGGING_LEVEL } from "./logger"
import protoLoader from "@grpc/proto-loader";

const logger = Logger.getConsoleLogger("app", LOGGING_LEVEL.SILLY)

// const packageDef = protoLoader.loadSync("./src/todo.proto", {});

// const grpcObject = grpc.loadPackageDefinition(packageDef);

// const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();

server.bind("0.0.0.0:40000", grpc.ServerCredentials.createInsecure());

server.addService(todoGrpc.TodoService, {
  createTodo,
  readTodos,
  // readTodoStream,
});

server.start();

const todos: todoModel.TodoItem[] = [];
function createTodo(
  call: ServerUnaryCall<todoModel.TodoItem>,
  callback: sendUnaryData<todoModel.TodoItem>) {

  console.log(call);
  const todoItem = new todoModel.TodoItem;
  todoItem.setId(todos.length + 1)
  todoItem.setText(call.request.getText())
  todos.push(todoItem);
  
  callback(null, todoItem);
}

function readTodos(
  call: ServerUnaryCall<todoModel.TodoItem>,
  callback: sendUnaryData<todoModel.TodoItems>) {
  const todoItems = new todoModel.TodoItems
  todoItems.setItemsList(todos)
  callback(null, todoItems);
}

// function readTodoStream(call, callback) {
  // todos.forEach((item) => call.write(item))
  // call.end()
// }