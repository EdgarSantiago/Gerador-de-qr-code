import Head from 'next/head'
import Image from 'next/image'
import QRCode from 'react-qr-code';
import react, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const [state, setstate] = useState("");

  return (
    <div className='container py-5 text-center'>

      <div className='row justify-content-center pb-5'>
        <div className='col'>
          <QRCode value={state} />,
        </div>
      </div>

      <div className='row'>
        <form>  
          <input type="text" onChange={(e) => setstate(e.target.value)} />
        </form>
      </div>

      <div className='row pt-5'>
        <p>Para gerar um QRCODE coloque um link a cima | <a href="https://www.edgarprogramador.com.br/" className='text-primary'>Developed by Edgar</a></p>
      </div>

    </div>
  )
}
