"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import Button from './Button'
import { BasketCount, LoginIcon, SearchIcon } from '@/public/images/icon'
import Modal from './Modal'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'
import { useAxios } from '@/hook/useAxios'
import VerifyRegister from './VerifyRegister'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'
import { Context, ContextType } from '@/context/Context'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const Header = () => {
    const path = usePathname()
    const queryClient = useQueryClient()

    const { setToken, token }: ContextType = useContext(Context)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verifyRegister" | "forgotPassword" | "newPassword">("login")
    const [registerVerifyValue, setRegisterVerifyValue] = useState<string>("")
    const [registerEmail, setRegisterEmail] = useState<string>("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const handleOverlayClick = () => setIsMenuOpen(false)

    function handleSubmitLogin(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin === "login") {
            const data = {
                usernameoremail: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value
            }
            useAxios().post("/login", data).then(res => {
                setToken(res.data)
                setLoginModal(false)
                queryClient.invalidateQueries({ queryKey: ['products'] })
            })
        } else if (isLogin === "register") {
            setRegisterEmail((e.target as HTMLFormElement).email.value)
            const data = {
                email: (e.target as HTMLFormElement).email.value,
                firstName: (e.target as HTMLFormElement).username.value,
                lastName: (e.target as HTMLFormElement).username.value,
                password: (e.target as HTMLFormElement).password.value
            }
            useAxios().post('/register', data).then(res => {
                setIsLogin("verifyRegister")
            })
        } else if (isLogin === "verifyRegister") {
            const data = {
                email: registerEmail,
                code: registerVerifyValue
            }

            useAxios().post('/users/verify', {}, {
                params: data
            }).then(res => {
                setIsLogin("login")
            })
        } else if (isLogin === "forgotPassword") {
            setRegisterEmail((e.target as HTMLFormElement).email.value)
            useAxios().post(`/forgot/${(e.target as HTMLFormElement).email.value}`, {}).then(res => {
                setIsLogin("newPassword")
            })
        } else if (isLogin === "newPassword") {
            const data = {
                email: registerEmail,
                new_password: (e.target as HTMLFormElement).newPassword.value,
                otp: (e.target as HTMLFormElement).otp.value
            }
            useAxios().put("/reset-password", data).then(res => {
                setIsLogin("login")
            })
        }
    }

    const { data: basketProducts = [] } = useQuery({
        queryKey: ['basketProducts'],
        queryFn: () => useAxios().get("/basket", {
            headers: token ? { "Authorization": `Bearer ${token.access_token}` } : {},
            params: { page: 1, limit: 100 }
        }).then(res => res.data)
    })

    return (
        <header className='sticky top-0 left-0 w-full bg-white py-[20px] flex items-center justify-between border-b border-[#46A35880]/50 z-50'>
            <div className='w-[1200px] mx-auto flex items-center justify-between'>
                <Link href={"/"}>
                    <Image style={{ width: "150px", height: "34px" }} priority src={"/Logo.svg"} alt='Site Logo' width={150} height={34} />
                </Link>
                <button
                    className="hamburger-menu md:hidden text-2xl"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <nav className="hidden md:flex items-center gap-[50px]">
                    <Link className={`font-bold text-[16px] leading-[20px] relative ${path === "/" ? "" : "opacity-70"}`} href="/">
                        Home
                        <span className={`absolute bottom-[-30px] left-0 w-full h-[2px] bg-[#46A358] scale-x-0 transform transition-transform duration-300 ease-out ${path === "/" ? "scale-x-100" : "hover:scale-x-100"}`}>
                        </span>
                    </Link>
                    <Link className={`font-bold text-[16px] leading-[20px] relative ${path.startsWith("/shop") ? "" : "opacity-70"}`} href="/shop">
                        Shop
                        <span className={`absolute bottom-[-30px] left-0 w-full h-[2px] bg-[#46A358] scale-x-0 transform transition-transform duration-300 ease-out ${path.startsWith("/shop") ? "scale-x-100" : "hover:scale-x-100"}`}>
                        </span>
                    </Link>
                    <Link className={`font-bold text-[16px] leading-[20px] relative ${path === "/plant-care" ? "" : "opacity-70"}`} href="/plant-care">
                        Plant Care
                        <span className={`absolute bottom-[-30px] left-0 w-full h-[2px] bg-[#46A358] scale-x-0 transform transition-transform duration-300 ease-out ${path === "/plant-care" ? "scale-x-100" : "hover:scale-x-100"}`}>
                        </span>
                    </Link>
                    <Link className={`font-bold text-[16px] leading-[20px] relative ${path === "/blogs" ? "" : "opacity-70"}`} href="/blogs">
                        Blogs
                        <span className={`absolute bottom-[-30px] left-0 w-full h-[2px] bg-[#46A358] scale-x-0 transform transition-transform duration-300 ease-out ${path === "/blogs" ? "scale-x-100" : "hover:scale-x-100"}`}>
                        </span>
                    </Link>
                </nav>
                <div className='flex gap-[30px]'>
                    <div className='flex items-center gap-[30px] '>
                        <div>
                            <SearchIcon />
                        </div>
                        <button className='flex items-center space-x-1 bg-[#46A358] text-white p-2 rounded-md'>
                            {basketProducts.length > 0 ? basketProducts.length : ""}
                            <BasketCount />
                            <span>(0)</span>
                        </button>
                    </div>
                    <Button leftIcon={<LoginIcon />} extraClass='w-[100px] gap-[4px]' onClick={() => setLoginModal(true)} type='button' title='Login' />
                    <Modal openModal={loginModal} setOpenModal={setLoginModal} modalStyle=''>
                        <ul className='flex items-center justify-center gap-[10px] cursor-pointer font-semibold text-[22px]'>
                            <li className={`${isLogin == "login" ? "text-[#46A358]" : ""}`} onClick={() => setIsLogin("login")}>Login</li>
                            <span className='text-[18px] text-[#3D3D3D]/80'>|</span>
                            <li className={`${isLogin == "register" ? "text-[#46A358]" : ""}`} onClick={() => setIsLogin("register")}>Register</li>
                        </ul>
                        <form onSubmit={handleSubmitLogin} className='w-[300px] mx-auto mt-[53px] space-y-5' autoComplete='off'>
                            {isLogin == "login" && <LoginInputs setIsLogin={setIsLogin} />}
                            {isLogin == "register" && <RegisterInputs />}
                            {isLogin == "verifyRegister" && <VerifyRegister setRegisterVerifyValue={setRegisterVerifyValue} />}
                            {isLogin == "forgotPassword" && <ForgotPassword />}
                            {isLogin == "newPassword" && <NewPassword />}
                            <Button extraClass='w-full'
                                title={
                                    isLogin === "login" ? "Login" :
                                        isLogin === "register" ? "Register" :
                                            isLogin === "verifyRegister" ? "Verify Registration" :
                                                isLogin === "forgotPassword" ? "Forgot Password" :
                                                    isLogin === "newPassword" ? "Set New Password" : "Login"
                                }
                                type='submit' onClick={() => { }} />
                        </form>
                    </Modal>
                </div>
            </div>

            {/* Hamburger Menu */}
            {isMenuOpen && (
                <>
                    <div
                        className="menu-overlay fixed inset-0 bg-black/50 z-40"
                        onClick={handleOverlayClick}
                    ></div>
                    <nav className="sidebar-menu fixed top-0 left-0 w-[35%] max-w-[300px] h-full bg-white z-50 p-5 flex flex-col gap-4">
                        <h4 className='text-[22px] font-semibold cursor-pointer'>Pages</h4>
                        <Link className='hover:text-[#46A358]' href="/" onClick={handleOverlayClick}>Home</Link>
                        <Link className='hover:text-[#46A358]' href="/shop" onClick={handleOverlayClick}>Shop</Link>
                        <Link className='hover:text-[#46A358]' href="/plant-care" onClick={handleOverlayClick}>Plant Care</Link>
                        <Link className='hover:text-[#46A358]' href="/blogs" onClick={handleOverlayClick}>Blogs</Link>
                    </nav>
                </>
            )}
        </header>
    )
}

export default Header