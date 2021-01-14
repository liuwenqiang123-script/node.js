window.onload = function () {
    var box = document.querySelector(".box");
    var banner = document.querySelector(".banner");
    var content = document.querySelector(".content");
    var btn = document.querySelector(".btn");
    var point = document.querySelector(".point");
    var lis = point.getElementsByTagName("li");
    var btnchild = btn.children;
    var index = 0;
    var num = 0;
    var imgwidth = banner.offsetWidth;
    banner.onmouseenter = function () {
        btnchild[0].style.display = "block";
        btnchild[1].style.display = "block";
        clearInterval(autotimer);
    }
    banner.onmouseleave = function () {
        btnchild[0].style.display = "none";
        btnchild[1].style.display = "none";
        autotimer = setInterval(function () {
            moveright();
        }, 1000);

    }


//自动滚 计时向右滚动
    autoMove();
    autotimer = setInterval(function () {
        moveright();
    }, 1000);
    function autoMove() {
        autotimer;

    }


    // 右
    function moveright() {
        index++;
        if (index > 4) {
            index = 1;
            content.style.left = 0 + "px";
        }
        animate1(content, -index * imgwidth);
        num++;
        if (num > 3) {
            num = 0;
        }
        pt(lis);
        lis[num].className = "active";
    }

    //左
    function moveleft() {
        index--;
        if (index < 0) {
            index = 3;
            content.style.left = -2880 + "px";
        }
        animate1(content, -index * imgwidth);
        num--;
        if (num < 0) {
            num = 3;
        }
        pt(lis);
        lis[num].className = "active";
    }


    // 排它
    // pt(lis);

    function pt(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].className = '';
        }
    }


//    左按钮
    btnchild[0].addEventListener("click", function () {
        moveleft();
    })

//    右按钮
    btnchild[1].addEventListener("click", function () {
        moveright();
    })
}
