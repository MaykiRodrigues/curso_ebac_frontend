const form = document.getElementById('formulario');
let varA = parseFloat(document.getElementById('A').value);
let varB = parseFloat(document.getElementById('B').value);

formvalid=false;

function numbervalid (varA,varB) {
    return varB > varA

}

form. addEventListener('submit'); {
    e.preventDefault();
    const messagesucess = 'Tudo certo, enviado com sucesso';
}

formvalid = numbervalid(varA,varB);
if (formvalid);{
    const centermessagesucess = document.querySelector('sucess-message');
    centermessagesucess.innerHTML = messagesucess;
    centermessagesucess.getElementsByClassName.display = 'block';

    varA.value=('');
    varB.value=('');
}
