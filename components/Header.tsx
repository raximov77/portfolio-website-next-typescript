"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Button from './Button'
import { BasketIcon, LoginIcon, SearchIcon } from '@/public/images/icon'
import Modal from './Modal'
import Input from './Input'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'
import { useAxios } from '@/hook/useAxios'
import VerifyRegister from './VerifyRegister'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'

const Header = () => {
    const path = usePathname()
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "newPassword">("login")
    const [registerVerifyValue, setRegisterVerifyValue] = useState<string>("")
    const [registerEmail, setRegisterEmail] = useState<string>("")

    function handleSubmitLogin(e:React.MouseEvent<HTMLFormElement>){
      e.preventDefault()
      if(isLogin == "login"){
          const data = {
            usernameoremail:(e.target as HTMLFormElement).email.value, 
            password:(e.target as HTMLFormElement).password.value    
          } 
          useAxios().post("/login", data).then(res => {
            setLoginModal(false)
            localStorage.setItem("user", JSON.stringify(res.data))
          })      
      }
      else if(isLogin == "register"){
        setRegisterEmail((e.target as HTMLFormElement).email.value)
          const data = {
            email:(e.target as HTMLFormElement).email.value, 
            firstName:(e.target as HTMLFormElement).username.value, 
            lastName:(e.target as HTMLFormElement).username.value, 
            password:(e.target as HTMLFormElement).password.value    
          } 
          useAxios().post('/register', data).then(res => {
            setIsLogin("verifyRegister")
          })  
      }
      else if(isLogin == "verifyRegister"){
        const data = {
          email:registerEmail,
          code:registerVerifyValue
        }
        useAxios().post('/users/verify', {}, {
          params:data
        }).then(res => {
          setIsLogin("login")
        })     
      }
      else if(isLogin == "forgotPassword"){
        setRegisterEmail((e.target as HTMLFormElement).email.value)
        useAxios().post(`/forgot/${(e.target as HTMLFormElement).email.value}`, {}).then(res => {
          setIsLogin("newPassword")   
        })     
      }
      else if(isLogin == "newPassword"){
        const data = {
          email:registerEmail, 
          new_password:(e.target as HTMLFormElement).newPassword.value,
          otp:(e.target as HTMLFormElement).otp.value
        } 
        useAxios().put("/reset-password", data).then(res => {
          setIsLogin("login")
        })      
    }
    }

  return (
    <header className='py-[20px] w-[1200px] mx-auto flex items-center justify-between border-b border-[#46A35880]/50'>
        <Link href={"/"}>
          <Image style={{width:"150px", height:"34px"}} priority src={"/Logo.svg"} alt='Site Logo' width={150} height={34}/>
        </Link>
        {/* <nav className='flex items-center gap-[50px]'>
            <Link className={`font-semibold text-[22px] ${path == "/" ? "text-red-500" : ""}`} href={"/"}>Home</Link>
            <Link className={`font-semibold text-[22px] ${path == "/shop" ? "text-red-500" : ""}`} href={"/shop"}>Shop</Link>
            <Link className={`font-semibold text-[22px] ${path == "/plant-care" ? "text-red-500" : ""}`} href={"/plant-care"}>Plant Care</Link>
            <Link className={`font-semibold text-[22px] ${path == "/blogs" ? "text-red-500" : ""}`} href={"/blogs"}>Blogs</Link>
        </nav> */}
          <nav className="flex items-center gap-[50px]">
            {["/", "/shop", "/plant-care", "/blogs"].map((link, index) => (
              <Link
                key={index}
                className={`font-bold text-[16px] leading-[20px] relative ${
                  path === link ? "" : "opacity-70"
                }`}
                href={link}
              >
                {["Home", "Shop", "Plant Care", "Blogs"][index]}
                <span
                  className={`absolute bottom-[-29px] left-0 w-full h-[2px] bg-[#46A358] scale-x-0 transform transition-transform duration-300 ease-out ${
                    path === link ? "scale-x-100" : "hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
        </nav>
        <div className='flex gap-[30px]'>
          <div className='flex items-center gap-[30px]'>
            <div className='cursor-pointer'>
              <SearchIcon/>
            </div>
            <div className='cursor-pointer'>
              <BasketIcon/>
            </div>
          </div>
          <Button leftIcon={<LoginIcon/>} extraClass='w-[100px] gap-[4px]' onClick={() => setLoginModal(true)} type='button' title='Login'/>
          <Modal openModal={loginModal} setOpenModal={setLoginModal} modalStyle=''>
            <ul className='flex items-center justify-center gap-[10px] cursor-pointer font-semibold text-[22px]'>
                <li className={`${isLogin == "login" ? "text-[#46A358]" : ""}`} onClick={() => setIsLogin("login")}>Login</li>
                <li className={`${isLogin == "register" ? "text-[#46A358]" : ""}`} onClick={() => setIsLogin("register")}>Register</li>
            </ul>
            <form onSubmit={handleSubmitLogin} className='w-[300px] mx-auto mt-[53px] space-y-5' autoComplete='off'>
                {isLogin == "login" && <LoginInputs setIsLogin={setIsLogin}/>}
                {isLogin == "register" && <RegisterInputs/>}
                {isLogin == "verifyRegister" && <VerifyRegister setRegisterVerifyValue={setRegisterVerifyValue}/>}
                {isLogin == "forgotPassword" && <ForgotPassword/>}
                {isLogin == "newPassword" && <NewPassword/>}
                <Button extraClass='w-full' title='Login' type='submit' onClick={() => {}}/>
            </form>
          </Modal>
        </div>
    </header>
  )
}

export default Header