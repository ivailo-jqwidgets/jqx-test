var jqxTestProto = Object.create(HTMLElement.prototype);

jqxTestProto.createdCallback = function () {
    var color = this.getAttribute('color') || "white",
   	    text = this.getAttribute('text');

    this.innerHTML = "<div style='background-color:"+color+"; padding:10px; color:white'>"+text+"</div";

};

var jqxTest = document.registerElement('jqx-test', {
    prototype: jqxTestProto
});