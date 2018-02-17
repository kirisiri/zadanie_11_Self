function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function(){
		
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(this.text);
		});
		$('body').append(this.$element);
	}
}
var btn1 = new Button('Nie czaje tego!');
btn1.create();
