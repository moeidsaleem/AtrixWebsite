// Angular Global
(function()){

	'use strict';
	app.run(function(formlyConfig){
		formlyConfig.setType({
			name: 'input',
			templateURl:'view/build/custombuild.html'
		});
	});
	app.controller('custombuildCtrl', ['$scope','formly' function ($scope) {

		 var vm=this;
		 //function assignment
		 vm.onSubmit = onSubmit;

		 //variable assignment
		 vm.model={
		 	firstName: 'Obi wan'
		 };
		 vm.fields=[
		 type:'input',
		 key: 'firstName',
		 templateOption:{
		         label:'First Name'
		                }
		            },
		            {
		            	template:'<hr/>'
		            },
		            

		 ];

		

	}]);
}