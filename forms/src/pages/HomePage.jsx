import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
 } from "@/components/ui/card"
 import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  useEffect(() => {
    alert('Welcome to the HomePage')
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/form')
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Formulario creado por Alonso</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">Grandes recompensas por ganar</p>
        </CardContent>
        <CardFooter>
          <Button className="cursor-pointer" onClick={handleClick}>Iniciar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
