        const form = document.querySelector('.FormularioDeValidaçao')
        let campoA  = document.getElementById('CampoA');
        let campoB  = document.getElementById('CampoB');
        let Validaform = false
        campoB = parseInt(campoB).value;
        campoA = parseInt(campoA).value;

    function validaCamposa (campoA, campoB){
        let valoresDosCampos = campoA < campoB;
        return valoresDosCampos;
    }
    

    form.addEventListener('submit', function (e){
        e.preventDefault();
            if(!Validaform){
                document.querySelector('.mensagem').style.display = 'block';
            }else {
                document.querySelector('.mensagem').style.display = 'none';
                document.querySelector('.mensagemSucesso').style.display = 'block'
                campoB.value = ''
                campoA.value = ''
            }
        })
