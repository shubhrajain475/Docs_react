import React, { useRef,useState } from "react";
import Card from "./Card";


function Foreground() {
    const ref=useRef(null)
    // const data=[
    //     description,filesize,closeordownload,tagdetails
    // ]
    const data = [
        {
            desc: "shubhra lorem ispum dolar sit amet constekjr adiertijwlejrklwejr.",
            filesize: ".9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "somya lorem ispum dolar sit amet constekjr adiertijwlejrklwejr.",
            filesize: ".9mbs",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Mummy lorem ispum dolar sit amet constekjr adiertijwlejrklwejr.",
            filesize: ".9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" }
        },
        {
            desc: "Papa lorem ispum dolar sit amet constekjr adiertijwlejrklwejr.",
            filesize: ".9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        },


    ];

    return (
        <>
            <div ref={ref}  className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
                {data.map((item, index) => (
                    <Card data={item} reference={ref}/>
                ))}
            </div>
        </>
    )
}
export default Foreground;