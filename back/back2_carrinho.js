var nome_p = ""
var carrinho_lista =[]
var p_v =""


const minitwitter = {
    usuarios:[{
    username:"Sem"
 }],

 posts:[{
    id: 1,
    content:"primeiro post"
 }],

 criapost(dados){
    minitwitter.posts.push({
        id:minitwitter.posts.length +1,
        content: dados.content
    }); 

    var postes = document.getElementById("listadepostes")
    postes.insertAdjacentHTML("afterbegin",`
    <li class="elementohtml_c" id="elementohtml">
        <button class="btndelet" id="but" onclick="deletador()">Remover</button>
        ${dados.content}
    </li>`)
 },


 carrinho1(){
    nome_p = "Controle Compatível Com Ps4 Playstation 4 Manete Sem Fio"
    p_v = " R$ 413,52"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)

  
//    input_pro.value = ""
 },

 carrinho2(){ 
    nome_p = " Xbox 360 + Kinect Slim 4GB Standard cor matte black"
    p_v = " R$ 850,49"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho3(){ 
    nome_p = "Console Playstation 2 + 2 Controles + Jogos + Garantia"
    p_v = " R$ 590"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho4(){ 
    nome_p = "Nintendo Switch Lite 32GB Standard cor azul-turquesa"
    p_v = " R$ 1.299"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho5(){ 
    nome_p = "Teclado Gamer Havit Kb432l Mecânico Led Abnt2"
    p_v = " R$ 299,99"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho6(){ 
    nome_p = " Headset over-ear gamer JBL Quantum 100 JBL QUANTUM 100 preto"
    p_v = " R$ 149,45"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho7(){ 
    nome_p = "Sony PS Vita Standard cor crystal black"
    p_v = " R$1.500"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho8(){ 
    nome_p = "Kit Teclado E Mouse Multimídia Sem Fio Wireless 2.4ghz Abnt2 Preto Preto"
    p_v = " R$ 59,90"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)
//    input_pro.value = ""
 },

 carrinho9(){ 
    nome_p = "Nintendo 3DS Standard cor aqua blue"
    p_v = " R$ 1.099"
    minitwitter.criapost({content:nome_p + p_v})
    carrinho_lista.push(nome_p + p_v)
    console.log(carrinho_lista)

    }
};




// ===============   deletar  
function deletador(){
        var elemento =window.document.getElementById("elementohtml")
        console.log("obj deletado !!");
        elemento.remove()
        carrinho_lista.splice(elemento, 1)
        console.log(carrinho_lista)
}
// ===============  

