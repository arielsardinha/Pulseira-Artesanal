const aside_min_max =  document.querySelector('aside')
const btn_min_max = document.getElementById("aside-min-max")
const txt = document.getElementById('aside-sacola')
const txt_checkbox = document.querySelectorAll('input.check')

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
for(let i = 0; i < txt_checkbox.length; i ++){
    console.log(txt_checkbox[i])
    if(txt_checkbox[i].checked == true){
        console.log(txt_checkbox[i])
    }
}



