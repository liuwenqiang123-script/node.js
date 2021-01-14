//匀速动画
function animate1(ele,target){
    //要用定时器，先清除定时器
    //一个盒子只能有一个定时器，这样儿的话，不会和其他盒子出现定时器冲突
    //而定时器本身讲成为盒子的一个属性
    clearInterval(ele.timer);
    //我们要求盒子既能向前又能向后，那么我们的步长就得有正有负
    //目标值如果大于当前值取正，目标值如果小于当前值取负
    var speed = target>ele.offsetLeft?20:-20;
    ele.timer = setInterval(function () {
        //在执行之前就获取当前值和目标值之差
        var val = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        //目标值和当前值只差如果小于步长，那么就不能在前进了
        //因为步长有正有负，所有转换成绝对值来比较
        if(Math.abs(val)<=Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },10)
}
//缓动动画封装
function animate2(ele,target) {
    clearInterval(ele.timer); //清楚历史定时器
    ele.timer = setInterval(function () {
        //获取步长 确定移动方向(正负值) 步长应该是越来越小的，缓动的算法。
        var step = (target-ele.offsetLeft)/10;
        //对步长进行二次加工(大于0向上取整,小于0项下取整)
        step = step>0?Math.ceil(step):Math.floor(step);
        //动画原理： 目标位置 = 当前位置 + 步长
        console.log(step);
        ele.style.left = ele.offsetLeft + step + "px";
        //检测缓动动画有没有停止
        if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
            ele.style.left = target + "px"; //直接移动指定位置
            clearInterval(ele.timer);
        }
    },30);
}