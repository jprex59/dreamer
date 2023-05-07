/*
 * Demo of https://github.com/isuttell/sine-waves
 */

var waves = new SineWaves({
	el: document.getElementById("waves"),

	speed: 2,

	width: function () {
		return $(window).width();
	},

	height: function () {
		return $(window).height();
	},

	ease: "SineInOut",

	wavesWidth: "40%",

	waves: [
		{
			timeModifier: 2,
			lineWidth: 10,
			amplitude: -100,
			wavelength: 50,
		},
		{
			timeModifier: 2,
			lineWidth: 10,
			amplitude: -235,
			wavelength: 30,
		},
	],

	// Called on window resize
	resizeEvent: function () {
		var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
		gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
		gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
		//gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");

		var index = -1;
		var length = this.waves.length;
		while (++index < length) {
			this.waves[index].strokeStyle = gradient;
		}

		// Clean Up
		index = void 0;
		length = void 0;
		gradient = void 0;
	},
});
