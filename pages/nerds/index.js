import Link from 'next/link';
import styles from '../../styles/Nerds.module.css';

export const getStaticProps = async() => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  
  return {
    props: { nerds: data }
  }
  
}

const Ninjas = ({nerds}) => {
  console.log(nerds)

  return (
    <div>
      <h1 className={styles.headingList}>List Of Nerds</h1>
      {nerds.map(nerd => (
      <Link href={'/nerds/' + nerd.id} key={nerd.id}>
        <a className={styles.single}>
          <h3>{nerd.name}</h3>
        </a>
      </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;