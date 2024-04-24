 "ui";
    var rjbh = "10004",
        jbmz = 'DY截流',
        startTime, //脚本开始时间
        endTime, //脚本结束时间
        runningTime, //脚本运行时间
        fwqdz = 'http://47.96.117.163/GETS',
        qtkz = 0,
        packageName,
        shuzu = [1, 2, 3, 4, 5, 6, 7],
        zpid,
        gg,
        jgsj,
        lhsl,
        lhsl1 = 0,
        tlsj,
        zpdz,
        zpdz2 = 0,
        zpdz1,
        dyzh,
        zpllsj,
        lh1 = 0,
        dz1 = 1,
        lh,
        dz,
        ss = '搜索',
        cla = 'android.widget.Button',
        gnxz = 0,
        lh1 = 1,
        gz1 = 1,
        txdz1 = 1,
        pldz1 = 1,
        pl1 = 1,
        txsl = 0,
        txsl1,
        gzsl,
        scsl,
        fxsl,
        fxsl1 = 0,
        scsl2 = 0,
        gzsl1 = 0,
        fwq,
        xb,
        xbsb,
        plsl,
        pldz,
        sxplnr,
        sxsl,
        sxsl1 = 0,
        zpsc1 = 0,
        zpfx1 = 0,
        yhsj,
        jc,
        zylj,
        dzsb,
        xiuxi,
        dzsb1,
        jgsj1,
        tlsj1,
        zpllsj1,
        uid,
        z,
        qwe,
        favoriting_count,  //点赞数量
        follower_count, //粉丝数量
        following_count, //关注数量
        favoriting_count1,  //点赞数量
        follower_count1, //粉丝数量
        following_count1, //关注数量
        nickname, //名字
        s, d, f, mg, h, j, k, l, p, sc, fx, ip1, matches, jlwb,
        kz = 0, sfdz = 0, tj,
        spdzsl, yhwc = 0,
        jgsj2, tlsj2, zpllsj2, randomNum, yxsj, xxsj, yxsj1, yhsj1, xxsj1,
        zlh, zyh, zxx, zlhjc = 0, kqip = 0, ip, fssl, sjtj, bznr,
        qd = 0, //控制脚本启动停止
        sssl = 0;

    var zcbb = ['21.4.0'],
        versionName, //版本名称
        sfzdbb = 0,  //0不指定版本
        zpscid,  //作品收藏id
        zpfxid,  //作品分享id
        zygzid,//主页关注id
        ssid,//首页搜索id
        fstxid;   //粉丝列表粉丝头像id


    // // 获取脚本公告
    // threads.start(function () {
    //     var url = "http://app.iuser.top/a999357/api.php?name=zdy_cx&c1=" + rjbh + "&c2=2"
    //     var res = http.get(url);
    //     gg = res.body.string()
    //     log("公告:" + gg)
    //     sleep(100)


    // })

    var rjbh = "10004";
    var gg = '未知';
    var color = "#009688"; // 侧边栏图标颜色
    //这个自定义控件是一个勾选框checkbox，能够保存自己的勾选状态，在脚本重新启动时能恢复状态
    var PrefCheckBox = (function () {
        //继承至ui.Widget
        util.extend(PrefCheckBox, ui.Widget);

        function PrefCheckBox() {
            //调用父类构造函数
            ui.Widget.call(this);
            //自定义属性key，定义在配置中保存时的key
            this.defineAttr("key");
        }
        PrefCheckBox.prototype.render = function () {
            return (
                <checkbox />
            );
        }
        PrefCheckBox.prototype.onFinishInflation = function (view) {
            view.setChecked(PrefCheckBox.getPref().get(this.getKey(), false));
            view.on("check", (checked) => {
                PrefCheckBox.getPref().put(this.getKey(), checked);
            });
        }
        PrefCheckBox.prototype.getKey = function () {
            if (this.key) {
                return this.key;
            }
            let id = this.view.attr("id");
            if (!id) {
                throw new Error("should set a id or key to the checkbox");
            }
            return id.replace("@+id/", "");
        }
        PrefCheckBox.setPref = function (pref) {
            PrefCheckBox._pref = pref;
        }
        PrefCheckBox.getPref = function () {
            if (!PrefCheckBox._pref) {
                PrefCheckBox._pref = storages.create("pref");
            }
            return PrefCheckBox._pref;
        }
        ui.registerWidget("pref-checkbox", PrefCheckBox);
        return PrefCheckBox;
    })();

    let g = {};

    function rz_log() {
        g.w = floaty.rawWindow(
            <frame >
                <vertical>
                    <card w="*" bg='#000000' h="30" background="#000000" >
                        <text extSize="29sp" gravity='center' textColor='#ffffff' textStyle='bold' > 操作日志 </text>
                    </card>
                    <ScrollView id='gg' h="auto" bg='#7f000000'>
                        <text textSize="12sp" textStyle="bold" margin='8 0 0 0 ' textColor="#E4D00A" id="tj"></text>
                    </ScrollView>
                    <ScrollView id='gd' h="auto" bg='#7f000000'>
                        <text textSize="11sp" textStyle="bold" margin='8 0 0 0 ' textColor="#00FFFF" id="rz"></text>
                    </ScrollView>
                </vertical>
            </frame >
        );
        g.w.setTouchable(false);//是否可触控
        g.w.setSize(device.width / 1.5, device.height / 2.5);//大小
        g.w.setPosition(0, 120);//位置

        g.Log = log;
        log = function (str, color) {
            ui.run(function () {
                g.Log(str);//输出在控制台;
                g.w.rz.append(str + '\n');
                g.w.gd.scrollTo(0, g.w.rz.getHeight());
            });
        }

    }
    rz_log();
    var rzxs = 1 //隐藏日志
    var showConsole = false
    importClass(android.view.View);
    auto.waitFor();
    auto.setMode('normal');
    setInterval(() => { }, 1000);
    threads.start(function () {
        var window = floaty.window(
            <linear>
                {/* <button id="center" src="@drawable/ic_launcher" bg="#ff0000" margin="0" h='35' w="30">S</button> */}
                <frame id="container" bg="#FF0000">
                    <img id="center" src="@drawable/ic_home_black_48dp" w="30" h="35" />
                </frame>
                <frame id="action1" bg="#FF0000">
                    <img id="action" src="@drawable/ic_play_arrow_black_48dp" w="30" h="35" />
                </frame>

                <frame id="brn1" bg="#FF0000">
                    <img id="btn" src='@drawable/ic_list_black_48dp' h='30' w="35" />
                </frame>
                <frame id="exit1" bg="#FF0000">
                    <img id="exit" src='@drawable/ic_power_settings_new_black_48dp' h='30' w="35" />
                </frame>
            </linear>
        );
        window.setPosition(window.getX() - 50, window.getY() - 100);
        var x = 0,
            y = 0,
            windowX = 0,
            windowY = 0,
            isRuning = false,
            isShowingAll = false;

        window.action.setVisibility(View.GONE);
        // window.kz.setVisibility(View.GONE);
        window.btn.setVisibility(View.GONE);
        window.exit.setVisibility(View.GONE);

        window.center.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    break;
                case event.ACTION_MOVE:
                    window.setPosition(windowX + (event.getRawX() - x), windowY + (event.getRawY() - y));
                    break;
                case event.ACTION_UP:
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        ui.run(function () {
                            if (isShowingAll) {
                                isShowingAll = false;
                                window.action.setVisibility(View.GONE);
                                // window.kz.setVisibility(View.GONE);
                                window.btn.setVisibility(View.GONE);
                                window.exit.setVisibility(View.GONE);
                            } else {
                                isShowingAll = true;
                                if (isRuning) {
                                    window.action.setVisibility(View.GONE);
                                    // window.kz.setVisibility(View.VISIBLE);
                                } else {
                                    window.action.setVisibility(View.VISIBLE);
                                    // window.kz.setVisibility(View.GONE);
                                }
                                window.btn.setVisibility(View.VISIBLE);
                                window.exit.setVisibility(View.VISIBLE);
                            }
                        });
                    }
                    break;
            }
            return true;
        });

        window.btn.click(function () {
            // if (window.btn.text() == '日志') {
            //     rz_log();
            //     window.btn.setText('隐藏');
            // } else {
            //     window.btn.setText('日志');
            //     log = print;
            //     g.w.close();
            // }
            if (rzxs == 0) {
                rzxs = 1
                rz_log();

            } else {
                rzxs = 0
                // window.btn.setText('日志');
                log = print;
                g.w.close();

            }

        });
        window.setPosition(10, 10);//位置
        window.action.click(function () {
            threads.start(function () {
                if (qd == 0) {
                    log('脚本开始运行...')
                    qd = 1
                    运行()
                } else {
                    log('脚本停止...')
                    qd = 0
                    threads.shutDownAll() //结束线程
                }

            });
        });

        window.exit.click(function () {
            threads.start(function () {
                exit()

            });
        });

    });



    var 本地储存 = storages.create("input");
    var ui_baocun = {
        shurukuang: {
            1: { ID: "lhcs" },
            2: { ID: "jgsj" },
            3: { ID: "tlsj" },
            4: { ID: "sxplnr" },
            5: { ID: "zpdz" },
            6: { ID: "zpllsj" },
            7: { ID: "lh" },
            8: { ID: "dz" },
            9: { ID: "gzsl" },
            10: { ID: "txdz" },
            11: { ID: "plsl" },
            12: { ID: "sxsl" },
            13: { ID: "zylj" },
            // 14: { ID: "dzsb1" },
            // 15: { ID: "xxsj" },
            16: { ID: "dzsb1" },
            17: { ID: "tlsj1" },
            18: { ID: "zpllsj1" },
            19: { ID: "jgsj1" },
            20: { ID: "yhsj" },
            21: { ID: "spdzsl" },
            22: { ID: "scsl" },
            23: { ID: "fwq" },
            24: { ID: "fxsl" },
            25: { ID: "yxsj" },
            26: { ID: "xxsj" },
            27: { ID: "rwqyhsj" },
            28: { ID: "zlh" },
            29: { ID: "zyh" },
            30: { ID: "zxx" },
            31: { ID: "ip" },

        }

    }
    xszym()
    function xszym(params) {
        ui.layout(
            <drawer id="drawer">

                <vertical>

                    <vertical w="*" >
                        <appbar>
                            <horizontal w="*">
                                <toolbar id="toolbar" title="截流（9.9.1）" />
                            </horizontal>
                            <tabs id="tabs" />
                        </appbar>
                        <viewpager marginTop="10" id="viewpager" h="*">

                            {/* 首页 */}
                            <vertical h="*" align="center">
                                <linear>
                                    <card w="160" h="40" margin="10 1" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                        <horizontal>
                                            <text text="版本" padding="18 8 8 8" textSize="15sp" gravity="center_vertical" textColor="black" />
                                            <spinner id="sp0" entries="正版|火山|1111" />
                                        </horizontal>
                                        <View bg="#8b008b" h="*" w="10" />

                                    </card>
                                    <card w="180" h="40" margin="10 1" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                        <horizontal>
                                            <text text="页面" padding="18 8 8 8" textSize="15sp" gravity="center_vertical" textColor="black" />
                                            <spinner id="sp1" entries="粉丝列表|评论列表|喜欢列表|UID" />
                                        </horizontal>
                                        <View bg="#ff00ff" h="*" w="10" />
                                    </card>
                                </linear>
                                <ScrollView>
                                    <vertical>

                                        <linear>
                                            <text text="留痕次数：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="lhcs" text="300" color="black" inputType="numberDecimal" w="60" />
                                            <text text="作品点赞：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zpdz" text="200" color="black" inputType="numberDecimal" w="60" />
                                            <text text="个" textColor="black" w="auto" />
                                        </linear>

                                        <linear>
                                            <text text="关注数量：" textColor="black" w="auto" />
                                            <input id="gzsl" text="30" color="black" inputType="numberDecimal" w="60" />
                                            <text text="头像点赞数量：" textColor="black" w="auto" />
                                            <input id="txdz" text="50" color="black" inputType="numberDecimal" w="60" />
                                        </linear>

                                        <linear>
                                            <text text="评论数量：" textColor="black" w="auto" />
                                            <input id="plsl" text="30" color="black" inputType="numberDecimal" w="60" />
                                            <text text="私信数量：" textColor="black" w="auto" />
                                            <input id="sxsl" text="20" color="black" inputType="numberDecimal" w="60" />
                                        </linear>

                                        <linear>
                                            <text text="分享数量：" textColor="black" w="auto" />
                                            <input id="fxsl" text="400" color="black" inputType="numberDecimal" w="60" />
                                            <text text="收藏数量：" textColor="black" w="auto" />
                                            <input id="scsl" text="2000" color="black" inputType="numberDecimal" w="60" />

                                        </linear>


                                        <linear>
                                            <text text="主页停留时间：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="tlsj" text="3" color="black" inputType="numberDecimal" w="50" />
                                            <text text="到 " textColor="black" w="auto" />
                                            <input id="tlsj1" text="5" color="black" inputType="numberDecimal" w="50" />
                                            <text text="秒" textColor="black" w="auto" />

                                        </linear>

                                        <linear>
                                            <text text="作品浏览时间：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zpllsj" text="1" color="black" inputType="numberDecimal" w="50" />
                                            <text text="到" textColor="black" w="auto" />

                                            <input id="zpllsj1" text="3" color="black" inputType="numberDecimal" w="50" />
                                            <text text="秒" textColor="black" w="auto" />
                                        </linear>
                                        <linear>
                                            <text text="间隔时间：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="jgsj" text="3" color="black" inputType="numberDecimal" w="40" />
                                            <text text="到" textSize="16sp" textColor="black" w="auto" />
                                            <input id="jgsj1" text="5" color="black" inputType="numberDecimal" w="40" />
                                            <text text="秒" textColor="black" w="auto" />

                                        </linear>
                                        <linear>

                                            <text text="点" textSize="16sp" textColor="black" w="auto" />
                                            <input id="dz" text="10" color="black" inputType="numberDecimal" w="50" />
                                            <text text="个" textColor="black" w="auto" />
                                            <text text=" 休息" textSize="16sp" textColor="black" w="auto" />
                                            <input id="lh" text="1" color="black" inputType="numberDecimal" w="50" />
                                            <text text="个  " textColor="black" w="auto" />
                                            <text text="养号时间：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="yhsj" text="45" color="black" inputType="numberDecimal" w="40" />
                                            <text text="分钟" textSize="16sp" textColor="black" w="auto" />
                                        </linear>

                                        <linear>
                                            <text text="私信评论内容：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="sxplnr" text="你好啊,很高兴认识你,相遇即是缘,缘来是你,认识一下呗" color="black" w="*" />

                                        </linear>

                                        <card w="*" h="80" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                            <vertical padding="18 8" h="auto">
                                                <linear>
                                                    {/* <text text="功能选择：" textColor="black" w="auto" /> */}
                                                    <checkbox id="lh10" checked="false" text="留痕" w="auto" marginLeft="10" />
                                                    <checkbox id="gz10" checked="true" text="关注" w="auto" marginLeft="10" />
                                                    <checkbox id="pldz10" checked="false" text="私信" w="auto" marginLeft="10" />
                                                    <checkbox id="txdz10" checked="true" text="头像" w="auto" marginLeft="10" />
                                                </linear>

                                                <linear>

                                                    <checkbox id="zpfx10" checked="true" text="分享" w="auto" marginLeft="10" />
                                                    <checkbox id="zpsc10" checked="true" text="收藏" w="auto" marginLeft="10" />
                                                    <checkbox id="zpdz10" checked="true" text="点赞" w="auto" marginLeft="10" />
                                                    <checkbox id="pl10" checked="false" text="评论" w="auto" marginLeft="10" />
                                                </linear>

                                            </vertical>
                                            <View bg="#dddddd" h="*" w="3" />
                                        </card>

                                        <radiogroup orientation="horizontal">

                                            <text text="性别选择：" textSize="16sp" textColor="black" w="auto" />
                                            <radio id='xbn' text="男" />
                                            <radio id='xbnv' text="女" />
                                            <radio id='xbw' text="无" checked="true" />

                                        </radiogroup>

                                        <linear>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_ksyx">开始运行</button>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_ksyh">开始养号</button>

                                        </linear>
                                    </vertical>
                                </ScrollView>
                            </vertical>

                            {/* 设置 */}
                            <vertical>
                                {/* 无障碍服务 */}

                                <card w="*" h="40" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                    <vertical padding="18 8" h="auto">
                                        <linear>
                                            <Switch id="autoService" text="无障碍服务:" checked="{{auto.service != null}}" w="auto" textStyle="bold" />
                                            <Switch id="floatyService" text="悬浮窗权限" checked="false" w="auto" textStyle="bold" />
                                        </linear>
                                    </vertical>
                                    <View bg="#4EBFDD" h="*" w="5" />
                                </card>

                                <card w="*" h="80" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                    <vertical padding="18 8" h="auto">
                                        <linear>
                                            <text text="激活码:" textColor="black" w="auto" textStyle="bold" />
                                            <input id="km" color="#666666" paddingLeft="5" w="155" />
                                            <button id='activation' w="57" text="激活" />
                                            <button id='jb' w="57" text="解绑" />
                                        </linear>

                                        <linear padding="0">
                                            <text id="end" text="到期时间：" textColor="green" />
                                            <text id='time' text='未知' />
                                        </linear>
                                    </vertical>
                                    <View bg="#4EBFDD" h="*" w="5" />
                                </card>

                                <linear padding="0">
                                    <text id="end" text="公告：" textColor="red" />
                                    <text id='info' text='未知' />
                                </linear>
                                <ScrollView>
                                    <vertical>
                                        <linear>
                                            <text text="主页连接：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zylj" text="" hint="自己抖音号的主页链接" color="black" w="*" />
                                        </linear>
                                        <linear>
                                            <text text="服务器地址：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="fwq" text="http://47.120.58.122/GET" color="black" w="*" />
                                        </linear>

                                        <linear>
                                            <text text="任务失败：" textSize="16sp" textColor="black" w="auto" />
                                            <input id="dzsb1" text="5" color="black" inputType="numberDecimal" w="60" />
                                            <text text="个，停止当前任务" textSize="16sp" textColor="black" w="auto" />

                                        </linear>
                                        <linear>
                                            <text text="作品点赞数量大于" textSize="16sp" textColor="black" w="auto" />
                                            <input id="spdzsl" text="999" color="black" inputType="numberDecimal" w="60" />
                                            <text text="不点" textSize="16sp" textColor="black" w="auto" />

                                        </linear>
                                        <linear>
                                            <checkbox id="rwqyh" checked="true" text="任务前养号" w="auto" marginLeft="10" />
                                            <input id="rwqyhsj" text="45" color="black" inputType="numberDecimal" w="40" />
                                            <text text="分 运行" textSize="16sp" textColor="black" w="auto" />
                                            <input id="yxsj" text="360" color="black" inputType="numberDecimal" w="45" />
                                            <text text="分 休息" textSize="16sp" textColor="black" w="auto" />
                                            <input id="xxsj" text="60" color="black" inputType="numberDecimal" w="45" />
                                            <text text="分" textSize="16sp" textColor="black" w="auto" />
                                        </linear>


                                        <linear>
                                            <checkbox id="kqjc" checked="true" text="开启任务检测" w="auto" marginLeft="10" />
                                        </linear>

                                    </vertical>
                                </ScrollView>

                            </vertical>

                            {/* 其他 */}
                            <vertical>
                                <ScrollView>
                                    <vertical>

                                        <linear>
                                            <text text="留痕" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zlh" text="800" color="black" inputType="numberDecimal" w="50" />
                                            <text text=" 养号" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zyh" text="60" color="black" inputType="numberDecimal" w="40" />
                                            <text text="分钟  休息" textSize="16sp" textColor="black" w="auto" />
                                            <input id="zxx" text="60" color="black" inputType="numberDecimal" w="50" />
                                            <text text="分钟" textSize="16sp" textColor="black" w="auto" />
                                        </linear>
                                        <linear>
                                            <text text="回关数量" textSize="16sp" textColor="black" w="auto" />
                                            <input id="hgsl" text="100" color="black" inputType="numberDecimal" w="50" />
                                            <text text="备注内容" textSize="16sp" textColor="black" w="auto" />
                                            <input id="bznr" text="" color="black" w="50" />

                                        </linear>

                                        <linear>
                                            <checkbox id="kqip" checked="true" text="IP地址：" w="auto" marginLeft="10" />
                                            <input id="ip" text="湖南" color="black" w="80" />
                                        </linear>

                                        <linear>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_zlh">只跑留痕</button>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_hg">回关</button>
                                        </linear>
                                        <linear>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_sx">私信</button>
                                            <button style="Widget.AppCompat.Button.Colored" w='150' margin="10" id="click_fx">分享</button>
                                        </linear>

                                    </vertical>
                                </ScrollView>


                            </vertical>
                        </viewpager>
                    </vertical>

                    <vertical layout_gravity="left" bg="#ffffff" w="280">
                        <img w="280" h="200" scaleType="fitXY" src="file://res/top.jpg" />
                        <list id="menu">
                            <horizontal bg="?selectableItemBackground" w="*">
                                <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                                <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                            </horizontal>
                        </list>
                    </vertical>


                </vertical>

            </drawer>
        );

    }
    // log(storages.remove('input'))

    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
        var content = files.read("/sdcard/pz.text")
        content = content.split(',')
        // log(content)
        ui.sp0.setSelection(content[0])
        ui.sp1.setSelection(content[1])
        if (content[2] == 0) {
            ui.lh10.checked = true;
        } else {
            ui.lh10.checked = false;
        }
        if (content[3] == 0) {
            ui.gz10.checked = true;
        } else {
            ui.gz10.checked = false;
        }
        if (content[4] == 0) {
            ui.txdz10.checked = true;
        } else {
            ui.txdz10.checked = false;
        }
        if (content[5] == 0) {
            ui.zpdz10.checked = true;
        } else {
            ui.zpdz10.checked = false;
        }
        if (content[6] == 0) {
            ui.pl10.checked = true;
        } else {
            ui.pl10.checked = false;
        }
        if (content[7] == 0) {
            ui.pldz10.checked = true;
        } else {
            ui.pldz10.checked = false;
        }
        if (content[8] == 0) {
            ui.kqjc.checked = true;
        } else {
            ui.kqjc.checked = false;
        }

        if (content[9] == 0) {
            ui.zpsc10.checked = true;
        } else {
            ui.zpsc10.checked = false;
        }

        if (content[10] == 0) {
            ui.xbw.checked = true;
        } else {
            if (content[10] == 1) {
                ui.xbn.checked = true;
            } else {
                if (content[10] == 2) {
                    ui.xbnv.checked = true;
                }
            }
        }

        if (content[11] == 0) {
            ui.zpfx10.checked = true;
        } else {
            ui.zpfx10.checked = false;
        }

        if (content[12] == 0) {
            ui.kqip.checked = true;
        } else {
            ui.kqip.checked = false;
        }



    }


    // 设置公告
    // ui.info.setText(gg)
    // 通过本地存储获取输入框内容
    for (let q in ui_baocun['shurukuang']) {

        if (本地储存.get(ui_baocun['shurukuang'][q]['ID'])) {
            ui[ui_baocun['shurukuang'][q]['ID']].text(本地储存.get(ui_baocun['shurukuang'][q]['ID']))

        };

    };


    // 检测是否已经开始悬浮窗权限
    if (!是否有悬浮窗权限()) {
    } else {
        ui.floatyService.setChecked(true)
    }


    //设置滑动页面的标题
    ui.viewpager.setTitles(["首页", "设置", "其他"]);

    //让滑动页面和标签栏联动
    ui.tabs.setupWithViewPager(ui.viewpager);

    //开启无障碍服务
    ui.autoService.on("check", function (checked) {
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    ui.emitter.on("resume", function () {
        ui.autoService.checked = auto.service != null;
    });

    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);

    ui.menu.setDataSource([
        {
            title: "打开无障碍界面",
            icon: "@drawable/ic_android_black_48dp"
        },
        {
            title: "打开日志",
            icon: "@drawable/ic_assignment_black_48dp"
        },
        {
            title: "退出",
            icon: "@drawable/ic_exit_to_app_black_48dp"
        }
    ]);

    ui.menu.on("item_click", item => {
        switch (item.title) {
            case "打开无障碍界面":
                app.startActivity({
                    action: "android.settings.ACCESSIBILITY_SETTINGS"
                });
                break;
            case "打开日志":
                app.startActivity("console");
                break;
            case "退出":
                // ui.finish();
                engines.stopAll();
                break;
        }
    })

    //只跑留痕按钮
    ui.click_zlh.on('click', function () {
        zlhjc = 1
        zlh = ui.zlh.text()
        zyh = ui.zyh.text() * 60
        zxx = ui.zxx.text() * 60
        zylj = ui.zylj.text()
        fwq = ui.fwq.text()
        jgsj = ui.jgsj.text() * 1000
        tlsj = ui.tlsj.text() * 1000
        tlsj1 = ui.tlsj1.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        var x = ui.sp0.getSelectedItemPosition()

        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }

        //保存输入框内容到本地
        for (let i in ui_baocun['shurukuang']) {

            本地储存.put(ui_baocun['shurukuang'][i]['ID'], ui[ui_baocun['shurukuang'][i]['ID']].getText().toString());
        };

        spdzsl = ui.spdzsl.text()
        jgsj = ui.jgsj.text() * 1000
        tlsj = ui.tlsj.text() * 1000
        tlsj1 = ui.tlsj1.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        lhsl = ui.lhcs.text()
        scsl = ui.scsl.text()
        txsl1 = ui.txdz.text()
        gzsl = ui.gzsl.text()
        zpdz = ui.zpdz.text()
        fxsl = ui.fxsl.text()
        zpllsj = ui.zpllsj.text() * 1000
        zpllsj1 = ui.zpllsj1.text() * 1000
        dz = ui.dz.text()
        lh = ui.lh.text()
        plsl = ui.plsl.text()
        sxsl = ui.sxsl.text()
        sxplnr = ui.sxplnr.text()
        zylj = ui.zylj.text()
        fwq = ui.fwq.text()
        dzsb = ui.dzsb.text()
        dzsb1 = ui.dzsb1.text()
        xiuxi = ui.xiuxi.text()

        z = ui.sp1.getSelectedItemPosition();
        var x = ui.sp0.getSelectedItemPosition()
        yxsj = ui.yxsj.text()
        xxsj = ui.xxsj.text()
        yxsj1 = ui.yxsj1.text()
        yhsj = ui.yhsj1.text() * 60
        xxsj1 = ui.xxsj1.text()

        if (ui.xbn.isChecked()) {
            xb = 1
        }
        if (ui.xbnv.isChecked()) {
            xb = 2
        }
        if (ui.xbw.isChecked()) {
            xb = 0
        }

        threads.start(function () {
            // var km = ui.km.text()
            // var url = "http://app.iuser.top/a999357/api.php?name=zdy_dyd&c1=" + rjbh + "&c2=" + km + '&c4=3.0&c5= ' + uuid + "&c7=10,11"
            // var res = http.get(url);
            // var fhz = res.body.string()
            // var r = fhz.split("<|>") //分割内容
            // var z1 = fhz.split('<|>').length - 1  //取返回数组成员数
            // var dqsj = r[1]
            var z1 = 1

            if (z1 == 0) {
                alert(fhz)
                // exit()
                return;
            } else {
                toast("到期时间：" + dqsj)
                if (ui.lh10.checked) {
                    lh1 = 0
                    f = 0
                } else {
                    f = 1

                }
                if (ui.gz10.checked) {
                    gz1 = 0
                    mg = 0
                } else {
                    mg = 1
                    var target = 1;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }
                if (ui.txdz10.checked) {
                    h = 0
                    txdz1 = 0
                } else {
                    h = 1
                    var target = 2;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }
                if (ui.zpdz10.checked) {
                    j = 0
                    zpdz1 = 0
                } else {
                    j = 1
                    var target = 3;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.pl10.checked) {
                    k = 0
                    pl1 = 0

                } else {
                    k = 1
                    var target = 4;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.pldz10.checked) {
                    l = 0
                    pldz1 = 0
                } else {
                    l = 1
                    var target = 5;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.zpsc10.checked) {
                    sc = 0
                    zpsc1 = 0
                } else {
                    sc = 1
                    var target = 6;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.zpfx10.checked) {
                    fx = 0
                    zpfx1 = 0
                } else {
                    fx = 1
                    var target = 7;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }



                if (ui.kqjc.checked) {
                    p = 0
                    jc = 1
                    log('开启点赞检测，请确保主页链接正确')
                    var regex = /https:\/\/v\.douyin\.com\/[a-zA-Z0-9]+/g;
                    var extractedUrl = zylj.match(regex)[0];
                    log(extractedUrl)

                    try {
                        var res = http.get(extractedUrl);
                        if (res.statusCode == 200) {
                            // 网页成功打开，可以继续处理
                            var str = JSON.stringify(res)
                            var regex = /sec_uid\"\,\"(.*?)\"\,\"from_ssr/
                            uid = str.match(regex)[1]
                            log(uid)

                        } else {
                            // 网页打开失败，输出错误信息
                            log("主页链接打开失败，状态码：" + res.statusCode);
                        }
                    } catch (e) {
                        // 捕获异常，输出错误信息
                        log("发生异常：" + e);
                    }
                } else {
                    p = 1
                }


                if (x == 0) { //正版
                    packageName = "com.ss.android.ugc.aweme"
                    zpid = "com.ss.android.ugc.aweme:id/container"
                    s = 0
                    versionName = context.getPackageManager().getPackageInfo(packageName, 0).versionName;
                    versionName = versionName.replace('应用程序版本名称：', '')
                    log('当前音音版本：' + versionName)
                }
                if (x == 1) { //火山版
                    packageName = "com.ss.android.ugc.live"
                    zpid = "container"
                    s = 1

                }

                if (x == 2) {
                    packageName = "my.maya.android"
                    zpid = "container"
                    s = 2
                }


                if (z == 0) {
                    d = 0
                    var arr = [s, d, f, mg, h, j, k, l, p, sc, xb, fx]
                    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
                        files.remove("/sdcard/pz.text")
                        files.append("/sdcard/pz.text", arr) //保存文本

                    } else {
                        log("没有找到名字文件，进行创建")
                        files.append("/sdcard/pz.text", arr) //保存文本
                        // files.write("/sdcard/pz.txt", arr);

                    }
                    if (zcbb.includes(versionName)) {
                        log("当前音音版本，是指定版本，脚本开始运行..");
                        sfzdbb = 1 //指定版本
                        只跑留痕()
                    } else {
                        只跑留痕()
                        log("当前音音版本不正确");


                    }


                }




            }




        })




    })

    //回关  scrollDown(1)
    ui.click_hg.on('click', function () {
        jgsj = ui.jgsj.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        zylj = ui.zylj.text()
        var hgsl = ui.hgsl.text()
        var sb = ui.dzsb1.text()
        bznr = ui.bznr.text()

        packageName = "com.ss.android.ugc.aweme"
        zpid = "com.ss.android.ugc.aweme:id/container"
        s = 0
        versionName = context.getPackageManager().getPackageInfo(packageName, 0).versionName;
        versionName = versionName.replace('应用程序版本名称：', '')
        log('当前音音版本：' + versionName)
        打开抖音()

        if (ui.kqjc.checked) {
            p = 0
            jc = 1
            log('开启点赞检测，请确保主页链接正确')
            var regex = /https:\/\/v\.douyin\.com\/[a-zA-Z0-9]+/g;
            var extractedUrl = zylj.match(regex)[0];
            log(extractedUrl)


        } else {
            p = 1
        }
        var cg = 0
        threads.start(function () {
            try {
                var res = http.get(extractedUrl);
                if (res.statusCode == 200) {
                    // 网页成功打开，可以继续处理
                    // var str = JSON.stringify(res)
                    // var regex = /sec_uid\"\,\"(.*?)\"\,\"from_ssr/
                    // uid = str.match(regex)[1]
                    // 要匹配的文本
                    var text = res.request
                    // 定义正则表达式，匹配目标内容
                    var regex = /\/share\/user\/([A-Za-z0-9-]+)\?from_ss/;
                    // 使用exec方法匹配
                    var match = regex.exec(text);
                    if (match) {
                        // 匹配成功，输出匹配的内容
                        uid = match[1];
                        log(uid);
                    } else {
                        log("提取失败");
                    }

                } else {
                    // 网页打开失败，输出错误信息
                    log("主页链接打开失败，状态码：" + res.statusCode);
                }
            } catch (e) {
                // 捕获异常，输出错误信息
                log("发生异常：" + e);
                jc = 0
                log('检测接口访问失败，自动关闭检测..')
            }

            sleep(5000)
            while (true) {

                descContains('关注了你').visibleToUser().find().forEach(fkj => {

                    if (fkj.findOne(textContains('分钟前'))) {
                        log('符合要求，小时前')
                        var hg = fkj.findOne(desc('回关'))
                        var zb = hg.bounds()
                        click(zb.centerX(), zb.centerY())
                        sleep(5000)
                        if (text('备注').visibleToUser().exists()) {
                            log('点备注')
                            var zb = text("备注").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(3000)
                            setText('4.18')
                            sleep(2000)
                            log('点确认')
                            var zb = text("确认").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(1000)
                        }

                    } else {
                        if (fkj.findOne(textContains('小时前'))) {
                            log('符合要求，小时前')
                            var hg = fkj.findOne(desc('回关'))
                            var zb = hg.bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(5000)
                            if (text('备注').visibleToUser().exists()) {
                                log('点备注')
                                var zb = text("备注").visibleToUser().findOne().bounds()
                                click(zb.centerX(), zb.centerY())
                                sleep(3000)
                                setText('4.18')
                                sleep(2000)
                                log('点确认')
                                var zb = text("确认").visibleToUser().findOne().bounds()
                                click(zb.centerX(), zb.centerY())
                                sleep(1000)
                            }
                        } else {
                            log('当前没有符合要求的了')
                            home()
                            alert('当前没有符合要求的了')
                            exit()
                        }

                    }
                    if (jc == 1) {
                        检测数据()

                    }
                    ui.run(function () {
                        g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '关注数量：' + following_count + '\n' + '回关成功：' + cg + '\n');
                        // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                    });
                    var jg = random(jgsj, jgsj1)
                    var zb = child.bounds()
                    click(zb.centerX(), zb.centerY())
                    log('间隔时间：' + jg)
                    sleep(jg)
                    检测数据1()
                    log('关注前：' + following_count + '关注后：' + following_count1)
                    if (following_count == following_count1) {
                        gzsb = gzsb + 1
                        log('关注失败:' + gzsb)

                    } else {
                        cg = cg + 1
                        log('关注成功' + cg)
                    }
                    if (gzsb == sb) {
                        home()
                        alert('关注失败达到指定数量')
                        exit()
                    }
                    if (cg == hgsl) {
                        home()
                        alert('任务完成')
                        exit()
                    }

                })

                scrollDown(0)
                sleep(3000)

            }

        })


    })

    //开始运行按钮
    ui.click_ksyx.on("click", function () {

        qd = 1

        运行()


    });

    //开始私信按钮
    ui.click_sx.on("click", function () {
        threads.start(function () {
            私信()
        })

    });
    //开始分享按钮
    ui.click_fx.on("click", function () {
        threads.start(function () {
            分享()
        })

    });
    //开始养号按钮
    ui.click_ksyh.on('click', function () {
        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }
        var z = ui.sp1.getSelectedItemPosition();
        var x = ui.sp0.getSelectedItemPosition()
        yhsj = ui.yhsj.text() * 60
        if (x == 0) { //正版
            packageName = "com.ss.android.ugc.aweme"
            zpid = "com.ss.android.ugc.aweme:id/container"
            tj = '推荐'
        }
        if (x == 1) { //火山版
            packageName = "com.ss.android.ugc.live"
            zpid = "container"
            tj = '推荐'
        }
        if (x == 2) { //多闪7
            packageName = "my.maya.android"
            zpid = "container"
            tj = '朋友'
            s = 2

        }
        养号()
    })

    var textdata = [  // 广告内容
        "点击进入直播间",
        '查看详情',
        '广告',
        "上滑继续看视频",
        "不感兴趣"
    ];
    const 广告识别 = function (id, text_array) {
        const startTime = new Date();
        var data = {
            code: 0,
            msg: "未找到",
            idnex: 0,
            obj: null,
        }

        switch (id) {
            case 0:
                id = textMatches
                break;
            case 1:
                id = descMatches
                break;
            default:
                break;
        }
        var s = textMatches(/.+/).visibleToUser().find()
        if (s.length > 0) {
            s.some(w => {
                text_array.some(c => {
                    if (RegExp(c).test(w)) {
                        return_text = w;
                        data = {
                            code: 1,
                            msg: "找到内容:" + c,
                            idnex: s.length,
                            obj: w,
                        }
                        return true;
                    }
                })
                if (data.code == 1) {
                    return true;
                }
            })
        }
        const endTime = new Date();
        const executionTime = endTime - startTime;
        console.log("代码执行时间:" + executionTime / 1000 + "秒");
        return data;
    }

    var pl = 0
    var k = 0
    var sb = 0
    var gzsb = 0
    var gzzsb = 0
    var zsb = 0
    var minutes
    var yxy = 0

    function 运行(params) {
        if (auto.service == null) {
            toast("请先开启无障碍服务！");
            return;
        }

        //保存输入框内容到本地
        for (let i in ui_baocun['shurukuang']) {

            本地储存.put(ui_baocun['shurukuang'][i]['ID'], ui[ui_baocun['shurukuang'][i]['ID']].getText().toString());
        };

        spdzsl = ui.spdzsl.text()
        jgsj = ui.jgsj.text() * 1000
        tlsj = ui.tlsj.text() * 1000
        tlsj1 = ui.tlsj1.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        lhsl = ui.lhcs.text()
        scsl = ui.scsl.text()
        txsl1 = ui.txdz.text()
        gzsl = ui.gzsl.text()
        zpdz = ui.zpdz.text()
        fxsl = ui.fxsl.text()
        zpllsj = ui.zpllsj.text() * 1000
        zpllsj1 = ui.zpllsj1.text() * 1000
        dz = ui.dz.text()
        lh = ui.lh.text()
        plsl = ui.plsl.text()
        sxsl = ui.sxsl.text()
        sxplnr = ui.sxplnr.text()
        zylj = ui.zylj.text()
        fwq = ui.fwq.text()
        dzsb1 = ui.dzsb1.text()

        z = ui.sp1.getSelectedItemPosition();
        var x = ui.sp0.getSelectedItemPosition()
        yxsj = ui.yxsj.text()
        xxsj = ui.xxsj.text()


        if (ui.kqip.isChecked()) {
            ip = ui.ip.text()
            kqip = 1
            log('ip检测开启，当前设置地址：' + ip)
        }

        if (ui.xbn.isChecked()) {
            xb = 1
        }
        if (ui.xbnv.isChecked()) {
            xb = 2
        }
        if (ui.xbw.isChecked()) {
            xb = 0
        }

        log('性别选择：' + xb)

        threads.start(function () {
            var km = ui.km.text()
            var url = "http://app.iuser.top/a999357/api.php?name=zdy_dyd&c1=" + rjbh + "&c2=" + km + '&c4=3.0&c5= ' + uuid + "&c7=10,11"
            var res = http.get(url);
            var fhz = res.body.string()
            console.log('打印日志：' + fhz);



            var r = fhz.split("<|>") //分割内容
            var z1 = fhz.split('<|>').length - 1  //取返回数组成员数
            var dqsj = r[1]

            var z1 = 11
            var dqsj = "9999-99-99 99:99:99"


            var z1 = 1

            if (z1 == 0) {
                alert(fhz)
                // exit()
                return;
            } else {
                // toast("到期时间：" + dqsj)
                if (ui.lh10.checked) {
                    lh1 = 0
                    f = 0
                } else {
                    f = 1

                }
                if (ui.gz10.checked) {
                    gz1 = 0
                    mg = 0
                } else {
                    mg = 1
                    var target = 1;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }
                if (ui.txdz10.checked) {
                    h = 0
                    txdz1 = 0
                } else {
                    h = 1
                    var target = 2;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }
                if (ui.zpdz10.checked) {
                    j = 0
                    zpdz1 = 0
                } else {
                    j = 1
                    var target = 3;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.pl10.checked) {
                    k = 0
                    pl1 = 0

                } else {
                    k = 1
                    var target = 4;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.pldz10.checked) {
                    l = 0
                    pldz1 = 0
                } else {
                    l = 1
                    var target = 5;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.zpsc10.checked) {
                    sc = 0
                    zpsc1 = 0
                } else {
                    sc = 1
                    var target = 6;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.zpfx10.checked) {
                    fx = 0
                    zpfx1 = 0
                } else {
                    fx = 1
                    var target = 7;
                    for (var i = shuzu.length - 1; i >= 0; i--) {
                        if (shuzu[i] === target) {
                            shuzu.splice(i, 1);
                        }
                    }
                }

                if (ui.kqip.checked) {
                    ip1 = 0
                } else {
                    ip1 = 1
                }

                if (ui.kqjc.checked) {
                    p = 0
                    jc = 1
                    log('开启点赞检测，请确保主页链接正确')
                    var regex = /https:\/\/v\.douyin\.com\/[a-zA-Z0-9]+/g;
                    var extractedUrl = zylj.match(regex)[0];
                    log(extractedUrl)
                    try {
                        var res = http.get(extractedUrl);
                        log(res)
                        if (res.statusCode == 200) {
                            // 网页成功打开，可以继续处理
                            // var str = JSON.stringify(res)
                            // var regex = /sec_uid\"\,\"(.*?)\"\,\"from_ssr/
                            // uid = str.match(regex)[1]
                            // 要匹配的文本
                            var text = res.request
                            // 定义正则表达式，匹配目标内容
                            var regex = /\/user\/(.*?)\?/;
                            // 使用exec方法匹配
                            var match = regex.exec(text);
                            if (match) {
                                // 匹配成功，输出匹配的内容
                                uid = match[1];
                                log(uid);
                            } else {
                                log("提取失败,关闭检测");
                                jc = 0
                            }

                        } else {
                            // 网页打开失败，输出错误信息
                            log("主页链接打开失败，状态码：" + res.statusCode);
                        }
                    } catch (e) {
                        // 捕获异常，输出错误信息
                        log("发生异常：" + e);
                        jc = 0
                        log('主页链接访问失败，自动关闭检测..')
                    }


                } else {
                    p = 1
                }

                if (x == 0) { //正版
                    packageName = "com.ss.android.ugc.aweme"
                    zpid = "com.ss.android.ugc.aweme:id/container"
                    s = 0
                    versionName = context.getPackageManager().getPackageInfo(packageName, 0).versionName;
                    versionName = versionName.replace('应用程序版本名称：', '')
                    log('当前音音版本：' + versionName)
                    if (versionName == '29.4.0') {
                        zpscid = "cwe",  //作品收藏id
                            zpfxid = "t=m",  //作品分享id
                            zygzid = "z0-",//主页关注id
                            ssid = "j=c",//首页搜索id
                            fstxid = "jir";   //粉丝列表粉丝头像id
                    }
                }
                if (x == 1) { //火山版
                    packageName = "com.ss.android.ugc.live"
                    zpid = "container"
                    s = 1

                }

                if (x == 2) {
                    packageName = "my.maya.android"
                    zpid = "container"
                    s = 2
                }


                if (z == 0) {
                    d = 0
                    var arr = [s, d, f, mg, h, j, k, l, p, sc, xb, fx, ip1]
                    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
                        files.remove("/sdcard/pz.text")
                        files.append("/sdcard/pz.text", arr) //保存文本

                    } else {
                        log("没有找到名字文件，进行创建")
                        files.append("/sdcard/pz.text", arr) //保存文本
                        // files.write("/sdcard/pz.txt", arr);

                    }
                    // if (zcbb.includes(versionName)) {
                    //     log("当前音音版本，是指定版本，脚本开始运行..");
                    //     sfzdbb = 1 //指定版本
                    //     主程序1()
                    // } else {
                    //     log("当前音音版本不是指定版本，开始运行不限版本，当前版本可能不太稳定...");
                    主程序()

                    // }


                }

                if (z == 1) {
                    d = 1
                    var arr = [s, d, f, mg, h, j, k, l, p, sc, xb, fx, ip1]
                    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
                        files.remove("/sdcard/pz.text")
                        files.append("/sdcard/pz.text", arr) //保存文本

                    } else {
                        log("没有找到配置文件，进行创建")
                        files.append("/sdcard/pz.text", arr) //保存文本
                        // files.write("/sdcard/pz.txt", arr);

                    }
                    评论列表()
                }
                if (z == 2) {
                    d = 2
                    var arr = [s, d, f, mg, h, j, k, l, p, sc]
                    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
                        files.remove("/sdcard/pz.text")
                        files.append("/sdcard/pz.text", arr) //保存文本

                    } else {
                        log("没有找到名字文件，进行创建")
                        files.append("/sdcard/pz.text", arr) //保存文本
                        // files.write("/sdcard/pz.txt", arr);

                    }
                    点赞列表()
                }
                if (z == 3) {
                    d = 3
                    var arr = [s, d, f, mg, h, j, k, l, p, sc, fx]
                    if (files.exists("/sdcard/pz.text")) { //判断配置文本是否存在
                        files.remove("/sdcard/pz.text")
                        files.append("/sdcard/pz.text", arr) //保存文本

                    } else {
                        log("没有找到名字文件，进行创建")
                        files.append("/sdcard/pz.text", arr) //保存文本
                        // files.write("/sdcard/pz.txt", arr);

                    }
                    log('执行uid任务')
                    UID()
                }

            }




        })

    }

    function 私信(params) {
        packageName = "com.ss.android.ugc.aweme"
        zpid = "com.ss.android.ugc.aweme:id/container"
        s = 0
        versionName = context.getPackageManager().getPackageInfo(packageName, 0).versionName;
        versionName = versionName.replace('应用程序版本名称：', '')
        log('当前音音版本：' + versionName)
        打开抖音()
        log('打开音音，5秒后开始运行')
        sleep(5000)
        jgsj = ui.jgsj.text() * 1000
        tlsj = ui.tlsj.text() * 1000
        tlsj1 = ui.tlsj1.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        sxsl = ui.sxsl.text()
        var js = 0
        threads.start(function () {
            while (true) {
                descContains(",在线").visibleToUser().find().forEach(child => {
                    var mz = child.desc()
                    mz = mz.replace(",在线", "")
                    if (files.exists("/sdcard/sx.text")) { //判断昵称文本是否存在

                    } else {
                        log("没有找到名字文件，进行创建")
                        files.append("/sdcard/sx.text", "昵称文本" + "\n") //保存文本

                    }
                    var content = files.read("/sdcard/sx.text") //读取昵称文本
                    if (content.includes(mz)) {
                        log(mz + "，跳过")
                        sleep(2)
                    } else {
                        js = js + 1
                        var jg = random(jgsj, jgsj1)
                        var fkj = child
                        var zb = fkj.findOne(text("发私信")).bounds()
                        click(zb.centerX(), zb.centerY())
                        log('点发私信')
                        sleep(random(2000, 5000))
                        var zb = desc("表情").visibleToUser().findOne().bounds()
                        click(zb.centerX(), zb.centerY())
                        log('点表情')
                        sleep(random(2000, 5000))
                        if (desc("自定义表情").visibleToUser().exists()) {
                            log('选择自定义表情')
                            var zb = desc("自定义表情").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(random(2000, 5000))
                        } else {
                            log('在自定义表情页面')
                        }
                        var i = 0
                        var a = id("fz6").visibleToUser(true).find().length
                        id("fz6").visibleToUser(true).find().forEach(child => {
                            if (i == a - 1) {
                                var zb = child.bounds()
                                log('发送自定义表情')
                                click(zb.centerX(), zb.centerY())
                                sleep(random(2000, 5000))
                            }
                            i = i + 1

                        })
                        back()
                        sleep(1500)
                        back()
                        log('任务完成' + js + '/' + sxsl + '间隔时间：' + jg)
                        if (js == sxsl) {
                            home()
                            alert('任务完成')

                        }
                        sleep(jg)

                    }



                })
                scrollDown(0)
                sleep(3000)
            }

        })

    }

    function 分享(params) {
        packageName = "com.ss.android.ugc.aweme"
        zpid = "com.ss.android.ugc.aweme:id/container"
        s = 0
        versionName = context.getPackageManager().getPackageInfo(packageName, 0).versionName;
        versionName = versionName.replace('应用程序版本名称：', '')
        log('当前音音版本：' + versionName)
        打开抖音()
        log('打开音音，5秒后开始运行')
        sleep(5000)
        jgsj = ui.jgsj.text() * 1000
        tlsj = ui.tlsj.text() * 1000
        tlsj1 = ui.tlsj1.text() * 1000
        jgsj1 = ui.jgsj1.text() * 1000
        fxsl = ui.fxsl.text()
        var js = 0
        threads.start(function () {
            while (true) {
                desc("分享").visibleToUser().find().forEach(function (child, index) {
                    jgsj2 = random(jgsj, jgsj1)
                    var zb = child.bounds()
                    click(zb.centerX(), zb.centerY())
                    js = js + 1
                    log('分享完成：' + js + '/' + fxsl + '间隔时间：' + jgsj2)
                    if (js == fxsl) {
                        home()
                        alert('任务完成')
                        exit()
                    }
                    sleep(jgsj2)
                })

                scrollDown(0)
                sleep(2000)
            }

        })

    }

    function 只跑留痕(params) {
        threads.start(function () {
            log('打开音音.10秒后开始运行')
            startTime = new Date(); // 记录脚本开始时间
            log('当前时间:' + startTime)
            打开抖音()
            if (jc == 1) {
                检测数据()
                sleep(500)
                数据记录()
                fssl = matches[matches.length - 1]
                var regex = /日(.*?)粉/;
                fssl = fssl.match(regex)[1];

                // log('粉丝记录：' + "\n" + jlwb)
                //log('昵称：' + nickname + ' 点赞数量：' + favoriting_count + '关注数量：' + following_count + '粉丝数量：' + follower_count)
                var zf = parseInt(follower_count) - parseInt(fssl)
                log('今日张粉：' + zf)
                ui.run(function () {
                    g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                });

            }
            sleep(10000)
            var sl = 0
            var yxcs = 0
            var a = 0
            while (true) {
                if (kz == 0) {
                    a = 0
                    log('开始运行..')
                    if (id(fstxid).visibleToUser().exists()) {
                        descContains("头像").visibleToUser().find().forEach(child => {// 获取列表头像控件

                            jgsj2 = random(jgsj, jgsj1)
                            tlsj2 = random(tlsj, tlsj1)
                            var parent1 = child.parent()  //通过头像控件，查找父控件
                            var parent = 'parent1.parent().desc()'
                            sleep(500)
                            endTime = new Date();
                            runningTime = endTime.getTime() - startTime.getTime(); // 获取时间差，单位为毫秒
                            minutes = runningTime / 60000  //运行时间毫秒转分钟
                            var minutes1 = 时间转换(runningTime)
                            fssl = matches[matches.length - 1]
                            var regex = /日(.*?)粉/;
                            fssl = fssl.match(regex)[1];
                            ui.run(function () {
                                zf = parseInt(follower_count) - parseInt(fssl)
                                g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf + '\n' + '运行时间：' + minutes1);
                                // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                            });
                            // log("脚本运行时间：" + minutes1 );
                            if (yxcs == 100) {
                                yxcs = 0
                                if (jc == 1) {
                                    检测数据()
                                    log('初始粉丝：' + fssl + '现在粉丝：' + follower_count)
                                    zf = parseInt(follower_count) - parseInt(fssl)
                                    log('今日张粉：' + zf)
                                    ui.run(function () {
                                        g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                                        // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                                    });

                                }
                            }


                            if (parent == null) {

                            } else {
                                if (parent.includes("对方关注了你")) { //判断是否为粉丝

                                    log(parent + "，跳过")
                                    sleep(500)

                                } else {
                                    var zb = child.bounds()
                                    var mz = child.desc()
                                    mz = mz.replace("头像", "")
                                    if (files.exists("/sdcard/mz.text")) { //判断昵称文本是否存在

                                    } else {
                                        log("没有找到名字文件，进行创建")
                                        files.append("/sdcard/mz.text", "昵称文本" + "\n") //保存文本

                                    }
                                    var content = files.read("/sdcard/mz.text") //读取昵称文本
                                    if (content.includes(mz)) {
                                        log(mz + "，跳过")
                                        sleep(2)
                                    } else {
                                        log("点头像进主页")
                                        files.append("/sdcard/mz.text", mz + "\n") //保存文本
                                        click(zb.centerX(), zb.centerY()) //粉丝列表点头像
                                        log(mz + ",主页停留：" + tlsj2)
                                        sleep(tlsj2)
                                        if (id(zygzid).visibleToUser().exists()) {
                                            log('成功进入粉丝主页,返回')
                                            back()
                                            sl = sl + 1
                                            log('留痕成功：' + sl + '/' + zlh)
                                            log('间隔时间:' + jgsj2)
                                            sleep(jgsj2)

                                        } else {
                                            log('未成功进入粉丝主页..')
                                            sleep(1000)
                                            if (id(fstxid).visibleToUser().exists()) {
                                                log('在粉丝列表，开始下一个..')
                                            } else {
                                                // log('未在粉丝列表，出现未知错误，请勿关闭音音，截图请联系客服处理...')
                                                // log('脚本暂停运行...')
                                                // sleep(1000000000000)
                                                log('未在粉丝列表，切换对标账号')

                                                换对标号()
                                            }
                                        }

                                    }

                                }
                            }
                            if (sl == zlh) {
                                log('任务完成，开始养号')
                                养号()
                                while (true) {
                                    if (yhwc == 1) {
                                        home()
                                        log('开始休息..')
                                        var d = new Date();
                                        var kssj = parseInt(d.valueOf() / 1000) //开始时间
                                        while (true) {
                                            sleep(30000)
                                            var d = new Date();
                                            var xzsj = parseInt(d.valueOf() / 1000) //开始时间
                                            var jssj = kssj + zxx
                                            var sysj = parseInt(jssj) - parseInt(xzsj)
                                            sysj = 时间转换(sysj * 1000)
                                            log('休息剩余时间：' + sysj)
                                            if (jc == 1) {
                                                检测数据()
                                                数据记录()
                                                var fssl = matches[matches.length - 1]
                                                var regex = /日(.*?)粉/;
                                                fssl = fssl.match(regex)[1];
                                                var zf = parseInt(follower_count) - parseInt(fssl)
                                                ui.run(function () {
                                                    g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                                                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                                                });

                                            }
                                            if (xzsj > jssj) {
                                                yhwc = 2
                                                打开抖音()
                                                log('休息时间结束，10秒后开始执行任务...')
                                                sleep(10000)
                                                break

                                            }

                                        }

                                    } else {
                                        if (yhwc == 2) {
                                            yhwc = 0
                                            sl = 0
                                            break
                                        }

                                    }
                                    sleep(30000)

                                }
                            }

                            if (id(fstxid).visibleToUser().exists()) {
                                log('在粉丝列表')

                            } else {
                                log('未在粉丝列表，切换对标账号')

                                换对标号()
                                sleep(2500)
                            }



                        })


                        if (textContains('暂不支持查看').visibleToUser().exists()) {
                            log('当前列表已经完成。')
                            换对标号()
                            sleep(2500)
                        } else {
                            if (textContains('暂时没有更多了').visibleToUser().exists()) {
                                log('当前列表已经完成。')
                                换对标号()
                                sleep(2500)

                            } else {
                                if (scrollDown(0)) {
                                    log('翻页')
                                    sleep(2000)

                                } else {
                                    if (textContains('加载').visibleToUser().exists()) {
                                        log('翻页失败,检测到加载。。')
                                        var zb = textContains('加载').visibleToUser().findOne().bounds()
                                        click(zb.centerX(), zb.centerY())
                                        sleep(3000)

                                    } else {
                                        log('翻页失败，未知原因')
                                        sleep(3000)
                                    }


                                }


                            }

                        }


                    } else {
                        log("不在粉丝列表，切换对标账号")
                        换对标号()
                        sleep(3000)
                    }

                } else {
                    a = a + 1
                    log('暂停中' + a)
                    sleep(2000)

                }

            }


        })

    }

    function 主程序(params) {

        threads.start(function () {

            log('打开音音.5秒后开始运行')
            home()
            sleep(1500)
            log('读取数据...')

            打开抖音()
            if (jc == 1) {
                检测数据()
                sleep(500)
                数据记录()
                var fssl = matches[matches.length - 1]
                var regex = /日(.*?)粉/;
                if (matches.length > 1) {
                    var zrfs = matches[matches.length - 2]
                    zrfs = zrfs.match(regex)[1]
                    var zrzf = parseInt(fssl) - parseInt(zrfs)
                }
                fssl = fssl.match(regex)[1];
                // log('粉丝记录：' + "\n" + jlwb)
                //log('昵称：' + nickname + ' 点赞数量：' + favoriting_count + '关注数量：' + following_count + '粉丝数量：' + follower_count)
                var zf = parseInt(follower_count) - parseInt(fssl)
                // log('今日张粉：' + zf)
                ui.run(function () {
                    g.w.tj.setText('昵称：' + nickname + '\n' + '实时粉丝：' + follower_count + '\n' + '今日张粉：' + zf + '    昨日张粉：' + zrzf);
                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                });
            }
            startTime = new Date(); // 记录脚本开始时间
            log('当前时间:' + startTime)
            log('10秒后开始运行。。。')
            sleep(10000)
            var yxcs = 0

            while (true) {
                暂停控制()
                if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                    暂停控制()
                    descContains("头像").visibleToUser().find().forEach(child => {// 获取列表头像控件
                        yxcs = yxcs + 1
                        jgsj2 = random(jgsj, jgsj1)
                        tlsj2 = random(tlsj, tlsj1)
                        zpllsj2 = random(zpllsj, zpllsj1)
                        var parent1 = child.parent()  //通过头像控件，查找父控件
                        // var parent = parent1.parent().desc()
                        // log(parent)
                        var parent = 'parent1.parent().desc()'
                        sleep(500)
                        endTime = new Date();
                        runningTime = endTime.getTime() - startTime.getTime(); // 获取时间差，单位为毫秒
                        minutes = runningTime / 60000  //运行时间毫秒转分钟
                        var minutes1 = 时间转换(runningTime)
                        ui.run(function () {
                            var zf = parseInt(follower_count) - parseInt(fssl)
                            g.w.tj.setText('昵称：' + nickname + '  实时粉丝：' + follower_count + '\n' + '今日张粉：' + zf + '    昨日张粉：' + zrzf + '\n' + sjtj + '\n' + '运行时间：' + minutes1);
                            // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                        });
                        // log("脚本运行时间：" + minutes1 );
                        if (yxcs == 100) { // 100次 检测一次数据
                            yxcs = 0
                            if (jc == 1) {
                                检测数据()
                                log('初始粉丝：' + fssl + '现在粉丝：' + follower_count)
                                var zf = parseInt(follower_count) - parseInt(fssl)
                                log('今日张粉：' + zf)
                                ui.run(function () {
                                    g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                                });

                            }
                        }
                        if (parent == null) {

                        } else {
                            if (parent.includes("对方关注了你")) { //判断是否为粉丝
                                log(parent + "，跳过")
                                sleep(500)

                            } else {
                                var zb = child.bounds()
                                var mz = child.desc()
                                mz = mz.replace("头像", "")
                                if (files.exists("/sdcard/mz.text")) { //判断昵称文本是否存在

                                } else {
                                    log("没有找到名字文件，进行创建")
                                    files.append("/sdcard/mz.text", "昵称文本" + "\n") //保存文本

                                }
                                var content = files.read("/sdcard/mz.text") //读取昵称文本
                                if (content.includes(mz)) {
                                    log(mz + "，跳过")
                                    sleep(2)
                                } else {
                                    log("点头像进主页")
                                    files.append("/sdcard/mz.text", mz + "\n") //保存文本
                                    click(zb.centerX(), zb.centerY()) //粉丝列表点头像
                                    log(mz + ",主页停留：" + tlsj2)
                                    sleep(tlsj2)
                                    if (desc("更多").visibleToUser().exists()) {
                                        log('成功进入主页..')
                                        if (desc("用户头像").visibleToUser().exists()) {
                                            if (xb == 0) {
                                                任务()
                                                暂停控制()
                                                if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                                                    log('任务后在粉丝列表')
                                                } else {
                                                    if (desc("用户头像").visibleToUser().exists()) {
                                                        log('任务后在主页，返回')
                                                        back()
                                                        sleep(1500)
                                                    }
                                                }

                                            } else {
                                                性别识别()
                                                sleep(1000)
                                                if (xb == 1) {
                                                    if (xbsb == 1) {
                                                        任务()

                                                        暂停控制()
                                                        if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                                                            log('任务后在粉丝列表')
                                                        } else {
                                                            if (desc("用户头像").visibleToUser().exists()) {
                                                                log('任务后在主页，返回')
                                                                back()
                                                                sleep(1500)
                                                            }
                                                        }


                                                    } else {
                                                        log('性别不符合要求')
                                                        back()
                                                        sleep(jgsj)
                                                    }

                                                } else {
                                                    if (xb == 2) {
                                                        if (xbsb == 2) {
                                                            任务()

                                                            暂停控制()
                                                            if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                                                                log('任务后在粉丝列表')
                                                            } else {
                                                                if (desc("用户头像").visibleToUser().exists()) {
                                                                    log('任务后在主页，返回')
                                                                    back()
                                                                    sleep(1500)
                                                                }
                                                            }


                                                        } else {
                                                            log('性别不符合要求')
                                                            back()
                                                            sleep(jgsj)
                                                        }

                                                    }
                                                }
                                            }

                                        } else {
                                            log('未检测到用户头像，返回..')
                                            back()
                                            sleep(1500)
                                        }

                                    } else {
                                        log('未成功进入主页，检测是否在粉丝列表')
                                        sleep(1000)

                                        if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                                            log('点头像后，粉丝列表')
                                        } else {
                                            if (desc("用户头像").visibleToUser().exists()) {
                                                log('点头像后，未在粉丝列表.执行返回')
                                                back()
                                                sleep(2000)
                                            }
                                        }


                                    }



                                }

                            }
                        }
                        暂停控制()


                    })

                    if (descStartsWith('粉丝').descEndsWith('，按钮').clickable(false).visibleToUser().exists()) {
                        log('在粉丝列表...')
                    } else {
                        log('未在粉丝列表,更换对标账号..')
                        换对标号()
                        sleep(2000)
                    }


                    if (textContains('暂不支持查看').visibleToUser().exists()) {
                        log('当前列表已经完成。')
                        换对标号()
                        sleep(2500)
                    } else {
                        if (textContains('暂时没有更多了').visibleToUser().exists()) {
                            log('当前列表已经完成。')
                            换对标号()
                            sleep(2500)

                        } else {
                            if (scrollDown(0)) {
                                log('翻页')
                                sleep(2000)

                            } else {
                                if (textContains('加载').visibleToUser().exists()) {
                                    log('翻页失败,检测到加载。。')
                                    var zb = textContains('加载').visibleToUser().findOne().bounds()
                                    click(zb.centerX(), zb.centerY())
                                    sleep(3000)

                                } else {
                                    log('翻页失败，未知原因')
                                    sleep(3000)
                                }
                                //换对标号()
                                // sleep(25000000000)
                                // break

                            }


                        }

                        b = 0

                    }


                } else {
                    log("不在粉丝列表，切换对标账号")
                    换对标号()
                    sleep(3000)
                }

            }
        })


    }
    function 主程序1(params) { //指定版本

        threads.start(function () {

            log('打开音音.5秒后开始运行')
            home()
            sleep(1500)
            log('读取数据...')

            打开抖音()

            sleep(2500)

            // var pl = 0
            // var k = 0
            // var sb = 0
            // var gzsb = 0
            // var gzzsb = 0
            // var zsb = 0
            if (jc == 1) {
                检测数据()
                sleep(500)
                数据记录()
                var fssl = matches[matches.length - 1]
                var regex = /日(.*?)粉/;
                fssl = fssl.match(regex)[1];
                log('粉丝记录：' + "\n" + jlwb)
                //log('昵称：' + nickname + ' 点赞数量：' + favoriting_count + '关注数量：' + following_count + '粉丝数量：' + follower_count)
                var zf = parseInt(follower_count) - parseInt(fssl)
                log('今日张粉：' + zf)
                ui.run(function () {
                    g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                });
            }
            startTime = new Date(); // 记录脚本开始时间
            log('当前时间:' + startTime)
            log('10秒后开始运行。。。')
            sleep(10000)
            var yxcs = 0

            while (true) {
                暂停控制()
                if (id(fstxid).visibleToUser().exists()) {
                    暂停控制()
                    descContains("头像").visibleToUser().find().forEach(child => {// 获取列表头像控件
                        yxcs = yxcs + 1
                        jgsj2 = random(jgsj, jgsj1)
                        tlsj2 = random(tlsj, tlsj1)
                        zpllsj2 = random(zpllsj, zpllsj1)
                        var parent1 = child.parent()  //通过头像控件，查找父控件
                        // var parent = parent1.parent().desc()
                        // log(parent)
                        var parent = 'parent1.parent().desc()'
                        sleep(500)
                        endTime = new Date();
                        runningTime = endTime.getTime() - startTime.getTime(); // 获取时间差，单位为毫秒
                        minutes = runningTime / 60000  //运行时间毫秒转分钟
                        var minutes1 = 时间转换(runningTime)
                        ui.run(function () {
                            var zf = parseInt(follower_count) - parseInt(fssl)
                            g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf + '\n' + '运行时间：' + minutes1);
                            // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                        });
                        // log("脚本运行时间：" + minutes1 );
                        if (yxcs == 100) {
                            yxcs = 0
                            if (jc == 1) {
                                检测数据()
                                log('初始粉丝：' + fssl + '现在粉丝：' + follower_count)
                                var zf = parseInt(follower_count) - parseInt(fssl)
                                log('今日张粉：' + zf)
                                ui.run(function () {
                                    g.w.tj.setText('昵称：' + nickname + '\n' + '粉丝数量：' + follower_count + '\n' + '今日张粉：' + zf);
                                    // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                                });

                            }
                        }


                        if (parent == null) {

                        } else {
                            if (parent.includes("对方关注了你")) { //判断是否为粉丝

                                log(parent + "，跳过")
                                sleep(500)

                            } else {
                                var zb = child.bounds()
                                var mz = child.desc()
                                mz = mz.replace("头像", "")
                                if (files.exists("/sdcard/mz.text")) { //判断昵称文本是否存在

                                } else {
                                    log("没有找到名字文件，进行创建")
                                    files.append("/sdcard/mz.text", "昵称文本" + "\n") //保存文本

                                }
                                var content = files.read("/sdcard/mz.text") //读取昵称文本
                                if (content.includes(mz)) {
                                    log(mz + "，跳过")
                                    sleep(2)
                                } else {
                                    log("点头像进主页")
                                    files.append("/sdcard/mz.text", mz + "\n") //保存文本
                                    click(zb.centerX(), zb.centerY()) //粉丝列表点头像
                                    log(mz + ",主页停留：" + tlsj2)
                                    sleep(tlsj2)
                                    if (id(zygzid).visibleToUser().exists()) {
                                        log('成功进入粉丝主页')
                                        if (desc("用户头像").visibleToUser().exists()) {
                                            if (xb == 0) { //未选择性别，开始任务
                                                任务()
                                                暂停控制()
                                                if (id(zygzid).visibleToUser().exists()) {
                                                    log('任务后在主页，返回')
                                                    back()
                                                    sleep(1500)
                                                }


                                            } else {
                                                性别识别()
                                                sleep(1000)
                                                if (xb == 1) {
                                                    if (xbsb == 1) { //性别男
                                                        任务()

                                                        暂停控制()
                                                        if (id(zygzid).visibleToUser().exists()) {
                                                            log('任务后在主页，返回')
                                                            back()
                                                            sleep(1500)
                                                        }


                                                    } else {
                                                        log('性别不符合要求')
                                                        back()
                                                        sleep(jgsj)
                                                    }

                                                } else {
                                                    if (xb == 2) { //性别女
                                                        if (xbsb == 2) {
                                                            任务()

                                                            暂停控制()
                                                            if (id(zygzid).visibleToUser().exists()) {
                                                                log('任务后在主页，返回')
                                                                back()
                                                                sleep(1500)
                                                            }



                                                        } else {
                                                            log('性别不符合要求')
                                                            back()
                                                            sleep(jgsj)
                                                        }

                                                    }
                                                }
                                            }

                                        } else {
                                            log('未检测到头像，返回')
                                            back()
                                            sleep(2000)
                                        }

                                    } else {
                                        log('未成功进入粉丝主页..')
                                        sleep(1000)
                                        if (id(fstxid).visibleToUser().exists()) {
                                            log('在粉丝列表，开始下一个..')
                                        } else {
                                            // log('未在粉丝列表，出现未知错误，请勿关闭音音，截图请联系客服处理...')
                                            // log('脚本暂停运行...')
                                            // sleep(1000000000000)
                                            log('未在粉丝列表，切换对标账号')

                                            换对标号()
                                        }
                                    }

                                }

                            }
                        }
                        暂停控制()
                        if (id(fstxid).visibleToUser().exists()) {
                            log('在粉丝列表')

                        } else {
                            log('未在粉丝列表，切换对标账号')

                            换对标号()
                            sleep(2500)
                        }



                    })
                    if (yxy == 0) { //第一轮休息
                        if (minutes > yxsj) { //达到指定运行时间，开始休息
                            yxy = 1
                            log('达到指定运行时间，开始休息')
                            home()
                            var js = 0
                            while (true) {
                                js = js + 1
                                sleep(60000)
                                上滑()
                                log('休息时间：' + js + '/' + xxsj + ' 分钟')
                                if (js == xxsj) {
                                    break
                                }

                            }
                            打开抖音()
                            startTime = new Date(); // 记录脚本开始时间
                            log('当前时间:' + startTime)
                            log('10秒后开始运行。。。')
                            sleep(10000)
                        }

                    } else {
                        if (minutes > yxsj1) { //达到指定运行时间，开始养号
                            log('达到指定运行时间，开始养号')
                            养号()
                            while (true) {
                                log('养号中')
                                sleep(3000)
                                if (yhwc == 1) {
                                    yhwc = 0
                                    break
                                }

                            }

                        }
                        if (yxy == 1) {
                            var js = 0
                            log('养号结束，开始第二轮休息')
                            home()
                            while (true) {
                                js = js + 1
                                sleep(60000)
                                上滑()
                                log('休息时间：' + js + '/' + xxsj1 + ' 分钟')
                                if (js == xxsj1) {
                                    break
                                }

                            }
                            打开抖音()
                            yxy = 0
                            startTime = new Date(); // 记录脚本开始时间
                            log('当前时间:' + startTime)
                            log('10秒后开始运行。。。')
                            sleep(10000)


                        }


                    }


                    if (textContains('暂不支持查看').visibleToUser().exists()) {
                        log('当前列表已经完成。')
                        换对标号()
                        sleep(2500)
                    } else {
                        if (textContains('暂时没有更多了').visibleToUser().exists()) {
                            log('当前列表已经完成。')
                            换对标号()
                            sleep(2500)

                        } else {
                            if (scrollDown(0)) {
                                log('翻页')
                                sleep(2000)

                            } else {
                                if (textContains('加载').visibleToUser().exists()) {
                                    log('翻页失败,检测到加载。。')
                                    var zb = textContains('加载').visibleToUser().findOne().bounds()
                                    click(zb.centerX(), zb.centerY())
                                    sleep(3000)

                                } else {
                                    log('翻页失败，未知原因')
                                    sleep(3000)
                                }
                                //换对标号()
                                // sleep(25000000000)
                                // break

                            }


                        }

                        b = 0

                    }


                } else {
                    log("不在粉丝列表，切换对标账号")
                    换对标号()
                    sleep(3000)
                }

            }
        })


    }

    function 评论列表(params) {
        log(shuzu)
        sleep(1500)
        打开抖音()
        sleep(1500)

        log("评论列表")
        log("脚本开始运行")

        打开抖音()
        sleep(3500)
        // desc("首页，按钮").waitFor()
        var pl = 0
        var k = 0
        while (true) {
            if (textContains('广告').visibleToUser().exists()) {
                log('广告,跳过')
                上滑()
                sleep(2500)

            } else {
                if (textContains('点击下载').visibleToUser().exists()) {
                    log('广告,跳过')
                    上滑()
                    sleep(2500)

                } else {
                    if (text('评论').visibleToUser().exists()) {
                        log('未检测到评论')
                        上滑()
                        sleep(1500)

                    } else {
                        log('点评论')
                        作品点评论()
                        sleep(6000)
                        // descContains('的头像').waitFor()
                        if (desc("放大评论区").exists()) {
                            var zb = desc("放大评论区").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            log('点全屏')
                            sleep(3000)
                        }
                        while (true) {

                            descContains('的头像').visibleToUser().find().forEach(function (child, index) {
                                var zb = child.bounds()
                                var mz = child.desc()
                                jgsj2 = random(jgsj, jgsj1)
                                tlsj2 = random(tlsj, tlsj1)
                                zpllsj2 = random(zpllsj, zpllsj1)
                                mz = mz.replace("的头像", "")
                                log(mz)
                                if (files.exists("/sdcard/mz.text")) { //判断昵称文本是否存在

                                } else {
                                    log("没有找到名字文件，进行创建")
                                    files.append("/sdcard/mz.text", "昵称文本" + "\n") //保存文本

                                }
                                var content = files.read("/sdcard/mz.text") //读取昵称文本
                                if (content.includes(mz)) {
                                    log(mz + "----跳过")
                                    sleep(2)
                                } else {
                                    log("点头像进主页")
                                    files.append("/sdcard/mz.text", mz + "\n") //保存文本

                                    click(zb.centerX(), zb.centerY()) //粉丝列表点头像

                                    log(mz + ",主页停留：" + tlsj2)
                                    sleep(tlsj2)
                                    if (desc("更多").visibleToUser().exists()) {
                                        log('成功进入主页..')
                                        if (desc("用户头像").visibleToUser().exists()) {
                                            log('检测到用户头像')
                                            if (kqip == 1) { //ip地址检测
                                                if (textContains("IP：").visibleToUser().exists()) {
                                                    var ipdz = textContains("IP：").visibleToUser().findOne().text()
                                                    if (ipdz.includes(ip)) {
                                                        log('地址符合要求，开始任务')
                                                        if (xb == 0) {
                                                            任务()

                                                        } else {
                                                            性别识别()
                                                            sleep(1000)
                                                            if (xb == 1) {
                                                                if (xbsb == 1) {
                                                                    任务()

                                                                } else {
                                                                    log('性别不符合要求')
                                                                    back()
                                                                    sleep(jgsj2)
                                                                }

                                                            } else {
                                                                if (xb == 2) {
                                                                    if (xbsb == 2) {
                                                                        任务()

                                                                        暂停控制()

                                                                    } else {
                                                                        log('性别不符合要求')
                                                                        back()
                                                                        sleep(jgsj2)
                                                                    }

                                                                }
                                                            }
                                                        }

                                                    } else {
                                                        log('地址不符合要求，返回')
                                                        back()
                                                        sleep(2000)
                                                    }
                                                } else {
                                                    log('未检测到ip地址，返回')
                                                    back()
                                                    sleep(2000)

                                                }

                                            } else {
                                                if (xb == 0) {
                                                    任务()

                                                } else {
                                                    性别识别()
                                                    sleep(1000)
                                                    if (xb == 1) {
                                                        if (xbsb == 1) {
                                                            任务()

                                                        } else {
                                                            log('性别不符合要求')
                                                            back()
                                                            sleep(jgsj2)
                                                        }

                                                    } else {
                                                        if (xb == 2) {
                                                            if (xbsb == 2) {
                                                                任务()

                                                                暂停控制()

                                                            } else {
                                                                log('性别不符合要求')
                                                                back()
                                                                sleep(jgsj2)
                                                            }

                                                        }
                                                    }
                                                }
                                            }


                                        } else {
                                            log('未检测到用户头像，返回..')
                                            back()
                                            sleep(1500)
                                        }

                                    } else {
                                        log('未成功进入主页，检测是否在粉丝列表')
                                        if (descContains("的头像").visibleToUser().exists()) {
                                            log('在评论列表...')
                                        } else {
                                            log('未在评论列表.执行返回')
                                            back()
                                            sleep(2000)
                                        }
                                    }



                                }

                            })

                            if (textContains("暂时没有更多了").visibleToUser().exists()) {
                                log('切换下一个视频')
                                back()
                                sleep(2000)
                                上滑()
                                sleep(2000)
                                break

                            } else {
                                log('上滑')
                                上滑()
                                sleep(2000)
                            }


                        }
                    }
                }


            }


        }


    }

    function 点赞列表(params) {

        threads.start(function () {
            log('打开音音')

            home()
            sleep(1500)
            log('读取数据...')

            打开抖音()

            sleep(2500)
            if (jc == 1) {
                检测数据()

                sleep(500)
                数据记录()
                var fssl = matches[matches.length - 1]
                var regex = /日(.*?)粉/;
                fssl = fssl.match(regex)[1];
                log('粉丝记录：' + "\n" + jlwb)
                log('昵称：' + nickname + ' 点赞数量：' + favoriting_count + '关注数量：' + following_count + '粉丝数量：' + follower_count)
            }

            var pl = 0
            var k = 0
            var sb = 0
            var zsb = 0
            搜索()

            while (true) {
                暂停控制()

                if (id("user_avatar").visibleToUser().exists()) {
                    var jgsj2 = random(jgsj, jgsj1)
                    var tlsj2 = random(tlsj, tlsj1)
                    var zpllsj2 = random(zpllsj, zpllsj1)
                    if (jc == 1) {
                        检测数据()
                        log('初始粉丝：' + fssl + '现在粉丝：' + follower_count)

                    }
                    if (gnxz == 0) {
                        if (lh1 == 0) { //留痕选择
                            作品页面点头像()
                            lhsl1 = lhsl1 + 1
                            log("当前留痕数量：" + lhsl1 + "/" + lhsl)

                            sleep(tlsj2)

                            if (lhsl1 == lhsl) {
                                gnxz = 1
                                log('留痕完成，开始下一个任务')


                            }

                            back()
                            log('间隔时间')

                            sleep(jgsj2)

                        } else {
                            gnxz = 1
                            log('留痕未选择，开始下一功能')


                        }
                    } else {
                        var shuzu1 = shuzu.length - 1
                        if (shuzu.length == 0) {
                            home()
                            alert('所有任务完成，程序结束')
                            exit()
                        }

                        var ind = random(0, shuzu1);
                        var randomNum = shuzu[ind];

                        if (randomNum == 1) {  //关注
                            log('执行关注,主页停留时间：' + tlsj2)
                            作品页面点头像()
                            sleep(tlsj2)
                            if (text("关注").visibleToUser().exists()) {
                                if (jc == 1) {
                                    检测数据()

                                }
                                var w = 0
                                if (pl < dz) {
                                    主页关注()
                                    gzsl1 = gzsl1 + 1
                                    pl = pl + 1
                                } else {
                                    log('休息，不点')

                                    k = k + 1
                                    w = 1
                                    if (k > lh) {
                                        pl = 0
                                        k = 0

                                    }
                                }
                                log('当前关注数量：' + gzsl1 + "/" + gzsl)


                                if (gzsl1 == gzsl) {
                                    var target = 1;
                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                        if (shuzu[i] === target) {
                                            shuzu.splice(i, 1);
                                        }
                                    }
                                    log('关注任务完成')

                                }
                                sleep(2000)
                                back()
                                log('间隔时间：' + jgsj2)

                                sleep(jgsj2)
                                if (w == 0) {
                                    if (jc == 1) {
                                        检测数据1()

                                        log('关注前：' + following_count + '关注后：' + following_count1)
                                        if (following_count == following_count1) {
                                            sb = sb + 1
                                            zsb = zsb + 1
                                            log('点赞失败:' + sb)
                                            if (sb == dzsb) { //休息
                                                var t = 0
                                                while (true) {
                                                    t = t + 1
                                                    log('关注失败达到指定数量，休息:' + t)
                                                    home()
                                                    toast('休息中')
                                                    sleep(60000)
                                                    if (t == xiuxi) {
                                                        log('达到休息时间，开始运行')
                                                        打开抖音()
                                                        sb = 0
                                                        sleep(2500)
                                                        break
                                                    }

                                                }
                                            }
                                            if (zsb == dzsb1) {
                                                var target = 1;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('关注失败达到指定数量，不在执行关注')
                                            }

                                        } else {
                                            sb = 0
                                            zsb = 0
                                        }
                                    }
                                }
                            } else {
                                log('未检测到关注按钮，返回')

                                back()
                                sleep(2000)
                            }

                        } else {
                            if (randomNum == 2) {//头像点赞
                                log('执行头像点赞')
                                作品页面点头像()
                                sleep(tlsj2)

                                if (desc("用户头像").visibleToUser().exists()) {
                                    主页点头像()
                                    sleep(1500)
                                    if (pl < dz) {
                                        if (text("点赞").visibleToUser().exists()) {
                                            var zb = text("点赞").visibleToUser().findOne().bounds()
                                            click(zb.centerX(), zb.centerY())
                                            txsl = txsl + 1
                                            log('当前头像点赞数量：' + txsl + "/" + txsl1)

                                            if (txsl == txsl1) {
                                                var target = 2;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('头像点赞任务完成，开始下一个任务')

                                            }
                                            sleep(1500)
                                        }
                                        pl = pl + 1
                                    } else {
                                        log('休息，不点')


                                        k = k + 1
                                        if (k > lh) {
                                            pl = 0
                                            k = 0
                                        }
                                    }

                                    sleep(1500)

                                    back()
                                    sleep(1500)
                                }
                                back()
                                log('间隔时间：' + jgsj2)
                                sleep(jgsj2)

                            } else {
                                if (randomNum == 3) {//作品点赞
                                    log('执行作品点赞')
                                    if (jc == 1) {
                                        检测数据()

                                    }
                                    var w = 0

                                    if (pl < dz) {
                                        作品点赞()
                                        if (sfdz == 0) {
                                            zpdz2 = zpdz2 + 1
                                            log('作品点赞完成：' + zpdz2 + "/" + zpdz)
                                            if (zpdz2 == zpdz) {
                                                var target = 3;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('作品点赞任务完成')

                                            }
                                            sleep(500)
                                            pl = pl + 1
                                        }


                                    } else {
                                        log('休息，不点')

                                        k = k + 1
                                        w = 1
                                        if (k > lh) {
                                            pl = 0
                                            k = 0
                                        }
                                    }

                                    log('间隔时间：' + jgsj2)

                                    sleep(jgsj2)
                                    if (sfdz == 0) {
                                        if (w == 0) {
                                            if (jc == 1) {

                                                检测数据1()
                                                log('点赞前：' + favoriting_count + '点赞后：' + favoriting_count1)
                                                if (favoriting_count == favoriting_count1) {
                                                    sb = sb + 1
                                                    zsb = zsb + 1
                                                    log('点赞失败:' + sb)
                                                    if (sb == dzsb) { //休息
                                                        var t = 0
                                                        home()
                                                        while (true) {
                                                            t = t + 1
                                                            log('点赞失败达到指定数量，休息:' + t)

                                                            toast('休息中')
                                                            sleep(60000)
                                                            if (t == xiuxi) {
                                                                log('达到休息时间，开始运行')
                                                                打开抖音()
                                                                sb = 0
                                                                sleep(2500)
                                                                break
                                                            }

                                                        }
                                                    }
                                                    if (zsb == dzsb1) {
                                                        var target = 3;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('点赞失败达到指定数量，不在执行点赞')
                                                    }

                                                } else {
                                                    sb = 0
                                                    zsb = 0
                                                }
                                            }
                                        }

                                    }



                                } else {
                                    if (randomNum == 4) {//评论
                                        log('执行作品评论')

                                        if (pl < dz) {
                                            作品点评论()
                                            sssl = sssl + 1
                                            sleep(3000)
                                            if (desc("表情").exists()) {
                                                click(desc("表情").visibleToUser().findOne().bounds())
                                                sleep(1500)
                                                if (descContains("], 按钮").exists()) {
                                                    for (var q = 0; q < 3; q++) {
                                                        var a = 0
                                                        var i = random(0, 20)
                                                        descContains("], 按钮").visibleToUser(true).find().forEach(child => {
                                                            a = a + 1
                                                            if (i == a) {
                                                                var zb = child.bounds()
                                                                click(zb.centerX(), zb.centerY())
                                                                sleep(1000)
                                                            }

                                                        })
                                                    }
                                                }
                                                if (text("发送").exists()) {
                                                    text("发送").visibleToUser().visibleToUser().find().forEach(function (child, index) {
                                                        var zb = child.bounds()
                                                        if (index == 1) {
                                                            click(zb.centerX(), zb.centerY())
                                                            sleep(3000)
                                                        }
                                                    })
                                                }
                                                back()
                                            }
                                            log('作品评论完成：' + sssl + "/" + plsl)

                                            if (sssl == plsl) {
                                                var target = 4;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('作品评论任务完成')
                                            }
                                            sleep(1500)
                                            pl = pl + 1

                                        } else {
                                            log('休息，不点')

                                            k = k + 1
                                            if (k > lh) {
                                                pl = 0
                                                k = 0
                                            }
                                        }

                                        sleep(jgsj)



                                    } else {
                                        if (randomNum == 5) {//私信
                                            log('执行私信')
                                            作品页面点头像()
                                            sleep(tlsj)
                                            if (desc("更多").visibleToUser().exists()) {
                                                log('主页点右上角更多..')
                                                var xy = desc("更多").visibleToUser().findOne().bounds()
                                                click(xy.centerX(), xy.centerY())
                                                sleep(2500)
                                                if (text("发私信").visibleToUser().exists()) {

                                                    var z = sxplnr.split(',').length - 1
                                                    var sjs = random(0, z)
                                                    var r = sxplnr.split(",") //分割内容
                                                    var nr = r[sjs]
                                                    var xy = text("发私信").visibleToUser().findOne().bounds()
                                                    log('点发私信')
                                                    click(xy.centerX(), xy.centerY())
                                                    sleep(3500)
                                                    log('点发送消息')
                                                    if (text("发送消息").visibleToUser().exists()) {
                                                        click("发送消息")
                                                        sleep(1500)
                                                        log(nr)
                                                        setText(nr)
                                                        log('输入内容')
                                                        sleep(random(1000, 3000))
                                                        var xy = desc("发送").visibleToUser().findOne().bounds()
                                                        log('发送')
                                                        click(xy.centerX(), xy.centerY())
                                                        sxsl1 = sxsl1 + 1
                                                        log('私信完成：' + sxsl1 + "/" + sxsl)

                                                        if (sxsl1 == sxsl) {
                                                            var target = 5;
                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                if (shuzu[i] === target) {
                                                                    shuzu.splice(i, 1);
                                                                }
                                                            }
                                                            log('作私信任务完成')

                                                        }

                                                        sleep(3000)
                                                        log('返回')
                                                        back()
                                                        sleep(2500)
                                                        if (textContains("一口气发太多啦")) {
                                                            log('text("一口气发太多啦，先休息一下吧")')
                                                            alert("一口气发太多啦，先休息一下吧")

                                                        }
                                                        if (desc("表情").exists()) {
                                                            log('检测到表情，再返回')
                                                            back()
                                                            sleep(2500)
                                                        }
                                                    } else {
                                                        back()
                                                        log('未找到发消息按钮')
                                                        sleep(2000)
                                                    }
                                                } else {
                                                    back()
                                                    log('未找到发私信按钮')
                                                    sleep(2000)
                                                }

                                                back()
                                                log('返回粉丝列表，休息')
                                                sleep(jgsj2)
                                            } else {
                                                log('未检测到私信按钮，返回')
                                                back()
                                                sleep(3000)
                                            }

                                        } else {
                                            if (randomNum == 6) {//作品收藏
                                                log('执行作品收藏')
                                                if (pl < dz) {
                                                    作品收藏()
                                                    scsl2 = scsl2 + 1
                                                    sleep(2000)

                                                    log('作品收藏完成：' + scsl2 + "/" + scsl)

                                                    if (scsl2 == scsl) {
                                                        var target = 6;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('作品收藏任务完成')
                                                    }
                                                    sleep(1500)
                                                    pl = pl + 1

                                                } else {
                                                    log('休息，不点')
                                                    k = k + 1
                                                    if (k > lh) {
                                                        pl = 0
                                                        k = 0
                                                    }
                                                }

                                                log('间隔时间：' + jgsj2)
                                                sleep(jgsj2)




                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }
                    暂停控制()

                    while (true) { //判断是否在作品页面，上滑
                        暂停控制()
                        if (id("user_avatar").visibleToUser().exists()) {
                            上滑()
                            // scrollDown(0)
                            log('作品浏览时间：' + zpllsj2)
                            sleep(zpllsj2)
                            break

                        } else {
                            log('任务后，未在作品页面,请手动返回')
                            暂停控制()
                            if (descContains('直播').visibleToUser().exists()) {
                                上滑()
                                // scrollDown(0)
                                sleep(1500)
                            } else {

                                log('任务后，未在作品页面')
                                sleep(100)
                                back()
                                sleep(3500)
                            }

                        }
                    }


                } else {
                    暂停控制()
                    if (descContains('直播').visibleToUser().exists()) {
                        上滑()
                        // scrollDown(0)
                        sleep(1500)
                    } else {
                        log('未在作品页面')
                        sleep(5000)
                        back()
                        sleep(3500)
                    }
                }


            }

        })

    }

    function 养号(params) {
        threads.start(function () {

            打开抖音()
            log('打开音音.5秒后开始运行养号')
            sleep(5000)
            var dz = 0
            var pl = 0
            var zy = 0
            var d = new Date();
            var kssj = parseInt(d.valueOf() / 1000) //开始时间
            if (zlhjc == 1) {
                var jssj = kssj + zyh
            } else {
                var jssj = kssj + yhsj
            }

            var sjll = 0
            var sjll1 = 0
            if (s == 2) { //多闪
                tj = '朋友'

                while (true) {
                    if (desc("朋友，按钮").visibleToUser().exists()) {
                        var zb = desc("朋友，按钮").visibleToUser().findOne().bounds()
                        log('点朋友按钮')
                        click(zb.centerX(), zb.centerY())
                        sleep(3000)
                        break

                    } else {
                        log('未检测到首页')
                        back()
                        sleep(2000)
                    }

                }


            } else {
                tj = '推荐'
                while (true) { //查找首页
                    if (desc("首页，按钮").visibleToUser().exists()) {
                        log('检测到首页')
                        var zb = desc("首页，按钮").visibleToUser().findOne().bounds()
                        log('点首页按钮')
                        click(zb.centerX(), zb.centerY())
                        sleep(3000)
                        if (text("刷新首页").visibleToUser().exists()) {
                            log('刷新首页')
                            var zb = text("刷新首页").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(3000)
                        }
                        if (text('推荐').visibleToUser().exists()) {
                            log('检测到推荐按钮')
                            if (descContains("侧边栏").visibleToUser().exists()) {
                                log('检测到侧边栏，开始养号')
                                sleep(1500)
                                break

                            } else {
                                log('未找到侧边栏')
                                back()
                                sleep(1500)
                            }


                        } else {
                            log('未在推荐页面')
                            back()
                            sleep(1500)
                        }

                    } else {
                        log('未检测到首页，执行返回')
                        back()
                        sleep(3000)
                    }
                }


            }

            while (true) {
                if (text(tj).visibleToUser().exists()) {

                    var d = new Date();
                    var xzsj = parseInt(d.valueOf() / 1000) //现在时间时间
                    // log("现在时间：" + xzsj + '结束时间:' + jssj)
                    var sysj = parseInt(jssj) - parseInt(xzsj)
                    sysj = 时间转换(sysj * 1000)
                    ui.run(function () {
                        g.w.tj.setText('养号剩余时间：' + sysj);
                        // g.w.gd.scrollTo(0, g.w.rz.getHeight());
                    });
                    暂停控制()
                    var res = 广告识别(0, textdata);
                    if (res.code == 1) {
                        log("跳过，" + res.msg)
                        上滑()
                        sleep(1000)

                    } else {
                        if (id("user_avatar").visibleToUser().exists()) {
                            sjll = random(3000, 13000)
                            log('当前视频浏览：' + sjll)
                            var sj = random(0, 10)
                            if (sj < 3) {
                                作品点赞()
                                // 推荐页点赞()
                                dz = dz + 1
                                sjll1 = random(2000, 4000)
                                log('作品点赞数量：' + dz + '停留' + sjll1)
                                sleep(sjll1)
                                while (true) {
                                    if (text(tj).visibleToUser().exists()) {
                                        break
                                    } else {
                                        back()
                                        sleep(2000)
                                    }
                                }
                            }
                            if (sj < 2) {
                                if (descContains("评论").visibleToUser().exists()) {
                                    作品点评论()
                                    pl = pl + 1
                                    sjll1 = random(3000, 6000)
                                    log('浏览评论次数：' + pl + '停留' + sjll1)
                                    sleep(sjll1)
                                    if (textContains("条评论")) {
                                        上滑()
                                        sleep(random(3000, 6000))
                                        上滑()
                                        sleep(random(3000, 6000))
                                        while (true) {
                                            back()
                                            sleep(random(3000, 6000))
                                            if (text(tj).visibleToUser().exists()) {
                                                break
                                            }
                                        }
                                    } else {
                                        while (true) {
                                            back()
                                            sleep(random(3000, 6000))
                                            if (text(tj).visibleToUser().exists()) {
                                                break
                                            }
                                        }
                                    }
                                }

                            }
                            if (sj < 1) {
                                if (id("user_avatar").visibleToUser().exists()) {
                                    作品页面点头像()
                                    zy = zy + 1
                                    sjll1 = random(3000, 6000)
                                    log('浏览主页次数：' + zy + '停留' + sjll1)
                                    sleep(sjll1)
                                    if (desc("更多").visibleToUser().exists()) {
                                        上滑()
                                        sleep(random(3000, 6000))
                                        上滑()
                                        sleep(random(3000, 6000))
                                        while (true) {
                                            back()
                                            sleep(random(3000, 6000))
                                            if (text(tj).visibleToUser().exists()) {
                                                break
                                            }
                                        }


                                    } else {
                                        while (true) {
                                            back()
                                            sleep(random(3000, 6000))
                                            if (text(tj).visibleToUser().exists()) {
                                                break
                                            }
                                        }
                                    }
                                }

                            }

                        }

                        sleep(1000)
                        上滑()
                        sleep(1000)
                        if (xzsj > jssj) {
                            yhwc = 1
                            home()
                            log('养号时间结束')
                            break

                        }

                    }



                } else {
                    if (text('检测到更新').visibleToUser().exists()) {
                        click('以后再说')
                        sleep(2000)

                    } else {
                        log('未检测到首页')
                        back()
                        sleep(3100)
                    }

                }

            }
        })
    }

    function UID(params) {
        threads.start(function () {
            log('打开音音.5秒后开始运行')
            home()
            sleep(1500)
            log('读取数据...')

            打开抖音()

            sleep(2500)

            var pl = 0
            var k = 0
            var sb = 0
            var gzsb = 0
            var gzzsb = 0
            var zsb = 0
            if (jc == 1) {
                检测数据()
                sleep(500)
                数据记录()
                var fssl = matches[matches.length - 1]
                var regex = /日(.*?)粉/;
                fssl = fssl.match(regex)[1];
                log('粉丝记录：' + "\n" + jlwb)
                log('昵称：' + nickname + ' 点赞数量：' + favoriting_count + '关注数量：' + following_count + '粉丝数量：' + follower_count)

            }
            sleep(8000)

            log('开始执行任务..')

            while (true) {
                暂停控制()
                if (textContains("首页").visibleToUser().exists()) {
                    暂停控制()
                    while (true) { //读取UID
                        var url = fwq
                        var res = http.get(url);
                        dyzh = res.body.string()
                        log(dyzh)
                        if (files.exists("/sdcard/dyzh.text")) { //判断昵称文本是否存在

                        } else {
                            log("没有找到对标账号文件，进行创建")
                            files.append("/sdcard/dyzh.text", "账号文本" + "\n") //保存文本

                        }
                        var content = files.read("/sdcard/dyzh.text") //读取昵称文本
                        if (dyzh == "库存为0！") {
                            log('但前服务器已经没有UID,10秒后重新获取' + "\n")
                            sleep(10000)
                        } else {
                            if (content.includes(dyzh)) {
                                log(dyzh + "，该账号已经记录，换下一个")
                                sleep(2)
                            } else {
                                files.append("/sdcard/dyzh.text", dyzh + "\n") //保存文本
                                //打开主页
                                app.startActivity({
                                    data: "snssdk1128://user/profile/" + dyzh,
                                });
                                break
                            }
                        }


                    }

                    var jgsj2 = random(jgsj, jgsj1)
                    var tlsj2 = random(tlsj, tlsj1)
                    var zpllsj2 = random(zpllsj, zpllsj1)
                    sleep(500)
                    if (jc == 1) {
                        检测数据()
                        log('初始粉丝：' + fssl + '现在粉丝：' + follower_count)

                    }
                    log("主页停留：" + tlsj2)
                    sleep(tlsj2)
                    if (xb == 0) {
                        if (desc("用户头像").visibleToUser().exists()) {
                            if (gnxz == 0) {
                                if (lh1 == 0) { //留痕选择

                                    lhsl1 = lhsl1 + 1
                                    log("当前留痕数量：" + lhsl1 + "/" + lhsl)

                                    if (lhsl1 == lhsl) {
                                        gnxz = 1
                                        log('留痕完成，开始下一个任务')

                                    }

                                    back()
                                    log('间隔时间:' + jgsj2)

                                    sleep(jgsj2)

                                } else {
                                    gnxz = 1
                                    log('留痕未选择，开始下一功能')

                                }
                            } else {
                                var shuzu1 = shuzu.length - 1
                                if (shuzu.length == 0) {
                                    home()
                                    alert('所有任务完成，程序结束')
                                    exit()
                                }

                                var ind = random(0, shuzu1);
                                var randomNum = shuzu[ind];

                                if (randomNum == 1) {  //关注
                                    log('执行关注')
                                    if (jc == 1) {
                                        检测数据()

                                    }
                                    if (text("关注").visibleToUser().exists()) {
                                        var w = 0
                                        if (pl < dz) {
                                            主页关注()
                                            gzsl1 = gzsl1 + 1
                                            pl = pl + 1
                                        } else {
                                            log('休息，不点')
                                            k = k + 1
                                            w = 1
                                            if (k - 1 > lh) {
                                                pl = 0
                                                k = 0
                                            }
                                        }
                                        log('当前关注数量：' + gzsl1 + "/" + gzsl)

                                        if (gzsl1 == gzsl) {
                                            var target = 1;
                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                if (shuzu[i] === target) {
                                                    shuzu.splice(i, 1);
                                                }
                                            }
                                            log('关注任务完成')

                                        }
                                        sleep(2000)
                                        back()
                                        log('间隔时间：' + jgsj2)
                                        sleep(jgsj2)
                                        if (w == 0) {
                                            if (jc == 1) {

                                                检测数据1()
                                                log('关注前：' + following_count + '关注后：' + following_count1)
                                                if (following_count == following_count1) {
                                                    gzsb = gzsb + 1
                                                    gzzsb = gzzsb + 1
                                                    log('关注失败:' + gzsb)

                                                    if (gzzsb == dzsb1) {
                                                        var target = 1;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('关注失败达到指定数量，不在执行关注')
                                                    } else {
                                                        if (gzsb == dzsb) { //休息
                                                            var t = 0
                                                            while (true) {
                                                                t = t + 1
                                                                log('关注失败达到指定数量，休息:' + t)
                                                                home()
                                                                toast('休息中')
                                                                上滑()
                                                                sleep(60000)
                                                                if (t == xiuxi) {
                                                                    log('达到休息时间，开始运行')
                                                                    打开抖音()
                                                                    sb = 0
                                                                    sleep(5500)
                                                                    break
                                                                }

                                                            }
                                                        }
                                                    }

                                                } else {
                                                    gzsb = 0
                                                    gzzsb = 0
                                                }
                                            }
                                        }
                                    } else {
                                        log('未检测到关注按钮，返回')

                                        back()
                                        sleep(2000)
                                    }

                                } else {
                                    if (randomNum == 2) {//头像点赞
                                        log('执行头像点赞')

                                        if (desc("用户头像").visibleToUser().exists()) {
                                            主页点头像()
                                            sleep(1500)
                                            if (pl < dz) {
                                                if (text("点赞").visibleToUser().exists()) {
                                                    var zb = text("点赞").visibleToUser().findOne().bounds()
                                                    click(zb.centerX(), zb.centerY())
                                                    txsl = txsl + 1
                                                    log('当前头像点赞数量：' + txsl + "/" + txsl1)

                                                    if (txsl == txsl1) {
                                                        var target = 2;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('头像点赞任务完成，开始下一个任务')

                                                    }
                                                    sleep(1500)
                                                }
                                                pl = pl + 1
                                            } else {
                                                log('休息，不点')


                                                k = k + 1
                                                if (k > lh) {
                                                    pl = 0
                                                    k = 0
                                                }
                                            }

                                            sleep(1500)

                                            back()
                                            sleep(1500)
                                        }
                                        back()
                                        log('间隔时间：' + jgsj2)
                                        sleep(jgsj2)

                                    } else {
                                        if (randomNum == 3) {//作品点赞
                                            log('执行作品点赞')
                                            if (id(zpid).visibleToUser().exists()) {
                                                主页点作品()
                                                log('作品浏览时间：' + zpllsj2)
                                                sleep(zpllsj2)
                                                if (jc == 1) {
                                                    检测数据()


                                                }
                                                var w = 0

                                                if (pl < dz) {
                                                    作品点赞()
                                                    if (sfdz == 0) {
                                                        zpdz2 = zpdz2 + 1
                                                        log('作品点赞完成：' + zpdz2 + "/" + zpdz)
                                                        if (zpdz2 == zpdz) {
                                                            var target = 3;
                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                if (shuzu[i] === target) {
                                                                    shuzu.splice(i, 1);
                                                                }
                                                            }
                                                            log('作品点赞任务完成')

                                                        }
                                                        sleep(1500)
                                                        pl = pl + 1
                                                    }

                                                } else {
                                                    w = 1
                                                    log('休息，不点')
                                                    k = k + 1
                                                    if (k - 1 > lh) {
                                                        pl = 0
                                                        k = 0
                                                    }
                                                }
                                                back()
                                                sleep(1000)
                                                back()
                                                log('间隔时间：' + jgsj2)
                                                sleep(jgsj2)
                                                if (sfdz == 0) {
                                                    if (w == 0) {
                                                        if (jc == 1) {

                                                            检测数据1()
                                                            log('点赞前：' + favoriting_count + '点赞后：' + favoriting_count1)

                                                            if (favoriting_count == favoriting_count1) {
                                                                sb = sb + 1
                                                                zsb = zsb + 1
                                                                log('点赞失败:' + sb)

                                                                if (zsb == dzsb1) {
                                                                    var target = 3;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('点赞失败达到指定数量，不在执行点赞')
                                                                } else {
                                                                    if (sb == dzsb) { //休息
                                                                        var t = 0
                                                                        home()
                                                                        while (true) {
                                                                            t = t + 1
                                                                            log('点赞失败达到指定数量，休息:' + t)

                                                                            toast('休息中')
                                                                            上滑()
                                                                            sleep(60000)
                                                                            if (t == xiuxi) {
                                                                                log('达到休息时间，开始运行')
                                                                                打开抖音()
                                                                                sb = 0
                                                                                sleep(3500)
                                                                                break
                                                                            }

                                                                        }
                                                                    }
                                                                }

                                                            } else {
                                                                sb = 0
                                                                zsb = 0
                                                            }
                                                        }
                                                    }

                                                }


                                            } else {
                                                log('未检测到作品，返回')
                                                back()
                                                sleep(2000)
                                                while (true) {
                                                    if (descContains("头像").visibleToUser().exists()) {
                                                        break
                                                    } else {
                                                        log('未检测到粉丝列表头像，请手动返回')
                                                        sleep(3000)
                                                    }

                                                }
                                            }


                                        } else {
                                            if (randomNum == 4) {//评论
                                                log('执行作品评论')
                                                if (id(zpid).visibleToUser().exists()) {
                                                    主页点作品()
                                                    log('作品浏览时间：' + zpllsj2)
                                                    sleep(zpllsj2)
                                                    if (pl < dz) {
                                                        作品点评论()
                                                        sssl = sssl + 1
                                                        sleep(3000)
                                                        if (desc("表情").exists()) {
                                                            click(desc("表情").visibleToUser().findOne().bounds())
                                                            sleep(1500)
                                                            if (descContains("], 按钮").exists()) {
                                                                for (var q = 0; q < 3; q++) {
                                                                    var a = 0
                                                                    var i = random(0, 20)
                                                                    descContains("], 按钮").visibleToUser(true).find().forEach(child => {
                                                                        a = a + 1
                                                                        if (i == a) {
                                                                            var zb = child.bounds()
                                                                            click(zb.centerX(), zb.centerY())
                                                                            sleep(1000)
                                                                        }

                                                                    })
                                                                }
                                                            }
                                                            if (text("发送").exists()) {
                                                                text("发送").visibleToUser().visibleToUser().find().forEach(function (child, index) {
                                                                    var zb = child.bounds()
                                                                    if (index == 1) {
                                                                        click(zb.centerX(), zb.centerY())
                                                                        sleep(3000)
                                                                    }
                                                                })
                                                            }
                                                            back()
                                                        }
                                                        log('作品评论完成：' + sssl + "/" + plsl)

                                                        if (sssl == plsl) {
                                                            var target = 4;
                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                if (shuzu[i] === target) {
                                                                    shuzu.splice(i, 1);
                                                                }
                                                            }
                                                            log('作品评论任务完成')
                                                        }
                                                        sleep(1500)
                                                        pl = pl + 1

                                                    } else {
                                                        log('休息，不点')
                                                        k = k + 1
                                                        if (k > lh) {
                                                            pl = 0
                                                            k = 0
                                                        }
                                                    }
                                                    sleep(1000)
                                                    back()
                                                    sleep(1500)
                                                    back()
                                                    log('间隔时间：' + jgsj2)
                                                    sleep(jgsj2)

                                                } else {
                                                    log('未检测到作品，返回')
                                                    back()
                                                    sleep(2000)
                                                }

                                            } else {
                                                if (randomNum == 5) {//私信
                                                    log('执行私信')
                                                    if (desc("更多").visibleToUser().exists()) {
                                                        log('主页点右上角更多..')
                                                        var xy = desc("更多").visibleToUser().findOne().bounds()
                                                        click(xy.centerX(), xy.centerY())
                                                        sleep(2500)
                                                        if (text("发私信").visibleToUser().exists()) {

                                                            var z = sxplnr.split(',').length - 1
                                                            var sjs = random(0, z)
                                                            var r = sxplnr.split(",") //分割内容
                                                            var nr = r[sjs]
                                                            var xy = text("发私信").visibleToUser().findOne().bounds()
                                                            log('点发私信')
                                                            click(xy.centerX(), xy.centerY())
                                                            sleep(3500)
                                                            log('点发送消息')
                                                            if (text("发送消息").visibleToUser().exists()) {
                                                                click("发送消息")
                                                                sleep(1500)
                                                                log(nr)
                                                                setText(nr)
                                                                log('输入内容')
                                                                sleep(random(1000, 3000))
                                                                var xy = desc("发送").visibleToUser().findOne().bounds()
                                                                log('发送')
                                                                click(xy.centerX(), xy.centerY())
                                                                sxsl1 = sxsl1 + 1
                                                                log('私信完成：' + sxsl1 + "/" + sxsl)
                                                                if (sxsl1 == sxsl) {
                                                                    var target = 5;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('作私信任务完成')

                                                                }

                                                                sleep(3000)
                                                                log('返回')
                                                                back()
                                                                sleep(2500)
                                                                // if (textContains("一口气发太多啦")) {
                                                                //     log('text("一口气发太多啦，先休息一下吧")')
                                                                //     alert("一口气发太多啦，先休息一下吧")

                                                                // }
                                                                if (desc("表情").exists()) {
                                                                    log('检测到表情，再返回')
                                                                    back()
                                                                    sleep(2500)
                                                                }
                                                            } else {
                                                                back()
                                                                log('未找到发消息按钮')
                                                                sleep(2000)
                                                            }
                                                        } else {
                                                            back()
                                                            log('未找到发私信按钮')
                                                            sleep(2000)
                                                        }

                                                        back()
                                                        log('返回粉丝列表，休息')
                                                        sleep(jgsj2)
                                                    } else {
                                                        log('未检测到私信按钮，返回')
                                                        back()
                                                        sleep(3000)
                                                    }

                                                } else {
                                                    if (randomNum == 6) {//作品收藏
                                                        log('执行作品收藏')

                                                        if (id(zpid).visibleToUser().exists()) {
                                                            主页点作品()
                                                            log('作品浏览时间：' + zpllsj2)
                                                            sleep(zpllsj2)
                                                            if (pl < dz) {
                                                                作品收藏()
                                                                scsl2 = scsl2 + 1
                                                                sleep(2000)

                                                                log('作品收藏完成：' + scsl2 + "/" + scsl)

                                                                if (scsl2 == scsl) {
                                                                    var target = 6;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('作品收藏任务完成')
                                                                }
                                                                sleep(1500)
                                                                pl = pl + 1

                                                            } else {
                                                                log('休息，不点')
                                                                k = k + 1
                                                                if (k > lh) {
                                                                    pl = 0
                                                                    k = 0
                                                                }
                                                            }
                                                            sleep(1000)
                                                            back()
                                                            sleep(1500)
                                                            back()
                                                            log('间隔时间：' + jgsj2)
                                                            sleep(jgsj2)

                                                        } else {
                                                            log('未检测到作品，返回')
                                                            back()
                                                            sleep(2000)
                                                        }


                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                            暂停控制()

                        } else {
                            sleep(1000)
                            // if (descContains("，按钮").visibleToUser().exists()) {
                            //     log('111')
                            // } else {
                            //     log('未检测到头像，返回')
                            //     back()
                            //     sleep(2000)
                            // }
                            log('未检测到头像，返回')
                            back()
                            sleep(2000)
                        }

                    } else {
                        性别识别()
                        sleep(1000)
                        if (xb == 1) {
                            if (xbsb == 1) {
                                if (desc("用户头像").visibleToUser().exists()) {
                                    if (gnxz == 0) {
                                        if (lh1 == 0) { //留痕选择

                                            lhsl1 = lhsl1 + 1
                                            log("当前留痕数量：" + lhsl1 + "/" + lhsl)

                                            if (lhsl1 == lhsl) {
                                                gnxz = 1
                                                log('留痕完成，开始下一个任务')

                                            }

                                            back()
                                            log('间隔时间:' + jgsj2)

                                            sleep(jgsj2)

                                        } else {
                                            gnxz = 1
                                            log('留痕未选择，开始下一功能')

                                        }
                                    } else {
                                        var shuzu1 = shuzu.length - 1
                                        if (shuzu.length == 0) {
                                            home()
                                            alert('所有任务完成，程序结束')
                                            exit()
                                        }

                                        var ind = random(0, shuzu1);
                                        var randomNum = shuzu[ind];

                                        if (randomNum == 1) {  //关注
                                            log('执行关注')
                                            if (jc == 1) {
                                                检测数据()

                                            }
                                            if (text("关注").visibleToUser().exists()) {
                                                var w = 0
                                                if (pl < dz) {
                                                    主页关注()
                                                    gzsl1 = gzsl1 + 1
                                                    pl = pl + 1
                                                } else {
                                                    log('休息，不点')
                                                    k = k + 1
                                                    w = 1
                                                    if (k - 1 > lh) {
                                                        pl = 0
                                                        k = 0
                                                    }
                                                }
                                                log('当前关注数量：' + gzsl1 + "/" + gzsl)

                                                if (gzsl1 == gzsl) {
                                                    var target = 1;
                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                        if (shuzu[i] === target) {
                                                            shuzu.splice(i, 1);
                                                        }
                                                    }
                                                    log('关注任务完成')

                                                }
                                                sleep(2000)
                                                back()
                                                log('间隔时间：' + jgsj2)
                                                sleep(jgsj2)
                                                if (w == 0) {
                                                    if (jc == 1) {

                                                        检测数据1()
                                                        log('关注前：' + following_count + '关注后：' + following_count1)
                                                        if (following_count == following_count1) {
                                                            gzsb = gzsb + 1
                                                            gzzsb = gzzsb + 1
                                                            log('关注失败:' + gzsb)

                                                            if (gzzsb == dzsb1) {
                                                                var target = 1;
                                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                    if (shuzu[i] === target) {
                                                                        shuzu.splice(i, 1);
                                                                    }
                                                                }
                                                                log('关注失败达到指定数量，不在执行关注')
                                                            } else {
                                                                if (gzsb == dzsb) { //休息
                                                                    var t = 0
                                                                    while (true) {
                                                                        t = t + 1
                                                                        log('关注失败达到指定数量，休息:' + t)
                                                                        home()
                                                                        toast('休息中')
                                                                        上滑()
                                                                        sleep(60000)
                                                                        if (t == xiuxi) {
                                                                            log('达到休息时间，开始运行')
                                                                            打开抖音()
                                                                            sb = 0
                                                                            sleep(5500)
                                                                            break
                                                                        }

                                                                    }
                                                                }
                                                            }

                                                        } else {
                                                            gzsb = 0
                                                            gzzsb = 0
                                                        }
                                                    }
                                                }
                                            } else {
                                                log('未检测到关注按钮，返回')

                                                back()
                                                sleep(2000)
                                            }

                                        } else {
                                            if (randomNum == 2) {//头像点赞
                                                log('执行头像点赞')

                                                if (desc("用户头像").visibleToUser().exists()) {
                                                    主页点头像()
                                                    sleep(1500)
                                                    if (pl < dz) {
                                                        if (text("点赞").visibleToUser().exists()) {
                                                            var zb = text("点赞").visibleToUser().findOne().bounds()
                                                            click(zb.centerX(), zb.centerY())
                                                            txsl = txsl + 1
                                                            log('当前头像点赞数量：' + txsl + "/" + txsl1)

                                                            if (txsl == txsl1) {
                                                                var target = 2;
                                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                    if (shuzu[i] === target) {
                                                                        shuzu.splice(i, 1);
                                                                    }
                                                                }
                                                                log('头像点赞任务完成，开始下一个任务')

                                                            }
                                                            sleep(1500)
                                                        }
                                                        pl = pl + 1
                                                    } else {
                                                        log('休息，不点')


                                                        k = k + 1
                                                        if (k > lh) {
                                                            pl = 0
                                                            k = 0
                                                        }
                                                    }

                                                    sleep(1500)

                                                    back()
                                                    sleep(1500)
                                                }
                                                back()
                                                log('间隔时间：' + jgsj2)
                                                sleep(jgsj2)

                                            } else {
                                                if (randomNum == 3) {//作品点赞
                                                    log('执行作品点赞')
                                                    if (id(zpid).visibleToUser().exists()) {
                                                        主页点作品()
                                                        log('作品浏览时间：' + zpllsj2)
                                                        sleep(zpllsj2)
                                                        if (jc == 1) {
                                                            检测数据()


                                                        }
                                                        var w = 0

                                                        if (pl < dz) {
                                                            作品点赞()
                                                            if (sfdz == 0) {
                                                                zpdz2 = zpdz2 + 1
                                                                log('作品点赞完成：' + zpdz2 + "/" + zpdz)
                                                                if (zpdz2 == zpdz) {
                                                                    var target = 3;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('作品点赞任务完成')

                                                                }
                                                                sleep(1500)
                                                                pl = pl + 1
                                                            }

                                                        } else {
                                                            w = 1
                                                            log('休息，不点')
                                                            k = k + 1
                                                            if (k - 1 > lh) {
                                                                pl = 0
                                                                k = 0
                                                            }
                                                        }
                                                        back()
                                                        sleep(1000)
                                                        back()
                                                        log('间隔时间：' + jgsj2)
                                                        sleep(jgsj2)
                                                        if (sfdz == 0) {
                                                            if (w == 0) {
                                                                if (jc == 1) {

                                                                    检测数据1()
                                                                    log('点赞前：' + favoriting_count + '点赞后：' + favoriting_count1)

                                                                    if (favoriting_count == favoriting_count1) {
                                                                        sb = sb + 1
                                                                        zsb = zsb + 1
                                                                        log('点赞失败:' + sb)

                                                                        if (zsb == dzsb1) {
                                                                            var target = 3;
                                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                if (shuzu[i] === target) {
                                                                                    shuzu.splice(i, 1);
                                                                                }
                                                                            }
                                                                            log('点赞失败达到指定数量，不在执行点赞')
                                                                        } else {
                                                                            if (sb == dzsb) { //休息
                                                                                var t = 0
                                                                                home()
                                                                                while (true) {
                                                                                    t = t + 1
                                                                                    log('点赞失败达到指定数量，休息:' + t)

                                                                                    toast('休息中')
                                                                                    上滑()
                                                                                    sleep(60000)
                                                                                    if (t == xiuxi) {
                                                                                        log('达到休息时间，开始运行')
                                                                                        打开抖音()
                                                                                        sb = 0
                                                                                        sleep(3500)
                                                                                        break
                                                                                    }

                                                                                }
                                                                            }
                                                                        }

                                                                    } else {
                                                                        sb = 0
                                                                        zsb = 0
                                                                    }
                                                                }
                                                            }

                                                        }


                                                    } else {
                                                        log('未检测到作品，返回')
                                                        back()
                                                        sleep(2000)
                                                        while (true) {
                                                            if (descContains("头像").visibleToUser().exists()) {
                                                                break
                                                            } else {
                                                                log('未检测到粉丝列表头像，请手动返回')
                                                                sleep(3000)
                                                            }

                                                        }
                                                    }


                                                } else {
                                                    if (randomNum == 4) {//评论
                                                        log('执行作品评论')
                                                        if (id(zpid).visibleToUser().exists()) {
                                                            主页点作品()
                                                            log('作品浏览时间：' + zpllsj2)
                                                            sleep(zpllsj2)
                                                            if (pl < dz) {
                                                                作品点评论()
                                                                sssl = sssl + 1
                                                                sleep(3000)
                                                                if (desc("表情").exists()) {
                                                                    click(desc("表情").visibleToUser().findOne().bounds())
                                                                    sleep(1500)
                                                                    if (descContains("], 按钮").exists()) {
                                                                        for (var q = 0; q < 3; q++) {
                                                                            var a = 0
                                                                            var i = random(0, 20)
                                                                            descContains("], 按钮").visibleToUser(true).find().forEach(child => {
                                                                                a = a + 1
                                                                                if (i == a) {
                                                                                    var zb = child.bounds()
                                                                                    click(zb.centerX(), zb.centerY())
                                                                                    sleep(1000)
                                                                                }

                                                                            })
                                                                        }
                                                                    }
                                                                    if (text("发送").exists()) {
                                                                        text("发送").visibleToUser().visibleToUser().find().forEach(function (child, index) {
                                                                            var zb = child.bounds()
                                                                            if (index == 1) {
                                                                                click(zb.centerX(), zb.centerY())
                                                                                sleep(3000)
                                                                            }
                                                                        })
                                                                    }
                                                                    back()
                                                                }
                                                                log('作品评论完成：' + sssl + "/" + plsl)

                                                                if (sssl == plsl) {
                                                                    var target = 4;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('作品评论任务完成')
                                                                }
                                                                sleep(1500)
                                                                pl = pl + 1

                                                            } else {
                                                                log('休息，不点')
                                                                k = k + 1
                                                                if (k > lh) {
                                                                    pl = 0
                                                                    k = 0
                                                                }
                                                            }
                                                            sleep(1000)
                                                            back()
                                                            sleep(1500)
                                                            back()
                                                            log('间隔时间：' + jgsj2)
                                                            sleep(jgsj2)

                                                        } else {
                                                            log('未检测到作品，返回')
                                                            back()
                                                            sleep(2000)
                                                        }

                                                    } else {
                                                        if (randomNum == 5) {//私信
                                                            log('执行私信')
                                                            if (desc("更多").visibleToUser().exists()) {
                                                                log('主页点右上角更多..')
                                                                var xy = desc("更多").visibleToUser().findOne().bounds()
                                                                click(xy.centerX(), xy.centerY())
                                                                sleep(2500)
                                                                if (text("发私信").visibleToUser().exists()) {

                                                                    var z = sxplnr.split(',').length - 1
                                                                    var sjs = random(0, z)
                                                                    var r = sxplnr.split(",") //分割内容
                                                                    var nr = r[sjs]
                                                                    var xy = text("发私信").visibleToUser().findOne().bounds()
                                                                    log('点发私信')
                                                                    click(xy.centerX(), xy.centerY())
                                                                    sleep(3500)
                                                                    log('点发送消息')
                                                                    if (text("发送消息").visibleToUser().exists()) {
                                                                        click("发送消息")
                                                                        sleep(1500)
                                                                        log(nr)
                                                                        setText(nr)
                                                                        log('输入内容')
                                                                        sleep(random(1000, 3000))
                                                                        var xy = desc("发送").visibleToUser().findOne().bounds()
                                                                        log('发送')
                                                                        click(xy.centerX(), xy.centerY())
                                                                        sxsl1 = sxsl1 + 1
                                                                        log('私信完成：' + sxsl1 + "/" + sxsl)
                                                                        if (sxsl1 == sxsl) {
                                                                            var target = 5;
                                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                if (shuzu[i] === target) {
                                                                                    shuzu.splice(i, 1);
                                                                                }
                                                                            }
                                                                            log('私信任务完成')

                                                                        }

                                                                        sleep(3000)
                                                                        log('返回0')
                                                                        back()
                                                                        sleep(2000)

                                                                        if (desc("表情").visibleToUser().exists()) {
                                                                            log('检测到表情，再返回')
                                                                            back()
                                                                            sleep(2500)
                                                                        }
                                                                    } else {
                                                                        back()
                                                                        log('未找到发消息按钮')
                                                                        sleep(2000)
                                                                    }
                                                                } else {
                                                                    back()
                                                                    log('未找到发私信按钮')
                                                                    sleep(2000)
                                                                }

                                                                back()
                                                                log('返回粉丝列表，休息')
                                                                sleep(jgsj2)
                                                            } else {
                                                                log('未检测到私信按钮，返回')
                                                                back()
                                                                sleep(3000)
                                                            }

                                                        } else {
                                                            if (randomNum == 6) {//作品收藏
                                                                log('执行作品收藏')

                                                                if (id(zpid).visibleToUser().exists()) {
                                                                    主页点作品()
                                                                    log('作品浏览时间：' + zpllsj2)
                                                                    sleep(zpllsj2)
                                                                    if (pl < dz) {
                                                                        作品收藏()
                                                                        scsl2 = scsl2 + 1
                                                                        sleep(2000)

                                                                        log('作品收藏完成：' + scsl2 + "/" + scsl)

                                                                        if (scsl2 == scsl) {
                                                                            var target = 6;
                                                                            for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                if (shuzu[i] === target) {
                                                                                    shuzu.splice(i, 1);
                                                                                }
                                                                            }
                                                                            log('作品收藏任务完成')
                                                                        }
                                                                        sleep(1500)
                                                                        pl = pl + 1

                                                                    } else {
                                                                        log('休息，不点')
                                                                        k = k + 1
                                                                        if (k > lh) {
                                                                            pl = 0
                                                                            k = 0
                                                                        }
                                                                    }
                                                                    sleep(1000)
                                                                    back()
                                                                    sleep(1500)
                                                                    back()
                                                                    log('间隔时间：' + jgsj2)
                                                                    sleep(jgsj2)

                                                                } else {
                                                                    log('未检测到作品，返回')
                                                                    back()
                                                                    sleep(2000)
                                                                }


                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                    }
                                    暂停控制()
                                    if (desc("用户头像").visibleToUser().exists()) {
                                        back()
                                        sleep(1500)
                                    }
                                } else {
                                    sleep(1000)
                                    // if (descContains("，按钮").visibleToUser().exists()) {
                                    //     log('111')
                                    // } else {
                                    //     log('未检测到头像，返回')
                                    //     back()
                                    //     sleep(2000)
                                    // }
                                    log('未检测到头像，返回')
                                    back()
                                    sleep(2000)

                                    // while (true) {
                                    //     if (descContains("头像").visibleToUser().exists()) {
                                    //         break
                                    //     } else {
                                    //         log('未检测到粉丝列表头像，请手动返回')
                                    //         sleep(3000)
                                    //     }

                                    // }
                                }

                            } else {
                                log('性别不符合要求')
                                back()
                                sleep(jgsj)
                            }

                        } else {
                            if (xb == 2) {
                                if (xbsb == 2) {
                                    if (desc("用户头像").visibleToUser().exists()) {
                                        if (gnxz == 0) {
                                            if (lh1 == 0) { //留痕选择

                                                lhsl1 = lhsl1 + 1
                                                log("当前留痕数量：" + lhsl1 + "/" + lhsl)

                                                if (lhsl1 == lhsl) {
                                                    gnxz = 1
                                                    log('留痕完成，开始下一个任务')

                                                }

                                                back()
                                                log('间隔时间:' + jgsj2)

                                                sleep(jgsj2)

                                            } else {
                                                gnxz = 1
                                                log('留痕未选择，开始下一功能')

                                            }
                                        } else {
                                            var shuzu1 = shuzu.length - 1
                                            if (shuzu.length == 0) {
                                                home()
                                                alert('所有任务完成，程序结束')
                                                exit()
                                            }

                                            var ind = random(0, shuzu1);
                                            var randomNum = shuzu[ind];

                                            if (randomNum == 1) {  //关注
                                                log('执行关注')
                                                if (jc == 1) {
                                                    检测数据()

                                                }
                                                if (text("关注").visibleToUser().exists()) {
                                                    var w = 0
                                                    if (pl < dz) {
                                                        主页关注()
                                                        gzsl1 = gzsl1 + 1
                                                        pl = pl + 1
                                                    } else {
                                                        log('休息，不点')
                                                        k = k + 1
                                                        w = 1
                                                        if (k - 1 > lh) {
                                                            pl = 0
                                                            k = 0
                                                        }
                                                    }
                                                    log('当前关注数量：' + gzsl1 + "/" + gzsl)

                                                    if (gzsl1 == gzsl) {
                                                        var target = 1;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('关注任务完成')

                                                    }
                                                    sleep(2000)
                                                    back()
                                                    log('间隔时间：' + jgsj2)
                                                    sleep(jgsj2)
                                                    if (w == 0) {
                                                        if (jc == 1) {

                                                            检测数据1()
                                                            log('关注前：' + following_count + '关注后：' + following_count1)
                                                            if (following_count == following_count1) {
                                                                gzsb = gzsb + 1
                                                                gzzsb = gzzsb + 1
                                                                log('关注失败:' + gzsb)

                                                                if (gzzsb == dzsb1) {
                                                                    var target = 1;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('关注失败达到指定数量，不在执行关注')
                                                                } else {
                                                                    if (gzsb == dzsb) { //休息
                                                                        var t = 0
                                                                        while (true) {
                                                                            t = t + 1
                                                                            log('关注失败达到指定数量，休息:' + t)
                                                                            home()
                                                                            toast('休息中')
                                                                            上滑()
                                                                            sleep(60000)
                                                                            if (t == xiuxi) {
                                                                                log('达到休息时间，开始运行')
                                                                                打开抖音()
                                                                                sb = 0
                                                                                sleep(5500)
                                                                                break
                                                                            }

                                                                        }
                                                                    }
                                                                }

                                                            } else {
                                                                gzsb = 0
                                                                gzzsb = 0
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    log('未检测到关注按钮，返回')

                                                    back()
                                                    sleep(2000)
                                                }

                                            } else {
                                                if (randomNum == 2) {//头像点赞
                                                    log('执行头像点赞')

                                                    if (desc("用户头像").visibleToUser().exists()) {
                                                        主页点头像()
                                                        sleep(1500)
                                                        if (pl < dz) {
                                                            if (text("点赞").visibleToUser().exists()) {
                                                                var zb = text("点赞").visibleToUser().findOne().bounds()
                                                                click(zb.centerX(), zb.centerY())
                                                                txsl = txsl + 1
                                                                log('当前头像点赞数量：' + txsl + "/" + txsl1)

                                                                if (txsl == txsl1) {
                                                                    var target = 2;
                                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                        if (shuzu[i] === target) {
                                                                            shuzu.splice(i, 1);
                                                                        }
                                                                    }
                                                                    log('头像点赞任务完成，开始下一个任务')

                                                                }
                                                                sleep(1500)
                                                            }
                                                            pl = pl + 1
                                                        } else {
                                                            log('休息，不点')


                                                            k = k + 1
                                                            if (k > lh) {
                                                                pl = 0
                                                                k = 0
                                                            }
                                                        }

                                                        sleep(1500)

                                                        back()
                                                        sleep(1500)
                                                    }
                                                    back()
                                                    log('间隔时间：' + jgsj2)
                                                    sleep(jgsj2)

                                                } else {
                                                    if (randomNum == 3) {//作品点赞
                                                        log('执行作品点赞')
                                                        if (id(zpid).visibleToUser().exists()) {
                                                            主页点作品()
                                                            log('作品浏览时间：' + zpllsj2)
                                                            sleep(zpllsj2)
                                                            if (jc == 1) {
                                                                检测数据()


                                                            }
                                                            var w = 0

                                                            if (pl < dz) {
                                                                作品点赞()
                                                                if (sfdz == 0) {
                                                                    zpdz2 = zpdz2 + 1
                                                                    log('作品点赞完成：' + zpdz2 + "/" + zpdz)
                                                                    if (zpdz2 == zpdz) {
                                                                        var target = 3;
                                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                            if (shuzu[i] === target) {
                                                                                shuzu.splice(i, 1);
                                                                            }
                                                                        }
                                                                        log('作品点赞任务完成')

                                                                    }
                                                                    sleep(1500)
                                                                    pl = pl + 1
                                                                }

                                                            } else {
                                                                w = 1
                                                                log('休息，不点')
                                                                k = k + 1
                                                                if (k - 1 > lh) {
                                                                    pl = 0
                                                                    k = 0
                                                                }
                                                            }
                                                            back()
                                                            sleep(1000)
                                                            back()
                                                            log('间隔时间：' + jgsj2)
                                                            sleep(jgsj2)
                                                            if (sfdz == 0) {
                                                                if (w == 0) {
                                                                    if (jc == 1) {

                                                                        检测数据1()
                                                                        log('点赞前：' + favoriting_count + '点赞后：' + favoriting_count1)

                                                                        if (favoriting_count == favoriting_count1) {
                                                                            sb = sb + 1
                                                                            zsb = zsb + 1
                                                                            log('点赞失败:' + sb)

                                                                            if (zsb == dzsb1) {
                                                                                var target = 3;
                                                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                    if (shuzu[i] === target) {
                                                                                        shuzu.splice(i, 1);
                                                                                    }
                                                                                }
                                                                                log('点赞失败达到指定数量，不在执行点赞')
                                                                            } else {
                                                                                if (sb == dzsb) { //休息
                                                                                    var t = 0
                                                                                    home()
                                                                                    while (true) {
                                                                                        t = t + 1
                                                                                        log('点赞失败达到指定数量，休息:' + t)

                                                                                        toast('休息中')
                                                                                        上滑()
                                                                                        sleep(60000)
                                                                                        if (t == xiuxi) {
                                                                                            log('达到休息时间，开始运行')
                                                                                            打开抖音()
                                                                                            sb = 0
                                                                                            sleep(3500)
                                                                                            break
                                                                                        }

                                                                                    }
                                                                                }
                                                                            }

                                                                        } else {
                                                                            sb = 0
                                                                            zsb = 0
                                                                        }
                                                                    }
                                                                }

                                                            }


                                                        } else {
                                                            log('未检测到作品，返回')
                                                            back()
                                                            sleep(2000)
                                                            while (true) {
                                                                if (descContains("头像").visibleToUser().exists()) {
                                                                    break
                                                                } else {
                                                                    log('未检测到粉丝列表头像，请手动返回')
                                                                    sleep(3000)
                                                                }

                                                            }
                                                        }


                                                    } else {
                                                        if (randomNum == 4) {//评论
                                                            log('执行作品评论')
                                                            if (id(zpid).visibleToUser().exists()) {
                                                                主页点作品()
                                                                log('作品浏览时间：' + zpllsj2)
                                                                sleep(zpllsj2)
                                                                if (pl < dz) {
                                                                    作品点评论()
                                                                    sssl = sssl + 1
                                                                    sleep(3000)
                                                                    if (desc("表情").exists()) {
                                                                        click(desc("表情").visibleToUser().findOne().bounds())
                                                                        sleep(1500)
                                                                        if (descContains("], 按钮").exists()) {
                                                                            for (var q = 0; q < 3; q++) {
                                                                                var a = 0
                                                                                var i = random(0, 20)
                                                                                descContains("], 按钮").visibleToUser(true).find().forEach(child => {
                                                                                    a = a + 1
                                                                                    if (i == a) {
                                                                                        var zb = child.bounds()
                                                                                        click(zb.centerX(), zb.centerY())
                                                                                        sleep(1000)
                                                                                    }

                                                                                })
                                                                            }
                                                                        }
                                                                        if (text("发送").exists()) {
                                                                            text("发送").visibleToUser().visibleToUser().find().forEach(function (child, index) {
                                                                                var zb = child.bounds()
                                                                                if (index == 1) {
                                                                                    click(zb.centerX(), zb.centerY())
                                                                                    sleep(3000)
                                                                                }
                                                                            })
                                                                        }
                                                                        back()
                                                                    }
                                                                    log('作品评论完成：' + sssl + "/" + plsl)

                                                                    if (sssl == plsl) {
                                                                        var target = 4;
                                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                            if (shuzu[i] === target) {
                                                                                shuzu.splice(i, 1);
                                                                            }
                                                                        }
                                                                        log('作品评论任务完成')
                                                                    }
                                                                    sleep(1500)
                                                                    pl = pl + 1

                                                                } else {
                                                                    log('休息，不点')
                                                                    k = k + 1
                                                                    if (k > lh) {
                                                                        pl = 0
                                                                        k = 0
                                                                    }
                                                                }
                                                                sleep(1000)
                                                                back()
                                                                sleep(1500)
                                                                back()
                                                                log('间隔时间：' + jgsj2)
                                                                sleep(jgsj2)

                                                            } else {
                                                                log('未检测到作品，返回')
                                                                back()
                                                                sleep(2000)
                                                            }

                                                        } else {
                                                            if (randomNum == 5) {//私信
                                                                log('执行私信')
                                                                if (desc("更多").visibleToUser().exists()) {
                                                                    log('主页点右上角更多..')
                                                                    var xy = desc("更多").visibleToUser().findOne().bounds()
                                                                    click(xy.centerX(), xy.centerY())
                                                                    sleep(2500)
                                                                    if (text("发私信").visibleToUser().exists()) {

                                                                        var z = sxplnr.split(',').length - 1
                                                                        var sjs = random(0, z)
                                                                        var r = sxplnr.split(",") //分割内容
                                                                        var nr = r[sjs]
                                                                        var xy = text("发私信").visibleToUser().findOne().bounds()
                                                                        log('点发私信')
                                                                        click(xy.centerX(), xy.centerY())
                                                                        sleep(3500)
                                                                        log('点发送消息')
                                                                        if (text("发送消息").visibleToUser().exists()) {
                                                                            click("发送消息")
                                                                            sleep(1500)
                                                                            log(nr)
                                                                            setText(nr)
                                                                            log('输入内容')
                                                                            sleep(random(1000, 3000))
                                                                            var xy = desc("发送").visibleToUser().findOne().bounds()
                                                                            log('发送')
                                                                            click(xy.centerX(), xy.centerY())
                                                                            sxsl1 = sxsl1 + 1
                                                                            log('私信完成：' + sxsl1 + "/" + sxsl)
                                                                            if (sxsl1 == sxsl) {
                                                                                var target = 5;
                                                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                    if (shuzu[i] === target) {
                                                                                        shuzu.splice(i, 1);
                                                                                    }
                                                                                }
                                                                                log('作私信任务完成')

                                                                            }

                                                                            sleep(3000)
                                                                            log('返回1')
                                                                            back()
                                                                            sleep(2500)
                                                                            // if (textContains("一口气发太多啦")) {
                                                                            //     log('text("一口气发太多啦，先休息一下吧")')
                                                                            //     alert("一口气发太多啦，先休息一下吧")

                                                                            // }
                                                                            if (desc("表情").exists()) {
                                                                                log('检测到表情，再返回')
                                                                                back()
                                                                                sleep(2500)
                                                                            }
                                                                        } else {
                                                                            back()
                                                                            log('未找到发消息按钮')
                                                                            sleep(2000)
                                                                        }
                                                                    } else {
                                                                        back()
                                                                        log('未找到发私信按钮')
                                                                        sleep(2000)
                                                                    }

                                                                    back()
                                                                    log('返回粉丝列表，休息')
                                                                    sleep(jgsj2)
                                                                } else {
                                                                    log('未检测到私信按钮，返回')
                                                                    back()
                                                                    sleep(3000)
                                                                }

                                                            } else {
                                                                if (randomNum == 6) {//作品收藏
                                                                    log('执行作品收藏')

                                                                    if (id(zpid).visibleToUser().exists()) {
                                                                        主页点作品()
                                                                        log('作品浏览时间：' + zpllsj2)
                                                                        sleep(zpllsj2)
                                                                        if (pl < dz) {
                                                                            作品收藏()
                                                                            scsl2 = scsl2 + 1
                                                                            sleep(2000)

                                                                            log('作品收藏完成：' + scsl2 + "/" + scsl)

                                                                            if (scsl2 == scsl) {
                                                                                var target = 6;
                                                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                                                    if (shuzu[i] === target) {
                                                                                        shuzu.splice(i, 1);
                                                                                    }
                                                                                }
                                                                                log('作品收藏任务完成')
                                                                            }
                                                                            sleep(1500)
                                                                            pl = pl + 1

                                                                        } else {
                                                                            log('休息，不点')
                                                                            k = k + 1
                                                                            if (k > lh) {
                                                                                pl = 0
                                                                                k = 0
                                                                            }
                                                                        }
                                                                        sleep(1000)
                                                                        back()
                                                                        sleep(1500)
                                                                        back()
                                                                        log('间隔时间：' + jgsj2)
                                                                        sleep(jgsj2)

                                                                    } else {
                                                                        log('未检测到作品，返回')
                                                                        back()
                                                                        sleep(2000)
                                                                    }


                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                        }
                                        暂停控制()
                                        if (desc("用户头像").visibleToUser().exists()) {
                                            back()
                                            sleep(1500)
                                        }
                                    } else {
                                        sleep(1000)
                                        // if (descContains("，按钮").visibleToUser().exists()) {
                                        //     log('111')
                                        // } else {
                                        //     log('未检测到头像，返回')
                                        //     back()
                                        //     sleep(2000)
                                        // }
                                        log('未检测到头像，返回')
                                        back()
                                        sleep(2000)

                                        // while (true) {
                                        //     if (descContains("头像").visibleToUser().exists()) {
                                        //         break
                                        //     } else {
                                        //         log('未检测到粉丝列表头像，请手动返回')
                                        //         sleep(3000)
                                        //     }

                                        // }
                                    }


                                } else {
                                    log('性别不符合要求')
                                    back()
                                    sleep(jgsj)
                                }

                            }
                        }
                    }








                    暂停控制()






                } else {
                    log("未在音音首页")
                    back()

                    sleep(3000)
                }

            }
        })
    }


    function 暂停控制(params) {
        while (true) {
            if (kz == 0) {
                break
            } else {
                toast('脚本暂停中')
                sleep(3000)

            }

        }

    }

    function 作品推荐(params) {
        var zb = text("分享").visibleToUser().findOne().bounds()
        click(zb.centerX(), zb.centerY())
        sleep(random(1500, 2500))
        if (text("推荐给朋友").visibleToUser().exists()) {
            var zb = text("推荐给朋友").visibleToUser().findOne().bounds()
            click(zb.centerX(), zb.centerY())
        }
        sleep(random(1500, 2500))
    }

    function 换对标号() {
        log('更换对标账号，开始返回首页搜索..')
        if (sfzdbb == 1) {
            while (true) { //退出APP
                if (id(ssid).visibleToUser().exists()) {
                    log('检测到搜索按钮..')
                    sleep(2000)
                    搜索()
                    break

                } else {
                    log('未检测到首页，执行返回')
                    back()
                    sleep(3000)
                }
            }


        } else {
            while (true) { //退出APP
                if (desc("首页，按钮").visibleToUser().exists()) {
                    log('检测到首页')
                    var zb = desc("首页，按钮").visibleToUser().findOne().bounds()
                    log('点首页按钮')
                    click(zb.centerX(), zb.centerY())
                    sleep(3000)
                    if (text("刷新首页").visibleToUser().exists()) {
                        log('刷新首页')
                        var zb = text("刷新首页").visibleToUser().findOne().bounds()
                        click(zb.centerX(), zb.centerY())
                        sleep(3000)
                    }
                    if (text('推荐').visibleToUser().exists()) {
                        log('检测到推荐按钮，开始搜索')
                        sleep(1500)
                        搜索()
                        break



                    } else {
                        log('未在推荐页面')
                        back()
                        sleep(1500)
                    }

                } else {
                    log('未检测到首页，执行返回')
                    back()
                    sleep(3000)
                }
            }

        }

    }


    function 检测数据(params) {

        var url = "http://43.224.248.116:8071/getSige?sec_user_id=" + uid
        // MS4wLjABAAAA3esRbGJKfQS57qf7BYMyemMU0jGGJe80g3TAh_6oGa-eC8ImuQjo_MWhxk_8mH5j
        try {
            var res = http.get(url);
            if (res.statusCode == 200) {
                // 网页成功打开，可以继续处理
                var shuju = res.body.json()
                var code = shuju.code
            } else {
                // 网页打开失败，输出错误信息
                log("网页打开失败，状态码：" + res.statusCode);
            }
        } catch (e) {
            // 捕获异常，输出错误信息
            log("发生异常：" + e);
        }
        if (code == 200) {
            favoriting_count = shuju.data.user.favoriting_count  //点赞数量
            follower_count = shuju.data.user.follower_count  //粉丝数量
            following_count = shuju.data.user.following_count  //关注数量
            nickname = shuju.data.user.nickname  //名字
        } else {
            log('检测访问失败')

        }


    }
    function 检测数据1(params) {


        var url = "http://43.224.248.116:8071/getSige?sec_user_id=" + uid
        try {
            var res = http.get(url);
            if (res.statusCode == 200) {
                // 网页成功打开，可以继续处理
                var shuju = res.body.json()
                var code = shuju.code
            } else {
                // 网页打开失败，输出错误信息
                log("网页打开失败，状态码：" + res.statusCode);
            }
        } catch (e) {
            // 捕获异常，输出错误信息
            log("发生异常：" + e);
        }
        if (code == 200) {
            favoriting_count1 = shuju.data.user.favoriting_count  //点赞数量
            follower_count1 = shuju.data.user.follower_count  //粉丝数量
            following_count1 = shuju.data.user.following_count  //关注数量
            nickname = shuju.data.user.nickname  //名字
        } else {
            log('访问失败')

        }


    }

    function 任务(params) {

        if (gnxz == 0) { //留痕
            if (lh1 == 0) { //留痕选择

                lhsl1 = lhsl1 + 1
                log("当前留痕数量：" + lhsl1 + "/" + lhsl)

                if (lhsl1 == lhsl) {
                    gnxz = 1
                    log('留痕完成，开始下一个任务')

                }

                back()
                log('间隔时间:' + jgsj2)

                sleep(jgsj2)

            } else {
                gnxz = 1
                log('留痕未选择，开始下一功能')
                back()
                sleep(2000)

            }
        } else {
            var shuzu1 = shuzu.length - 1
            if (shuzu.length == 0) {
                home()
                alert('所有任务完成，程序结束')
                exit()
            }

            var ind = random(0, shuzu1);
            randomNum = shuzu[ind];

            if (randomNum == 1) {  //关注
                log('执行关注')
                if (jc == 1) {
                    检测数据()

                }
                if (text("关注").visibleToUser().exists()) {
                    var w = 0
                    if (pl < dz) {
                        主页关注()
                        gzsl1 = gzsl1 + 1
                        pl = pl + 1
                    } else {
                        log('休息，不点')
                        k = k + 1
                        w = 1
                        if (k - 1 > lh) {
                            pl = 0
                            k = 0
                        }
                    }
                    log('当前关注数量：' + gzsl1 + "/" + gzsl)


                    if (gzsl1 == gzsl) {
                        var target = 1;
                        for (var i = shuzu.length - 1; i >= 0; i--) {
                            if (shuzu[i] === target) {
                                shuzu.splice(i, 1);
                            }
                        }
                        log('关注任务完成')

                    }
                    sleep(2000)
                    back()
                    log('间隔时间：' + jgsj2)
                    sleep(jgsj2)
                    if (w == 0) {
                        if (jc == 1) {

                            检测数据1()
                            log('关注前：' + following_count + '关注后：' + following_count1)
                            if (following_count == following_count1) {
                                gzsb = gzsb + 1
                                gzzsb = gzzsb + 1
                                log('关注失败:' + gzsb)


                                if (gzzsb == dzsb1) {
                                    var target = 1;
                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                        if (shuzu[i] === target) {
                                            shuzu.splice(i, 1);
                                        }
                                    }
                                    log('关注失败达到指定数量，不在执行关注')
                                } else {
                                    if (gzsb == dzsb) { //休息
                                        var t = 0
                                        while (true) {
                                            t = t + 1
                                            log('关注失败达到指定数量，休息:' + t)
                                            home()
                                            toast('休息中')
                                            上滑()
                                            sleep(60000)
                                            if (t == xiuxi) {
                                                log('达到休息时间，开始运行')
                                                打开抖音()
                                                sb = 0
                                                sleep(5500)
                                                break
                                            }

                                        }
                                    }
                                }

                            } else {
                                gzsb = 0
                                gzzsb = 0
                            }
                        }
                    }
                } else {
                    log('未检测到关注按钮，返回')

                    back()
                    sleep(2000)
                }

            } else {
                if (randomNum == 2) {//头像点赞
                    log('执行头像点赞')

                    if (desc("用户头像").visibleToUser().exists()) {
                        主页点头像()
                        sleep(1500)
                        if (pl < dz) {
                            if (text("点赞").visibleToUser().exists()) {
                                var zb = text("点赞").visibleToUser().findOne().bounds()
                                click(zb.centerX(), zb.centerY())
                                txsl = txsl + 1
                                log('当前头像点赞数量：' + txsl + "/" + txsl1)

                                if (txsl == txsl1) {
                                    var target = 2;
                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                        if (shuzu[i] === target) {
                                            shuzu.splice(i, 1);
                                        }
                                    }
                                    log('头像点赞任务完成，开始下一个任务')

                                }
                                sleep(1500)
                            }
                            pl = pl + 1
                        } else {
                            log('休息，不点')


                            k = k + 1
                            if (k > lh) {
                                pl = 0
                                k = 0
                            }
                        }

                        sleep(1500)

                        back()
                        sleep(1500)
                    }
                    back()
                    log('间隔时间：' + jgsj2)
                    sleep(jgsj2)

                } else {
                    if (randomNum == 3) {//作品点赞
                        log('执行作品点赞')
                        if (id(zpid).visibleToUser().exists()) {
                            主页点作品()
                            log('作品浏览时间：' + zpllsj2)
                            sleep(zpllsj2)
                            if (jc == 1) {
                                检测数据()

                            }
                            var w = 0

                            if (pl < dz) {
                                作品点赞()
                                if (sfdz == 0) {
                                    zpdz2 = zpdz2 + 1
                                    log('作品点赞完成：' + zpdz2 + "/" + zpdz)
                                    if (zpdz2 == zpdz) {
                                        var target = 3;
                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                            if (shuzu[i] === target) {
                                                shuzu.splice(i, 1);
                                            }
                                        }
                                        log('作品点赞任务完成')

                                    }
                                    sleep(1500)
                                    pl = pl + 1
                                }

                            } else {
                                w = 1
                                log('休息，不点')
                                k = k + 1
                                if (k - 1 > lh) {
                                    pl = 0
                                    k = 0
                                }
                            }
                            back()
                            sleep(1000)
                            back()
                            log('间隔时间：' + jgsj2)
                            sleep(jgsj2)
                            if (sfdz == 0) {
                                if (w == 0) {
                                    if (jc == 1) {

                                        检测数据1()
                                        log('点赞前：' + favoriting_count + '点赞后：' + favoriting_count1)

                                        if (favoriting_count == favoriting_count1) {
                                            sb = sb + 1
                                            zsb = zsb + 1
                                            log('点赞失败:' + sb)

                                            if (zsb == dzsb1) {
                                                var target = 3;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('点赞失败达到指定数量，不在执行点赞')
                                            } else {
                                                if (sb == dzsb) { //休息
                                                    var t = 0
                                                    home()
                                                    while (true) {
                                                        t = t + 1
                                                        log('点赞失败达到指定数量，休息:' + t)

                                                        toast('休息中')
                                                        上滑()
                                                        sleep(60000)
                                                        if (t == xiuxi) {
                                                            log('达到休息时间，开始运行')
                                                            打开抖音()
                                                            sb = 0
                                                            sleep(3500)
                                                            break
                                                        }

                                                    }
                                                }
                                            }

                                        } else {
                                            sb = 0
                                            zsb = 0
                                        }
                                    }
                                }

                            }


                        } else {
                            log('未检测到作品，返回')
                            back()
                            sleep(2000)
                            while (true) {
                                if (descContains("头像").visibleToUser().exists()) {
                                    break
                                } else {
                                    log('未检测到粉丝列表头像，请手动返回')
                                    sleep(3000)
                                }

                            }
                        }


                    } else {
                        if (randomNum == 4) {//评论
                            log('执行作品评论')
                            if (id(zpid).visibleToUser().exists()) {
                                主页点作品()
                                log('作品浏览时间：' + zpllsj2)
                                sleep(zpllsj2)
                                if (pl < dz) {
                                    作品点评论()
                                    sssl = sssl + 1
                                    sleep(1500)
                                    if (desc("表情").exists()) {
                                        click(desc("表情").visibleToUser().findOne().bounds())
                                        sleep(1500)
                                        if (descContains("], 按钮").exists()) {
                                            for (var q = 0; q < 3; q++) {
                                                var a = 0
                                                var i = random(0, 20)
                                                descContains("], 按钮").visibleToUser(true).find().forEach(child => {
                                                    a = a + 1
                                                    if (i == a) {
                                                        var zb = child.bounds()
                                                        click(zb.centerX(), zb.centerY())
                                                        sleep(1000)
                                                    }

                                                })
                                            }
                                        }
                                        if (text("发送").exists()) {
                                            text("发送").visibleToUser().visibleToUser().find().forEach(function (child, index) {
                                                var zb = child.bounds()
                                                if (index == 1) {
                                                    click(zb.centerX(), zb.centerY())
                                                    sleep(2000)
                                                }
                                            })
                                        }
                                        back()
                                    }
                                    log('作品评论完成：' + sssl + "/" + plsl)

                                    if (sssl == plsl) {
                                        var target = 4;
                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                            if (shuzu[i] === target) {
                                                shuzu.splice(i, 1);
                                            }
                                        }
                                        log('作品评论任务完成')
                                    }
                                    sleep(1500)
                                    pl = pl + 1

                                } else {
                                    log('休息，不点')
                                    k = k + 1
                                    if (k > lh) {
                                        pl = 0
                                        k = 0
                                    }
                                }
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                log('间隔时间：' + jgsj2)
                                sleep(jgsj2)

                            } else {
                                log('未检测到作品，返回')
                                back()
                                sleep(2000)
                            }

                        } else {
                            if (randomNum == 5) {//私信
                                log('执行私信')
                                if (desc("更多").visibleToUser().exists()) {
                                    log('主页点右上角更多..')
                                    var xy = desc("更多").visibleToUser().findOne().bounds()
                                    click(xy.centerX(), xy.centerY())
                                    sleep(2500)
                                    if (text("发私信").visibleToUser().exists()) {

                                        var z = sxplnr.split(',').length - 1
                                        var sjs = random(0, z)
                                        var r = sxplnr.split(",") //分割内容
                                        var nr = r[sjs]
                                        var xy = text("发私信").visibleToUser().findOne().bounds()
                                        log('点发私信')
                                        click(xy.centerX(), xy.centerY())
                                        sleep(3500)
                                        log('点发送消息')
                                        if (text("发送消息").visibleToUser().exists()) {
                                            click("发送消息")
                                            sleep(1500)
                                            log(nr)
                                            setText(nr)
                                            log('输入内容')
                                            sleep(random(1000, 3000))
                                            var xy = desc("发送").visibleToUser().findOne().bounds()
                                            log('发送')
                                            click(xy.centerX(), xy.centerY())
                                            sxsl1 = sxsl1 + 1
                                            log('私信完成：' + sxsl1 + "/" + sxsl)
                                            if (sxsl1 == sxsl) {
                                                var target = 5;
                                                for (var i = shuzu.length - 1; i >= 0; i--) {
                                                    if (shuzu[i] === target) {
                                                        shuzu.splice(i, 1);
                                                    }
                                                }
                                                log('作私信任务完成')

                                            }

                                            sleep(3000)
                                            log('返回')
                                            back()
                                            sleep(2500)
                                            if (textContains("一口气发太多啦")) {
                                                log('text("一口气发太多啦，先休息一下吧")')
                                                alert("一口气发太多啦，先休息一下吧")

                                            }
                                            if (desc("表情").exists()) {
                                                log('检测到表情，再返回')
                                                back()
                                                sleep(2500)
                                            }
                                        } else {
                                            back()
                                            log('未找到发消息按钮')
                                            sleep(2000)
                                        }
                                    } else {
                                        back()
                                        log('未找到发私信按钮')
                                        sleep(2000)
                                    }

                                    back()
                                    log('返回粉丝列表，休息')
                                    sleep(jgsj2)
                                } else {
                                    log('未检测到私信按钮，返回')
                                    back()
                                    sleep(3000)
                                }

                            } else {
                                if (randomNum == 6) {//作品收藏
                                    log('执行作品收藏')

                                    if (id(zpid).visibleToUser().exists()) {
                                        主页点作品()
                                        log('作品浏览时间：' + zpllsj2)

                                        sleep(zpllsj2)

                                        if (id('user_avatar').visibleToUser().exists()) {
                                            log('检测到作品..')
                                            qwe = 1
                                        } else {
                                            log('未检测到作品...')
                                            if (desc("用户头像").visibleToUser().exists()) {
                                                log('返回')

                                                qwe = 0
                                                back()
                                                sleep(jgsj2)


                                            } else {
                                                qwe = 1
                                                back()
                                                sleep(1500)

                                            }
                                        }

                                        if (qwe == 1) {
                                            if (pl < dz) {

                                                作品收藏()
                                                scsl2 = scsl2 + 1
                                                sleep(2000)

                                                log('作品收藏完成：' + scsl2 + "/" + scsl)

                                                if (scsl2 == scsl) {
                                                    var target = 6;
                                                    for (var i = shuzu.length - 1; i >= 0; i--) {
                                                        if (shuzu[i] === target) {
                                                            shuzu.splice(i, 1);
                                                        }
                                                    }
                                                    log('作品收藏任务完成')
                                                }
                                                sleep(1500)
                                                pl = pl + 1

                                            } else {
                                                log('休息，不点')
                                                k = k + 1
                                                if (k > lh) {
                                                    pl = 0
                                                    k = 0
                                                }
                                            }
                                            sleep(1000)
                                            back()
                                            sleep(1500)
                                            back()
                                            log('间隔时间：' + jgsj2)
                                            sleep(jgsj2)
                                        }


                                    } else {
                                        log('未检测到作品，返回')
                                        back()
                                        sleep(2000)
                                    }


                                } else {
                                    if (randomNum == 7) { //作品分享
                                        log('执行作品分享推荐')
                                        if (id(zpid).visibleToUser().exists()) {
                                            主页点作品()
                                            log('作品浏览时间：' + zpllsj2)
                                            sleep(zpllsj2)
                                            if (id("user_avatar").visibleToUser().exists()) {
                                                log('检测到作品..')
                                                if (text("分享").visibleToUser().exists()) {
                                                    作品推荐()
                                                    fxsl1 = fxsl1 + 1
                                                    log('作品分享完成：' + fxsl1 + "/" + fxsl)
                                                    if (fxsl1 == fxsl) {
                                                        var target = 7;
                                                        for (var i = shuzu.length - 1; i >= 0; i--) {
                                                            if (shuzu[i] === target) {
                                                                shuzu.splice(i, 1);
                                                            }
                                                        }
                                                        log('作品分享任务完成')

                                                    }
                                                    back()
                                                    sleep(1000)

                                                } else {
                                                    log('未找到分享按钮，返回')
                                                }

                                            } else {
                                                log('未检测到作品...')

                                            }
                                            back()
                                            log('间隔时间：' + jgsj2)
                                            sleep(jgsj2)

                                        } else {
                                            log('未检测到作品，返回')
                                            back()
                                            sleep(2000)

                                        }

                                    }  //
                                }

                            } //
                        }
                    }
                }
            }

        }
        sjtj = "留痕：" + lhsl1 + "/" + lhsl + '          私信：' + sxsl1 + "/" + sxsl + '\n' + '关注：' + gzsl1 + "/" + gzsl + '          失败:' + gzsb + "/" + dzsb1 + '\n' + '头像点赞：' + txsl + "/" + txsl1 + '\n' + '作品点赞：' + zpdz2 + "/" + zpdz + '       失败:' + zsb + "/" + dzsb1 + '\n' + '作品收藏：' + scsl2 + "/" + scsl + '\n' + '作品推荐：' + fxsl1 + "/" + fxsl + '       作品评论：' + sssl + "/" + plsl


    }

    function 数据记录(params) {
        // var dd = new Date();
        // var y = dd.getFullYear();  //获取当前年份
        // var m = (dd.getMonth() + 1).toString().padStart(2, '0');
        //获取当前月份   padStart()方法 es6新属性 不满两位数时在前面加零
        // var d = (dd.getDate()).toString().padStart(2, '0');  //获取当前日期
        var m = "04"
        var d = "20" //获取当前日期
        var rq = m + '月' + d + '日'

        if (files.exists("/sdcard/sjjl.txt")) { //判断记录文本是否存在

            jlwb = files.read("/sdcard/sjjl.txt") //读取文本
            if (jlwb.includes(rq)) {

            } else {
                files.append("/sdcard/sjjl.txt", rq + follower_count + '粉' + "\n") //保存数据文本
                sleep(500)
                jlwb = files.read("/sdcard/sjjl.txt") //读取文本
            }


        } else {

            files.append("/sdcard/sjjl.txt", rq + follower_count + '粉' + "\n") //保存文本
            sleep(500)
            jlwb = files.read("/sdcard/sjjl.txt") //读取文本

        }

        // var jlwb = '12月31日123粉12月30日1231粉12月28日1223粉'
        var pattern = /(\d+月\d+日)(\d+粉)/g;
        matches = [];
        var match;
        while ((match = pattern.exec(jlwb)) !== null) {
            matches.push(match[1] + match[2]);
        }

    }
    function 作品页面点头像() {
        var zb = id("user_avatar").visibleToUser().findOne().bounds()
        click(zb.centerX(), zb.centerY())

    }

    function 推荐页点赞(params) {
        className("android.widget.ImageView").depth("31").visibleToUser().find().forEach(function (child, index) {
            log(index)
            if (index == 1) {
                var zb = child.bounds()
                click(zb.centerX(), zb.centerY())
            }
        })
    }

    function 作品点评论() {
        var w = 0

        descContains("评论").visibleToUser().find().forEach(child => {

            var zb = child.bounds()
            if (w == 0) {
                click(zb.centerX(), zb.centerY())
                sleep(1500)

            }
            w = w + 1

        })

    }

    function 性别识别(params) {
        if (descContains('女').visibleToUser().exists()) {
            log('性别：女')
            xbsb = 2
        } else {
            if (descContains('男').visibleToUser().exists()) {
                log('性别：男')
                xbsb = 1
            } else {
                log('无性别')
                xbsb = 0
            }
        }


    }

    function 检测页面(params) {
        while (true) {
            if (z == 0) { //执行粉丝列表
                if (descContains("粉丝").visibleToUser().exists()) {  //检测是否在粉丝列表
                    log('在粉丝列表，开始执行任务')
                    break
                } else {
                    if (desc("首页，按钮").visibleToUser().exists()) {
                        log('检测到首页')

                        var zb = desc("首页，按钮").visibleToUser().findOne().bounds()
                        log('点首页按钮')
                        click(zb.centerX(), zb.centerY())
                        sleep(3000)
                        if (text('推荐').visibleToUser().exists()) {
                            log('检测到推荐按钮，开始搜索')
                            sleep(1500)
                            搜索()
                            break

                        } else {
                            log('未在推荐页面')
                            back()
                            sleep(1500)
                        }

                    } else {
                        log('未检测到推荐页面，执行返回')
                        back()
                        sleep(3000)
                    }

                }
            }
            if (z == 2) {
                if (descContains('推荐').visibleToUser().exists()) {
                    log('检测到推荐按钮，开始搜索')
                    sleep(1500)
                    搜索()
                    break

                } else {
                    if (id("user_avatar").visibleToUser().exists()) {
                        log("在作品页面")
                        break
                    } else {
                        log("未作品页面,返回")
                        back()
                        sleep(3000)

                    }
                }
            }

        }

    }

    function 获取对标(params) {
        var url = fwq

        while (true) {
            var res = http.get(url);
            dyzh = res.body.string()
            log(dyzh)
            if (dyzh.includes('请求地址未绑定路由')) {
                log('服务器地址错误，请关闭脚本重新设置')
                sleep(8888888888)
            } else {
                if (files.exists("/sdcard/dyzh.text")) { //判断账号文本是否存在

                } else {
                    log("没有找到对标账号文件，进行创建")
                    files.append("/sdcard/dyzh.text", "账号文本" + "\n") //保存文本

                }
                var content = files.read("/sdcard/dyzh.text") //读取昵称文本
                if (dyzh == "库存为0！") {
                    log('但前服务器已经没有对标账号,10秒后重新获取' + "\n")
                    sleep(10000)
                } else {
                    if (content.includes(dyzh)) {
                        log(dyzh + "，该账号已经记录，换下一个")
                        sleep(2)
                    } else {
                        files.append("/sdcard/dyzh.text", dyzh + "\n") //保存文本
                        break
                    }
                }

            }


        }


    }
    function 搜索() {
        log("开始搜索对账号")

        if (s == 2) { //多闪
            var zb = desc("朋友，按钮").visibleToUser().findOne().bounds()
            log('点朋友按钮')
            click(zb.centerX(), zb.centerY())
            sleep(3000)

        }
        if (descContains(ss).visibleToUser().exists()) {  //点搜索按钮
            var zb = descContains(ss).visibleToUser().findOne().bounds()
            click(zb.centerX(), zb.centerY())
            log('点搜索')
            sleep(2000)
        } else {
            log('未检测到搜索按钮')
            sleep(3000)
        }

        sleep(1500)
        while (true) {

            if (desc("返回").visibleToUser().exists()) {
                获取对标()
                setText(dyzh)
                sleep(3500)
                if (textContains("抖音号：" + dyzh).visibleToUser().exists()) {//点头像按钮
                    log('搜索成功，进主页')
                    var zb = textContains("抖音号：" + dyzh).visibleToUser().findOne().bounds()
                    click(zb.centerX(), zb.centerY())
                    sleep(5000)
                    if (z == 2) { //喜欢列表
                        if (descContains('喜欢').visibleToUser().exists()) {  //点喜欢列表按钮
                            log('点喜欢列表')
                            var zb = descContains('喜欢').visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            sleep(3000)
                            if (text("该用户还没有喜欢过内容").visibleToUser().exists()) {
                                log('没有作品，重新搜索')
                            } else {
                                log('进入喜欢列表 作品页面')
                                主页点作品()
                                sleep(1000)
                                break
                            }


                        } else {
                            log("未检测到喜欢列表控件")
                            back()
                            sleep(3000)

                        }

                    } else { //粉丝列表
                        if (text("粉丝").visibleToUser().exists()) {  //点粉丝列表按钮
                            var zb = text("粉丝").visibleToUser().findOne().bounds()
                            click(zb.centerX(), zb.centerY())
                            log('点粉丝列表,等待加载5秒...')
                            sleep(5000)
                            if (descContains("粉丝").visibleToUser().exists()) {
                                log('进入粉丝列表，10秒后 开始执行任务')
                                sleep(10000)
                                break
                            } else {
                                log('未检测到粉丝列表，换对标账号重新搜索')
                                // 这里有删除云端数据的操作已禁用
                                // var res = http.post(fwq, {
                                //     code: dyzh
                                // });
                                // var res = res.body.string()
                                // log('删除无效号码：' + dyzh + res)
                                // back()
                                sleep(3000)

                            }

                        } else {
                            back()
                            log("未检测到主页粉丝列表控件，返回")
                            sleep(3000)

                        }
                    }

                } else {
                    if (descContains("搜索").visibleToUser().exists()) {//点搜索
                        log('点搜索，等待加载...')
                        var zb = descContains("搜索").visibleToUser().findOne().bounds()
                        click(zb.centerX(), zb.centerY())
                    }
                    sleep(5000)

                    if (textContains("抖音号：" + dyzh).visibleToUser().exists()) {//点头像按钮
                        log('搜索成功，进主页')
                        var zb = textContains("抖音号：" + dyzh).visibleToUser().findOne().bounds()
                        click(zb.centerX(), zb.centerY())
                        sleep(5000)
                        if (z == 2) { //喜欢列表
                            if (descContains('喜欢').visibleToUser().exists()) {  //点喜欢列表按钮
                                log('点喜欢列表')
                                var zb = descContains('喜欢').visibleToUser().findOne().bounds()
                                click(zb.centerX(), zb.centerY())
                                sleep(3000)
                                if (text("该用户还没有喜欢过内容").visibleToUser().exists()) {
                                    log('没有作品，重新搜索')
                                } else {
                                    log('进入喜欢列表 作品页面')
                                    主页点作品()
                                    sleep(1000)
                                    break
                                }


                            } else {
                                log("未检测到喜欢列表控件")
                                back()
                                sleep(3000)

                            }

                        } else { //粉丝列表
                            if (text("粉丝").visibleToUser().exists()) {  //点粉丝列表按钮
                                var zb = text("粉丝").visibleToUser().findOne().bounds()
                                click(zb.centerX(), zb.centerY())
                                log('点粉丝列表,等待加载5秒...')
                                sleep(5000)
                                if (descContains("粉丝").visibleToUser().exists()) {
                                    log('进入粉丝列表，10秒后 开始执行任务')
                                    sleep(10000)
                                    break
                                } else {
                                    log('未检测到粉丝列表，换对标账号重新搜索')
                                    var res = http.post(fwq, {
                                        code: dyzh
                                    });
                                    var res = res.body.string()
                                    log('删除无效号码：' + dyzh + res)
                                    back()
                                    sleep(3000)
                                }

                            } else {
                                back()
                                log("未检测到主页粉丝列表控件，返回")
                                sleep(3000)

                            }
                        }

                    } else {
                        log("未检测到搜索用户，更换ID")
                        // var res = http.post(fwq, {
                        //     code: dyzh
                        // });
                        // var res = res.body.string()
                        // log('删除无效号码：' + dyzh + res)
                        sleep(3000)
                    }

                }

            } else {
                log('未找到搜索输入框..')
                if (descContains(ss).visibleToUser().exists()) {  //点搜索按钮
                    var zb = descContains(ss).visibleToUser().findOne().bounds()
                    click(zb.centerX(), zb.centerY())
                    log('点搜索')
                    sleep(2000)
                } else {
                    log('未检测到搜索按钮')
                    back()
                    sleep(3000)
                }
            }

        }




    }

    function 主页关注() {
        var a = 0
        text("关注").visibleToUser().find().forEach(child => {
            var zb = child.bounds()
            if (a == 1) {
                click(zb.centerX(), zb.centerY())
            }
            a = a + 1
        })
    }
    function 主页点头像() {
        var zb = desc("用户头像").visibleToUser().findOne().bounds();
        click(zb.centerX(), zb.centerY())
    }

    function 时间转换(ms) {
        var ms = ms > 0 ? ms : 0;
        var hour = Math.floor(ms / 3600000);
        var min = Math.floor((ms % 3600000) / 60000);
        var sec = Math.floor(((ms % 3600000) % 60000) / 1000);
        return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    }

    function 打开抖音() {
        launch(packageName)
    }

    function 主页点作品() {
        var zpsl = id(zpid).visibleToUser().find().length
        if (zpsl > 3) {
            zpsl = 3
        }
        var sjsz = random(1, zpsl)
        id(zpid).visibleToUser().find().forEach(function (child, index) {
            // log(sjsz + ',' + zpsl)
            if (zpsl > 1) {
                if (index == sjsz) {
                    var zb = child.bounds();
                    click(zb.centerX(), zb.centerY())
                }
            } else {
                var zb = id(zpid).visibleToUser().findOne().bounds();
                click(zb.centerX(), zb.centerY())
                sleep(500)
            }
        })
        // var zb = id(zpid).visibleToUser().findOne().bounds();
        // click(zb.centerX(), zb.centerY())

    }
    function 作品点赞() {
        var a = 0
        var count = className("android.widget.TextView").visibleToUser().find().length; //取当前页面控件数量
        className("android.widget.TextView").visibleToUser().find().forEach(child => {
            var zb = child.bounds()
            var sl = child.text()
            if (sl.includes('万')) {
                log('点赞数量过万，跳过')

            } else {
                if (a == 0) {
                    log('点赞数量：' + sl)
                    if (parseInt(sl) > spdzsl) {
                        log('作品点赞数量大于设置数量不点')
                        sfdz = 1

                    } else {
                        sfdz = 0
                        click(zb.centerX(), zb.centerY())
                    }



                }

            }

            a = a + 1

        })



    }
    function 作品收藏() {
        if (sfzdbb == 1) {
            if (id(zpscid).visibleToUser().exists()) {
                var zb = id(zpscid).visibleToUser().findOne().bounds()
                click(zb.centerX(), zb.centerY())
            } else {
                log('未检测到收藏按钮..')
            }


        } else {
            var a = 0
            var count = className("android.widget.TextView").visibleToUser().find().length; //取当前页面控件数量
            className("android.widget.TextView").visibleToUser().find().forEach(child => {
                var zb = child.bounds()
                var sl = child.text()
                if (a == 2) {
                    log('收藏数量：' + sl)
                    click(zb.centerX(), zb.centerY())

                }
                a = a + 1

            })

        }


    }

    function 上滑() {
        swipe(random(400, 600), random(1250, 1300), random(400, 600), random(300, 400), random(600, 800));
    }

    //无障碍开关
    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            auto.service.disableSelf();
        }
    });

    //悬浮窗权限开关
    ui.floatyService.on("check", function (checked) {
        // 用户勾选悬浮窗权限的选项时，跳转到页面让用户去开启
        if (!是否有悬浮窗权限()) {
            toastLog("没有悬浮窗权限,将跳转到开启悬浮窗权限界面");
            申请悬浮窗权限();
        } else {
            toastLog("已有悬浮窗权限");
        }
    });

    function 是否有悬浮窗权限() {
        return new android.provider.Settings().canDrawOverlays(context);
    }

    //此脚本为：跳转到所有应用申请悬浮窗权限界面
    function 申请悬浮窗权限() {
        var intent = new Intent();
        intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
        // ui.emitter.on("activity_result", (req, res, intent) => {});
        activity.getEventEmitter().on("activity_result", function (requestCode, resultCode, intentData) { });
        activity.startActivityForResult(intent, 8000);
    }



    //===================加密模块================


    var scriptStatus = true;
    var storage = storages.create('demo数据');
    var uuid = device.fingerprint
    uuid = $crypto.digest(uuid, "MD5");


    // if (storage.get('km')) {

    //     var km = storage.get("km")
    //     var dqsj = storage.get("dqsj")
    //     ui.km.setText(km)
    //     ui.time.setText(dqsj)
    //     // ui.info.setText(gg)

    // }



    // ui.jb.on("click", () => {  //解绑
    //     threads.start(function () {

    //         if (storage.get('km')) {
    //             var km = storage.get("km")
    //             var url = "http://app.iuser.top/a999357/api.php?name=zdy_jb&c1=" + rjbh + "&c2=" + km
    //             log(km)
    //             log(url)
    //             var res = http.get(url);
    //             //   log(res)
    //             var fhz = res.body.string()
    //             alert(fhz)
    //             log(fhz)
    //         } else {

    //             alert("当前没有绑定卡密。")
    //         }
    //     })
    // })


    // ui.activation.on("click", () => {   //激活
    //     threads.start(function () {

    //         var km = ui.km.text()
    //         var url = "http://app.iuser.top/a999357/api.php?name=zdy_dyd&c1=" + rjbh + "&c2=" + km + '&c4=3.0&c5= ' + uuid + "&c7=11"

    //         log(url)
    //         log(uuid)
    //         var res = http.get(url);
    //         var fhz = res.body.string()
    //         log(fhz)
    //         var z = fhz.split('<|>').length - 1  //取返回数组成员数
    //         scriptStatus = true;
    //         // if (z == 0) {
    //         //     alert(fhz)
    //         // } else {
    //         //     var r = fhz.split("<|>") //分割内容
    //         //     var dqsj = r[0]
    //         //     storage.put('km', km)
    //         //     storage.put('dqsj', dqsj)
    //         //     scriptStatus = true;
    //         //     alert("激活成功，到期时间：" + dqsj)

    //         // }

    //     })

    // })

    // function 到期时间() {
    //     var sj = storage.get("dqsj")
    //     ui.time.setText(sj)

    // }


    // function check() {
    //     if (storage.get('km')) {
    //         var km = ui.km.text()
    //         log(km + 'uid:' + uuid)
    //         threads.start(function () {
    //             var km = ui.km.text()
    //             var url = "http://app.iuser.top/a999357/api.php?name=zdy_dyd&c1=" + rjbh + "&c2=" + km + '&c4=3.0&c5= ' + uuid + "&c7=10,11"
    //             var res = http.get(url);
    //             var fhz = res.body.string()
    //             var z = fhz.split('<|>').length - 1  //取返回数组成员数
    //             if (z == 0) {
    //                 alert(fhz)
    //             } else {
    //                 var r = fhz.split("<|>") //分割内容
    //                 var dqsj = r[1]
    //                 storage.put('km', km)
    //                 storage.put('dqsj', dqsj)
    //                 scriptStatus = true;
    //                 log("到期时间：" + dqsj)

    //             }

    //         })


    //     }


    // }

    // function 验证激活码(km, uuid) {
    //     threads.start(function () {
    //         var km = ui.km.text()
    //         var url = "http://app.iuser.top/a999357/api.php?name=zdy_dyd&c1=" + rjbh + "&c2=" + km + '&c4=3.0&c5= ' + uuid + "&c7=10,11"
    //         var res = http.get(url);
    //         var fhz = res.body.string()
    //         var z = fhz.split('<|>').length - 1  //取返回数组成员数
    //         if (z == 0) {
    //             alert(fhz)
    //         } else {
    //             var r = fhz.split("<|>") //分割内容
    //             var dqsj = r[1]
    //             storage.put('km', km)
    //             storage.put('dqsj', dqsj)
    //             scriptStatus = true;
    //             log("到期时间：" + dqsj)

    //         }

    //     })

    // }



    //===================加密模块结束=============
}





