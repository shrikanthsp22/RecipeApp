import { Model } from "./model";
import { View } from "./view";
import { ViewModel } from "./view-model";

const model = new Model();
const view = new View();
const viewModel = new ViewModel(model, view);

viewModel.init();
