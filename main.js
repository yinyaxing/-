
var storage = storages.create('taqu0425_9');
var 随机延迟1UI = storage.get("随机延迟1UI")
var 随机延迟2UI = storage.get("随机延迟2UI")
var 发送内容UI = storage.get("发送内容UI")
var 悬浮状态 = storage.get("悬浮状态")
if (悬浮状态 == true) {
    toastLog("打开悬浮窗");
    console.show();
} else {
    toastLog("悬浮窗未开启");
    console.hide();
}


/* ===========================脚本主体=========================== */
let 屏幕宽 = device.width
let 屏幕高 = device.height
log(屏幕宽, 屏幕高);
let fscs_num = 0;
let 发送内容 = 发送内容UI;
let 随机延时1 = parseInt(随机延迟1UI) * 1000;
let 随机延时2 = parseInt(随机延迟2UI) * 1000;
let 随机数字A = 101;
console.warn(随机延时1);
console.warn(随机延时2);
console.warn(发送内容);




打开app找到首页();

点击消息();

聊天广场();

while (true) {
    try {
        文字点击("世界", 800, 1000);
        发送消息();

        文字点击("恋爱交友", 800, 1000);
        发送消息();

        文字点击("CP滴滴", 800, 1000);
        发送消息();

        文字点击("快速脱单", 800, 1000);
        发送消息();

        点击返回();

        聊天广场();



    } catch (error) {
        console.error("脚本异常：" + error);
        随机延时(500, 500);
    }
}


//================================函数汇总================================
function 判断是否在消息页() {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数1 = text("世界").find().size();
            var 控件数2 = text("恋爱交友").find().size();
            var 控件数3 = text("CP滴滴").find().size();
            var 控件数4 = text("快速脱单").find().size();
            // log("控件数：" + 控件数1 + "-" + 控件数2 + "-" + 控件数3 + "-" + 控件数4);
            sleep(500);
            if (控件数1 > 0 && 控件数2 > 0 && 控件数3 > 0 && 控件数4 > 0) {
                toastLog("在消息发送页面")
                循环条件 = false;
            } else {
                打开app找到首页();
            }
        } catch (error) {
            toastLog("脚本异常：" + error)
        }
    }
}

function 打开app找到首页() {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数 = id("com.xingjiabi.shengsheng:id/imgTab").find().size();
            // log("首页控件数：" + 控件数);
            if (控件数 > 0) {
                循环条件 = false;
                toastLog("已到首页！！")
                console.info("已到首页！！");
                随机延时(500, 600);
            } else {
                toastLog("打开app");
                app.launch("com.xingjiabi.shengsheng");
                随机延时(3000, 4000);
                back();
                随机延时(1000, 1200);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}

function 点击消息() {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数组 = id("com.xingjiabi.shengsheng:id/imgTab").find();
            var 控件数 = id("com.xingjiabi.shengsheng:id/imgTab").find().size();
            // log("消息控件数：" + 控件数);
            sleep(500);
            if (控件数 > 0) {
                控件数组[0].parent().parent().child(3).click();
                循环条件 = false;
                随机延时(500, 600);
            } else {
                sleep(500);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}

function 聊天广场() {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数组 = text("聊天广场").find();
            var 控件数 = text("聊天广场").find().size();
            // log("聊天广场：" + 控件数);
            sleep(500);
            if (控件数 > 0) {
                控件数组[0].parent().click();
                循环条件 = false;
                随机延时(500, 600);
            } else {
                sleep(300);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}


function 文字点击(text_value, time_01, time_02) {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数组 = text(text_value).find();
            var 控件数 = text(text_value).find().size();
            // log(text_value + "控件数：" + 控件数);
            if (控件数 > 0) {
                控件数组[0].click();
                循环条件 = false;
                随机延时(time_01, time_02);
            } else {
                sleep(500);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}

function 随机延时(time_01, time_02) {
    sleep(random(time_01, time_02));
}

function 输入内容(set_value) {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数组 = className("android.widget.EditText").find();
            var 控件数 = className("android.widget.EditText").find().size();
            // log("输入框控件数：" + 控件数);
            if (控件数 > 0) {
                控件数组[控件数 - 1].setText(set_value);
                循环条件 = false;
                随机延时(200, 300);
            } else {
                sleep(300);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}

function 发送消息() {
    发送内容A = 发送内容 + "\n@" + 时间戳秒数();
    输入内容(发送内容A);
    文字点击("发送", 随机延时1, 随机延时2);
    fscs_num = fscs_num + 1;
    // toastLog("已发送次数：" + fscs_num);
    console.info("已发送次数：" + fscs_num);
}

function 时间戳秒数() {
    var 循环条件 = true;
    while (循环条件) {
        var timestamp = new Date().getTime();
        var timestamp = Math.floor(new Date().getTime() / 1000); // 将毫秒级时间戳转换为秒级并向下取整
        var tenDigitTimestamp = parseInt(timestamp.toString().substring(8, 10)); // 截取秒数字
        // console.log("当前时间戳的十位数形式：" + tenDigitTimestamp);
        if (tenDigitTimestamp != 随机数字A) {
            随机数字A = tenDigitTimestamp
            循环条件 = false;
            return tenDigitTimestamp
        }
    }
}

function 点击返回() {
    var 循环条件 = true;
    while (循环条件) {
        try {
            var 控件数组 = id("com.xingjiabi.shengsheng:id/tvMessageChatBack").find();
            var 控件数 = id("com.xingjiabi.shengsheng:id/tvMessageChatBack").find().size();
            // log("消息控件数：" + 控件数);
            sleep(500);
            if (控件数 > 0) {
                控件数组[0].click();
                循环条件 = false;
                随机延时(500, 600);
            } else {
                sleep(500);
            }
        } catch (error) {
            log("脚本异常：" + error);
            随机延时(500, 500);
        }
    }
}

