/**
 * Created by topiniu on 2017/2/21.
 */
$(function(){
    choseCS();
});

var colorClass = ["red","blue","green"];
var n = 1,i = 0;
function choseCS(){
    n = parseInt(Math.random()*36 + 30);
    var colorN = parseInt(Math.random() * 3, 10);
    for(;i<n;i++) {
        setTimeout(function () {
            var row = parseInt(Math.random() * 20, 10) + 1;
            var col = parseInt(Math.random() * 10, 10) + 1;
            var colorNO = parseInt(Math.random() * 5, 10) + 1;
            var cclassName = colorClass[colorN] + colorNO;
            changeColor(row, col, cclassName);
        },i*100);

    }

}
function changeColor(row,col,cclassName){
    // alert(col + row + cclassName);
    $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")").addClass(cclassName);
}