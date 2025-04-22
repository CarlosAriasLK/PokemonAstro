import { createSignal } from "solid-js"


export const Counter = () => {


    const [ counter, setCounter ] = createSignal(10)

    return (
        <>
            <h1 class="text-5xl">Counter</h1>
            <h3 class="text-4xl">Value: { counter() } </h3>

            <button 
                onClick={ () => setCounter( counter() - 1 ) }
                class="bg-blue-500 p-3 mr-2 mt-3 rounded cursor-pointer" 
            >
                -1
            </button>

            <button 
                onClick={ () => setCounter( counter() + 1 ) }
                class="bg-blue-500 p-3 mr-2 mt-3 rounded cursor-pointer" 
            >
                +1
            </button>
        </>
    )
}
