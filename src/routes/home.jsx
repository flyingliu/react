import {
  useLocation,
  Outlet,
  Link
} from "react-router-dom";

import '/@/assets/css/main.scss'
import {  ConfigProvider } from 'antd';


export default function Home () {
  // 使用useParams钩子获取参数
  const { pathname } = useLocation();
  const base = import.meta.env.BASE_URL
  const isHome = pathname === base

  const pages = [
    {
      path: '/good/',
      title: '作品创作临写',
      desc: '自定义创作内容，规划作品格式，自定义书写字体。',
      icon: '&#xe607;',
    },
    {
      path: '/art/',
      title: '作文对照临写',
      desc: '自定义排版，完美解决行尾标点问题。可自己设置字体！',
      icon: '&#xe608;',
    },
    {
      path: '/classic/',
      title: '生字对照临写',
      desc: '可单行对照临写，可自己设置字体！',
      icon: '&#xe610;',
    },
    {
      path: '/jizhiwengao/',
      title: '颜真卿祭侄文稿',
      desc: '单字临摹',
      icon: '&#xe605;',
    },
  ]

  return (
    <div>
      {
        isHome ? (
          <div className="index">
            <div className="mleft">
              <h3 className="logo iconfont">&#xe611;&#xe607;&#xe608;&#xe610;</h3>
              <p>百日练字 <sup>beta</sup></p>
            </div>
            <dl className="mdl">
              {pages.map(p => {
                return (
                  <dd key={p.path}>
                    <Link to={p.path}>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </Link>
                  </dd>
                )
              })}

              <dd><hr /></dd>
              <dd>
                <h3>书法字体下载推荐<sup>(有版权的字体请勿做商用)</sup></h3>
                <ul>
                  <li>
                    <a
                      href="http://www.foundertype.com/index.php/FindFont/index/hot/118/p/1.html"
                      target="_blank"
                    >方正书法字体下载</a>
                  </li>
                </ul>
              </dd>
              <dd>
                <h3>问题帮助</h3>
                <ul>
                  <li>
                    <a
                      href="/images/print.png"
                      target="_blank"
                    >打印设置</a>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        ) : (
          <div id="detail">
              <ConfigProvider
                theme={{
                  token: {
                    // Seed Token，影响范围大
                    colorPrimary: '#264e70',
                    borderRadius: 4,
                    colorBgContainer: '#fff',
                  },
                }}
              >
            <Outlet />
            </ConfigProvider>
          </div>
        )
      }
    </div>
  )
}
