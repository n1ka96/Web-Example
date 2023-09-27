import { Viewport } from "./viewport";

const container = document.getElementById('view');
const view = new Viewport(container);
view.refresh();