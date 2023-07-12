import React from 'react'

const Header = ({total}) => {

const totalAmount = 1270000

  return (
    <div className='header'> Harcamak için &nbsp; <b> $ {totalAmount - total } </b> &nbsp; paranız var</div>
  )
}

export default Header