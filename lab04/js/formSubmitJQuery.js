"use strict";

//Assignment 9 - Task #4

$(function(){
    $('form').submit(function(e){
        e.preventDefault();  
        const formId = $(this).attr("id");
        let newElement=null;
        if(formId==="productForm"){
            newElement = $("<div>", { "id": "newDiv", "class": "special" });
        }
        jQuery.each($( this ).serializeArray(), function(index, item) {
            console.log(item.name+ ": " + item.value);  
            if(formId==="productForm"){
                let p = $("<p>",{"text":item.name+ ": " + item.value});
                newElement.append(p);
            }
        });
        if(newElement!=null) $('#result').append(newElement);
    });
});

