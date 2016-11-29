var app = angular.module ('snippetMod', []);

app.controller('snippetCtrl', function($scope){

$scope.photoinfo = [
{ 
	header: "header 1",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #1"
},
{ 
	header: "header 2",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #2"
},
{ 
	header: "header 3",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #3"
},
{ 
	header: "header 4",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #4"
},
{ 
	header: "header 5",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #5"
},
{ 
	header: "header 6",
	image: "http://placehold.it/350x150", 
	caption: "This is our header #6"
}
];

});

app.directive ('snippetGenerator', function (){
	return {
		restrict: "E",
		templateUrl: "snippet.html"
	}
});





