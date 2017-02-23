/**
 * Created by topiniu on 2017/2/21.
 */
$(function(){
    choseCS();
    addMouseListener();
});
var items = ["item1","item2","item3","item4"];
var itemIndex = 0,length=0,para,flag;
function onMouseWheel(ev){
    ev = ev||window.event;
    flag = true;
    length = $(".contentContainer").length;
    flag = ev.wheelDelta?ev.wheelDelta>0:ev.detail<0;

    if(!flag && itemIndex < length){//up

        $(".contentContainer").animate({
            left: "-=100%"
        },2000)
    }else if(flag && itemIndex>0){//down

    }
    // alert(itemIndex);

}

function addMouseEvent(obj,event,fn){
    if(obj.attachEvent)
        obj.attachEvent('on' + event,fn);
    else
        obj.addEventListener(event,fn,false);
}
function addMouseListener(){
    var s = document.getElementById("frontContainer");
    addMouseEvent(s,'mousewheel',onMouseWheel);
}

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
    // alert(col + row + cclassName);
    $(".row:nth-child(" + row + ")>.colorScreen:nth-child(" + col + ")").addClass(cclassName);
}