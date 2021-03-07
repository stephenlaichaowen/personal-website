import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="navbar">
      {/* <Link href="/" className="logo">
        <a>Stephen Lai</a>
      </Link> */}
      <div className="logo">Stephen Lai</div>
      <div className="menu">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/work">
          <a>My Work</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <div className="burger">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <style jsx>{`
        .navbar {
          padding: 0 15px;
          height: 70px;
          display: flex;
          align-items: center;
          margin: 0 0 50px;
          border: 1px solid var(--primary);
        }
        .logo {
          color: var(--primary);
          text-transform: uppercase;
          font-size: 38px;
        }
        .menu {
          margin-left: auto;
        }
        .burger {
          // color: #111;
        }
        a {
          font-size: 20px;
          font-weight: 300;
          padding-left: 40px;
        }
        @media (max-width: 1200px) {

        }
        @media (max-width: 992px) {
          .logo {
            font-size: 32px;
          }
        }
        @media (max-width: 768px) {
          .logo {
            font-size: 24px;
          }
        }
        @media (max-width: 575px) {
          
        }
      `}</style>
    </div>
  )
}

export default Navbar
