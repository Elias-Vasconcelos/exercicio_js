        const form = document.querySelector('.FormularioDeValidaçao')
        let campoA  = document.getElementById('CampoA');
        let campoB  = document.getElementById('CampoB');


        function validaCampos (campoA, campoB){
            let valoresDosCampos = campoA < campoB;
            return valoresDosCampos;
        } 
    

    form.addEventListener('submit', function (e){
        e.preventDefault();
        

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
