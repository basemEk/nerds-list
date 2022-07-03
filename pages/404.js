import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    const router = useRouter()
    
      useEffect(() => {
        setTimeout(() => {
        // router.go(-1) //back one page
        // router.go(1) //to forward page
         router.push('/')
        }, 3000)
      }, []);
    
    return ( 
        <div className="not-found">
            <h1>Ooops!</h1>
            <h2>This page does not exist</h2>
            <p>Go to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;