import React, { useState } from 'react'
import './verifyOtp.css';
import Input from '../input';
import Button from '../button';
import { useSearchParams } from 'react-router-dom';
const VerifyOTP=()=> {
    const [signupdetail,setSignupDetail] = useSearchParams();
    console.log("bbb : ",signupdetail.get("signupdetail"));
    const [otp,setOtp] = useState({
        otp1:"",
        otp2:"",
        otp3:"",
        otp4:"",
        otp5:"",
        otp6:""
    });

    const verifyCode = async()=>{
        // let value = await fetch(LOGIN,)
    }
    const getotp=(e)=>{
        const updated = {...otp};
        updated[e.target.name] = e.target.value;
        setOtp(updated);
    }
  return (
    <div className='container'>
        <div className='home'>
        <section className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M13.1575 2.36708C13.0656 2.27493 12.9564 2.20181 12.8362 2.15192C12.7159 2.10203 12.587 2.07635 12.4569 2.07635C12.3267 2.07635 12.1978 2.10203 12.0776 2.15192C11.9574 2.20181 11.8482 2.27493 11.7563 2.36708L5.1775 8.94583C5.10411 9.01907 5.04589 9.10607 5.00616 9.20184C4.96643 9.29761 4.94598 9.40027 4.94598 9.50396C4.94598 9.60764 4.96643 9.71031 5.00616 9.80608C5.04589 9.90185 5.10411 9.98884 5.1775 10.0621L11.7563 16.6408C12.1442 17.0287 12.7696 17.0287 13.1575 16.6408C13.5454 16.2529 13.5454 15.6275 13.1575 15.2396L7.42584 9.5L13.1654 3.76042C13.5454 3.38042 13.5454 2.74708 13.1575 2.36708Z" fill="#1E232C" stroke="#1E232C" stroke-width="0.2"/>
            </svg>
        </section>
        <h3 className='OTPheading'>OTP Verification</h3>
        <p className='paraotp'>Enter the verification code we just sent on your Mobile Number.</p>
        <div className='inputcontainer'>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp1} name="otp1"/>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp2} name="otp2"/>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp3} name="otp3"/>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp4} name="otp4"/>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp5} name="otp5"/>
            <Input className="smbox" type="text" placeholder="" onChange={getotp} value={otp.otp6} name="otp6"/>

        </div>
        <Button className="buttonverify" type="button" btnText="Verify" onClick={verifyCode}/>
        <p className='resendpara'>Didn’t received code? <span className='resend'>Resend</span></p>
        </div>
    </div>
  )
}
export default VerifyOTP