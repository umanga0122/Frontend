 import React from "react";
import Home from "./Home";
import Setting from "./Setting";
import Search from "./Search";


function IconFactory({iconName,color}) {
      switch(iconName)
      {
        case "home": return <Home color={color}/>
        case "setting": return <Setting color={color}/>
        case "search": return <Search color={color}/>
      

        default: return <Home/>
        
        
      }
}
