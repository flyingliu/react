
import '/@/assets/css/main.scss'
import { useState, useMemo } from "react";

export default function Good () {
  const mycon = `孤山寺北贾亭西水面初平云脚低几处早莺争暖树谁家新燕啄春泥乱花渐欲迷人眼浅草才能没马蹄最爱湖东行不足绿杨阴里白沙堤
相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。`
  const [content, setContent] = useState(mycon)
  const [col, setCol] = useState(4)
  const [row, setRow] = useState(14)
  const [size, setSize] = useState(1.6)
  const fontFamily = '楷体'
  const SCALE = 0.72

  const setgrid = () => {
    setContent(`孤山寺北贾亭西水面初平云脚低几处早莺争暖树谁家`)
  }

  const mycontent = useMemo( () => {
    let arr = content.split('\n')
    let reg = /\p{Unified_Ideograph}/gu
    let len = row * col
    return arr.filter(Boolean).map((item) => {
      let itemArr = item.match(reg)
      return itemArr.length >= len
        ? itemArr.splice(0, len)
        : [...itemArr, ...Array(len - itemArr.length).fill('')]
    })
  }, [content,col,row])

  console.log('%c [ mycontent ]-56', 'font-size:13px; background:pink; color:#bf2c9f;', mycontent)

  return (
    <div className="layout">
      <main className="main">
        <dl className="dl">
        {
          mycontent.map((page, n) => (
            <dd className="page" key={n}>
              <header className="mheader">
                <h1>书法练习</h1>
              </header>
              <div className="con">
                <div className="good" style={{
                  gridTemplateColumns: 'repeat(' + (col + 1) + ', ' + size + 'cm)',
                  gridTemplateRows: 'repeat(' + row + ', ' + size + 'cm)',
                  font: size * SCALE + 'cm/' + size + 'cm \'' + fontFamily,
                }}>
                  {
                    page.map((item, i) => (
                      <span className="item" key={i}>{item}</span>
                    ))
                  }
                  <span className="last" style={{
                    gridRowEnd: row + 1,
                  }}>
                    <div>二零二一年十月 某某</div>
                  </span>
               </div>
              </div>
            </dd>
          ))
        }

        </dl>
      </main>
      <aside className="aside">
        <button onClick={setgrid}>重置</button>
      </aside>
    </div>
  )
}
