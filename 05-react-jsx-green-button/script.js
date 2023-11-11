
const App = () => {
    console.log('called')
    let buttonText = 'Click me'
    const onButtonClick = () => {
        buttonText = 'hello from react'
        console.log(buttonText)
    }

    return (
        <div className="app">
            <button onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)