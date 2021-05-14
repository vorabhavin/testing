(function() {
	  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
	templates['articleteaser'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
		var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
			if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
			  return parent[propertyName];
			}
			return undefined
		};
	
	  return "<article class=\"grid-4 block "
		+ alias4(((helper = (helper = lookupProperty(helpers,"platform") || (depth0 != null ? lookupProperty(depth0,"platform") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"platform","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":41}}}) : helper)))
		+ "\">\n  <div class=\"image-holder\">\n  <img src=\""
		+ alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":19}}}) : helper)))
		+ "\" alt=\""
		+ alias4(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":33}}}) : helper)))
		+ "\">\n  </div>\n  <div class=\"content\">\n  <h3>"
		+ alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":15}}}) : helper)))
		+ "</h3>\n  <p class=\"excerpt\">"
		+ alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":29}}}) : helper)))
		+ ".</p>\n  </div>\n  <div class=\"cta\">\n  <a href=\""
		+ alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":19}}}) : helper)))
		+ "\" class=\"link\">"
		+ alias4(((helper = (helper = lookupProperty(helpers,"cta") || (depth0 != null ? lookupProperty(depth0,"cta") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cta","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":41}}}) : helper)))
		+ "</a>\n  </div>\n</article>";
	},"useData":true});
	})();