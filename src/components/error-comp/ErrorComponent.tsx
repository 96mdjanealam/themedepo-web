"use client"
import { ArrowLeft, Home, Compass } from "lucide-react";
import Link from "next/link";

const ErrorComponent = () => {
  return (
   <div className=" w-full flex flex-col items-center justify-center bg-light-gray/5 overflow-hidden pb-16 lg:pb-32">
      {/* Large 404 Background Text */}
      <h1 className="text-[12rem] lg:text-[20rem] font-bold text-[#EBEBEB] tracking-tight pointer-events-none select-none">
        404
      </h1>
      {/* Main Content Card */}
      <div className="relative lg:w-xl mx-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 text-center flex flex-col items-center">
        {/* Top Compass Icon Badge */}
        <div className="absolute -top-6 w-12 h-12 bg-white border border-gray-100 shadow-md flex items-center justify-center text-orange-500">
          <Compass className="w-5 h-5 stroke-[1.5]" />
        </div>

        {/* Status Badge */}
        <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gray-200 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-gray-500 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Connection Lost
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-syne text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Looks like you&apos;re lost.
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
          The coordinate you supplied doesn&apos;t match any sector in our
          database. Let&apos;s return to the main hub.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-200  text-xs font-semibold text-gray-700 hover:bg-gray-50 active:scale-[0.98] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            GO BACK
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-black text-white  text-xs font-semibold hover:bg-neutral-900 active:scale-[0.98] transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorComponent
