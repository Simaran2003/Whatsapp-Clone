import {useState} from 'react'
import Header from './Header'
import Convo from './Conversation'
import Search from './Search'

export default function Menu() {
     const [text, setText] = useState('')
     
     return (
          <>
               <Header />
               <Search setText={setText}/>
               <Convo text={text} />
          </>
     )
}
