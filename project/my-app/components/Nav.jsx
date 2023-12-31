"use client";


import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';


// navbar er sob kaj ekhane
const Nav = () => {

    const isUserLoggedIn=true;

//login na thakle nicher code
    const [providers,setProviders]=useState(null);
    const [toggleDropdown,setToggleDropdoun]=useState(false);
    useEffect(()=>{
const setProviders=async()=>{
    const response=await getProviders();
    setProviders(response);
}
setProviders();
    },[])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promtopia Logo"
        width={30}
        height={30}
        className="object-contain"/>
        <p className="logo_text">Promptopia</p>
      </Link>

    {/* desktop navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn?(
            <div className="flex gap-3 md:gap-5">
                <Link className="black_btn" href="/create-prompt">Create Post</Link>
                <button type="button" onClick={signOut} className="outline_btn">
                    Sign Out
                </button>
                <Link href="/profile">
                    <Image 
                    src="/assets/images/logo.svg"
                    width={37}
                    height={37}
                    className="round-full"
                    alt="profile"/>
                </Link>
            </div>
        ):(
<>
{providers && 
Object.values(providers).map((provider)=>{
    (
        <button type="button"
        key={provider.name}
        onClick={()=>signIn(provider.id)}
        className="black_btn">
Sign In
        </button>
    )
})}
</>
        )}
      </div>
      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn?(
            <div className="flex">
                  <Image 
                    src="/assets/images/logo.svg"
                    width={37}
                    height={37}
                    className="round-full"
                    alt="profile"
                    onClick={()=>setToggleDropdoun((prev)=>!prev)}/>
                    
                    {toggleDropdown &&(
                        <div className="dropdown"> 
                        <Link href="/profile"
                        className="dropdown_link"
                        onClick={()=>setToggleDropdoun(false)}>
                            My Profile
                        </Link>
                        <Link href="/create-propmt"
                        className="dropdown_link"
                        onClick={()=>setToggleDropdoun(false)}>
                            Create Prompt
                        </Link>
                        <button
                        type="button"
                        onClick={()=>{
                            setToggleDropdoun(false);
                            signOut();
                        }}
                        className="mt-5 w-full black_btn">Sign Out</button>
                        </div>
                    )}
            </div>
        ):
        <>
        {providers && 
Object.values(providers).map((provider)=>{
    (
        <button type="button"
        key={provider.name}
        onClick={()=>signIn(provider.id)}
        className="black_btn">
Sign In
        </button>
    )
})}
        </>}
      </div>
    </nav>
  )
}

export default Nav
