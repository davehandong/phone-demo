var message = {
	/* Listener */
	listener:{
		close_msg:function(){
			$(".message").remove();
			message.unmask();
		}
	},
	/* Method */
	mask: function(){
		var div = creater.base(reserve.mask);
		div.style.height = (window.innerHeight>document.body.clientHeight?window.innerHeight:document.body.clientHeight) + 'px';
		document.body.appendChild(div);
	},
	unmask: function(){
		document.getElementById('masker').remove();
	},
	alert: function(title,msg){
		var alerter = creater.advanced(reserve.alert);
		//set alert frame size and position.
		alerter.style.width = window.innerWidth * 0.8 + 'px';
		alerter.style.top = window.innerHeight * 0.2 + document.body.scrollTop + 'px';
		alerter.style.left = window.innerWidth * 0.2 / 2 + 'px';
		//set title and content message.
		$(alerter).find(".ui-bar").html(title);
		$(alerter).find("h3").html(msg);
		//add the Listener to Button
		$(alerter).find("button").click(message.listener.close_msg);
		//add the alert frame to body
		message.mask();
		document.body.appendChild(alerter);
	},
	confirm: function(title,msg,okListener,cancelListener){
		var confirmer = creater.advanced(reserve.confirm);
		//set confirm frame size and position.
		confirmer.style.width = window.innerWidth * 0.8 + 'px';
		confirmer.style.top = window.innerHeight * 0.2 + document.body.scrollTop + 'px';
		confirmer.style.left = window.innerWidth * 0.2 / 2 + 'px';
		//set title and content message.
		$(confirmer).find(".ui-bar").html(title);
		$(confirmer).find("h3").html(msg);
		//add the Listener to Button
		if(cancelListener)
			$(confirmer).find("button#cancel").click(cancelListener);
		else
			$(confirmer).find("button#cancel").click(message.listener.close_msg);
		//add the confirm frame to body
		message.mask();
		document.body.appendChild(confirmer);
	}
};
