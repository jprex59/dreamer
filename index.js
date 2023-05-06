// Charger le JSON
fetch("bdd.json")
	.then((response) => response.json())
	.then((data) => {
		// Obtenir la liste de chansons depuis le JSON
		const chansons = data.chansons;

		// Pour chaque chanson, créer une iframe SoundCloud et l'ajouter à la div de classe "test"
		chansons.forEach((chanson) => {
			const iframe = document.createElement("iframe");
			iframe.width = "800";
			iframe.height = "166";
			iframe.scrolling = "no";
			iframe.frameborder = "no";
			iframe.allow = "autoplay";
			iframe.src = chanson.iframe_url;
			document.querySelector(".music").appendChild(iframe);
		});
	});
