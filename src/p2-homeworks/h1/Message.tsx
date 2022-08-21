import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={s.container}>
      <div>
        <img className={s.container} src={props.avatar} alt='avatar' />
      </div>
      <div className={s.box}>
        <h2>{props.name}</h2>
        <p>{props.message}</p>
        <p className={s.time}>{props.time}</p>
      </div>
    </div>
  )
}

export default Message
