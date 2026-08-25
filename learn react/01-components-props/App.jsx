function ProfileCard({ name, role, available }) {
  // Props let this presentational component work with any person.
  return (
    <article className="mini-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <strong>{available ? 'Available today' : 'Busy today'}</strong>
    </article>
  )
}

export default function ComponentsProps() {
  const people = [
    { name: 'Mina Lee', role: 'Frontend developer', available: true },
    { name: 'Owen Brooks', role: 'Product designer', available: false },
  ]

  return <div><h2>Components and props</h2><p>Small components become useful when data enters through props.</p><div className="card-grid">{people.map((person) => <ProfileCard key={person.name} {...person} />)}</div></div>
}
