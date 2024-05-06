	var rule = {
            title: '天天综合',
            host: 'https://buap.770xx.vip/',

     hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});HOST = jsp.pdfh(html,".login-txt&&a&&href");log(HOST);',
	
          
          url:'fyclassfyfilter.html',
	filterable:1,
	filter_url:'{{fl.cateId}}/{{fl.class}}-fypage',
	filter: {
		"xjzy":[
{
"key":"class",
"name":"中文资源",
"value":[
{"n":"解说原片","v":"sd-jieshuoyuanpian"},
{"n":"3D同人","v":"sd-3Dtongren"},
{"n":"中文无码","v":"sd-zhongwenwuma"},
{"n":"中文综合","v":"sd-zhongwenzonghe"},
{"n":"国产综合","v":"sd-guochanzipai"},
{"n":"中文近亲","v":"sd-zhongwenjingqing"},
{"n":"中文护士","v":"sd-zhongwenhushi"},
{"n":"中文师生","v":"sd-zhongwenshisheng"},
{"n":"中文强奸","v":"sd-zhongwenqiangjian"},
{"n":"明星淫梦","v":"sd-mingxingyinmeng"},
{"n":"国产自拍","v":"sd-guochanzipai"},
{"n":"三级综合","v":"sd-sanjizonghe"}
]
}],
"gccm":[
{
"key":"class",
"name":"国产传媒",
"value":[
{"n":"麻豆原创","v":"op-madouyuanchuang"},
{"n":"91制片厂","v":"op-91zhipianchang"},
{"n":"糖心Vlgo","v":"op-tangxinVlgo"},
{"n":"天美传媒","v":"op-tianmeichuanmei"},
{"n":"蜜桃传媒","v":"op-mitaochuanmei"},
{"n":"皇家华人","v":"op-huangjiahuaren"},
{"n":"星空传媒","v":"op-xingkongchuanmei"},
{"n":"精东影业","v":"op-jingdongyingye"},
{"n":"乐播传媒","v":"op-lebochuanmei"},
{"n":"乌鸦传媒","v":"op-wuyachuanmei"},
{"n":"兔子先生","v":"op-tuzixiansheng"},
{"n":"杏吧原创","v":"op-xingbayuanchuang"},
{"n":"MINI传媒","v":"op-minichuanmei"},
{"n":"大象传媒","v":"op-daxiangchuanmei"},
{"n":"开心鬼传媒","v":"op-kaixinguichuanmei"},
{"n":"PsychoPorn","v":"op-PsychoPorn"}
]
}],
"cq":[
{
"key":"class",
"name":"超清资源",
"value":[
{"n":"亚洲AV","v":"as-yazhou"},
{"n":"自拍偷拍","v":"as-zipaitoupai"},
{"n":"超清传媒","v":"as-chaoqingchuanmei"},
{"n":"3D动漫","v":"as-3Ddongman"},
{"n":"欧美AV","v":"as-oumeiav"},
{"n":"乱伦人妻","v":"as-luanlunrenqi"},
{"n":"丝袜制服","v":"as-siwazhifu"},
{"n":"直播录播","v":"as-zhibolubo"},
{"n":"SM另类","v":"as-SMlinglei"},
{"n":"超清三级","v":"as-chaoqingsanji"}
]
}],
"99re":[
{
"key":"class",
"name":"久久热资源",
"value":[
{"n":"国产自拍","v":"io-guochanzipai"},
{"n":"欧美","v":"io-oumei"},
{"n":"中文字幕","v":"io-zhongwenzimu"},
{"n":"李宗瑞全集","v":"io-lizongruiquanji"},
{"n":"日本无码","v":"io-ribenwuma"},
{"n":"加勒比","v":"io-jialebi"},
{"n":"日本有码","v":"io-ribenyouma"},
{"n":"一本道","v":"io-yibendao"},
{"n":"高清","v":"io-gaoqing"},
{"n":"潮吹","v":"io-chaochui"},
{"n":"会员认证作品","v":"io-jiujiurehuiyuanrenzhengzuopin"},
{"n":"制服丝袜","v":"io-zhifusiwa"},
{"n":"口爆颜射","v":"io-koubaoyanshe"},
{"n":"肛交","v":"io-gangjiao"},
{"n":"东京热","v":"io-dongjingre"},
{"n":"小格式综合","v":"io-xiaogeshizonghe"},
{"n":"女主播系列","v":"io-hanguonvzhuboxilie"},
{"n":"成人动漫","v":"io-chengrendongman"},
{"n":"SM性虐","v":"io-SMxingnue"},
{"n":"韩国综合","v":"io-hanguozonghe"},
{"n":"三级片","v":"io-sanjipiana"},
{"n":"VR专区","v":"io-VRzhuanquVirtualReality"}
]
}],
"avjs":[
{
"key":"class",
"name":"",
"value":[
{"n":"π解说","v":"pa-AVJS"}
]
}],
"fcw":[
{
"key":"class",
"name":"废柴网资源",
"value":[
{"n":"VIP专区","v":"ui-VIPzhuanqu"},
{"n":"偷拍系列","v":"ui-toupaixilie"},
{"n":"国产自拍","v":"ui-guochanzipai"},
{"n":"日本有码","v":"ui-ribenyouma"},
{"n":"日本无码","v":"ui-ribenwuma"},
{"n":"成人动漫","v":"ui-chengrendongman"},
{"n":"韩国综合","v":"ui-hanguozonghe"},
{"n":"VR专区","v":"ui-VRzhuanqu"},
{"n":"欧美","v":"ui-oumei"}
]
}
]
},



  searchUrl: '/sa**/page/fypage.html',
            searchable: 2,
            quickSearch: 0,
            
            headers: {
                'User-Agent': 'MOBILE_UA',
                 'Cookie': 'searchneed=ok',
            },
class_name:'中文资源&国产传媒&超清资源&久久综合&av解说&废柴网',
class_url:'xjzy&gccm&cq&99re&avjs&cfw',


            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '*',
            double: true, 
             一级:'.list-videos&&.item;a&&title;.lazy-load&&data-original;.duration&&Text;a&&href',

二级:'*',
            搜索:'*',
               }