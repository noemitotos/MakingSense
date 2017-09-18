for ( i = 1; i <= 100; i++) {
    } if (i % 3 === 0) {
        console.log("Sense");
    } else if (i % 5 === 0) {
        console.log("Making");
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("Making Sense");
    } else {
        console.log(i);
    }
};

for ( i = 1; i <= 100; i++) {
var words = ["Making","Sense"];
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(words.join(" "));
    } else if (i % 3 === 0) {
    		var nomaking = words.slice(1);
        console.log(nomaking);
    } else if (i % 5 === 0) {
        var nosense = words.slice(0);
        console.log(nosense);
    } else {
        console.log(i);
    }
};