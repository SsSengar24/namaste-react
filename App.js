const child = React.createElement("h1", {}, "I am the child element");
const parent = React.createElement("div", { id: "heading" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);