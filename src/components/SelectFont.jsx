import PropTypes from 'prop-types';
import { Button, Select, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { getFontName, familyList } from '/@/assets/js/util'


const { Option } = Select;


const SelectFont = (props) => {

  const { id = 'myFont', value = '', onChange } = props;

  const [list, setList] = useState(familyList.map((item) => {
    return typeof item === 'string'
      ? { label: getFontName(item), value: item, isLoad: false }
      : item
  }))
  // 判断是否为中文字体
  function isChinese (str) {
    var filter = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/
    return filter.test(str)
  }
  // 获取本机安装字体
  async function initComputerFonts () {
    if (!window.queryLocalFonts) return []
    const fonts = await window.queryLocalFonts()
    if (fonts.length) {
      return fonts.filter(v => isChinese(v.fullName)).map(v => ({
        label: v.fullName,
        value: v.family,
        isLoad: true
      }))
    } else {
      alert('请配置本机字体访问权限')
    }
  }


  // 加载本地字体
  function addLocalFont ({ file }) {
    const url = window.URL.createObjectURL(file)
    const label = getFontName(file.name)
    if (!list.find((v) => v.label === label)) {
      list.push({ label, value: url, isLoad: false })
      setList(list)
    }

    loadCurrentFonts(list.find((v) => v.label == label))
  }

  // 加载当前字体
  async function loadCurrentFonts (obj) {
    if (!obj) return
    onChange(obj.label)
    if (!obj.isLoad) {
      const fonts = document.fonts
      const font = new FontFace(obj.label, 'url(' + obj.value + ')')
      font
        .load()
        .then(() => {
          fonts.add(font)
          obj.isLoad = true
          return obj
        })
        .catch((err) => {
          alert('字体加载错误！')
          console.error(err)
        })
    }
  }


  useEffect(() => {
    const getPermissions = async () => {
      const { state } = await navigator.permissions.query({ name: "local-fonts" })
      if (state === 'granted') {
        const cfont = await initComputerFonts();
        setList([...list,...cfont])
      }
    }
    getPermissions(initComputerFonts)
  }, [])

  const onCurrChange = (value) => {
    const obj = list.find((v) => v.value === value)
    loadCurrentFonts(obj)
  }
  return (
    <div id={id}>
      <Select
        value={value}
        style={{
          width: 'calc(100% - 100px)',
          margin: '0 8px 0 0',
        }}
        onChange={onCurrChange}
      >{
          list.map((item) => {
            return <Option key={item.label} value={item.value}>{item.label}</Option>
          })
        }
      </Select>
      <Upload
        name="file"
        beforeUpload={() => false}
        showUploadList={false}
        onChange={addLocalFont}>
        <Button type="primary">本地字体</Button>
      </Upload>
    </div>
  );
};

// 添加PropTypes验证
SelectFont.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string, // 为'value'属性添加类型验证
  onChange: PropTypes.func.isRequired, // 假设onChange函数是必需的
};

export default SelectFont