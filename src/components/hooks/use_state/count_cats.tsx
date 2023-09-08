import { useState } from "react"

export function CountCats() {

 
  const [cats, setCats] = useState<string[]>([])


  function click(){
	setCats([...cats, "🐈"])
  }


  return (
    <>
    <h2>useState</h2>

    <p>{cats}</p>

    <button onClick={click}>
      There are {cats.length} cats 🥳
    </button>
    </>
  );
}