{/* <div id="parent">
        <div id="child">
             <h1>I am heading</h1>
        </div>
</div> */}

const parent=React.createElement("div",
{id:parent},
React.createElement("div",{id:child},React.createElement("h1",{},"I am Heading")))








// const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);