import { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import './Task9.css'

function Task9() {
  const [count, setCount] = useState(0)
  const [incBtn, setIncBtn] = useState(true)
  const [decBtn, setDecBtn] = useState(false)
  const [popup, setPoPUP] = useState(false)
  const [ChangBg, setChangBg] = useState(false)

  function Increment () {
    if (count >= 0 & count < 10) {
      setCount((count) => count + 1) }
    
    if (count >= 10 & count < 100) {
      setCount((count) => count + 10) }
    
    if (count >= 100 & count < 1000) {
      setCount((count) => count + 100)}

    if (count == 1000) {
      setIncBtn(false);
      setDecBtn(true);
    }
  }

  function Decrement () {
    if (count == 0) {
      setIncBtn(true);
      setDecBtn(false);
    }
    if (count > 0 & count <= 10) {
      setCount((count) => count - 1) }
    
    if (count > 10 & count <= 100) {
      setCount((count) => count - 10) }
    
    if (count > 100 & count <= 1000) {
      setCount((count) => count - 100)}
  }

  useEffect(() => {
    setPoPUP(true)
  }, [])

  useEffect(() => {
    if (count === 10 || count === 100|| count === 1000) {
      setPoPUP(true)
      setChangBg(true)
    }
    else {
        setChangBg(false)
    }
  }, [count])

  return (
    <>
      <section className={`container ${ChangBg ? 'dark' : 'light'}`}>
        {incBtn && <button className='counter-btn' onClick={Increment}>Increment<FontAwesomeIcon className='counter-icon' icon={faPlus} /></button>}
        {decBtn && <button className='counter-btn' onClick={Decrement}>Decrement<FontAwesomeIcon className='counter-icon' icon={faMinus} /></button>}
        <div className='counter-num'>{count}</div>
        {popup && 
          <div className='my-pop-up'>
            <h2>Hello Friend!</h2>
            <p>Welcome to My 9th Task</p>
            <FontAwesomeIcon className='pop-up-close-btn' onClick={() => setPoPUP(false)} icon={faX} />
          </div>
        }
      </section>
      
    </>
  )


}

export default Task9
