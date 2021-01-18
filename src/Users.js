import './App.css';
window.onload=function()
{
  var usid=localStorage.getItem("userid");


}

function Users() {
    return (
    <div className="container">
    <div className="App">
      <form>
        <h1><u>Login</u></h1>
        <label>
          Username: 
          <input type="text" value={usid}/>
        </label>
        <label>
          Password:
          <input type="password"  />
        </label>
        <button><input type="submit" value="Submit" /></button>
      </form>
      </div>
     var input=localstorage
      </div>
    );
  }


export default Users;