import logo from './logo.svg';
import './App.css';
import React,{ Component, useState } from 'react';
import axios from 'axios';
window.onload=function() 
{
//  var usid=localStorage.getItem("userid");


}
function deleteIt()
{

}
class App extends Component {
  constructor(props) {
    super(props);
    this.usid= 901;
    this.state = {
      newItem : "",
      list : [],
      list1:[]
    };
  

  }
 deleteItem()
 {
deleteIt();

//how delete query will look like  https://localhost:44358/api/Todoes/901?item=movie

 }
   insert() {
 var items=document.getElementById("task").value
      var axios = require('axios');
      var data = JSON.stringify({
        "uid":this.usid,
        "items":items});
      
      var config = {
        method: 'post',
        url: 'https://localhost:44358/api/todoes',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }//end fxn insert
    
  getItems= e=>{
    e.preventDefault()


    

let list1=[...this.state.list1]

//list1.push
var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://localhost:44358/api/todoes/'+this.usid,
  headers: { }
};


function fetchusers(response){
const lis= JSON.stringify(response.data);
console.log("li"+lis);
list1=lis;//response.data;
console.log('array'+list1);
//t1=lis;
//state
const [list1,setlist1]=useState(lis);
//state.list1
//this.setState


}//end fxn fetch users
axios(config)
.then(response=>fetchusers(response))
.catch(function (error) {
  console.log(error);
});

  console.log("hey"+list1);
//this.setState({
  
 // list1:li
  
//});

  this.setState({list1});

  }

  handleSubmit = event => {
    event.preventDefault()

   
    this.insert()
  
    var todoValue=document.getElementById("task").value
    if(todoValue!== ""){
      const newItem = {
        uid: this.usid,
        items : todoValue
      //  isDone : false
      };
      console.log(this.state.list1);
      const list = [...this.state.list];
      list.push(newItem);
      this.setState( {
        list,
        newItem: ""
      });
      console.log(this.state.list);
//      this.getItems
  }// end if
  }//end handle submit

render() {
  return (
    <div className="App">
      <header className="App-header">
       <form>
    
        <h1><u>Login</u></h1>
        <label>
          Add a Task
          <input type="text" id="task" />
</label>       
<button type="submit" onClick={this.handleSubmit}>ADD </button>  </form>
<button onClick={this.deleteItem}>  Delete </button>
      <button onClick={this.getItems}>Show MY List</button>

<button onClick={this.updateItem}>update</button>
 { //delte from herre
 }

<div className = "list">

<ul>
  {this.state.list1.map(item => {
    return(
      
      <div>
        <li key = {item.uid}></li>
   
     <ul> {item.items}
              {//{item.items} 
               }  
     </ul>
    
      </div>
       );
       
      })
      }  
       </ul></div>
  


      </header>
    </div>
  );
}
}

export default App;
