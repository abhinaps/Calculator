import React from 'react'
import Key from './Key'
import styles from "./keypadstyles.module.css"

function Keypad(props) {
  return (
    <div className={styles.keypadContainer}>
      <Key keyvalue="AC" className={styles.allclear} handler={props.handleKey}/>
      <Key keyvalue="C" handler={props.handleKey}/>
      <Key keyvalue="*" className={styles.highlight} handler={props.handleKey}/>
      <Key keyvalue="7" handler={props.handleKey}/>
      <Key keyvalue="8" handler={props.handleKey}/>
      <Key keyvalue="9" handler={props.handleKey}/>
      <Key keyvalue="/" className={styles.highlight} handler={props.handleKey}/>
      <Key keyvalue="4" handler={props.handleKey}/>
      <Key keyvalue="5" handler={props.handleKey}/>
      <Key keyvalue="6" handler={props.handleKey}/>
      <Key keyvalue="-" className={styles.highlight} handler={props.handleKey}/>
      <Key keyvalue="1" handler={props.handleKey}/>
      <Key keyvalue="2" handler={props.handleKey}/>
      <Key keyvalue="3" handler={props.handleKey}/>
      <Key keyvalue="+" className={styles.highlight} handler={props.handleKey}/>
      <Key keyvalue="0" handler={props.handleKey}/>
      <Key keyvalue="." handler={props.handleKey}/>
      <Key keyvalue="=" className={styles.result} handler={props.handleOperation}/>
    </div>
  )
}

export default Keypad
