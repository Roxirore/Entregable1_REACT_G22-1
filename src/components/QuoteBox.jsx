import React from 'react'
import ButtonBox from './ButtonBox'
import TextBox from './TextBox'

const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {
    console.log(quoteRandom)
  return (
    <article style={{color: colorRandom}} className='box'>
        <TextBox quoteRandom={quoteRandom} />
        <ButtonBox 
            colorRandom={colorRandom}
            handleClick={handleClick}/>
    </article>
  )
}

export default QuoteBox