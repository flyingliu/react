
import '/@/assets/css/main.scss'
import { useState, useMemo } from "react";
import SelectFont from '../components/SelectFont'
import { print } from '/@/assets/js/util'
import {
  Button,
  ColorPicker,
  Form,
  Input,
  Slider,
} from 'antd';

const { TextArea } = Input;
const marksCol = {
  4: '4列',
  8: '8列',
  10: '10列',
  20: '20列',
};
const marksRow = {
  4: '4行',
  8: '8行',
  14: '14行',
  20: '20行',
};
const marksSize = {
  1.6: '1.6',
  3: '3',
  5: '5',
};
const SCALE = 0.72

export default function Good () {
  const mycon = `孤山寺北贾亭西水面初平云脚低几处早莺争暖树谁家新燕啄春泥乱花渐欲迷人眼浅草才能没马蹄最爱湖东行不足绿杨阴里白沙堤
相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。`
  const [content, setContent] = useState(mycon)
  const [subcontent, setSubcontent] = useState('二零二一年十月 某某')
  const [col, setCol] = useState(4)
  const [row, setRow] = useState(14)
  const [size, setSize] = useState(1.6)
  const [font, setFont] = useState('楷体')
  const [fontcolor, setFontcolor] = useState('#000000')
  const [gridcolor, setGridcolor] = useState('#000000')

  const mycontent = useMemo(() => {
    let arr = content.split('\n')
    let reg = /\p{Unified_Ideograph}/gu
    let len = row * col
    return arr.filter(Boolean).map((item) => {
      let itemArr = item.match(reg)
      return itemArr.length >= len
        ? itemArr.splice(0, len)
        : [...itemArr, ...Array(len - itemArr.length).fill('')]
    })
  }, [content, col, row])

  return (
    <div className="layout">
      <main className="main">
        <dl className="dl">
          {
            mycontent.map((page, n) => (
              <dd className="page" key={n} style={{ color: fontcolor }}>
                <header className="mheader">
                  <h1>书法练习</h1>
                </header>
                <div className="con" style={{ borderColor: gridcolor }}>
                  <div className="good" style={{
                    gridTemplateColumns: 'repeat(' + (col + 1) + ', ' + size + 'cm)',
                    gridTemplateRows: 'repeat(' + row + ', ' + size + 'cm)',
                    font: size * SCALE + 'cm/' + size + 'cm \'' + font,
                  }}>
                    {
                      page.map((item, i) => (
                        <span className="item" style={{ borderColor: gridcolor }} key={i}>{item}</span>
                      ))
                    }
                    <span className="last" style={{
                      borderColor: gridcolor,
                      gridRowEnd: row + 1,
                    }}>
                      <div>{subcontent}</div>
                    </span>
                  </div>
                </div>
                <footer className="mfooter">
                  <ul className="center">
                    <li style={{ opacity: .8 }}>
                      {col} * {row} =
                      {col * row} |
                      {(size * 10).toFixed(1)} MM *
                      {(size * 10).toFixed(1)} MM
                    </li>
                  </ul>
                </footer>
              </dd>
            ))
          }
        </dl>
      </main>
      <aside className="aside">
        <h5 className="subtitle"><span className="uline">打印设置</span></h5>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 19 }}
          layout="horizontal"
          style={{ maxWidth: 800 }}
        >
          <Form.Item label="内容设置">
            <TextArea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              rows={4} />
            <hr />
            <Input
              value={subcontent}
              onChange={(e) => setSubcontent(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="字体设置">

            <SelectFont value={font} onChange={setFont} />
          </Form.Item>
          <Form.Item label="单元格尺寸">
            <Slider
              min={0.5}
              max={10}
              marks={marksSize}
              step={0.1}
              onChange={setSize}
              value={typeof size === 'number' ? size : 1.6}
            />
          </Form.Item>
          <Form.Item label="列数">
            <Slider
              min={1}
              max={25}
              marks={marksCol}
              onChange={setCol}
              value={typeof col === 'number' ? col : 4}
            />
          </Form.Item>
          <Form.Item label="行数">
            <Slider
              min={1}
              max={25}
              marks={marksRow}
              onChange={setRow}
              value={typeof row === 'number' ? row : 4}
            />
          </Form.Item>
          <Form.Item label="字体颜色">
            <ColorPicker value={fontcolor} onChange={(c) => {
              setFontcolor(c.toHexString())
            }} />
          </Form.Item>
          <Form.Item label="格子颜色">
            <ColorPicker value={gridcolor} onChange={(c) => {
              setGridcolor(c.toHexString())
            }} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary" onClick={print}>
              打印
            </Button>
          </Form.Item>
        </Form>
      </aside>
    </div>
  )
}
