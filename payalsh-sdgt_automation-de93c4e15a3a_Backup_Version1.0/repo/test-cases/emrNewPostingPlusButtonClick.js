module.exports = {
	id: "12",
	caseletId: "12",
	name: "emrNewPostingPlusButtonClick",
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
			data: "null"
		},
		{
			caseletStepId: "5",
			data: "null"
		},
		{
			caseletStepId: "6",
			data: "null"
		},
		{
			caseletStepId: "7",
			data: "null"
		},
		{
			caseletStepId: "8",
			data: "null"
		}
		
	],

	executionHooks: [
		{
			type: "after",
			caseletStepId: "",
			hook: function() {
				
			}
		}

	],
//testcase mapping, handler mapping, controller
	execute: function() {
		
		//maincontroller.execute(testcasejson,elementHandlerMap);
		//console.log("login execute");	
	},
	overide: function(){

	},
	verify: function(done) {
     console.log('verify');
     var deferred= protractor.promise.defer();
     var control=element(by.xpath('//*[@id="crisisNote"]/div/div/div[1]/div'));
      control.getText().then(function(text){
       if(text=='Posting')
       {
               console.log('verify pass');
       
                return deferred.fulfill('pass');
       }
       else
       {
                console.log('verify fail');
                 return deferred.reject('verification failed');
       }
          
   }).catch(function(error){
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