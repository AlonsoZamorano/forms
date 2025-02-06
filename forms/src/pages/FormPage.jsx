import React from 'react'
import FinalQuestion from '../components/FinalQuestion'
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"



export const FormPage = () => {
  const questions = [
    {
      question: "¿Quien está más loco? (de los dos)",
      answer: "lucky"
    },
    {
      question: "¿Cuál es tu color favorito?",
      answer: "rojo burdeo"
    },
    {
      question: "¿Cual es la comida favorita del Alonso?",
      answer: "pizza"
    },
    {
      question: "¿Cuál es la saga favorita de videojuegos de Alonso?",
      answer: "persona"
    },
    {
      question: "¿Quien es la fan numero 1 de Alonso?",
      answer: "lucky"
    },
    {
      question: "¿En un posible fin del mundo, quien sobreviviria de los 2?",
      answer: "alonso"
    }
  ]
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [answer, setAnswer] = React.useState("")
  const [mensajeFelicitaciones, setMensaje] = React.useState("")
  const { toast } = useToast()
  
  const handleQuestion = () => {
    if (answer === questions[currentQuestion].answer) {
      toast({
        title: "Felicitaciones",
        description: "Respuesta correcta",
      })
      setMensaje("Felicitaciones!!!!! CORRECTO")
      console.log("Respuesta correcta")
      setCurrentQuestion(currentQuestion + 1)
    } else {
      toast({
        title: "Error",
        description: "Respuesta incorrecta",
      })
      setMensaje("BUUUUUUUUUUUUUUUU, NEFASTA RESPUESTA")
      console.log("Respuesta incorrecta", questions[currentQuestion].answer)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <h2>{mensajeFelicitaciones}</h2>
    {(currentQuestion !== questions.length - 1) ?
    (<Card className="w-1/2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{questions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Tu respuesta..." onChange={(e) => setAnswer(e.target.value)} />
        <Button onClick={handleQuestion} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</Button>
      </CardContent>
    </Card> ) :
      (<FinalQuestion />)
    }
    </div>
  )
}
