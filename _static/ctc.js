//ctc : click to copy, author:baizita, 2019年9月23日
!(function(){
	!function(o, e) { void 0 === e && (e = {}); var t = e.insertAt; if (o && "undefined" != typeof document) { var n = document.head || document.getElementsByTagName("head")[0],
	            c = document.createElement("style");
	        c.type = "text/css", "top" === t && n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c), c.styleSheet ? c.styleSheet.cssText = o : c.appendChild(document.createTextNode(o)) } }('td{cursor:pointer;}.ctc_copyed{position:relative;}.ctc_copyed:after{position:absolute;top:50%;right:5px;height:30px;margin-top:-15px;font-size:20px;content:"✓";color:var(--theme-color,#f00);transform:rotate(10deg);animation:ctc_copyed_animate 1s;animation-fill-mode:forwards}@keyframes ctc_copyed_animate{from {opacity:0}to {opacity:1}}#copy{position:fixed;top:-10px;width:0;height:0}')
	var textarea = document.createElement("textarea")
	textarea.id="copy"
	document.body.appendChild(textarea);
	document.body.onclick=function(e){ 
		var copyedClassName = "ctc_copyed",
	        target = e.target || window.event.target; 
	    //if (target.tagName == "TD"&& target.innerText != "") { 
	    //解除只能在表格单元格中点击复制的限制，只要元素上设置了data-copy属性，其值为true，也能实现点击复制。
	    if ((target.tagName == "TD"||target.getAttribute("data-copy")=="true") && target.innerText != "") { 
	    	var classList = target.classList;
	    	//对敏感信息，给td增加data-sec属性，复制的是此属性值，而不是td的文本。td的文本可以用其他内容代替，诸如*****
	    	var sec = target.getAttribute("data-sec")
	        textarea.value = sec?sec:target.innerText;
	        textarea.select();
	        document.execCommand("Copy"); 
	        if (classList.contains(copyedClassName)) { 
	        	classList.remove(copyedClassName);
	            setTimeout(function() { 
	            	classList.add(copyedClassName) 
	            }, 200) 
	        } else { 
	        	classList.add(copyedClassName) 
	        } 
	    } 
	}
})()

Date.prototype.format = function(format) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$, (this.getFullYear() + '').substr(4 - RegExp.$.length));
    for (var k in o) if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$, RegExp.$.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return format;
}
