import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = 'b44cb4a3acf93e0c75605239fd87c3c62e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand:({ command }) => {
                if (command === 'testCommand') {
                    alert("sss")
                }
            }
        })
    },[])

  return (
      <div>App</div>
  )
}

export default App