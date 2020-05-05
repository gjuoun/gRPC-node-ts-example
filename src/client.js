const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("./src/todo.proto", {});

const grpcObject = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo(
  "localhost:40000",
  grpc.credentials.createInsecure()
);

const text = process.argv[2];

client.createTodo(
  {
    id: 1,
    text: text,
  },
  (err, response) => {
    console.log("received from server, ", JSON.stringify(response, null, 2));
  }
);

client.readTodos({}, (err, response) => {
  // console.log("received todoitems from server, ", JSON.stringify(response, null, 2));
  if (response.items) {
    console.log("todos - ");
    response.items.forEach((i) => console.log(i.text));
    console.log("end todos -");
  }
});

const call = client.readTodoStream();
call.on("data", (item) => {
  console.log("received stream - ", JSON.stringify(item));
});

call.on("end", (e) => {
  console.log("server stream done");
});
