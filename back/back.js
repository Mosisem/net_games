function busca1(){
    var produtos =  window.document.getElementById("buscar").value

    if(produtos == "controle" || produtos == "Controle"){
      window.document.location.href="doc_pg2.html"
    } else{
        if(produtos == "xbox" || produtos == "Xbox" || produtos == "Xbox 360" ){
            window.document.location.href="doc_pg3.html"        
        } else{
            if(produtos == "ps" || produtos == "playstation" || produtos == "ps2"){
                window.document.location.href="doc_pg4.html"
            }else{
                if(produtos == "switch" || produtos == "Nintendo switch" || produtos == "nintendo switch" ){
                    window.document.location.href="doc_pg5.html"
                }else{
                    if(produtos == "teclado gamer" || produtos == "Teclado gamer"){
                        window.document.location.href="doc_pg6.html"
                    }else{
                        if(produtos == "Fones" || produtos == "fones" || produtos == "fone" || produtos == "fones de ouvido" || produtos == "headset"){
                            window.document.location.href="doc_pg7.html"
                        }else{
                            if(produtos == "PSP" || produtos == "Ps vita" || produtos == "PS vita" || produtos == "ps vita"){
                                window.document.location.href="doc_pg8.html"
                            }else{
                                if(produtos == "Teclado" || produtos == "teclado" || produtos == "TECLADO" || produtos == "teclado sem fio"){
                                    window.document.location.href="doc_pg9.html"
                                }else{
                                    if(produtos == "nintendo"|| produtos == "3DS" || produtos == "nintendo 3ds" || produtos == "Nintendo" || produtos.value == "NINTENDO"){
                                        window.document.location.href="doc_pg10.html"
                                    }else{
                                        window.alert(`[ERRO]: O produto ( ${produtos.value} ) não está disponivel !!`)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} 

function click_p1(){
    window.document.location.href="doc_pg2.html"
}

function click_p2(){
    window.document.location.href="doc_pg3.html"
}

function click_p3(){
    window.document.location.href="doc_pg4.html"
}

function click_p4(){
    window.document.location.href="doc_pg5.html"
}

function click_p5(){
    window.document.location.href="doc_pg6.html"
}

function click_p6(){
    window.document.location.href="doc_pg7.html"
}

function click_p7(){
    window.document.location.href="doc_pg8.html"
}

function click_p8(){
    window.document.location.href="doc_pg9.html"
}

function click_p9(){
    window.document.location.href="doc_pg10.html"
}

function click_p01(){
    window.document.location.href="index.html"
}

// <-------- [ Produtos da loja ]---------->

/*var produtos = []
produtos.push("Controle Compatível Com Ps4 Playstation 4 Manete Sem Fio")
produtos.push("Xbox 360 + Kinect Slim 4GB Standard cor matte black")
produtos.push("Console Playstation 2 + 2 Controles + Jogos + Garantia")
produtos.push("Nintendo Switch Lite 32GB Standard cor azul-turquesa")
produtos.push("Teclado Gamer Havit Kb432l Mecânico Led Abnt2")
produtos.push("Headset over-ear gamer JBL Quantum 100 JBL QUANTUM 100 preto")
produtos.push("Sony PS Vita Standard cor crystal black")
produtos.push("Kit Teclado E Mouse Multimídia Sem Fio Wireless 2.4ghz Abnt2 Preto Preto")
produtos.push("Nintendo 3DS Standard cor aqua blue")
console.log(produtos)
*/
