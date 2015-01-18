Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		data: function() {
			return {
				posts: Post.list(Meteor.userId())
			}
		}
	});
	this.route('user', {
		path: '/user/:_id',
		template: 'user',
		layoutTemplate: 'layout',
		data: function() {
			var _id = this.params._id;
			var isFollowing = Friendship.isFollowing(_id);
			Session.set('currentUserId', _id);
			Session.set('isFollowing', isFollowing);
			return {
				user: Meteor.users.findOne({_id: _id}),
				posts: Post.list(_id)
			}
		}
	});
	this.route('follow', {
		path: '/user/:_id/follow',
		action: function() {
			var _id = this.params._id;
			Meteor.call("followUser", _id);
			this.redirect('/user/' + _id);
		}
	});
	this.route('unfollow', {
		path: '/user/:_id/unfollow',
		action: function() {
			var _id = this.params._id;
			Meteor.call("unfollowUser", _id);
			this.redirect('/user/' + _id);
		}
	});
});