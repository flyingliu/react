
import '/@/assets/css/main.scss'
import { useState, useMemo } from "react";
import { sortBy } from '/@/assets/js/util'
import jizhiwengao from '/@/assets/js/zzwg'
import {
  Button,
  Select,
  ColorPicker,
  Form,
} from 'antd';

const ICONLIST = [
  {
    label: '无',
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

const PAGEWIDTH = 18
const BASE = '//qiniu.easywe.net/shufa/yanzhenqing/zhengzuowei/'

export default function Good () {
  const list = jizhiwengao.map((v) => {
    const item = v.split('.')[0].split('_')
    return {
      label: item[1],
      value: v,
      number: +item[0],
      httpImg: BASE + v,
      active: false,
    }
  }).sort(sortBy('number', true))
  const [contentList, setContentList] = useState(list)
  const [content, setContent] = useState([contentList[0], contentList[1]])
  const [icon, setIcon] = useState(ICONLIST[0].value)
  const [gridcolor, setGridcolor] = useState('#900')

  const reset = () => {
    contentList.forEach((v) => (v.active = false))
    addText(contentList[0])
  }
  const addText = (item, isAutoPlay) => {
    if (isAutoPlay) {
      reset()
      item.active = true
      content.value = [item]
      return false
    }
    item.active = !item.active
    setContent(contentList.filter((v) => v.active))
    setContentList(contentList)
    // setBg(item)
  }

  const { size, item } = useMemo(() => {
    const size = PAGEWIDTH / (content.length || 1)
    const item = {
      width: size + 'cm',
      height: size + 'cm',
      fontSize: size + 'cm',
      borderColor: gridcolor,
    }
    return { size, item }
  }, [content, gridcolor])


  return (
    <div className="layout">
      <main className="main">
        <div className="dlone">
          <div className="page">
            <dl className="con" style={{ borderColor: gridcolor }}>
              {
                content.map((v, i) => {
                  return (
                    <dd key={i} style={item} className={icon + ' item'}>
                      <div><img src={v.httpImg} /></div>
                    </dd>
                  )
                })
              }
            </dl>
            <footer className="mfooter" style={{ color: gridcolor }}>
              <ul className="center">
                <li>
                  {(size * 10).toFixed(1)} MM *
                  {(size * 10).toFixed(1)} MM
                </li>
              </ul>
            </footer>
          </div>
        </div>
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
            <ul className="contentList">
              {
                contentList.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className={v.active ? 'active' : ''}
                      onClick={() => { addText(v) }}
                    >
                      {v.label}
                    </li>
                  )
                })
              }
            </ul>
          </Form.Item>
          <Form.Item label="格子样式">
            <Select
              defaultValue={icon}
              options={ICONLIST}
              onChange={setIcon}
            />
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
            <Button type="primary" onClick={reset}>重置</Button>
          </Form.Item>
        </Form>
      </aside>
    </div>
  )
}

