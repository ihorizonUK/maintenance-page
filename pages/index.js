import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
      <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
      <title>Offline for maintenance | ihorizon </title>
      <link rel="shortcut icon" type="image/x-icon" href="https://ihorizon.co.uk/favicon.ico" />
      </Head>


      <div className="spacer"></div>
    <div className="message"> 
    <svg width="49" height="51" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9468 10.0288L20.5548.995c2.4433-1.3267 5.45-1.3267 7.8936 0l16.6078 9.0338C47.4966 11.3585 49 13.8102 49 16.4666V34.534c0 2.6537-1.5034 5.1082-3.9438 6.438l-16.6078 9.0307c-2.4435 1.3297-5.4503 1.3297-7.8937 0L3.9467 40.972C1.5035 39.642 0 37.1876 0 34.534V16.4667c0-2.6564 1.5034-5.108 3.9468-6.4378z" className="app-icon" fillRule="evenodd" /></svg>
        
      <div className="message__title"> Offline for maintenance </div>
      <p> Our team are working to improve our services right now. 

 </p>
      <p> This means that in the meantime some may be unavailable.</p>
<br/>
    <a className="btn" href="https://status.ihorizon.co.uk">Check out status page</a>
    </div>

    </>
  )
}
