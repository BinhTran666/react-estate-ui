import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam auctor, diam ut aliquet lacinia, eros dui vehicula 
            eros, nec varius nunc nisl ac nunc.
          </p>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage