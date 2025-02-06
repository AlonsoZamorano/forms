import React from 'react'
import { useCallback } from "react";
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import test from "../assets/test.gif"

const possibleSizes = [
  "default", "sm", "lg"
]

const FinalQuestion = () => {
  const [yesSize, setYesSize] = React.useState("default")
  const [yesText, setYesText] = React.useState("Sí")
  const [counterNo, setCounterNo] = React.useState(0)
  const [showImg, setShowImg] = React.useState(false)

  const handleNo = () => {
    // Cada 2 counterNo, cambiar el tamaño del botón al siguiente de la lista
    if (counterNo % 2 === 0) {
      const currentIndex = possibleSizes.indexOf(yesSize)
      const nextIndex = (currentIndex + 1) % possibleSizes.length
      setYesSize(possibleSizes[nextIndex])
    }

    if (counterNo === 5) {
      setYesText("POR QUE NO?!!!!!");
    }
    else if (counterNo === 10) {
      setYesText("TE ODIO SI NO PONES SI");
    }

    setCounterNo(counterNo + 1)
  }

  const handleYes = () => {
    setShowImg(true)
  }
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">FPREGUNTA FINAL</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">¿Quieres ser mi San Valentín?</p>
        <Button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={handleNo}>No</Button>
        <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" size={yesSize} onClick={handleYes}>{yesText}</Button>
      </CardContent>
      <CardFooter>
        <img src={test} alt="test" className={showImg ? "block" : "hidden"} />
      </CardFooter>
    </Card>
  )
}

export default FinalQuestion