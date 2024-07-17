
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
const SCALE = 0.72
const PAGEWIDTH = 18
const PAGEHEIGHT = 26
const GAP = 0.2

export default function Good () {
  const mycon = `  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。
予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。
至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。
嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？
时六年九月十五日。`
  const [content, setContent] = useState(mycon)
  const [col, setCol] = useState(11)
  const [row, setRow] = useState(14)
  const [size, setSize] = useState(1.6)
  const [font, setFont] = useState('楷体')
  const [fontcolor, setFontcolor] = useState('#000000')
  const [gridcolor, setGridcolor] = useState('#000000')

  const formatStr = (val, col) => {
    const Arr = ['。', '，', '”', '》', '！', '？', ',', '.', '?', '!']
    const str = []
    console.log('===col', col)
    val.split('').map((v, i) => {
      if (Arr.includes(v) && !(str.length % col) && val.length > col) {
        str[str.length - 1] = str[str.length - 1] + v
      } else {
        str.push(v)
      }
    })
    return str
  }
  const pageArr = (arr, col = 5, row = 5) => {
    const pageAll = [[]]
    arr.forEach((item, index) => {
      const pageIndex = Math.floor(index / (row * col))
      pageAll[pageIndex]
        ? pageAll[pageIndex].push(item)
        : (pageAll[pageIndex] = [item])
    })
    pageAll[pageAll.length - 1].length = row * col
    return pageAll
  }

  const mycontent = useMemo(() => {
    setRow(Math.floor(PAGEHEIGHT / (PAGEWIDTH / col * 2 + GAP)))
    setSize(PAGEWIDTH / col)
    return pageArr(formatStr(content, col), col, row)
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
                <ul className="con art" style={{
                  gridTemplateColumns: `repeat(${col}, ${PAGEWIDTH / col}cm)`,
                  gridTemplateRows: `repeat(${row}, ${PAGEWIDTH / col * 2}cm)`,
                  font: `${PAGEWIDTH / col * SCALE}cm/${PAGEWIDTH / col}cm ${font}`,
                  borderColor: gridcolor,
                }}>
                  {
                    page.map((item, i) => (
                      <li key={i}>
                        <div className="td">
                          <span style={{ borderColor: gridcolor }}>
                            {item}
                          </span>
                          <span style={{ borderColor: gridcolor }}> </span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
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
          </Form.Item>
          <Form.Item label="字体设置">

            <SelectFont value={font} onChange={setFont} />
          </Form.Item>
          <Form.Item label="列数">
            <Slider
              min={3}
              max={25}
              marks={marksCol}
              onChange={setCol}
              value={typeof col === 'number' ? col : 4}
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
