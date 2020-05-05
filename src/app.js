const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
// const logger = Logger.getConsoleLogger("app", LOGGING_LEVEL.SILLY)

const packageDef = protoLoader.loadSync("./src/todo.proto", {});

const grpcObject = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:40000", grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service, {
  createTodo,
  readTodos,
  readTodoStream,
});

server.start();

const todos = [];
function createTodo(call, callback) {
  console.log(call);
  const todoItem = {
    id: todos.length + 1,
    text: call.request.text,
  };
  todos.push(todoItem);
  callback(null, todoItem);
}

function readTodos(call, callback) {
  callback(null, { items: todos });
}

function readTodoStream(call, callback){
  todos.forEach((item) => call.write(item))
  call.end()
}