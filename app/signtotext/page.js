"use client"
import React, { useRef, useState, useEffect } from "react"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import * as fp from "fingerpose"
import Handsigns from "@/components/handsigns"

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react"
import {Spinner} from "@nextui-org/spinner";
import { Signimage, Signpass } from "@/components/handimage"

import Metatags from "@/components/metatags"

// import "../styles/App.css"

 import "@tensorflow/tfjs-backend-webgl"

export default function Home() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("on")
  const [loading,setloading]=useState(true)
  const [sign, setSign] = useState("")
  const [word, setWord] = useState("")
  const [sentence, setSentence] = useState("")
  
  let signList = []
  let currentSign = 0
  let start = true
  let gamestate = "started"

  async function runHandpose() {
    const net = await handpose.load()
    _signList()


    setInterval(() => {
      detect(net)
    }, 150)
  }

  function _signList() {
    signList = generateSigns()
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    return password
  }

  async function detect(net) {
    
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight
      // Make Detections
      const hand = await net.estimateHands(video)
      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          // fp.Gestures.ThumbsUpGesture,
          // Handsigns.aSign,
          // Handsigns.bSign,
          // Handsigns.cSign,
          // Handsigns.dSign,
          Handsigns.eSign,
          // Handsigns.fSign,
          // Handsigns.gSign,
          Handsigns.hSign,
          // Handsigns.iSign,
          // Handsigns.jSign,
          // Handsigns.kSign,
          Handsigns.lSign,
          // Handsigns.mSign,
          // Handsigns.nSign,
          Handsigns.oSign,
          // Handsigns.pSign,
          // Handsigns.qSign,
            // Handsigns.rSign,
          // Handsigns.sSign,
          // Handsigns.tSign,
            // Handsigns.uSign,
          // Handsigns.vSign,
            // Handsigns.wSign,
          // Handsigns.xSign,
            //Handsigns.ySign,
          // Handsigns.zSign,
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)

        console.log(estimatedGestures)
        // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

        setloading(false)

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)

          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            gamestate !== "played"
          ) {
            
            _signList()
            gamestate = "played"
            document.getElementById("emojimage").classList.add("play")
          } else if (gamestate === "played") {
            

            //looping the sign list
            if (currentSign === signList.length) {
              _signList()
              currentSign = 0
              return
            }

            // console.log(signList[currentSign].src.src)

            //game play state

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              
              if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentSign++
              }
              setSign(estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (gamestate === "finished") {
            return
          }
        }
      }
    
    }
  }

  function createWord(){
    if(sign==="thumbs_up"){
      let utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
      setSentence(sentence+word+" ")
      
      setWord("")
    }

    else{
      setWord(word+" "+sign)
    }
  }


  useEffect(() => {

    createWord()
    if(start!==false){
      runHandpose()
      start=false
    }
  }, [sign])


  return (
    <>
      <Metatags />
      <div  class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <Container centerContent maxW="xl" height="100vh" pt="30" pb="0">
          <VStack spacing={4} align="center">
          {!loading ?(<>
           {sign ? (<img
                  alt="signImage"
                  src={
                    Signimage[sign]?.src
                      ? Signimage[sign].src
                      : "https://cdn.jsdelivr.net/gh/svgmoji/svgmoji/packages/svgmoji__noto/svg/1F44D.svg"
                  }
                  style={{
                    height: 30,
                  }}
                />):("")}</>):(<Spinner label="Loading..." color="warning" />)}
                
          </VStack>

          

          <Box id="webcam-container" className="w-full h-full flex items-center justify-center" >
             <Webcam id="webcam" ref={webcamRef} className="rounded-lg fixed border"  />
     
            {sign ? (
              <div
               className="flex flex-col gap-2 items-center justify-center font-bold text-lg relative top-72 md:top-80"
              >
                <span className="text-black dark:text-white ">
                  Detected Word Is :- {word}
                </span>
                <span  className="text-black dark:text-white ">
                  Detected Sentence Is :- {sentence}
                </span>

              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{width:"70%",height:"70%"}} />
          <Image h="150px" objectFit="cover" id="emojimage" />
          {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}
        </Container>

       
      </div>
    </>
  )
}
