angular.module('refridge', ['ui.bootstrap', 'firebase', 'ui.keypress', 'ui.jq']).run(function($rootScope, angularFire, angularFireAuth){
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
	$rootScope.purchase = function(item){
		item.purchased = Date();
	};
	$rootScope.unpurchase = function(item){
		item.purchased = false;
	};
	$rootScope.create = function(){
		$rootScope.activeList = {
			name: 'New List',
			items: [],
			created: Date()
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