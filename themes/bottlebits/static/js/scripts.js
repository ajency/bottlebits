$(document).ready(function () {
    let SITE_URL = 'http://localhost:8888/bottlebits/docs/';

    $(document).on("click",".sign-up-btn",function(e){
    	
    	let first_name = $("#first_name").val();
    	let last_name = $("#last_name").val();
    	let email = $("#email").val();
    	let gender = $("#gender").val();
    	let age_group = $("input[type='radio'][name='age_group']:checked").val();
    	let country = $("#country").val();
    	
    	$('.input-txt').removeClass('text-error')
    	let error = 0
    	if(validateInput(first_name) != ""){
    		$("#first_name").addClass('text-error')
    		error++;
    	}

    	if(validateInput(last_name) != ""){
    		$("#last_name").addClass('text-error')
    		error++;
    	}

    	if(validateEmail(email) != ""){
    		$("#email").addClass('text-error')
    		error++;
    	}

    	if(validateInput(gender) != ""){
    		$("#gender").addClass('text-error')
    		error++;
    	}

    	if(validateInput(age_group) != ""){
    		$("#age_group").addClass('text-error')
    		error++;
    	}

    	if(validateInput(country) != ""){
    		$("#country").addClass('text-error')
    		error++;
    	}

    	if(grecaptcha.getResponse() == ""){
    		$(".g-recaptcha").addClass('text-error')
    		error++;
    	}

    	if(error == 0){
    		let requestValues = {
    			'first_name':first_name,
				'last_name':last_name,
				'email':email,
				'gender':gender,
				'age_group':age_group,
				'country':country,
				'sign_up' : true
    		}

	    	$.ajax({
		        url: SITE_URL+"api/server.php",
		        type: "post",
		        data: requestValues ,
		        success: function (response) {

		           // You will get response from your PHP page (what you echo or print)
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		           console.log(textStatus, errorThrown);
		        }
		    });
    	}
	

	});

	$(document).on("click",".survey-qn-1",function(e){
    	
    	let whisky_knowledge = $("#whisky_knowledge").val();

		let requestValues = {
			'whisky_knowledge':whisky_knowledge,
			'step_1' : true
		}

    	$.ajax({
	        url: SITE_URL+"api/server.php",
	        type: "post",
	        data: requestValues ,
	        success: function (response) {
	        	
	           // You will get response from your PHP page (what you echo or print)
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	           console.log(textStatus, errorThrown);
	        }
	    });
    
	

	});

	$(document).on("click",".survey-qn-2",function(e){
    	
    	let bottlebits_help_me = $("#bottlebits_help_me").val();
    	
		let requestValues = {
			'bottlebits_help_me':bottlebits_help_me,
			'step_2' : true
		}

    	$.ajax({
	        url: SITE_URL+"api/server.php",
	        type: "post",
	        data: requestValues ,
	        success: function (response) {
	        	
	           // You will get response from your PHP page (what you echo or print)
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	           console.log(textStatus, errorThrown);
	        }
	    });

	

	});

	$(document).on("click",".survey-qn-3",function(e){
    	
    	let initial_investment_intention = $("#initial_investment_intention").val();
    
		let requestValues = {
			'initial_investment_intention':initial_investment_intention,
			'step_3' : true
		}

    	$.ajax({
	        url: SITE_URL+"api/server.php",
	        type: "post",
	        data: requestValues ,
	        success: function (response) {
	        	
	           // You will get response from your PHP page (what you echo or print)
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	           console.log(textStatus, errorThrown);
	        }
	    });
 
	

	});


	function validateInput(textInput){
        let errors = '';
        if(textInput === undefined){
            errors= 'Please enter required value'
        }
        else if(textInput !== undefined && (textInput).trim().replace(/ /g, "") ==""){
            errors= 'Please enter required value'
        }
        return errors;

    }

	function validateEmail(accountEmail){
    	let errors = '';
    	let reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
        
        if(accountEmail === undefined){
            errors= 'Please enter required value'
        }
        else if(accountEmail !== undefined && (accountEmail).trim().replace(/ /g, "") ==""){
            errors= 'Please enter required value'
        }
        else if(accountEmail !== undefined && !reg.test(accountEmail)){
            errors= 'Please enter valid email'
        }

        return errors;
    }
});






