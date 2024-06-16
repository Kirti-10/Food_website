    /*
    Features of Parcel and node modules...

    # Bundling
    # minify
    # cleaning our code=>{with the help of some plugins like babel}
    # dev and production build
    # super fast build algorithm
    # image optimisation
    # caching while development
    # compression
    # hot module replacement
    # tree Shaking=>removing unwanted code
    # compatible with older version of browser
    # https on dev {npx parcel index.html --https}
    # manages port number
    # consistent hashing algorithm=>to do all the bundling
    # zero config bundler
    # transitive dependencies

    # we should put parcel.cache in out .gitignore=>anything which we can generate on server will be put inside git ignore

    render=>updating something in the dom
    # jsx=>(writing html with the help of js)=>basically better way   of writting dom
    */
import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement(
    "h1",
    {
        id:"title",
        key:"1"
    },
     "Heading 1"
    );

// writing with jsx => jsx is not a html inside a javascript it is html like syntax jst a fancy wayof writing html that what jsx is 

const heading2=(
    <h1 id="title" key="2">hello</h1>
);
const container = React.createElement(
    "div",
    {
        id: "container",
        hello: "world",
    },
    [heading,heading2]
);

console.log(heading)

/*React component=>
    part1:-functional component is a js component that returns 
    a components or react element or some piece of jsx
    name of components starts with capital letters jst a convention of writing=>{not mandatory}
*/
const Title=()=>(
    <h1 id="title" key="h2">
        Namaste React
    </h1>
);

const HeaderComponent=function(){
    return (
      <div>
        <Title/>
        <h2>namaste react functional component</h2>
        <h2>this is a h2 tag</h2>
      </div>
);
};

const root=ReactDOM.createRoot(document.getElementById("root"));
// when we have to return functional component we have to write like that..
root.render(<HeaderComponent/>)