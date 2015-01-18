Template.timeline.helpers({
	posts: function() {
		// return [
		// 	{message: "Danilo terminou de ler O espadachim de Carvão"},
		// 	{message: "Mariana começou a ler O nome do vento"},
		// 	{message: "Danilo adicionou O código élfico como desejado"},
		// 	{message: "Mariana favoritou A dança da floresta"},
		// 	{message: "Mariana abandonou Dom Casmurro"},
		// 	{message: "Danilo avaliou O temor do sábio"},
		// ];

		//return Session.get("posts");

		//return Post.find({});
		return Post.list(Meteor.userId());
	}
});