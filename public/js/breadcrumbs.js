$(document).ready(function() { 
	
	console.log('breadcrumb.js v10');
	
	if ($('.breadcrumbs')) {
	  var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);
	  var parts = [{
		"text": 'Home',
		"link": '/'
	  }];
	  for (var j = 1; j < here.length; j++) {
		var part = here[j];
		var pageName = part.toLowerCase();
		pageName = part.charAt(0).toUpperCase() + part.slice(1);
		pageName = pageName.replace('-ops',' and Operations');
		pageName = pageName.replace('Forcecom','Force.com');
		pageName = pageName.replace('-',' ');
		var link = '/' + here.slice(0, j + 1).join('/');
		$('.breadcrumbs ul.crumbs').append('<li><a href="' + link + '">' + pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li> ');
		parts.push({
		  "text": pageName,
		  "link": link
		});
	  }
	  
	  // Get the page title and use the first part on the title here.
	  page_title = document.title.split("|");
	  $('.page-title h1').text(page_title[0]);
	  
	}
	
	platform = parts[1];
		
	switch (platform.text){
		case 'Stratus':
			$('#dashboard').attr('href','https://stratus.pfizer/');
			$('#docs').attr('href','https://docs.stratus.pfizer/');
			$('#changelog').attr('href','https://stratus.pfizer/');
			$('.breadcrumbs-wrapper').addClass('stratus');

			break;

		case 'Edison':
			$('#dashboard').attr('href','https://dashboard.edison.pfizer/');
			$('#docs').attr('href','https://docs.edison.pfizer/');
			$('#changelog').attr('href','https://changelog.edison.pfizer/');
			$('.breadcrumbs-wrapper').addClass('edison');

			break;

		case 'Newton':
			$('#dashboard').attr('href','https://dashboard.newton.pfizer');
			$('#docs').attr('href','https://www.newton.pfizer/docs');
			$('#changelog').attr('href','https://changelog.newton.pfizer');
			$('.breadcrumbs-wrapper').addClass('newton');

			break;
			
		case 'Rosalind':
			$('#dashboard').attr('href','https://www.google.com');
			$('#docs').attr('href','https://digitalpfizer.atlassian.net/wiki/spaces/MDP/pages/1911325353/Development');
			$('#changelog').attr('href','https://digitalpfizer.atlassian.net/wiki/spaces/MDP/pages/2011889927/ChangeLog');
			$('#dashboard').remove();
			$('.breadcrumbs-wrapper').addClass('rosalind');

			break;

		case 'Support and Operations':
			$('#dashboard').attr('href','#');
			$('#docs').attr('href','#');
			$('#changelog').attr('href','#');	
			$('#dashboard').remove();
			$('#changelog').remove();
			$('#docs').remove();
			$('.breadcrumbs-wrapper').addClass('support');

			break;

		case 'Force.com':
			$('#dashboard').attr('href','#');
			$('#docs').attr('href','#');
			$('#changelog').attr('href','#');	
			$('#dashboard').remove();
			$('#changelog').remove();
			$('#docs').remove();
			$('.breadcrumbs-wrapper').addClass('force');

			
			break;
		
		case 'Preview':
			$('#dashboard').attr('href','#');
			$('#docs').attr('href','#');
			$('#changelog').attr('href','#');	
	
			break;
				
		
	}
	
	
}
);
	

