function clicar(){
    let usuario = document.getElementById('email')
    let password= document.getElementById('pass')

    if(usuario.legth === 0 || password.legth === 0){
        alert('Informaçôes não fornecidas.')
    } else{
        alert('Tudo ok.')
    }
}