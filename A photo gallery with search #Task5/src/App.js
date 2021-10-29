
import React, { Component } from 'react';
import Search from "./components/search";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
function App() {
  
return (
   <MuiThemeProvider>
  <div classname='App'>
      <Search />
   </div>
   </MuiThemeProvider>  
)
}

export default App;
