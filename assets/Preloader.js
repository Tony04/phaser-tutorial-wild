Game.Preloader = function(game){

	this.PreloadBar = null;
};

Game.Preloader.prototype = {
	Preload:function(){

		this.preloadBar = this.add.sprite(this.world.centerX,
										this.world.centerY,'preloadBar')
	
		this.preloadBar.anchor.setTo(0.5, 0.5);

		this.time.advancedTiming = true;

		this.load.setPreloadSprite(this.preloaderBar);

		// LOAD ALL ASSETS


	},

	Create:function(){

		This.state.start('Level1');
	}

}