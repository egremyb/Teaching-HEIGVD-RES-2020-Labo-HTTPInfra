$(function() {
    console.log("Loading animals...");

    function loadAnimals() {
        $.getJSON("/api/animals/", function(animals) {
           console.log(animals);
            let message = "Nobody is here";
            if(animals.length > 0){
               message = "- " + animals[0].battleCry + "<br>Said the " + animals[0].weight + " kg " + animals[0].specie;
            }

            $(".tm-hero-subtitle").text(message);
            $(".tm-hero-subtitle").each(function(){
                var $this = $(this);
                var t = $this.text();
                $this.html(t.replace('&lt','<').replace('&gt', '>'));
            });
        });
    };

    loadAnimals();
    setInterval(loadAnimals, 4000);
});