import grpc, { ServerUnaryCall, sendUnaryData } from "grpc";
import { todoGrpc, todoModel } from './services/todo'
import Logger, { LOGGING_LEVEL } from "./logger"
import protoLoader from "@grpc/proto-loader";

const logger = Logger.getConsoleLogger("client", LOGGING_LEVEL.SILLY)

const client = new todoGrpc.TodoClient(
  "localhost:40000",
  grpc.credentials.createInsecure()
);

const text = process.argv[2];


const todo = new todoModel.TodoItem
todo.setId(1)
todo.setText(text)

client.createTodo(
  todo,
  (err, response) => {
    logger.debug("callback from server, " + response.getText());
  }
);

const noparams = new todoModel.noparams
client.readTodos(noparams, (err, response) => {
  // console.log("received todoitems from server, ", JSON.stringify(response, null, 2));
  if (response) {
    logger.debug("client get todos - " + response);
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
