import {createRoot} from "react-dom/client";
import Image from "./image";
import Gallery from "./example2";

export default function App1() {
  const root = createRoot(document.getElementById("root"));
  //root.render(<Image/>);
  root.render(<Gallery/>)
}
