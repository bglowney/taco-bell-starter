import {AbstractSerializable, ModelElement} from "taco-bell";

export class HelloRequest extends AbstractSerializable {
    readonly name = new ModelElement<string>("");
}

export class HelloResponse extends AbstractSerializable {
    readonly message = new ModelElement<string>();
}

export class ServerError extends AbstractSerializable {
    readonly message = new ModelElement<string>();
}