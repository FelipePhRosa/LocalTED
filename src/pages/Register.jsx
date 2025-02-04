import React from 'react'
import office1 from '../assets/office-1.jpg'
import NavBar from "../components/NavBar";
import RegisterForm from "../components/Register"; // Renomeado
import Footer from "../components/Footer"

const RegisterPage = () => {
  return (
      <>
        <div 
          className="bg-cover bg-center min-h-screen" 
          style={{ backgroundImage: `url(${office1})` }}
        >
        <NavBar/>
          <RegisterForm />
        </div>
        <Footer />
      </>
  )
}

export default RegisterPage;
