$(document).ready(function() {

	console.log('productnav.js v12.0');

	if ($('.product--sidebar')) {
		var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);
		var parts = [{
			"text": 'Platform DevOps',
			"link": '/'
		}];

		for (var j = 0; j < here.length; j++) {
			var part = here[j];
			var pageName = part.toLowerCase();
			pageName = part.charAt(0).toUpperCase() + part.slice(1);
			pageName = pageName.replace('-ops', ' and Operations');
			pageName = pageName.replace('Forcecom', 'Force.com');
			var link = '/' + here.slice(0, j + 1).join('/');
			parts.push({
				"text": pageName,
				"link": link
			});
		}
		
		platform = parts[2];
		platform_name = platform.text.toLowerCase();
		platform_name = platform_name.replace(' and operations','');
		
		var platformvariables = $.parseJSON('{"edison":{"name":"Edison","link":"/platform/edison","capability":[{"name":"Pipeline","link":"/platform/edison/pipeline","product":[{"name":"Dashboard","link":"/platform/edison/pipeline/dashboard"},{"name":"Continuous Integration","link":"/platform/edison/pipeline/continuous-integration"},{"name":"Docs","link":"/platform/edison/pipeline/docs"}]},{"name":"Publish","link":"/platform/edison/publish","product":[{"name":"Custom","link":"/platform/edison/publish/edison-custom"},{"name":"Lite","link":"/platform/edison/publish/edison-lite"},{"name":"Edge","link":"/platform/edison/publish/edison-edge"}]},{"name":"Connect","link":"/platform/edison/connect","product":[{"name":"Microservices","link":"/platform/edison/connect/microservices"},{"name":"Canvas","link":"/platform/edison/connect/canvas"},{"name":"Analytics","link":"/platform/edison/connect/analytics"}]}]},"stratus":{"name":"Stratus","link":"/platform/stratus","capability":[{"name":"Pipeline","link":"/platform/stratus/pipeline","product":[{"name":"Continuous Integration","link":"/platform/stratus/pipeline/continuous-integration"},{"name":"Shift Left","link":"/platform/stratus/pipeline/shift-left"},{"name":"Proof of Concept","link":"/platform/stratus/pipeline/proof-of-concept"}]},{"name":"Accelerate","link":"/platform/stratus/accelerate","product":[{"name":"Metrics","link":"/platform/stratus/accelerate/metrics"},{"name":"Shift Left","link":"/platform/stratus/accelerate/one-click-deploy"},{"name":"Proof of Concept","link":"/platform/stratus/accelerate/templates"}]},{"name":"Connect","link":"/platform/stratus/connect","product":[{"name":"Multicloud","link":"/platform/stratus/connect/multicloud"},{"name":"Community","link":"/platform/stratus/connect/community"},{"name":"Aggregation","link":"/platform/stratus/connect/aggregation"}]}]},"newton":{"name":"Newton","link":"/platform/newton","capability":[{"name":"Pipeline","link":"/platform/newton/pipeline","product":[{"name":"Continuous Integration","link":"/platform/newton/pipeline/continuous-integration"},{"name":"Dashboard","link":"/platform/newton/pipeline/dashboard"},{"name":"AppCheck","link":"/platform/newton/pipeline/appcheck"}]},{"name":"Jetpack","link":"/platform/newton/jetpack","product":[{"name":"UI","link":"/platform/newton/jetpack/ui"},{"name":"SDK","link":"/platform/newton/jetpack/sdk"},{"name":"Template","link":"/platform/newton/jetpack/template"}]},{"name":"Connect","link":"/platform/newton/connect","product":[{"name":"API","link":"/platform/newton/connect/api"},{"name":"Auth","link":"/platform/newton/connect/auth"},{"name":"Notify","link":"/platform/newton/connect/notify"}]}]},"force.com":{"name":"Force.com","link":"/platform/forcecom","capability":[{"name":"Pipeline","link":"/platform/forcecom/pipeline","product":[{"name":"Continuous Integration","link":"/platform/forcecom/pipeline/"},{"name":"Dashboard","link":"/platform/forcecom/pipeline/dashboard"},{"name":"Self Service","link":"/platform/forcecom/pipeline/self-service"}]},{"name":"Accelerate","link":"/platform/forcecom/accelerate","product":[{"name":"No-Code Applications","link":"/platform/forcecom/accelerate/no-code-applications"},{"name":"Components","link":"/platform/forcecom/accelerate/components"},{"name":"Citizen Developer","link":"/platform/forcecom/accelerate/citizen-developer"}]},{"name":"Connect","link":"/platform/forcecom/connect","product":[{"name":"API","link":"/platform/forcecom/connect/api"},{"name":"Force Hybrid","link":"/platform/forcecom/connect/force-hybrid"},{"name":"Data Warehouse","link":"/platform/forcecom/connect/data-warehouse"}]}]},"rosalind":{"name":"Rosalind","link":"/platform/rosalind","capability":[{"name":"Unify","link":"/platform/rosalind/unify","product":[{"name":"Customer Profiles","link":"/platform/rosalind/unify/customer-profiles"},{"name":"Channel Consent","link":"/platform/rosalind/unify/channel-consent"},{"name":"Data Exchange Hubs","link":"/platform/rosalind/unify/data-exchange-hubs"}]},{"name":"Define","link":"/platform/rosalind/define","product":[{"name":"Journey Orchestration","link":"/platform/rosalind/define/journey-orchestration"},{"name":"Segmentation","link":"/platform/rosalind/define/segmentation"},{"name":"Campaign Metadata","link":"/platform/rosalind/define/campaign-metadata"}]},{"name":"Deploy","link":"/platform/rosalind/deploy","product":[{"name":"MAP/PMAP","link":"/platform/rosalind/deploy/mappmap"},{"name":"Multi-Channel","link":"/platform/rosalind/deploy/multi-channel"},{"name":"Key Integrations","link":"/platform/rosalind/deploy/key-integrations"}]}]},"support":{"name":"Support & Operations","link":"/platform/support-ops","capability":[{"name":"Support and Operations","link":"/platform/support-ops/","product":[{"name":"L1-3 Support & Response","link":"/platform/support-ops/support-and-ops"},{"name":"Customer Reporting","link":"/platform/support-ops/support-and-ops"},{"name":"Maintenance Releases","link":"/platform/support-ops/support-and-ops"}]},{"name":"Lifecycle","link":"/platform/support-ops/lifecycle","product":[{"name":"Minor Enhancements","link":"/platform/support-ops/lifecycle"},{"name":"Deprecations","link":"/platform/support-ops/lifecycle"},{"name":"Security and Compliance","link":"/platform/support-ops/lifecycle"}]},{"name":"Improvement","link":"/platform/support-ops/improvement","product":[{"name":"Operational Efficiency","link":"/platform/support-ops/improvement"},{"name":"Process Optimization","link":"/platform/support-ops/improvement"},{"name":"Automation","link":"/platform/support-ops/improvement"}]}]}}');
		
		try{
			$('#platform').text(platformvariables[platform_name]["name"]);
		
			$('.product--sidebar').addClass("theme--" + platform_name);
			$('.product--content').addClass("theme--" + platform_name);
	
	
			$('#capability1').text(platformvariables[platform_name]["capability"][0]["name"]);
			$('#capability1').attr('href', (platformvariables[platform_name]["capability"][0]["link"]));
	
			$('#product1_1').text(platformvariables[platform_name]["capability"][0]["product"][0]["name"]);
			$('#product1_2').text(platformvariables[platform_name]["capability"][0]["product"][1]["name"]);
			$('#product1_3').text(platformvariables[platform_name]["capability"][0]["product"][2]["name"]);
			$('#product1_1').attr('href', (platformvariables[platform_name]["capability"][0]["product"][0]["link"]));
			$('#product1_2').attr('href', (platformvariables[platform_name]["capability"][0]["product"][1]["link"]));
			$('#product1_3').attr('href', (platformvariables[platform_name]["capability"][0]["product"][2]["link"]));
	
			$('#capability2').text(platformvariables[platform_name]["capability"][1]["name"]);
			$('#capability2').attr('href', (platformvariables[platform_name]["capability"][1]["link"]));
	
			$('#product2_1').text(platformvariables[platform_name]["capability"][1]["product"][0]["name"]);
			$('#product2_2').text(platformvariables[platform_name]["capability"][1]["product"][1]["name"]);
			$('#product2_3').text(platformvariables[platform_name]["capability"][1]["product"][2]["name"]);
			$('#product2_1').attr('href', (platformvariables[platform_name]["capability"][1]["product"][0]["link"]));
			$('#product2_2').attr('href', (platformvariables[platform_name]["capability"][1]["product"][1]["link"]));
			$('#product2_3').attr('href', (platformvariables[platform_name]["capability"][1]["product"][2]["link"]));
	
	
			$('#capability3').text(platformvariables[platform_name]["capability"][2]["name"]);
			$('#capability3').attr('href', (platformvariables[platform_name]["capability"][2]["link"]));
	
			$('#product3_1').text(platformvariables[platform_name]["capability"][2]["product"][0]["name"]);
			$('#product3_2').text(platformvariables[platform_name]["capability"][2]["product"][1]["name"]);
			$('#product3_3').text(platformvariables[platform_name]["capability"][2]["product"][2]["name"]);
			$('#product3_1').attr('href', (platformvariables[platform_name]["capability"][2]["product"][0]["link"]));
			$('#product3_2').attr('href', (platformvariables[platform_name]["capability"][2]["product"][1]["link"]));
			$('#product3_3').attr('href', (platformvariables[platform_name]["capability"][2]["product"][2]["link"]));
		} catch (e) {
			
		}





	}




});