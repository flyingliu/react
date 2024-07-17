
import '/@/assets/css/main.scss'
import { useState, useMemo } from "react";
import SelectFont from '../components/SelectFont'
import { print } from '/@/assets/js/util'
import shengzi from '/@/assets/js/shengzi'
import {
  Button,
  Select,
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
const ICONLIST = [

  {
    label: '混合格子',
    value: 'icon0',
  },
  {
    label: '带点米字格',
    value: 'icon1',
  },
  {
    label: '十字格',
    value: 'icon2',
  },
  {
    label: '米字格',
    value: 'icon3',
  },
]
const SCALE = 0.72
const PAGEWIDTH = 18
const PAGEHEIGHT = 26

export default function Good () {
  const mycon = '古诗二首'
  const [content, setContent] = useState(shengzi[mycon])
  const [col, setCol] = useState(11)
  const [row, setRow] = useState(14)
  const [size, setSize] = useState(1.6)
  const [repeat, setRepeat] = useState(6)
  const [font, setFont] = useState('楷体')
  const [icon, setIcon] = useState('icon0')
  const [fontcolor, setFontcolor] = useState('#ff0000')
  const [gridcolor, setGridcolor] = useState('#666666')

  const contentList = Object.keys(shengzi).map((key) => ({
    label: key,
    value: key,
  }))

  // 根据数字返回相应的数组函数
  const getArr = (num) => {
    const arr = []
    for (let i = 0; i < num; i++) {
      arr.push(i)
    }
    return arr
  }

  function chunk (arr, size) {
    return Array.from({
      length: Math.ceil(arr.length / size),
    }).map((item, index) => arr.slice(index * size, (index + 1) * size))
  }

  const mycontent = useMemo(() => {
    let arr = chunk(content, row)
    setSize(PAGEWIDTH / col)
    setRow(Math.floor(PAGEHEIGHT / size))
    return arr.filter(Boolean).map((item) => {
      let itemArr = item.split('')
      return itemArr.length >= row
        ? itemArr.splice(0, row)
        : [...itemArr, ...Array(row - itemArr.length).fill('')]
    })
  }, [content, col, row, size])

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
                <div className="con classic" style={{ borderColor: gridcolor, }}>
                  <div className="one" style={{
                    font: `${size * SCALE}cm/${size}cm ${font}`,
                  }}>
                    {
                      page.map((item, i) => (
                        <ul key={i}>
                          {
                            getArr(col).map((m, k) => {
                              return (<li className={'item ' + icon} style={{
                                width: size + 'cm',
                                height: size + 'cm',
                                borderColor: gridcolor,
                                color: gridcolor,
                              }} key={n + i + m + k}>
                                <div style={{
                                  color: fontcolor,
                                  display: k % repeat === 0 ? '' : 'none'
                                }}>{item}</div>
                              </li>)
                            })
                          }
                        </ul>
                      ))
                    }
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
            <Select
              defaultValue={mycon}
              options={contentList}
              onChange={(v) => {
                setContent(shengzi[v])
              }}
            />
          </Form.Item>
          <Form.Item label="字体设置">

            <SelectFont value={font} onChange={setFont} />
          </Form.Item>
          <Form.Item label="列数">
            <Slider
              min={2}
              max={25}
              marks={marksCol}
              onChange={setCol}
              value={typeof col === 'number' ? col : 4}
            />
          </Form.Item>

          <Form.Item label="重复">
            <Slider
              min={3}
              max={25}
              onChange={setRepeat}
              value={repeat}
            />
          </Form.Item>
          <Form.Item label="格子样式">
            <Select
              defaultValue={icon}
              options={ICONLIST}
              onChange={setIcon}
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
