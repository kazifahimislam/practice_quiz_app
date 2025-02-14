import React, { useState } from "react";
import { auth, setupRecaptcha, signInWithPhoneNumber } from "../firebaseConfig/FirebaseSetup";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { TextField, Button } from "@mui/material";




function PhoneAuth() {

    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    // If `country` property is not passed
    // then "International" format is used.
    // Otherwise, "National" format is used.
    return (
        <div className="phoneAuth">
            <div className="phoneContent">
                <PhoneInput
                    country=""
                    value={value}
                    onChange={setValue} />
                <Button variant="contained" color="primary" >
                    Send OTP
                </Button>
                
            </div>
            <TextField sx={{ width: '50%' }} id="outlined-basic" label="OTP" variant="outlined" />
            <br />
            <Button variant="contained" color="secondary" >
                    Verify OTP
                </Button>
        </div>

    )
}

export default PhoneAuth;
