$(function () {
    console.log("Loading animals...");

    function loadAnimals() {
		// Make a request forward the express animals service
        $.getJSON("/api/animals/", function (res) {
            
			console.log(res);
			
			// Default content message
            let title    = "Nobody is here";
            let subtitle = "Ain't nobody got time for that"
			
			// Get res object values from their key 
            let animals = res["animals"];
            let srvState = res["srvState"];

			// Check if the values from res object are defined to enter the if statement
            if (animals != 'undefined' && srvState != 'undefined') {
				// Set title and subtitle messages
                title = "- " + animals[0].battleCry;
                subtitle = "Said the " + animals[0].weight + " kg " + animals[0].specie +
                           "<br/>Straight Outta " + srvState;
            }

			// Replace text content from with classes tm-hero-title or tm-hero-subtitle
            $(".tm-hero-title").text(title);
            $(".tm-hero-subtitle").text(subtitle);
			
			// Replace char from '<br/>' to make the line return work
            $(".tm-hero-subtitle").each(function () {
                var $this = $(this);
                var t = $this.text();
                $this.html(t.replace('&lt', '<').replace('&gt', '>'));
            });
        });
    };

	// Call once the loadAnimals function
    loadAnimals();
	
	// Set an interval to call the loadAnimals function
    setInterval(loadAnimals, 4000);
});
