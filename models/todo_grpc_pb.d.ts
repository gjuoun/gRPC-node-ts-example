// package: todoPackage
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoService_IcreateTodo;
    readTodos: ITodoService_IreadTodos;
    readTodoStream: ITodoService_IreadTodoStream;
}

interface ITodoService_IcreateTodo extends grpc.MethodDefinition<todo_pb.TodoItem, todo_pb.TodoItem> {
    path: string; // "/todoPackage.Todo/createTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.TodoItem>;
    requestDeserialize: grpc.deserialize<todo_pb.TodoItem>;
    responseSerialize: grpc.serialize<todo_pb.TodoItem>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoItem>;
}
interface ITodoService_IreadTodos extends grpc.MethodDefinition<todo_pb.noparams, todo_pb.TodoItems> {
    path: string; // "/todoPackage.Todo/readTodos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.noparams>;
    requestDeserialize: grpc.deserialize<todo_pb.noparams>;
    responseSerialize: grpc.serialize<todo_pb.TodoItems>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoItems>;
}
interface ITodoService_IreadTodoStream extends grpc.MethodDefinition<todo_pb.noparams, todo_pb.TodoItem> {
    path: string; // "/todoPackage.Todo/readTodoStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<todo_pb.noparams>;
    requestDeserialize: grpc.deserialize<todo_pb.noparams>;
    responseSerialize: grpc.serialize<todo_pb.TodoItem>;
    responseDeserialize: grpc.deserialize<todo_pb.TodoItem>;
}

export const TodoService: ITodoService;

export interface ITodoServer {
    createTodo: grpc.handleUnaryCall<todo_pb.TodoItem, todo_pb.TodoItem>;
    readTodos: grpc.handleUnaryCall<todo_pb.noparams, todo_pb.TodoItems>;
    readTodoStream: grpc.handleServerStreamingCall<todo_pb.noparams, todo_pb.TodoItem>;
}

export interface ITodoClient {
    createTodo(request: todo_pb.TodoItem, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.TodoItem, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.TodoItem, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    readTodos(request: todo_pb.noparams, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    readTodos(request: todo_pb.noparams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    readTodos(request: todo_pb.noparams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    readTodoStream(request: todo_pb.noparams, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todo_pb.TodoItem>;
    readTodoStream(request: todo_pb.noparams, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todo_pb.TodoItem>;
}

export class TodoClient extends grpc.Client implements ITodoClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTodo(request: todo_pb.TodoItem, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.TodoItem, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.TodoItem, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItem) => void): grpc.ClientUnaryCall;
    public readTodos(request: todo_pb.noparams, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    public readTodos(request: todo_pb.noparams, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    public readTodos(request: todo_pb.noparams, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.TodoItems) => void): grpc.ClientUnaryCall;
    public readTodoStream(request: todo_pb.noparams, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todo_pb.TodoItem>;
    public readTodoStream(request: todo_pb.noparams, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<todo_pb.TodoItem>;
}
