import React from "react"
import "./button.css"
import Index from "../icon-factory/Index.jsx"
function ButtonFactory({type})
{
    switch(type)
    {
        case "home": return<button className="home">home</button>;
        case "download": return<button className="download">download</button>;
        case "export": return<button className="export">export</button>;
        case "cancel": return<button className="cancel">cancel</button>;
        case "install": return<button className="install">install</button>;
        case "search": return<button className="search">search </button>;
        case "upload": return<button className="upload">upload</button>;
        default: return <button className="submit">submit</button>
    }
}

export default ButtonFactory;