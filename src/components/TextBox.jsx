import React from 'react'

const TextBox = ({quoteRandom}) => {
  return (
    <div>
        <div className='box__header'>
            <i className='bx bxs-quote-left box__header__icon'></i>
            <p className='box__header__quote'>{quoteRandom.quote}</p>
        </div>
        <h1 className='box__header__author'>{quoteRandom.author}</h1>
    </div>

    
  )
}

export default TextBox