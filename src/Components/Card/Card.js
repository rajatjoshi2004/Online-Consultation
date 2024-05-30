import React from 'react'

const Card = ({data}) => {
  return (
    <>
      <div className="card m-1" style={{width: '28rem' , height:"28rem"}}>
  <img src={data.img} className="card-img-top" alt="..." style={{width: '28rem' , height:"18rem"}} />
  <div className="card-body">
    <h5 className={`card-title ${data.textSub} `} >{data.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className={`btn ${data.btnBack}`}>{data.btn}</button>
  </div>
</div>

    </>
  )
}

export default Card