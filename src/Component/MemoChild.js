import React from 'react'

function MemoChild({count}) {
    console.log("MemoChild")
  return (
    <div>
        <h1>MemoChild</h1>
        <p>
            Counter in Child:{count}
        </p>
    </div>
  )
}

export default MemoChild