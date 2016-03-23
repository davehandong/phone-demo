var creater = {
  base:function(domNode){
    var dom = document.createElement(domNode.tagName);
    if(domNode.id)
      dom.id = domNode.id;
    if(domNode.name)
      dom.name = domNode.name;
    if(domNode.class)
      dom.setAttribute('class', domNode.class);
    if(domNode.html)
      dom.innerHTML = domNode.html;
    return dom;
  },
  advanced: function(domNode){
    var dom = this.base(domNode);
    if(domNode.children){
      $(domNode.children).each(function(index,item){
        var childNode = creater.advanced(item);
        dom.appendChild(childNode);
      });
    }
    return dom;
  }
};
