import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
const rootEl = document.getElementById("root");
const root = createRoot(rootEl); // createRoot(container!) if you use TypeScript
root.render(<App />);
