module.exports = {
	id: "271",
	caseletId: "271",
	name: "emrfollowupAddIPComplexDataCategoryStat",
	overridenExecution: false,
	data: [
		{
			caseletStepId: "1",
			data: "barakathk@hlwe.com"
		},
		{
			caseletStepId: "2",
			data: "abcd@1234"
		},
		{
			caseletStepId: "3",
			data: "hospital_123"
		},
		{
			caseletStepId: "4",
			data: ""
		}
		,
		{
			caseletStepId: "5",
			data: ""
		},
		{
			caseletStepId: "6",
			data: ""
		},
		{
			caseletStepId: "7",
			data: ""
		},
		{
			caseletStepId: "8",
			data: ""
		},
		{
			caseletStepId: "9",
			data: ""
		},
		{
			caseletStepId: "10",
			data: ""
		},
		{
			caseletStepId: "11",
			data: ""
		},
		{
			caseletStepId: "12",
			data: "Augmentin 457mg"
		},
		{
			caseletStepId: "13",
			data: ""
		},
		{
			caseletStepId: "14",
			data: "200"
		},
		{
			caseletStepId: "15",
			data: "ORAL"
		},
		{
			caseletStepId: "16",
			data: "Once Daily"
		},
		{
			caseletStepId: "17",
			data: "2"
		},
		{
			caseletStepId: "18",
			data: ""
		},
		{
			caseletStepId: "19",
			data: ""
		},
		{
			caseletStepId: "20",
			data: ""
		},
		{
			caseletStepId: "21",
			data: ""
		}
		
	],
//testcase mapping, handler mapping, controller
	execute: function() {
		
		//maincontroller.execute(testcasejson,elementHandlerMap);
		//console.log("login execute");	
	},
	overide: function(){

	},
	verify: function() {
     
     console.log('2nd verify')
		var testCaseUtil = require('../../core/controller/TestCaseUtility');
		var deferred = protractor.promise.defer();

		element.all(by.repeater('order in ipComplexList')).count().then(function(count) {

			var initialRowCount = testCaseUtil.getRowCountValue();
			console.log('initialrowcount -- ', initialRowCount);
			console.log('currentrowcount -- ', count);

			if (count > initialRowCount) {

				console.log('verify pass');

				return deferred.fulfill('pass');
			} else {
				console.log('verify fail');
				return deferred.reject('verification failed');
			}

		}).catch(function(error) {
			console.log(error.message);
			var errMsg = errorLookUp.getErrorMessage(error.message);
			if (errMsg == undefined) {
				errMsg = error.message;
			}
			//Error occured, reject the promise and return back the error message.
			return deferred.reject(errMsg);
		});


		return deferred.promise;

	}



}
