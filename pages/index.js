import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QRCode from 'react-qr-code';
import react, {useState} from 'react';

export default function Home() {

  const [state, setstate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()

  }
  
  return (
    <div className={styles.container}>
     <QRCode value={state}/>,
     <form onSubmit={submitHandler}>
       <input type="text" onChange={(e) => setstate(e.target.value)}/>
     </form>
    </div>
  )
}
