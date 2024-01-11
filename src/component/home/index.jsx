import React, { useState } from 'react'
import './home.css';
import { REGISTER } from '../endpointUrl';
import Button from '../button';
import Input from '../input';
import { useNavigate } from 'react-router-dom';
const Home=()=> {
    const [registerData,setRegisterData] = useState({
        phone: '' ,
        "dial_code" : "+91"
     });
     const [msg,setMsg] = useState("");
     const navigate = useNavigate();
    const getPhone=(e)=>{
        const updatedData = {...registerData};
            updatedData[e.target.name] = e.target.value;
        setRegisterData(updatedData);
    }
    
    const sendCode = async()=>{
        var signupdetail = [];
        for (var property in registerData) 
        {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(registerData[property]);
            signupdetail.push(encodedKey + "=" + encodedValue);
        }

         signupdetail = signupdetail.join("&");
        console.log("signupdetail :",signupdetail);
        const options = {
            method: 'POST',
            mode: 'cors',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body: signupdetail
        }
        let result = await fetch(REGISTER,options);
        console.log("result",result);
        let res = await result.json();
        if(res.status==="Success"){
            setMsg(res.data);
            navigate(`/verifyOtp?${JSON.stringify((signupdetail))}`)
        }
    }
  return (
    <div className='container'>
        <div className='home'>
        <h3 className='heading'>Enter Your Mobile Number</h3>
        <p className='para'>We will send you the 4 digit verification code</p>
        <Input className="inputbox" type="text" placeholder="Enter your mobile" onChange={getPhone} value={registerData.phone} name="phone"/>
        <Button className="button" type="button" btnText="Send Code" onClick={sendCode}/>
        {msg?
        <p style={{color:"green"}}>{msg}</p>:null}
        </div>
    </div>
  )
}
export default Home;