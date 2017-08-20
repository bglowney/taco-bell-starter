import {App} from "./App";
import {ComponentQueue} from "taco-bell";
import {Model} from "./Model";

// create the application model
const model = new Model();

// setup the dom components
new App(model);

// apply changes to the DOM
ComponentQueue.cycle();