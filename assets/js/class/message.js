var message = {
	mask: function(){
		var div = creater.create(reserve.mask);
		document.body.appendChild(div);
	},
	unmask: function(){
		document.getElementById('masker').remove();
	},
	alert: function(title,msg){
		/* alert frame */
		var div = creater.create(reserve.alert);
		var clientWidth = window.innerWidth;
		var clientHeight = window.innerHeight;
		var divWidth = clientWidth * 0.8;
		var divHeight = clientHeight * 0.3;
		div.style.width = divWidth + "px";
		//div.style.height = divHeight + "px";
		div.style.left = (clientWidth - divWidth) / 2 + "px";
		div.style.top = (clientHeight - divHeight) * 0.3 + "px";
		/* alert title */
		var titleBar = creater.create(reserve.title);
		titleBar.innerHTML = title;
		div.appendChild(titleBar);
		/* alert content */
		var content = creater.create(reserve.content);
		content.style.height = divHeight - titleBar.style.height;
		var h3 = document.createElement('h3');
		h3.innerHTML = msg;
		content.appendChild(h3);
		div.appendChild(content);
		/* button */
		var button = document.createElement('button');
		button.setAttribute('class','btn btn-default');
		button.innerHTML = "确定";
		content.appendChild(button);
		/* show the alert */
		this.mask();
		document.body.appendChild(div);
	},
	confirm: function(msg,okListener,cancelListener){
		console.log(msg);
	}
};
