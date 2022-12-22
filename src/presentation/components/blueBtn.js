import React from 'react'

function BlueBtn(props) {
  return (
    <div>
        <button className="blue-btn" onClick = {props.onClick} >{props.text}</button>
    </div>
  )
}

export default BlueBtn