$(function () {
    console.log("Loading animals...");

    function loadAnimals() {
        $.getJSON("/api/animals/", function (res) {
            console.log(res);
            let title    = "Nobody is here";
            let subtitle = "Ain't nobody got time for that"
            let animals = res["animals"];
            let srvState = res["srvState"];

            if (animals != null && srvState != null) {
                title = "- " + animals[0].battleCry;
                subtitle = "Said the " + animals[0].weight + " kg " + animals[0].specie +
                           "<br>Straight Outta " + srvState;
            }

            $(".tm-hero-title").text(title);
            $(".tm-hero-subtitle").text(subtitle);
            $(".tm-hero-subtitle").each(function () {
                var $this = $(this);
                var t = $this.text();
                $this.html(t.replace('&lt', '<').replace('&gt', '>'));
            });
        });
    };

    loadAnimals();
    setInterval(loadAnimals, 4000);
});
