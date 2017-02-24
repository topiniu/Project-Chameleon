/**
 * Created by topiniu on 2017/2/21.
 */
$(function(){
    choseCS();
    $('#fullpage').fullpage();
});

var colorClass = ["red","blue","green","gray","orange","yellow","violet"];
var n = 1,i = 0;
var row,col,colorNO,cclassName,colorN;
function choseCS(){
    n = parseInt(Math.random()*36 + 30);
    colorN = parseInt(Math.random() * 7, 10);
    for(;i<n;i++) {
        setTimeout(function () {
            row = parseInt(Math.random() * 20, 10) + 1;
            col = parseInt(Math.random() * 10, 10) + 1;
            colorNO = parseInt(Math.random() * 5, 10) + 1;
            cclassName = colorClass[colorN] + colorNO;
            changeColor(row, col, cclassName);
        },i*120);

    }

}
function changeColor(row,col,cclassName){
    $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")").addClass(cclassName);
}