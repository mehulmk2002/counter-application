function increment(num){
    var value=Number(document.getElementById('counter').innerHTML)
    document.getElementById('counter').innerHTML=value+num
}

function decrement(num){
    var value=Number(document.getElementById('counter').innerHTML)
    document.getElementById('counter').innerHTML=value-num
}

function reset()
{
    document.getElementById('counter').innerHTML=0
}

function inc_takeninput()
{
    var number=Number(document.getElementById("number_value").value)
    increment(number)
}

function dec_takeninput()
{
    var number=Number(document.getElementById("number_value").value)
    decrement(number)
}


