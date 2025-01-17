"use client"
import { SanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

export default function SanityStudio(){
    return (
        <div className="mt-10">
    <NextStudio config={SanityConfig} />
    </div>)
}