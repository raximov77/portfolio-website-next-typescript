"use client"
import { GetProps, Input } from 'antd'
import React, { SetStateAction, useState } from 'react'

type OTPProps = GetProps<typeof Input.OTP>;

type VerifyRegisterType = {
    setRegisterVerifyValue:React.Dispatch<SetStateAction<string>>
}

const VerifyRegister:React.FC<VerifyRegisterType> = ({setRegisterVerifyValue}) => {
    const [value, setValue] = useState<string>("")
    const onChange: OTPProps['onChange'] = (text) => {
        setValue(text)
    }
    const sharedProps: OTPProps = {onChange};

    console.log(value);
    
  return (
    <div className='text-center'>
        <Input.OTP size='large' formatter={(str) => str} {...sharedProps} />
    </div>
  )
}

export default VerifyRegister