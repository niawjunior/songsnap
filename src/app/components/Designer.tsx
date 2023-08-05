"use client"
import { useCanvas } from "../utils/useCanvas"
import fabric from "fabric"
import React, { useEffect } from "react" // Don't forget to import React

const Designer = () => {
  const [canvasRef, setCanvasElRef] = useCanvas((canvas) => {
    var width = window.innerWidth > 0 ? window.innerWidth * 0.75 : screen.width
    var height =
      window.innerHeight > 0 ? window.innerHeight * 0.9 : screen.height

    canvas.setDimensions({
      width: width,
      height: height,
    })

    const text = new fabric.fabric.Text("Hi", {
      originX: "center",
      top: 20,
    })
    canvas.add(text)
    setTimeout(() => {
      //   canvas.remove(text)
    }, 2000)
    text.centerH()
  })

  // Update canvas dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth > 0 ? window.innerWidth * 0.75 : screen.width
      const height =
        window.innerHeight > 0 ? window.innerHeight * 0.9 : screen.height

      canvasRef.current?.setDimensions({
        width: width,
        height: height,
      })
    }

    window.addEventListener("resize", handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [canvasRef])

  return (
    <div className="bg-white min-h-full w-full p-4">
      <canvas ref={setCanvasElRef} />
    </div>
  )
}

export default Designer
