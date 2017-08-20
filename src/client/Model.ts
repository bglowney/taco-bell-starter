import {HttpResponseInterceptor, ModelElement, ModelArray} from "taco-bell";
import {HelloResponse, ServerError, HelloRequest} from "../models";

export class Model {

    readonly helloRequest = new HelloRequest();
    readonly helloResponse = new HelloResponse();
    readonly visitors = new ModelArray<HelloResponse>();

    readonly helloInterceptor: HttpResponseInterceptor<ServerError> = {
        statusCode: new ModelElement<number>(),
        body: new ServerError()
    }

}