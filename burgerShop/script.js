

document.getElementById('bill').onclick = getBurger;
var menu = document.getElementsByClassName('gmenu');
var burgerImg = document.getElementsByClassName('bI');
var lastB = document.getElementById('lastB');
var grill = document.getElementById('constructor');
var constrB = document.getElementById('burger');
var cook = document.getElementById('cook');
var bName = document.getElementById('bName');
var lastWords = document.getElementById('lastWords');
cook.onclick = cookBurger;


for(var i = 0; i < menu.length; i++) {
	menu[i].onclick = function() {
		for(var i = 0; i < menu.length; i++) {
			if (menu[i].checked){
				if(menu[0].checked){
					lastB.style.backgroundImage = "url(img/1-1.png)";
					lastB.style.display = 'block';

				}else if(menu[1].checked){
					lastB.style.backgroundImage = "url(img/2-2.png)";
					lastB.style.display = 'block';
				}
				// console.log(menu[i]);
				burgerImg[i].style.backgroundImage = "url(img/"+[i]+".png)";
				burgerImg[i].style.display = 'block';
				burgerImg[i].style.display = 'block';

			}else if(!menu[i].checked){
				burgerImg[i].style.display = 'none';
			}
		}
	}
}

function getBurger(){
	var kk = [10,10,200,150,100,75,25,50,50,50,50,50];
	var price = [10,10,20,10,10,10,10,7,7,7,7,7];
	var priceBill = 0;
	var kkBill = 0;

	if(!menu[0].checked && !menu[1].checked){
		alert('Выберите булочку!');
	}else{
		for (var i = 0; i < menu.length; i++){
			if (menu[i].checked) {
				priceBill += price[i];
				kkBill += kk[i];
				burgerImg[i].style.transitionDuration = '1s';
				burgerImg[i].style.transform = 'translateX(-250px)';
				burgerImg[i].style.height = '75px';
				constrB.style.justifyContent  = 'center';
				lastB.style.transitionDuration = '1s';
				lastB.style.transform = 'translateX(-250px)';
				lastB.style.height = '50px';
				// burgerImg[i].style.position = 'absolute';
				// burgerImg[i].style.top = '15%';
			}
		}
		document.getElementById('price').innerHTML = priceBill;
		document.getElementById('kk').innerHTML = kkBill;
		cook.style.display = 'inline-block';
	}
}
	

function cookBurger(){
	if(menu[0].checked){
		grill.style.backgroundImage = 'url(img/whiteburger.png)';
	}else if(menu[1].checked){
		grill.style.backgroundImage = 'url(img/blackburger.png)';
	}
	grill.style.backgroundRepeat = 'no-repeat';
	grill.style.backgroundSize = 'contain';
	burger.style.display = 'none';
	if(bName.value == '' || bName.value.length > 10){
		alert('Введите корректное имя бургера');
	}else{
		lastWords.style.display = 'inline';
		lastWords.innerHTML = 'Ваш бургер '+bName.value+' готов!';
	}
	
	return;
}