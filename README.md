# javascript-Dynamic-time
这个js函数返回当前的时间：格式是：2017-09-30 ：12:06:20  这样

使用方法：
1、先定义一个div，id为nowtime
2、在js中通过id抓取这个div，并赋值给nowtime变量
3、 设置一个定时器：
setInterval(function(){
                nowtime.innerHTML ='现在时间:' + nowTime();
        },1000);

这样就可以实现动态时间了，而且是每秒改变一次时间

