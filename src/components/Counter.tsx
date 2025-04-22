import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initialValue: number;
    children?: JSX.Element;
}


export const Counter: Component<Props> = ( props ) => {

    const [ counter, setCounter ] = createSignal( props.initialValue );

    return (
        <>
            { props.children } {/* Titlulo */}

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
