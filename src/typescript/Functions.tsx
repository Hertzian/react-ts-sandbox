export const Functions = () => {
  const add = (a: number, b: number): number => {
    return a + b
  }

  return (
    <>
      <h3>Functions</h3>
      <span>Result is: {add(1, 2)}</span>
    </>
  )
}
