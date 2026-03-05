export default function Home() {
  return (
    <main style={{maxWidth:640,margin:'80px auto',padding:'0 20px',textAlign:'center'}}>
      <h1>Beauty UGC Curator</h1>
      <p style={{fontSize:18,color:'#555',marginBottom:32}}>Curated beauty UGC content delivered to your brand weekly</p>
      <a href="/api/checkout" style={{
        display:'inline-block',padding:'14px 32px',background:'#0070f3',color:'#fff',
        borderRadius:8,textDecoration:'none',fontSize:16,fontWeight:600
      }}>Subscribe — $49/mo</a>
    </main>
  )
}
