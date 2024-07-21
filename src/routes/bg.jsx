
import { useEffect } from 'react'
import '/@/assets/css/main.scss'

import { AestheticFluidBg } from "/@/assets/js/AestheticFluidBg.module.js"


export default function Background () {
  useEffect(() => {
    let colorbg = new AestheticFluidBg({
      dom: "box",
      colors: ["#FDFDFD", "#DDDDDD", "#BBBBBB", "#555555", "#343434", "#010101"],
      loop: true
    })

    
    console.log('%c [colorbg  ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', colorbg )
  }, [])

  return (
    <div className="layout">
     <h1>hello word!</h1>
      <div id="box" style={{ width: '100vw', height: '100vh' }}></div>
    </div>
  )
}
