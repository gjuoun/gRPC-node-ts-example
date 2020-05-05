// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var todo_pb = require('./todo_pb.js');

function serialize_todoPackage_TodoItem(arg) {
  if (!(arg instanceof todo_pb.TodoItem)) {
    throw new Error('Expected argument of type todoPackage.TodoItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_TodoItem(buffer_arg) {
  return todo_pb.TodoItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todoPackage_TodoItems(arg) {
  if (!(arg instanceof todo_pb.TodoItems)) {
    throw new Error('Expected argument of type todoPackage.TodoItems');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_TodoItems(buffer_arg) {
  return todo_pb.TodoItems.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todoPackage_noparams(arg) {
  if (!(arg instanceof todo_pb.noparams)) {
    throw new Error('Expected argument of type todoPackage.noparams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todoPackage_noparams(buffer_arg) {
  return todo_pb.noparams.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoService = exports.TodoService = {
  createTodo: {
    path: '/todoPackage.Todo/createTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.TodoItem,
    responseType: todo_pb.TodoItem,
    requestSerialize: serialize_todoPackage_TodoItem,
    requestDeserialize: deserialize_todoPackage_TodoItem,
    responseSerialize: serialize_todoPackage_TodoItem,
    responseDeserialize: deserialize_todoPackage_TodoItem,
  },
  readTodos: {
    path: '/todoPackage.Todo/readTodos',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.noparams,
    responseType: todo_pb.TodoItems,
    requestSerialize: serialize_todoPackage_noparams,
    requestDeserialize: deserialize_todoPackage_noparams,
    responseSerialize: serialize_todoPackage_TodoItems,
    responseDeserialize: deserialize_todoPackage_TodoItems,
  },
  readTodoStream: {
    path: '/todoPackage.Todo/readTodoStream',
    requestStream: false,
    responseStream: true,
    requestType: todo_pb.noparams,
    responseType: todo_pb.TodoItem,
    requestSerialize: serialize_todoPackage_noparams,
    requestDeserialize: deserialize_todoPackage_noparams,
    responseSerialize: serialize_todoPackage_TodoItem,
    responseDeserialize: deserialize_todoPackage_TodoItem,
  },
};

exports.TodoClient = grpc.makeGenericClientConstructor(TodoService);
