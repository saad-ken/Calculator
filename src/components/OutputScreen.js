import React from 'react'

const OutputScreen = ({ans,ques}) => {
    return (
        <div>
            {ques ? `(${ques})` : ''} 
            <span>{ans ? `${ans}` : '0'}</span>
        </div>
    )
}

export default OutputScreen
