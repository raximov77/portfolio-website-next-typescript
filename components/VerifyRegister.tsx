"use client"
import { GetProps, Input } from 'antd'
import React, { SetStateAction } from 'react'

type OTPProps = GetProps<typeof Input.OTP>;

type VerifyRegisterType = {
    setRegisterVerifyValue:React.Dispatch<SetStateAction<string>>
}

const VerifyRegister:React.FC<VerifyRegisterType> = ({setRegisterVerifyValue}) => {
    const onChange: OTPProps['onChange'] = (text) => {
      setRegisterVerifyValue(text)
    }
    const sharedProps: OTPProps = {onChange};

  return (
    <div className='text-center'>
        <Input.OTP size='large' formatter={(str) => str} {...sharedProps} />
    </div>
  )
}

export default VerifyRegister