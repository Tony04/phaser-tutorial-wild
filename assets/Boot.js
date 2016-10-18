var Game = {};

Game.Boot = funtion(game){

};

Game.Boot.prototype = {
	init:function(){

		this.input.maxPointters = 1;

		this.stage.disableVisibilityChange = true;
	},

	preload:funtion(){

		this.load.image('preloaderBar', 'assets/preloader.png');
	},

	create:funtion(){

		this.state.start('Preloader');
	}

}