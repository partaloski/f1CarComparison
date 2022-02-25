$(document).ready(function(){
    var at = $("#alphaTauri")
    var al = $("#alpine")
    var am = $("#astonMartin")
    var fe = $("#ferrari")
    var mc = $("#mcLaren")
    var me = $("#mercedes")
    var rb = $("#redBull")

    $("#buttonChangeOrder").on("click", function (){

        let elements = $("#images").children()

        for(let i=elements.length-1; i>=0; i--) {
            $("#images-temp").append(elements[i])
        }

        $("#images").children().remove()

        elements = $("#images-temp").children()

        for(let i=0; i<elements.length; i++) {
            $("#images").append(elements[i])
        }

        $("#images-temp").children().remove()
    })

    function precise(val){
        let v = Number(val)
        v*=100;
        return String(v)+"%";
    }

    $(at).on("input", function (){
        setValue($(this).val(), $("#at"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(am).on("input", function (){
        setValue($(this).val(), $("#am"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(al).on("input", function (){
        setValue($(this).val(), $("#al"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(fe).on("input", function (){
        setValue($(this).val(), $("#fe"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(mc).on("input", function (){
        setValue($(this).val(), $("#mc"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(me).on("input", function (){
        setValue($(this).val(), $("#me"))
        $(this).siblings("label").text(precise($(this).val()))
    })

    $(rb).on("input", function (){
        setValue($(this).val(), $("#rb"))
        $(this).siblings("label").text(precise($(this).val()))
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