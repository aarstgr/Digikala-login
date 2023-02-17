import Formm from "./Formm";
import Sidebar from "./Sidebar";
const components=()=>{
    const func=document.createElement("div");
    func.append(Formm(),Sidebar())

    return func
}

export default components;