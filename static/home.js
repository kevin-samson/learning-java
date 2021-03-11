let num = 1

function Add1(){
    document.getElementById("here").innerHTML = num++
}

function Reset(){
    num=0
    Add1()
}

