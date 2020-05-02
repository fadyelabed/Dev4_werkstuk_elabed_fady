"use strict";
$( document ).ready(function() {
        console.log( "ready!" );
            fetch("data.json").then(function(resp) {
                return resp.json();
            })
            .then(function(data) {
            
                getData(data.items);
            });
            let name = data.items.name;
            console.log(name);

            function getData(items){
            
                for(let i of items){
                    let category = i.category;
                    let thumbnail = i.thumbnail.url;
                    let name = i.name;
                    // let recorded = i.recorded-at;
                    let videolength = i.video-length;

                    console.log(i);
                    $(".events").append(`<section style="background-image: url('${thumbnail}');"><h2>${category}</h2><article><h1>${name}</h1></article></section>`)
                }
            }
});
