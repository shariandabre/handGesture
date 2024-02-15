"use client"

import { Sign_image, Signpass } from "@/components/handimage"
import Image from "next/image"

import { useState } from "react"


export default function Home() {
    const [Text, setText] = useState("")
    const [img, setImage] = useState(null)
    const handleText = event => {
        setText(event.target.value)
    }
    function handleImage() {
        console.log(Text.length, Text)
        let count = 0;
        setInterval(() => {
            if (Text.length !== count) {
                // setText(Text.toUpperCase)
                setImage(Sign_image[Text[count].toUpperCase()])
                console.log(img)
                count++;
            }
        }, 2000)

    }
    return (
        <>
            <div className="h-screen w-full flex flex-1 justify-center items-center" >
                <div className=" w-4/6 border-[.5px] rounded-lg h-5/6 flex items-center justify-evenly flex-col">
                {img ?( <>
                        <Image width={200} height={150} src={img.src} />
                    </>): <div className="w-[200px] h-[150px] flex items-center justify-center" ><h2 className="font-semibold text-6xl" >Hello !</h2></div>}
                    <div>
                        <input value={Text} onChange={handleText} className="h-10 border bg-transparent rounded-lg p-2 mr-2 " type="text" label="Email" placeholder="Enter text" />
                        <button className="border bg-transparent  h-10 p-2 rounded-lg" onClick={handleImage}>
                            Enter
                        </button>
                    </div>
                  
                </div>
            </div>
        </>
    )
}
