import * as tb from "taco-bell";
import * as moment from "moment";
import {HelloResponse} from "../models";

export class Visitor extends tb.Component {

    constructor(response: HelloResponse) {
        super('li');
        this.child(
            new tb.Component('h3')
                .withText(response.message),
            new tb.Component('p')
                .withText(this.visitedTime())
        )
    }

    private visitedTime(): string {
        return moment().format('MMMM Do YYYY, h:mm:ss a');
    }
}