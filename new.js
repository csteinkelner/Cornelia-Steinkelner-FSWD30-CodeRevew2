Amsterdam = [1500, 500, 1800, 700];

London = [2500, 1500, 1000, 900];


var avAm= (Amsterdam[0]+Amsterdam[1]+Amsterdam[2]+Amsterdam[3]) /4;

var avLo= (London[0]+London[1]+London[2]+London[3])/4;


var dif = avLo - avAm;
document.getElementById("differ").innerHTML = dif;

function city_1(city_name, country,average_price){
	document.getElementById("city1").innerHTML = city_name;
	document.getElementById("Country1").innerHTML = country;
	document.getElementById("average1").innerHTML = average_price;
	document.getElementById("city_1").innerHTML = city_name;
};
city_1("Amsterdam","Netherlands", avAm);

function city_2(city_name, country,average_price){
	document.getElementById("city2").innerHTML = city_name;
	document.getElementById("Country2").innerHTML = country;
	document.getElementById("average2").innerHTML = average_price;
	document.getElementById("city_2").innerHTML = city_name;
};
city_2("London","United Kingdom", avLo);

