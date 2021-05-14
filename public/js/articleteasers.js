console.log('article teasers v2');
var articlegrid = document.getElementById("article-grid");
if (articlegrid) {
	
	var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);
	// Get the full article list and compiled template
	var article_data_url = "/js/articles.json";         
	var template = Handlebars.templates.articleteaser;
	
	// Get Context for where where are on the site and what we should select to display
	// We use the traits applied to the article grid for this as it's easier to change
	// in Canvas using the element editor.
	
	platformfilter = articlegrid.getAttribute("platform");
	capabilityfilter = articlegrid.getAttribute("capability");
	pagesize = articlegrid.getAttribute("articlecount");
	successstoryfilter = false;
	
	if (platformfilter == null) {
		platformfilter = "all";
	}
	if (capabilityfilter == null) {
		capabilityfilter = "all";
	}
	if (pagesize == null) {
		pagesize = 4;
	}
	
	// If we are on the success story page, filter article to just success stories
	if (here.indexOf('success-stories') > -1) {
		successstoryfilter = true;
	}
	
	// Render a set of articles up to the limit specified.
	articlesleft = pagesize;
	$.getJSON(article_data_url, function (data) {
		$.each(data, function (key, article) {
			
			if (articlesleft > 0) {
				include = true;
				
				if (platformfilter != "all") {
					if (article.platform) {
						
						if (article.platform.indexOf(platformfilter) == -1) {
							include = false;
						}
					}
				}
				if (capabilityfilter != "all") {
					if (article.capability){
						if (!article.capability.indexOf(capabilityfilter) == -1) {
							include = false;
						}
					}
				}

				if (successstoryfilter) {
					if (!article.successstory) {
						include = false;
					}
				} else {
					if (article.successstory) {
						include = false;
					}
				}
				
				if (include) {			
					var html = template(article);
					$('#article-grid').append(html);
					articlesleft --;
				}
			}
		})
	});
}	

