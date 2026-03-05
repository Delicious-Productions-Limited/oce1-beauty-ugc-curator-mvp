export const metadata = { title: "Privacy Policy — Beauty UGC Curator" };

export default function Privacy() {
  return (
    <main style={{maxWidth:640,margin:'80px auto',padding:'0 20px'}}>
      <h1 style={{fontSize:28,fontWeight:700}}>Privacy Policy</h1>
      <p style={{marginTop:24,lineHeight:1.7,color:'#555'}}>
        We collect only the information necessary to provide the service: your email address and payment details (processed securely by Stripe). We do not sell your data to third parties.
      </p>
      <p style={{marginTop:16,lineHeight:1.7,color:'#555'}}>
        For questions, contact us at hello@deliciousproductions.com.
      </p>
      <a href="/" style={{display:'inline-block',marginTop:32,fontSize:14,textDecoration:'underline'}}>← Back to home</a>
    </main>
  );
}
