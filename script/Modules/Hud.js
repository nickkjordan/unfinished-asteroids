app.game.hud = {

  render: function(delta) {

    var player = app.game.players[0];

    this.renderBar(16, 16, 80, 6, player.hp / player.maxHp, "#08f");
    this.renderScore(player.score , 32, 500);
  },

  renderBar: function(x, y, width, height, progress, color) {

    app.layer.fillStyle("#000").fillRect(x, y, width, height);
    app.layer.fillStyle(color).fillRect(x, y, width * progress, height);

  },

  renderScore: function(score, x, y) {
  	app.layer
	  .fillStyle("#fff")
	  .font("32px Arial")
	  .textAlign("left")
	  .fillText("score: " + score, 500, 32);
  }

};