angular.module('fridge', ['ui.bootstrap', 'firebase']).run(function($rootScope, angularFire, angularFireAuth){
	var url = 'https://refridge.firebaseio.com/';
	angularFire(url, $rootScope, 'refridge', {});
	angularFireAuth.initialize(url, { scope: $rootScope, name: 'user'});
	$rootScope.login = function() {
		angularFireAuth.login('github');
	};
	$rootScope.logout = function() {
		angularFireAuth.logout();
	};
	$rootScope.init = function(){
		$rootScope.refridge.lists = [];
	};
	$rootScope.create = function(){
		$rootScope.activeList = {
			name: 'New List',
			items: []
		};
		$rootScope.refridge.lists.push($rootScope.activeList);
	};
	$rootScope.remove = function(list) {
		if (confirm('Delete this list?'))
			$rootScope.refridge.lists.splice($rootScope.refridge.lists.indexOf(list),1);
		$rootScope.activeList = false;
	};
	$rootScope.open = function(list) {
		$rootScope.activeList = list;
		if (!list.items)
			list.items = [];
	};
});