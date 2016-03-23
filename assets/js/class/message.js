var message = {
  /* Variables */
  variables:{
    msg_top: function(){
      return window.innerHeight * 0.2 + document.body.scrollTop + 'px';
    },
    msg_left: function(){
      return window.innerWidth * 0.2 / 2 + 'px';
    },
    msg_width: function(){
      return window.innerWidth * 0.8 + 'px';
    }
  },
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
    $("#masker").remove();
  },
  alert: function(title,msg){
    var alerter = creater.advanced(reserve.alert);
    //set alert frame size and position.
    alerter.style.width = message.variables.msg_width();
    alerter.style.top = message.variables.msg_top();
    alerter.style.left = message.variables.msg_left();
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
    confirmer.style.width = message.variables.msg_width();
    confirmer.style.top = message.variables.msg_top();
    confirmer.style.left = message.variables.msg_left();
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
  },
  tip: function(msg){
    var tiper = creater.advanced(reserve.tip);
    //set tip frame size and position.
    tiper.style.width = message.variables.msg_width();
    tiper.style.top = message.variables.msg_top();
    tiper.style.left = message.variables.msg_left();
    //set content message.
    $(tiper).find("p").html(msg);
    //add the tip to body
    message.mask();
    document.body.appendChild(tiper);
    //set mask listener to unmask when click it;
    $("#masker").click(function(){
      message.unmask();
      $("#tiper").remove();
    });
  }
};
