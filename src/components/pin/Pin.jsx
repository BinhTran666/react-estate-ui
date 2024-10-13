import './pin.scss'

function Pin({items}) {
  return (
    <div className='popuoContainer'>
        <img src={items.img} alt="" />
        <div className="textContainer">
            <Link to={`/${items.id}`}>{items.tiltle}</Link>
            <span className='bed'>{items.bedroom}</span>
            <b>${items.price}</b>
        </div>
    </div>
  )
}

export default Pin