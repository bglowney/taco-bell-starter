import * as tb from "taco-bell";
import {Model} from "./Model";
import {ServerError, HelloResponse, HelloRequest} from "../models";
import {Visitor} from "./Visitor";

export class App {

    private readonly model: Model;

    constructor(model: Model, root = "app-root") {
        this.model = model;

        // bind remote endpoints to the model
        const helloStream = new tb.HttpStream<HelloRequest, HelloResponse, ServerError>("/hello", model.helloInterceptor)
            .withSubscriber(model.helloResponse)
            .withSubscriber((response: HelloResponse) => { model.visitors.add(response); });

        new tb.Component("div", document.getElementById(root))
            .child(
                new tb.Component("input")
                    .withAttribute("type","text")
                    .withAttribute('id','hello-input')
                    .withValue(model.helloRequest.name),
                new tb.Component("button")
                    .withAttribute("id","hello-btn")
                    .withText("Say hello!")
                    .on('click',helloStream.get.bind(helloStream, model.helloRequest)),
                new tb.Component("h1")
                    .withAttribute("id","response-text")
                    .withText(model.helloResponse.message),
                new tb.Collection('ul')
                    .withAttribute('id','visitor-list')
                    .children(model.visitors, (response: tb.ModelElement<HelloResponse>): Visitor => {
                        return new Visitor(response.get());
                    })
            )
    }

}