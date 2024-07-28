
import '/@/assets/css/main.scss'
import { useState, useMemo } from "react";
import { sortBy } from '/@/assets/js/util'
import jizhiwengao from '/@/assets/js/zzwg'
import jijiuzhang from '/@/assets/js/jijiuzhang'
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
const list = (data, base) => data.map((v) => {
  const item = v.split('.')[0].split('_')
  return {
    label: item[1],
    value: v,
    number: +item[0],
    httpImg: base + v,
    active: false,
  }
}).sort(sortBy('number', true))
const ZITIECONFIG = [
  {
    label: '祭侄文稿',
    value: '祭侄文稿',
    data: list(jizhiwengao, '//qiniu.easywe.net/shufa/yanzhenqing/zhengzuowei/')
  },
  {
    label: '皇象急就章',
    value: '皇象急就章',
    data: list(jijiuzhang, '//qiniu.easywe.net/shufa/yanzhenqing/jijiuzhang/')
  },
]

export default function Good () {

  const [zitie, setZitie] = useState('祭侄文稿')
  const [contentList, setContentList] = useState(ZITIECONFIG[0].data)
  const [content, setContent] = useState([contentList[0], contentList[1]])
  const [icon, setIcon] = useState(ICONLIST[0].value)
  const [gridcolor, setGridcolor] = useState('#100')

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
            <hr />
            <Select
              defaultValue={zitie}
              options={ZITIECONFIG}
              onChange={v => {
                setContentList(ZITIECONFIG.find(n=>n.value===v).data)
                setZitie(v)
              }}
            />
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

