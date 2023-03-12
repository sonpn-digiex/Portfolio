/* eslint-disable no-param-reassign */
import Header from '@components/header/Header'
import React, { useEffect } from 'react'

type Props = {
  children: JSX.Element
}

function MainLayout({ children }: Props) {
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const layers = document.querySelectorAll('.layer')
      layers.forEach((layer: any) => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * Number(speed)) / 100
        const y = (window.innerWidth - e.pageY * Number(speed)) / 100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    })
    return () => {}
  }, [])

  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      <img
        src="./images/1.png"
        alt="1"
        data-speed="-2"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/2.png"
        alt="1"
        data-speed="-4"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/3.png"
        alt="1"
        data-speed="-7"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/4.png"
        alt="1"
        data-speed="5"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/5.png"
        alt="1"
        data-speed="3"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/12.png"
        alt="1"
        data-speed="9"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/7.png"
        alt="1"
        data-speed="1"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/8.png"
        alt="1"
        data-speed="4"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/9.png"
        alt="1"
        data-speed="-3"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/10.png"
        alt="1"
        data-speed="-7"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/11.png"
        alt="1"
        data-speed="5"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 "
      />
      <img
        src="./images/6.png"
        alt="1"
        data-speed="3"
        className="layer absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0 shadow-lg bg-opacity-20 backdrop-blur-lg"
      />
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
