"use client";
import Link from "next/link";
import './login.css';
import { usePathname } from "next/navigation";

export default function Layout({children}){

const pathName=usePathname();
console.log(pathName);
return(
    <div>
   {
    pathName!="/login/loginteacher"?
    <ul className="login-menu">
    <li>
        <h4>Login Navbar</h4>
    </li>
    <li>
        <Link href="/login">Go Login</Link>
    </li>
    <li>
        <Link href="/login/loginstudent">Go Student Login</Link>
    </li>
    <li>
        <Link href="/login/loginteacher">Go Teacher Login</Link>
    </li>
  </ul>
  :<Link href="/login">Go to main login</Link>
   }
        { children}
    </div>
)
}
