import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { v1 } from 'uuid'



function App() {
  const [message, setMessage] = useState([
    {id: v1, message: 'message1'},
    {id: v1, message: 'message2'},
    {id: v1, message: 'message3'},
  ])

  const [title, setTitle] = useState('')

  const addMessage = () => {
    let newMessage = {
        id: v1, message: title
    }
    setMessage([newMessage, ...message])
    setTitle('')
}
//   const addMessage = (title: string) => {
//     let newMessage = {
//         id: v1, message: title
//     }
//     setMessage([newMessage, ...message])
//     setTitle('')
// }

  // const collBackHandler = () => {
  //   addMessage(title)
  //   setTitle('')
  // }

  return (
    <>
      <div>
        <Input title={title} setTitle={setTitle}/>
        <Button callBack={addMessage} name='+'/>
        {/* <Button callBack={collBackHandler} name='+'/> */}
      </div>
      {message.map((el) => {
        return (
          <div key={el.id}>
              {el.message}
          </div>)        
      })}
    </>
  )
}

export default App
