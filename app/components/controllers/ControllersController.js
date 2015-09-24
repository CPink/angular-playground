var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
	this.newFriends = "";
	this.addFriends = function(){
	  	this.friends.push(newFriends);
	}
}
