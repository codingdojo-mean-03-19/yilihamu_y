$(document).ready(function(){

        document.getElementById("stark").addEventListener("click", displayStark);
        document.getElementById("targaryen").addEventListener("click", displayTargaryen);
        document.getElementById("lannister").addEventListener("click", displayLannister);
        document.getElementById("baratheon").addEventListener("click", displayBaratheon);

        function displayStark(){
            $.get("https://www.anapioficeandfire.com/api/houses/362", stark);
            function stark(data){
                $('.output').append(`
                    <p>Name: ${data.name}</p>
                    <p>Words: ${data.words}</p>
                    <p>Titles: ${data.titles}</p>
                `)
            }  
        };

        function displayTargaryen(){
            $.get("https://www.anapioficeandfire.com/api/houses/378", targaryen);
            function targaryen(data){
                $('.output').append(`
                    <p>Name: ${data.name}</p>
                    <p>Words: ${data.words}</p>
                    <p>Titles: ${data.titles}</p>
                `)
            }  
        };

        function displayLannister(){
            $.get("https://www.anapioficeandfire.com/api/houses/229", lannister);
            function lannister(data){
                $('.output').append(`
                    <p>Name: ${data.name}</p>
                    <p>Words: ${data.words}</p>
                    <p>Titles: ${data.titles}</p>
                `)
            }  
        };

        function displayBaratheon(){
            $.get("https://www.anapioficeandfire.com/api/houses/17", baratheon);
            function baratheon(data){
                $('.output').append(`
                    <p>Name: ${data.name}</p>
                    <p>Words: ${data.words}</p>
                    <p>Titles: ${data.titles}</p>
                `)
            }  
        };

})