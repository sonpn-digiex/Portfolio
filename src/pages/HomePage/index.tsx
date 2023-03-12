/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineAntDesign, AiOutlineRight } from 'react-icons/ai'
import avatar from '@assets/images/dev-ed-wave.png'
import { BsFillBoxFill } from 'react-icons/bs'
import { IoMdAnalytics } from 'react-icons/io'
import { MdTableChart } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'

function HomePage() {
  return (
    <div className="w-full max-w-[100%] flex justify-center mt-4 px-4 flex-col z-2">
      <div className="px-2 md:px-20 pt-2 md:pt-10 mx-auto flex gap-3 flex-col lg:flex-row items-center md:pb-44  shadow-lg bg-opacity-20 backdrop-blur-lg">
        <div>
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl relative max-w-[100%] overflow-hidden">
            <span className="text-typing-text first-text">Hi I&apos;m</span>{' '}
            <span className="text-typing-text sec-text whitespace-nowrap before:bg-light-background dark:before:bg-dark-background dark:before:bg-opacity-20 font-bold text-light-secondary">
              Ngoc Son Pham
            </span>
          </h2>
          <h3 className="text-2xl text-[#C2DED1] font-bold py-2 dark:text-white md:text-3xl">
            Web Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let&apos;s get cracking!
          </p>
          <div className="gap-4 flex py-3 text-gray-600 dark:text-gray-400">
            <button
              type="button"
              className="flex items-center gap-1 bg-teal-600 dark:bg-teal-400 rounded-full px-4 text-white pt-1 pb-2 md:text-2xl hover:shadow hover:bg-light-secondary dark:hover:bg-[#474E68]"
            >
              Hire me <AiOutlineRight className="mt-1" />
            </button>
            <button
              type="button"
              className="flex items-center gap-1 bg-teal-600 dark:bg-teal-400 rounded-full px-4 text-white pt-1 pb-2 md:text-2xl hover:shadow hover:bg-light-secondary dark:hover:bg-[#474E68]"
            >
              My CV <HiDownload className="mt-1" />
            </button>
          </div>
        </div>
        <div className="relative w-full">
          <div className="hidden md:block absolute rounded shadow px-4 py-2 bg-light-secondary dark:bg-dark-tertiary cursor-pointer top-0 left-4 z-10 text-white detail-item">
            10+ years experience
          </div>
          <div className="hidden md:block absolute rounded shadow px-4 py-2 bg-light-secondary dark:bg-dark-tertiary cursor-pointer  right-12 bottom-0 z-10 text-white detail-item">
            100+ projects
          </div>
          {/* <div>100+ projects</div>
          <div>100+ overseas customers</div> */}
          <div className="avatar-box mx-auto w-[340px] h-[340px]">
            <div className="content bg-gradient-to-b from-teal-500 z-10 dark:from-dark-primary">
              <img src={avatar} alt="avatar" className="" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 relative lg:absolute lg:right-[100px] lg:bottom-[-155px] lg:flex-nowrap justify-center">
            <div className="button-border-hover flex flex-col skew-parallelogram bg-gradient-to-b from-dark-secondary cursor-pointer shadow items-center px-1 py-2 md:py-3 md:px-2 rounded text-sm">
              <span className="bg-gradient-to-b from-dark-secondary cursor-pointer w-[90%] flex justify-center">
                <BsFillBoxFill className="h-12" />
              </span>
              <span className="whitespace-nowrap uppercase mx-2 text-sm md:text-xl">
                Web development
              </span>
            </div>
            <div className="button-border-hover flex flex-col skew-parallelogram bg-gradient-to-b from-dark-secondary cursor-pointer shadow items-center px-1 py-2 md:py-3 md:px-2 rounded text-sm">
              <span className="bg-gradient-to-b from-dark-secondary cursor-pointer w-[90%] flex justify-center">
                <MdTableChart className="h-12" />
              </span>
              <span className="whitespace-nowrap uppercase mx-2 text-sm md:text-xl">
                Design to HTML
              </span>
            </div>
            <div className="button-border-hover flex flex-col skew-parallelogram bg-gradient-to-b from-dark-secondary cursor-pointer shadow items-center px-1 py-2 md:py-3 md:px-2 rounded text-sm">
              <span className="bg-gradient-to-b from-dark-secondary cursor-pointer w-[90%] flex justify-center">
                <AiOutlineAntDesign className="h-12" />
              </span>
              <span className="whitespace-nowrap uppercase mx-2 text-sm md:text-xl">
                UX/UI Design
              </span>
            </div>
            <div className="button-border-hover flex flex-col skew-parallelogram bg-gradient-to-b from-dark-secondary cursor-pointer shadow items-center px-1 py-2 md:py-3 md:px-2 rounded text-sm">
              <span className="bg-gradient-to-b from-dark-secondary cursor-pointer w-[90%] flex justify-center">
                <IoMdAnalytics className="h-12" />
              </span>
              <span className="whitespace-nowrap uppercase mx-2 text-sm md:text-xl">
                Business Analytic
              </span>
            </div>
            {/* <div className="button-border-hover flex flex-col skew-parallelogram bg-gradient-to-b from-dark-secondary cursor-pointer shadow items-center px-1 py-2 md:py-3 md:px-2 rounded text-sm">
              <span className="bg-gradient-to-b from-dark-secondary cursor-pointer w-[90%] flex justify-center">
                <FaAngleRight className="h-12" />
              </span>
              <span className="whitespace-nowrap uppercase mx-2 text-sm md:text-xl">More</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
