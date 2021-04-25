interface Person {
  nameComplet: string
  age: number
  addres: Address
}

interface Address {
  country: string
  number: number
}

export const ObjectsLiterals = () => {
  const person: Person = {
    nameComplet: 'Eduardo',
    age: 38,
    addres: {
      country: 'Mexico',
      number: 727
    }
  }

  return (
    <>
      <h3>Objects Literals</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  )
}
