function event(arr) {
    var max = arr.length;
    var rand = Math.floor(Math.random() * (max + 1));
    alert(arr[rand]);

}

//var rand = min + Math.floor(Math.random() * (max + 1 - min));

var basket = ["Яблоко", "Апельсин", "Груша", "Лимон"];

event(basket);
