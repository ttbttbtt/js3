let phone = document.getElementById("phone")
phone.addEventListener("input", mask)

let butt = document.getElementsByClassName("butt")

function mask() {
    
    // \D : соответствует любому символу, который не является цифрой
    // \w : соответствует любой букве, цифре или символу подчеркивания (диапазоны A–Z, a–z, 0–9)
    
    // \W : соответствует любому символу, который не является буквой, цифрой или символом подчеркивания
    // (то есть не находится в следующих диапазонах A–Z, a–z, 0–9)
    
    let Numv = phone.value.replace(/\D/g, '') // g - модификатор global (глоб замена не чисел)
    console.log('1. input   '+Numv)
    
    // непусто
    if (Numv.length > 0) {
        let Numm
        Numm = "+" + Numv.substring(0, 3)
        
        // открывающаяся скобка
        if (Numv.length > 3) {
            Numm += " (" + Numv.substring(3, 5)
        }
        
        // закрывающаяся скобка
        if (Numv.length > 5) {
            Numm += ") " + Numv.substring(5, 8)
        }
        
        // первый дефис
        if (Numv.length > 8) {
            Numm += "-" + Numv.substring(8, 10)
        }

        // второй дефис
        if (Numv.length > 10) {
            Numm += "-" + Numv.substring(10, 12)
        }
        
        phone.value = Numm
        console.log('2. mask   '+Numm)
    }
}

butt.addEventListener("click", check)

function check() {    
    let answer = document.getElementsByClassName("answer")
    let Numv = phone.value
    let ans
    if ( Numv.substring(1, 4) == '998' ) {
        ans = 'Это узбекский номер телефона'
    }
    else {
        ans = 'Это не узбекский номер телефона'
    }
    console.log(ans)

    answer[0].innerHTML = ans
    return(ans)
}