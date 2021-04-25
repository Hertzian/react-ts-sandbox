export const BasicTypes = () => {
  const name: string = 'Eduardo'
  const age: number = 35
  const isActive: boolean = true
  //const powers = ['Speed', 'Fly', 'Strength']
  //const powers: (string | number)[] = []
  const powers: string[] = []

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name}, {age}, {isActive ? 'true' : 'false'}
      <hr />
      {powers.join(', ')}
    </>
  )
}
