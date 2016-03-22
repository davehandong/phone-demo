var creater = {
	create:function(item){
		var dom = document.createElement(item.tagName);
		if(item.id)
			dom.id = item.id;
		if(item.name)
			dom.name = item.name;
		if(item.class)
			dom.setAttribute('class', item.class);
		if(item.style){
			for(var key in item.style){
				dom.style[key] = item.style[key];
			}
		}
		return dom;
	}
};
