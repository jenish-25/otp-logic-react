import { useEffect, useRef, useState } from "react";

export const OtpPage=({number})=>{
    const [otp,setOtp]=useState(new Array(number).fill(""));
    const inputRef=useRef([]);
    console.log(inputRef);
    useEffect(()=>{
        if(inputRef.current[0]){
            inputRef.current[0].focus();
        }   
    },[]);

    const handleChange = (index,e) => {
        const value=e.target.value;
        if(/[^0-9]/g.test(value)) return;

        const newOtp=[...otp];
        newOtp[index]=value.substring(value.length-1);
        setOtp(newOtp);
 

        if(value && index < number-1 && inputRef.current[index+1]){
            inputRef.current[index + 1].focus(); 
        }
    };

    const handleClick=(index)=>{
        inputRef.current[index].setSelectionRange(1,1);

        if(index > 0 && !otp[index-1]){
            inputRef.current[otp.indexOf("")].focus()
        }
    };
    const handleKeydown=(index,e)=>{
        if(e.key==='Backspace' && !otp[index] && index >0 && inputRef.current[index-1]){
            const newOtp=[...otp];
            newOtp[index]="";
            setOtp(newOtp);

            if(index>0){
                inputRef.current[index-1].focus();
            }
        }
    }
    const handleSubmit = () => {
      if (otp.every((digit) => digit !== "")) {
          alert(otp.join("") + " success");
      } else {
          alert("Please fill all OTP fields before continuing.");
      }
  };
    return <div className="flex items-center justify-center h-screen bg-[#0A2A52]">
    <div className="text-center text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center justify-center">
        <span className="mr-2">📹</span> 
        <span className="text-teal-400">Webinar.gg</span>
      </h1>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-6">Check your Email for a Code </h2>
      <p className="text-gray-300 mt-2">
        Please enter your verification code sent to your email 
      </p>

      {/* Input Field */}
      <div className="flex justify-center gap-4 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRef.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onClick={()=> handleClick(index)}
              onKeyDown={(e) => handleKeydown(index, e)}
              className="w-12 h-12 text-center text-2xl font-semibold text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          ))}
        </div>

      {/* Continue Button */}
      <button
        onClick={handleSubmit}
        className="w-64 mt-6 px-4 py-2 text-lg bg-gray-500 rounded-md hover:bg-gray-400 transition-all"
      >
        Continue
      </button>
    </div>
  </div>
}