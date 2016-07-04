

app.controller('chatCtrl',  ['$scope','Message', function($scope,Message){
	$scope.name = "Coder01";
 
						$scope.user="Guest";
 
		$scope.messages= Message.all;
 
		$scope.inserisci = function(message){
			Message.create(message);
		};

	}]);
 
 	app.factory('Message', [function() {
 
		var messages = [{'name':'Pippo','text':'Hello'},
						{'name':'Pluto','text':'Hello'},
						{'name':'Pippo','text':'how are you ?'},
						{'name':'Pluto','text':'fine thanks'},
						{'name':'Pippo','text':'Bye'},
						{'name':'Pluto','text':'Bye'}];
 
		var Message = {
			all: messages
		};
 
		return Message;
 
	}]);


	app.factory('Message', ['$firebase Array',
	function($firebase) {
		var ref = new Firebase('https://atrixchat.firebaseio.com');
		var messages = $firebaseArray(ref.child('messages')).$asArray();
 
		var Message = {
			all: messages,
			create: function (message) {
				return messages.$add(message);
			},
			get: function (messageId) {
				return $firebaseArray(ref.child('messages').child(messageId)).$asObject();
			},
			delete: function (message) {
				return messages.$remove(message);
			}
		};
 
		return Message;
 
	}
	]);
