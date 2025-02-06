import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (userName === 'Lucky' && password === 'Alonso') {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4 w-1/2 mx-auto'>
      <Input placeholder="User" onChange={(e) => setUserName(e.target.value)} />
      <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
