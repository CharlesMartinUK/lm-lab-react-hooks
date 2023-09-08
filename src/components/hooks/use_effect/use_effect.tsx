// make an api call using useEffect
import {useEffect, useState} from "react"

 
interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}



export const APICall = () => {

    // Your code here!
	const [json, setJson] =useState<Todo | null>(null)

	useEffect(() => {
	
		const getData = async () => {
			try{
				const responce = await fetch("https://jsonplaceholder.typicode.com/todos/1")
				const json = await responce.json()
				setJson(json)
			}catch(error) {
				console.log("ERROR ",error)
			}
		
		}
	
		getData()
	},[])


    return (
        <>
            <h2>useEffect</h2>
            <p>{json?.title}</p>
        </>
    )
}