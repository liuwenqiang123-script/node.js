var banner = document.querySelector(".banner-center");
var content = document.querySelector(".content");
var aList = document.querySelectorAll(".banner-center .btn");
var imgWidth = banner.offsetWidth;
var controls = document.querySelector(".controls");
var liArr = controls.getElementsByTagName("li");
console.log(liArr);
var index = 0;  // 自定义 索引

var autoTimer = null;

// for (var i = 0; i < aList.length; i++) {
//     // 左右按钮 绑定事件
//
//
// }

// 自动滚

autoMove();

function autoMove() {
    //  拿到 大盒子  content
    //  算好每次移动的目标位置

    autoTimer = setInterval(function () {
        moveRight();

    }, 1000)
}

function moveRight() {

    if (index == 0) {
        // index = 1;// 无缝连接时 需要特殊处理 看1图，索引0
        content.style.left = 0 + "px";
    }

    liArr[index].className = '';

    index++;

    animate1(content, -index * imgWidth);
    console.log(index);
    // 点点
    // 排他e
    //

    // pt(liArr);
    // liArr[index].className = "active";
    if (index > 3) {
        index = 0;
        // index = 3;
    }

    liArr[index].className = 'active';

}

function pt(arr) {
    // 小点点用完  ， 要改回去s
    // if(index == 4){
    //     index = 0;
    // }
    for (var i = 0; i < arr.length; i++) {
        arr[i].className = "";
    }
}


// 左按钮

aList[0].onclick = function () {
    index--;
    if (index < 0) {
        index = 3;
        content.style.left = -2880 + "px";
    }
    animate1(content, -index * imgWidth);
    pt(liArr);
    liArr[index].className = "active";
}


// 右按钮
aList[1].onclick = function () {
    moveRight();
}


// 小点


banner.onmouseenter = function () {
    aList[0].style.display = "block";
    aList[1].style.display = "block";
    clearInterval(autoTimer)
}

banner.onmouseleave = function () {
    aList[0].style.display = "none";
    aList[1].style.display = "none";
    autoTimer = setInterval(function () {
        moveRight();
    }, 1000)
}