import React from 'react'

const OutputScreen = ({ans,ques}) => {
    return (
        <div className='input'>
            {ques ? `(${ques})` : ''} 
            <span className='result'>{ans ? `${ans}` : '0'}</span>
        </div>
    )
}

export default OutputScreen
