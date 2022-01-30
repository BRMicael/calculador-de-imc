import React, {useState} from 'react';

 export default (props) => {


    const [peso = '', setPeso] = useState()
    const [altura ='', setAltura] = useState()

    
        return (
        <>
        <div>
        <form>
            
            <label htmlFor="">Digite seu peso: {peso}</label>
            <br></br>
            <input type="number" value={peso} placeholder="Exemplo: 60kg"
            onChange={evento => setPeso(evento.target.value)}/>
    
            <br></br>

            <label htmlFor="">Digite sua altura: {altura} </label>
            <br></br>
            <input type="number" value={altura} id='hight' placeholder="Exemplo: 1,70m"
            onChange={evento => setAltura(evento.target.value)}/>
            <br></br>
            <input type="button" value="Gerar resultado" id="button"
            onClick={function imc(imcvalor) {
                let pesovalor = {peso}.peso
                let alturavalor = {altura}.altura
            
                let imc = pesovalor / (Math.pow(alturavalor, 2))
                let classificação
                
                if(imc < 18.5){
                    classificação = 'o peso abaixo do normal.';
                }else if( imc <= 24.9){
                    classificação = 'o peso normal.'
                }else if(imc <= 29.9){
                    classificação= "sobrepeso."
                }else{
                    classificação = 'obesidade.'
                }

                if(imc > 0){

                    document.getElementById("imc").innerHTML="Seu imc é: " + imc + ", portanto, você se encontra com " + classificação;
                }



                
                     }}/>  
        </form>
        
        </div>
        <div id='res'>
        <h2>Resultado: </h2>
            <p id="imc"></p>
        </div>
        </>
        )
       
}








// imc = peso / altura^2
/* 

} */
/*
function imc(){
    let peso = document.getElementById('hight').value 
    let altura = ''          

    let pesovalor = {peso}.peso
    let alturavalor = {altura}.altura

    let imc = pesovalor / (Math.pow(alturavalor, 2))
    
    
    return imc;
    console.log(imc)
} */
