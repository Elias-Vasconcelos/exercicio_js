        const form = document.querySelector('.FormularioDeValidaçao')



        function validaCampos (campoA, campoB){
            let valoresDosCampos = campoA < campoB;
            return valoresDosCampos;
        } 
    

    form.addEventListener('submit', function (e){
        e.preventDefault();
        

        let campoA  = document.getElementById('CampoA');
        let campoB  = document.getElementById('CampoB');
        
        campoB = parseInt(campoB.value);
        campoA = parseInt(campoA.value);

            if(!validaCampos(campoA, campoB)){
                document.querySelector('.mensagem').style.display = 'block';
                document.querySelector('.mensagemSucesso').style.display = 'none'
            }else {
                document.querySelector('.mensagem').style.display = 'none';
                document.querySelector('.mensagemSucesso').style.display = 'block';
                campoA.value = ''
                campoB.value = ''
            }


        })
