import React from "react";
import './App.css';
import Form from './form/Form'

const App = () => {

    return (

    <>
    <header>
    <h1>Calcule seu IMC</h1>
    <h2>Preencha seus dados abaixo: </h2>
    </header>
    <div className="App">
   
        <div className="Form">
            <Form></Form>
        </div>

    </div>
    <footer>
</footer>
    </>

    )
}

export default App;

