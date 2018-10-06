let d=new Date();
let months=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]





// $.ajax({
// 	url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
// 	success: function(data){
// 		document.querySelector(".back-img").style["background-image"]= `url(${data.imageURL})`;
// 		document.querySelector("#info").innerHTML=data.info.heading;
// 		document.querySelector(".card-text").innerHTML=data.info.description;
// 		document.querySelector("#sale").innerHTML=data.sale.heading;
// 		document.querySelector("#text").innerHTML=data.sale.description;
// 		document.querySelector("#press").innerHTML=data.menuOptions[0];
// 		document.querySelector("#hiring").innerHTML=data.menuOptions[1];
// 		document.querySelector("#enter").innerHTML=data.menuOptions[2];
// 		document.querySelector("#privacy").innerHTML=data.menuOptions[3];
// 		document.querySelector(".para").innerHTML=`${months[d.getMonth()]} ${d.getDate()},  ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m`;


// 	}

// })
function ur(x){

$.ajax({
	url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${x}`,
	success: function(data){
		document.querySelector(".back-img").style["background-image"]= `url(${data.imageURL})`;
		document.querySelector("#info").innerHTML=data.info.heading;
		document.querySelector(".card-text").innerHTML=data.info.description;
		document.querySelector("#sale").innerHTML=data.sale.heading;
		document.querySelector("#text").innerHTML=data.sale.description;
		document.querySelector("#press").innerHTML=data.menuOptions[0];
		document.querySelector("#hiring").innerHTML=data.menuOptions[1];
		document.querySelector("#enter").innerHTML=data.menuOptions[2];
		document.querySelector("#privacy").innerHTML=data.menuOptions[3];
		document.querySelector(".para").innerHTML=`${months[d.getMonth()]} ${d.getDate()},  ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m`;


	}

})

}
ur();
// eng();
// function ur(){
	
// $.ajax({
// 	url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
// 	success: function(data){
// 		document.querySelector(".back-img").style["background-image"]= `url(${data.imageURL})`;
// 		document.querySelector("#info").innerHTML=data.info.heading;
// 		document.querySelector(".card-text").innerHTML=data.info.description;
// 		document.querySelector("#sale").innerHTML=data.sale.heading;
// 		document.querySelector("#text").innerHTML=data.sale.description;
// 		document.querySelector("#press").innerHTML=data.menuOptions[0];
// 		document.querySelector("#hiring").innerHTML=data.menuOptions[1];
// 		document.querySelector("#enter").innerHTML=data.menuOptions[2];
// 		document.querySelector("#privacy").innerHTML=data.menuOptions[3];
// 		document.querySelector(".para").innerHTML=`${months[d.getMonth()]} ${d.getDate()},  ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m`;


// 	}

// })

// }
// function zh(){
	
// $.ajax({
// 	url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
// 	success: function(data){
// 		document.querySelector(".back-img").style["background-image"]= `url(${data.imageURL})`;
// 		document.querySelector("#info").innerHTML=data.info.heading;
// 		document.querySelector(".card-text").innerHTML=data.info.description;
// 		document.querySelector("#sale").innerHTML=data.sale.heading;
// 		document.querySelector("#text").innerHTML=data.sale.description;
// 		document.querySelector("#press").innerHTML=data.menuOptions[0];
// 		document.querySelector("#hiring").innerHTML=data.menuOptions[1];
// 		document.querySelector("#enter").innerHTML=data.menuOptions[2];
// 		document.querySelector("#privacy").innerHTML=data.menuOptions[3];
// 		document.querySelector(".para").innerHTML=`${months[d.getMonth()]} ${d.getDate()},  ${d.getFullYear()} - ${d.getHours()}h ${d.getMinutes()}m`;


// 	}

// })

// }