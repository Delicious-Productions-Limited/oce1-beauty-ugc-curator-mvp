export const metadata = { title: "About — Beauty UGC Curator" };

export default function About() {
  return (
    <main style={{maxWidth:640,margin:'80px auto',padding:'0 20px'}}>
      <h1 style={{fontSize:28,fontWeight:700}}>About Beauty UGC Curator</h1>
      <p style={{marginTop:24,lineHeight:1.7,color:'#555'}}>
        Beauty UGC Curator helps brands discover, curate, and license authentic user-generated beauty content — saving hours of manual sourcing every week.
      </p>
      <p style={{marginTop:16,lineHeight:1.7,color:'#555'}}>
        Built by <a href="https://deliciousproductions.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'underline'}}>Delicious Productions Limited</a>.
      </p>
      <a href="/" style={{display:'inline-block',marginTop:32,fontSize:14,textDecoration:'underline'}}>← Back to home</a>
    </main>
  );
}
