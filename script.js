$(document).ready(function(){
    var at = $("#alphaTauri")
    var al = $("#alpine")
    var am = $("#astonMartin")
    var fe = $("#ferrari")
    var mc = $("#mcLaren")
    var me = $("#mercedes")
    var rb = $("#redBull")

    $(at).on("change", function (){
        setValue($(this).val(), $("#at"))
    })

    $(am).on("change", function (){
        setValue($(this).val(), $("#am"))
    })

    $(al).on("change", function (){
        setValue($(this).val(), $("#al"))
    })

    $(fe).on("change", function (){
        setValue($(this).val(), $("#fe"))
    })

    $(mc).on("change", function (){
        setValue($(this).val(), $("#mc"))
    })

    $(me).on("change", function (){
        setValue($(this).val(), $("#me"))
    })

    $(rb).on("change", function (){
        setValue($(this).val(), $("#rb"))
    })

    function setValue(value, image){
        var className = "not"

        if(value == 0.1){
            className = "ten"
        }
        else if(value == 0.2){
            className = "twenty"
        }
        else if(value == 0.3){
            className = "thirty"
        }
        else if(value == 0.4){
            className = "fourty"
        }
        else if(value == 0.5){
            className = "fifty"
        }
        else if(value == 0.6){
            className = "sixty"
        }
        else if(value == 0.7){
            className = "seventy"
        }
        else if(value == 0.8){
            className = "eighty"
        }
        else if(value == 0.9){
            className = "ninety"
        }
        else if (value == 1){
            className = "hundred"
        }
        $(image).removeClass()
        console.log($(image).attr("class"))
        $(image).addClass("car-img")
        console.log($(image).attr("class"))
        $(image).addClass(className)
        console.log($(image).attr("class"))
    }
});