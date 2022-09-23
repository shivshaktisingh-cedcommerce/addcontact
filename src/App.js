import './App.css';
import {useSelector , useDispatch} from "react-redux"
import {saveuserdata} from "./Reduceraction"
import {removeuserdata} from "./Reduceraction"
import { useRef } from 'react';


function App() {
  const mystate = useSelector((state)=>state.function1)
  const refmsg = useRef()
  const dispatch = useDispatch()

  const addnewcontact=(event)=>{
    event.preventDefault();
    var name = event.target.name.value;
    var address = event.target.address.value;
    var city = event.target.city.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    if(phone.length!==10){
      refmsg.current.innerText ="Please enter 10 digit number"
    }
    if(phone.length===10){
      refmsg.current.innerText ="";
    event.target.name.value = "";
    event.target.address.value = "";
    event.target.phone.value = "";
    event.target.city.value = "";
    event.target.email.value = "";
    let t = {name:name , address:address , city:city , phone:phone , email: email}    
    dispatch(saveuserdata(t))
    }
    
  }
  const deletefun =(d)=>{
    dispatch(removeuserdata(d))

  }
  return (
    <div className="App">
      <div>
        <p>ADD NEW CONTACT</p>
        <form onSubmit={addnewcontact}>
          <p ref={refmsg} style={{color:"red"}}></p>
        <table>
          <tr><td>NAME : </td><td><input type="text" required name="name" /></td></tr>
          <tr><td>ADDRESS : </td><td><input type="text" required name="address" /></td></tr>
          <tr><td>CITY : </td><td><input type="text"  required name="city" /></td></tr>
          <tr><td>PHONE : </td><td><input type="number"  required name="phone" title="Phoe Number should be 10 digit"/></td></tr>
          <tr><td>EMAIL : </td><td><input type="email"  required name="email" /></td></tr>
          <tr><td colSpan={2}><input type="submit"/></td></tr>
        </table>
        </form>
      </div>
      <div>
        {mystate.contact.length>0?<table>
          <tr><td>NAME</td><td>EMAIL</td><td>ACTION</td></tr>
        {mystate.contact.map((d , ind)=>{
          return (
              <tr><td>{d.name}</td><td>{d.email}</td><td><button onClick={()=>deletefun(ind)}>Delete</button></td></tr>
          )
        })}
        </table>:""}
      </div>
  
    </div>
  );
}

export default App;
