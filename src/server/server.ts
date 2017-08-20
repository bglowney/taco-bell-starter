import {HelloRequest, HelloResponse, ServerError} from "../models"
import {startServer} from "taco-bell-server";

startServer([
    {
        path: '/hello',
        method: 'GET',
        validate: (params: HelloRequest): boolean => {
            return params != undefined && params.name.get() != undefined;
        },
        handle: (params: HelloRequest): HelloResponse => {
            let o = new HelloResponse();
            o.message.set("Hello " + params.name.get() + "!");
            return o;
        },
        request: () => { return new HelloRequest(); },
        response: () => { return new HelloResponse(); },
        onError: (e: Error, params: HelloRequest) => {
            let error = new ServerError();
            error.message.set(e.message + ": " + params.name.get());
            return error;
        }
    }
]);