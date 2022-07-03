//how many HTML pages needs to be made based on our data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(nerd => {
    return {
      params: { id: nerd.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}


//needed for generating dynamic html templates for each user
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { nerd: data }
  }
}


const Details = ({ nerd }) => {
  return (
    <div>
      <h1>{ nerd.name }</h1>
      <p>Email: { nerd.email }</p>
      <p>Website: { nerd.website }</p>
      <p>Address: { nerd.address.city } - { nerd.address.street }</p>
    </div>
  );
}

export default Details;