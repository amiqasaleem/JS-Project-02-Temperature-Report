var temperature  = prompt("Enter you temperature (0-37)");

if(temperature >= 0 && temperature <= 4) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" +"<div class= 'container' style = box-shadow: 6px 6px 8px rgb(147, 147, 244);'>" + "<img class= 'image' src = 'images/freezing.jpg'>" + "<h3>" + "Freezing" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 5 && temperature <= 10) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(72, 72, 241);'>" + "<img class= 'image' src = 'images/cool.jpg'>" + "<h3>" + "Cool" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 11 && temperature <= 15) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(22, 80, 142);'>" + "<img class= 'image' src = 'images/mild.jpg'>" + "<h3>" + "Mild" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 16 && temperature <= 22) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(83, 49, 0);'>" + "<img class= 'image' src = 'images/warm.jpg'>" + "<h3>" + "Warm" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 23 && temperature <= 26) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(186, 110, 3);'>" + "<img class= 'image' src = 'images/hot.jpg'>" + "<h3>" + "Hot" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 27 && temperature <= 32) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(155, 129, 0);'>" + "<img class= 'image' src = 'images/very-hot.jpg'>" + "<h3>" + "Very Hot" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else if (temperature >= 33 && temperature <= 37) {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 6px 6px 8px rgb(210, 141, 21);'>" + "<img class= 'image' src = 'images/heatwave.jpg'>" + "<h3>" + "Heat Wave" + "</h3>" + "<p class='para'>" +"Your Temperature is " + temperature + "°C" + "</p>" + "</div>" + "</div>")
} else {
    document.write("<div class = 'main'>" + "<h1>" + "Temperature Report" + "</h1>" + "<div class= 'container' style = box-shadow: 0px 0px 4px 3px rgb(3, 3, 3);'>" + "<img class= 'image' src = 'images/hehe.jpg'>" + "<h3>" + "Hahaha" + "</h3>" + "<p class='para'>" +"Please enter the temperature in the given range!" + "</p>" + "</div>" + "</div>")
}
 