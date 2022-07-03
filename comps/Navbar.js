import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const Navbar = () => {
  return (
  <>
    <Head>
      <title>All Nerds Here</title>
      <meta name="keyword" content="ninjas" />
    </Head>
  
    <nav>
      <div className="logo">
        <Image src="/technerds logo no background.png" alt="logo" width="120" height="120" />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/nerds/"><a>Nerds Listing</a></Link>
    </nav>
  </>
);m
}
 
export default Navbar;