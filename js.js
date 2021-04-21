const aside_min_max =  document.querySelector('aside')
const btn_min_max = document.getElementById("aside-min-max")
const txt = document.getElementById('aside-sacola')
const txt_checkbox = document.querySelectorAll('input.check')
const whatsapp = document.getElementById('link_whatsapp')


function min_max(){
        
    if(document.getElementById('aside-min-max').value != " + "){
        aside_min_max.style.height = "53px"
        aside_min_max.style.width = "45px"
        btn_min_max.value = " + "
        btn_min_max.style.left = "0px"
    }else{
        aside_min_max.style.height = "300px"
        aside_min_max.style.width = "300px"
        btn_min_max.value = " - "
        btn_min_max.style.left = "130px"
    }
}

let list_whatsapp = []

function adcionar_carrinho(){
    for(let i = 0; i < txt_checkbox.length; i ++){
        if(txt_checkbox[i].checked == true){
            let id_aleatorio = Math.trunc((Math.random() * 1000000000))
            txt.innerHTML += `<div class="caixa_itens"><p>${txt_checkbox[i].value}</p> <input id="${id_aleatorio}" onclick="Excluir_inputETxt()" class="btn_excluir_item" type='button' value="excluir"></div>`
            txt_checkbox[i].checked = false
            list_whatsapp.push(txt_checkbox[i].value + '%20')
        }
    }
        aside_min_max.style.height = "300px"
        aside_min_max.style.width = "300px"
        btn_min_max.value = " - "
        btn_min_max.style.left = "130px"
        whatsapp.href = `https://api.whatsapp.com/send?phone=5521999666462&text=${list_whatsapp.join('')}`
}

   





