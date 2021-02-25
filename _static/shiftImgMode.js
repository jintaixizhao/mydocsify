//图片的显示和隐藏模式切换, author:baizita, 2019年12月2日
!(function(){
	hotkeys('ctrl+q', (event, handler)=>{
		event.preventDefault() 
		shiftMode()
	});
	hotkeys.filter = (event) =>{
		let tagName = (event.target || event.srcElement).tagName;
		hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
		return true;
	}
	function shiftMode(){
		let showImage = localStorage.getItem("showImage")
		let imgs = document.querySelectorAll("img")
		if(showImage==null){
			imgs.forEach(i=>i.style.display="inline")
			localStorage.setItem("showImage","true")
		}else{
			imgs.forEach(i=>i.style.display="none")
			localStorage.removeItem("showImage")
		}
	}
})()