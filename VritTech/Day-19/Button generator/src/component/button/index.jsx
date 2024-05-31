import React from "react"
import "./button.css"
function ButtonFactory({type})
{
    switch(type)
    {
        case "submit": return<button className="submit">submit</button>;
        case "download": return<button className="download">download</button>;
        case "export": return<button className="export">export</button>;
        case "cancel": return<button className="cancel">cancel</button>;
        case "install": return<button className="install">install</button>;
        case "search": return<button className="search">search</button>;
        case "contact": return<button className="contact">contact</button>;
        case "dummy1": return<button className="dummy1">dummy1</button>;
        case "dummy2": return<button className="dummy2">dummy2</button>;
        case  "dummy3": return<button className="dummy3">dummy3</button>;
        default: return <button className="submit">submit</button>
    }
}

export default ButtonFactory;