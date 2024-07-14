export default function Item (params) {
  console.log('%c [ params ]-2', 'font-size:13px; background:pink; color:#bf2c9f;', params)
  

  return (
    <div className="item">
      <span></span>
      <span className="last">
        <div>{params.item}</div>
      </span>
    </div>
  )
} 