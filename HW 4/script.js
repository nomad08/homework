
var area = document.querySelector('.area');
area.addEventListener('click', function (e) {
    var targetArea = e.target;
    var left = e.offsetX;
    var top = e.offsetY;
    var figure = document.createElement('div');
    figure.className = 'figure';
    figure.style.left = left + 'px';
    figure.style.top = top + 'px';
    figure.style.backgroundColor = figureColor.value;
	targetArea.appendChild(figure);
	figure.style.borderRadius = fRadius;
	figure.style.width = iWidth.value + 'px';
    figure.style.height = iHeight.value + 'px';
	})




	// 					Попытка #1
 //   var a = document.getElementById("formR");
	// a.circle.onclick = function(){
	// 	a[0].figure.style.borderRadius = '';
	// }
	// a.square.onclick = function(){
	//     a[0].figure.borderRadius = '0%';
	// }
	// a.rectangle.onclick = function(){
	//     a[0].style.borderRadius = '0%';
	//     // b[0].style.wight = '150px';
	// }
	// a.ellipse.onclick = function(){
	//     a[0].style.borderRadius = '100%';
	//     a[0].style.width = '70px';
	// }

		            


		             // Попытка #2
	// var a = document.getElementsByClassName('inputClass');
// var b = document.getElementsByClassName('divClass');
// console.log(a);
// a[0,1,2].onclick = function() {

//     style = b[0].style;
//     style.borderRadius = '0%';
// 	}
// a[1].onclick = function() {
//     style = b[0].style;
//     style.borderRadius = '0%';
//   };
// a[2].onclick = function() {
//     style = b[0].style;
//     style.borderRadius = '15%';
//   };
// // a.onclick = function (){
// // 	a = a.style.width = "150px";
// // }


var fRadius;
var rad = document.myForm.radioB;

    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
			switch(this.id) {
				case 'square':
				fRadius = '0%';
				iWidth.value = '20';
				iHeight.value = iWidth.value;
				document.getElementById("iHeight").style.display = "none";
				break;

				case 'ellipse':
				fRadius = '50%';
				iWidth.value = '40';
				document.getElementById("iHeight").style.display = "inline-block";

				break;
			  
				case 'rectangle':
				fRadius = '0%';
				iWidth.value = '40';
				document.getElementById("iHeight").style.display = "inline-block";
				break;

				case 'circle':
				fRadius = '50%';
				iWidth.value = '20';
				iHeight.value = iWidth.value;
				document.getElementById("iHeight").style.display = "none";

			  }
		}
	}