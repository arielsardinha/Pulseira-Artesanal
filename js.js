const aside_min_max =  document.querySelector('aside')
const btn_min_max = document.getElementById("aside-min-max")
 
function min_max(){
    if(document.getElementById('aside-min-max').value != " + "){
        aside_min_max.style.height = "53px"
        aside_min_max.style.width = "45px"
        btn_min_max.value = " + "
        btn_min_max.style.left = "7px"
    }else{
        aside_min_max.style.height = "300px"
        aside_min_max.style.width = "300px"
        btn_min_max.value = " - "
        btn_min_max.style.left = "265px"
    }
}


