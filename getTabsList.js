import React, { Component } from "react"
import './react-tabs.css';
import './style.css';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

class GetTabsList extends Component {
   constructor(props){
   super(props);    
   this.getTabsList = this.getTabsList.bind(this);
   this.getEachTab = this.getEachTab.bind(this);
   this.extractKeys = this.extractKeys.bind(this);
}
 
extractKeys= function(){
   return Object.keys(this.props.tabslist[0]);
}

getTabsList = function(){
  var rows = this.props.tabslist;
   return rows.map((each_row, value)=>{
   return <Tab>{this.getEachTab(each_row)} </Tab>
  })      
}
      
getEachTab = function(each_row){
   var table_headers = this.extractKeys();
   return table_headers.map((key, value)=>{
       return <p>{each_row[key]}</p>  
  })
}

render(){
  return(
    <Tabs>
    <TabList>
           {this.getTabsList()}
       </TabList>
      <TabPanel>  
       <p>Tab1 - Content goes here!    </p>
       </TabPanel>
       <TabPanel>  
        <p>Tab2 - Content goes here!    </p>
       </TabPanel>
       <TabPanel>  
        <p>Tab3 - Content goes here!    </p>
       </TabPanel>
       
      </Tabs>
   );
  }
}

export default GetTabsList
