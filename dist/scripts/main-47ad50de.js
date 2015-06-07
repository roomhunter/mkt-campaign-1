function getRandomPlace(){var e=Math.floor(Math.random()*places.length),t=places[e];return t}function submitMyName(){var e=document.getElementById("name").value,t=getIndexOf(e,places),a=places[t],n=document.getElementById("submit-btn"),i=document.getElementById("name-label");return e.length<1?!1:(n.classList.add("loading"),n.lastElementChild.textContent="为你测算中...",i.textContent="为你测算中...",wx.onMenuShareAppMessage({title:e+"在美国会住: "+a.title+"。测测你在美国会住在哪里？",desc:a.description,link:getSharableLink(t,e),imgUrl:a.imageUrl+"!wxShareImage",type:"link",dataUrl:"",success:function(){},cancel:function(){}}),wx.onMenuShareTimeline({title:e+"在美国会住: "+a.title+"。测测你在美国会住在哪里？",link:getSharableLink(t,e),imgUrl:a.imageUrl+"!wxShareImage",success:function(){},cancel:function(){}}),setGameResultBy(a,e),window.setTimeout(function(){toResult()},1500),!1)}function toGame(){var e=document.getElementsByClassName("game")[0],t=document.getElementsByClassName("game-input")[0];e.classList.remove("slide-to-left"),t.classList.remove("slide-to-left"),window.setTimeout(function(){e.classList.add("played")},1e3)}function setGameResultBy(e,t){var a=document.getElementById("place-title"),n=document.getElementById("place-description"),i=document.getElementById("place-image"),m=document.getElementById("name-title");i.setAttribute("src",e.imageUrl),a.textContent=e.title,m.textContent=t,n.textContent=e.description}function toResult(){var e=document.getElementsByClassName("game")[0],t=document.getElementsByClassName("game-input")[0];e.classList.remove("slide-to-right"),t.classList.add("offset-to-left"),e.classList.add("offset-to-left"),e.classList.add("slide-to-left")}function getIndexOf(e,t){for(var a=0,n=0,i=e.length;i>n;n++)a=31*a+e.charCodeAt(n)<<0;var m=t.length;return(a%m+m)%m}function getSharableLink(e,t){var a="http://marketing.roomhunter.us/where-to-live?name="+t+"&placeIndex="+e;return encodeURI(a)}var places=[{title:"中央公园露宿街头",description:"纽约的后花园，全世界最著名的公园之一。只要你不介意偶尔飘来的马粪味，这里也能算的上惬意的居所。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/d2cc0152bb1cda16acd33ba26069ea58.png"},{title:"德克萨斯马匹农场",description:"去民风剽悍的德克萨斯州做一名牛仔吧！这里虽然没有德州扒鸡，但是有原汁原味的BBQ！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/69ae0f31e9990e7da984a9916f5f9603.png"},{title:"伊利诺伊玉米地农庄",description:"广袤的玉米地在向亲招手，秋收的劳作离不开你。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/3261222a96b4b166180f4ebe89085c55.png"},{title:"威廉斯堡老式公寓",description:"“破产女孩”之家，既有古老、文艺的气息，又会不时给你surprise—打开橱柜蹦出一只大老鼠！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/eacadeacaf4d8c94fe583e3b88a62992.png"},{title:"曼哈顿单身公寓",description:"能在寸土寸金的曼哈顿租得起一套单身公寓绝对能让你立刻跻身“黄金单身汉”的行列，数不尽的爬梯等着你！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/4f515f3cb88c5e31651c12a3f3509b2a.png"},{title:"佛罗里达阳光海景房",description:"海风轻拂着你的脸庞，细沙被海水冲刷，温柔得划过你的指尖。碧海、蓝天，这才是生活！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/030e8e02b1be681f97738ec5d4fd58bb.png"},{title:"拉斯维加斯脱衣舞俱乐部",description:"钢管、高跟鞋、比基尼，摩擦、摩擦，白花花的大腿、细致的高跟，拨动着心旋。原来这才是你在美帝最适合的归处！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/40a5846a42c8b7ffbae8c513d2acc981.png"},{title:"科罗拉多大峡谷",description:"天为被，地为床，这样的体验只属于你一人！昼夜温差大，记得多盖几层被子。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/130e7331e886fb19ab0a8d538d464cc8.png"},{title:"韦恩庄园",description:"“蝙蝠侠”布鲁斯·韦恩的私人府邸，还有管家阿福为你服务，你人品是有多么好？",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/2269bc8bf9b20c494d06d70808a72885.png"},{title:"旧金山恶魔岛监狱",description:"位于旧金山湾的恶魔岛监狱被海水环绕，号称最难逃出的监狱。你上辈子是造了什么孽才会住到这种地方？",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/cd8b9ca6c38fb3d478026700d8010954.png"},{title:"白宫",description:"恭喜你入住美国的权力中心，和奥巴马成为室友！你可以去知乎回答“住在白宫是怎样一种体验？”这个问题了:)",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/2c2e377122d136866b9b158d903ffb1b.png"},{title:"加州圣巴巴拉梦幻庄园",description:"这里曾经是迈克尔·杰克逊的住所，名字来自童话《小飞侠》中的神奇王国Neverland。住进去之后，是不是真的不会长大呢？",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/50befc802ca910daf74f73d1b5662808.jpg"},{title:"匹兹堡流水别墅",description:"F·L·赖特设计的杰作之一，凌空建于溪流和瀑布之上，与大自然融为一体。这样梦幻的场景，真的不是在做梦吗？",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/78865663504d05a537df7d5218f9ebe0.png"},{title:"洛杉矶桑德汽车旅馆",description:"位于洛杉矶的桑德汽车旅馆就在好莱坞附近，出门便是星光大道，戴上耳机听着《加州旅店》出门散散步，随时有可能邂逅某个大明星。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/cf4ef97683db76e4f078442f38bca309.png"},{title:"波士顿文艺小洋楼",description:"住在文艺的小洋楼里，和哈佛MIT的学霸们做邻居，窗外就是查尔斯河的美丽风光。还有比你更幸福的生活吗？",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/8bd20c9aba56b5412bd259459ea81eb3.png"},{title:"辛辛那提蘑菇房",description:"这个巨型“蘑菇”是由波浪形的木料和一大堆杂乱的材料粘合在一起建造的，这座天马行空的蘑菇房，最适合充满奇思妙想的你！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/d14e8a533860d0ba17f568bef27911df.png"},{title:"夏威夷热情稻草屋",description:"住进夏威夷的稻草屋，享受海天一色的美景，摇曳多姿的椰子树。快换上草裙，和热情的当地居民一起起舞吧！",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/19351982d2812ea8a2aab089c2233d3c.png"},{title:"布鲁克林大桥下的桥洞",description:"纽约可不仅仅是曼哈顿，去住一晚布鲁克林大桥的桥洞，体验一把惊险刺激的城市狂想曲吧！不过，千万要注意安全哦。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/9e5145871375b1efda899d5f203e5355.png"},{title:"霸道总裁的卧室",description:"变身《五十度灰》女主角，入住霸道总裁卧室……接下来，@#$%（此处省略一万字）",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/f67201d475d92f72a0fcc4526570e3a5.png"},{title:"RoomHunter纽约全球总部的办公室",description:"恭喜你！能够进入严格保密的RoomHunter纽约全球总部，这是一个连Google Map都搜索不到的未知之地。RoomHunter是一家炙手可热的科技公司，致力于将租房变得更简单。",imageUrl:"http://roomhunter-images.b0.upaiyun.com/marketing-places/3ef8c91df56500c5552b4e5fe1b75970.jpg"}];!function(){function e(e){var t,a,n,i,m={};for(t=e.split("&"),n=0,i=t.length;i>n;n++)a=t[n].split("="),m[a[0]]=a[1];return m}var t=window.location.search,a=document.getElementById("name"),n=document.getElementById("submit-btn"),i=(document.getElementsByClassName("game-input")[0],document.getElementById("to-game"));if(i.onclick=function(){var e=document.getElementsByClassName("game")[0],t=document.getElementsByClassName("game-input")[0];t.classList.remove("offset-to-left"),e.classList.remove("offset-to-left"),e.classList.add("slide-to-right"),window.setTimeout(function(){e.classList.add("played")},1e3)},a.oninput=function(){a.value.length>0?n.classList.remove("disabled"):n.classList.add("disabled")},t){var m=e(decodeURIComponent(t.substring(1))),o=document.getElementById("place-title"),c=document.getElementById("place-description"),l=document.getElementById("place-image"),s=document.getElementById("name-title"),r=m.placeIndex||0,d=places[r]||places[0];m.name&&d&&(l.setAttribute("src",d.imageUrl),o.textContent=d.title,s.textContent=m.name,c.textContent=d.description)}}(),wx.ready(function(){var e=document.getElementsByClassName("game")[0];e.classList.add("ready")});