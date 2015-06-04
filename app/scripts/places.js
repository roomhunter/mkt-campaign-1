/**
 * Created by yuannan on 6/3/15.
 */
var places = [{
    title: '中央公园露宿街头',
    description: '纽约的后花园，全世界最著名的公园之一。只要你不介意偶尔飘来的马粪味，这里也能算的上惬意的居所。',
    imageUrl: ''
}, {
    title: '德克萨斯马匹农场',
    description: '去民风剽悍的德克萨斯州做一名牛仔吧！这里虽然没有德州扒鸡，但是有原汁原味的BBQ！',
    imageUrl: ''
}, {
    title: '伊利诺伊玉米地农庄',
    description: '广袤的玉米地在向亲招手，秋收的劳作离不开你。',
    imageUrl: ''
}, {
    title: '威廉斯堡老式公寓',
    description: '“破产女孩”之家，既有古老、文艺的气息，又会不时给你surprise—打开橱柜蹦出一只大老鼠！',
    imageUrl: ''
}, {
    title: '曼哈顿单身公寓',
    description: '能在寸土寸金的曼哈顿租得起一套单身公寓绝对能让你立刻跻身“黄金单身汉”的行列，数不尽的爬梯等着你！',
    imageUrl: ''
}, {
    title: '佛罗里达阳光海景房',
    description: '海风轻拂着你的脸庞，细沙被海水冲刷，温柔得划过你的指尖。碧海、蓝天，这才是生活！',
    imageUrl: ''
}, {
    title: '拉斯维加斯脱衣舞俱乐部',
    description: '钢管、高跟鞋、比基尼，摩擦、摩擦，白花花的大腿、细致的高跟，拨动着心旋。原来这才是你在美帝最适合的归处！',
    imageUrl: ''
}, {
    title: '科罗拉多大峡谷',
    description: '天为被，地为床，这样的体验只属于你一人！昼夜温差大，记得多盖几层被子。',
    imageUrl: ''
}, {
    title: '韦恩庄园',
    description: '“蝙蝠侠”布鲁斯·韦恩的私人府邸，还有管家阿福为你服务，你人品是有多么好？',
    imageUrl: ''
}, {
    title: '旧金山恶魔岛监狱',
    description: '位于旧金山湾的恶魔岛监狱被海水环绕，号称最难逃出的监狱。你上辈子是造了什么孽才会住到这种地方？',
    imageUrl: ''
}, {
    title: '白宫',
    description: '恭喜你入住美国的权力中心，和奥巴马成为室友！你可以去知乎回答“住在白宫时怎样一种体验？”这个问题了:)',
    imageUrl: ''
}, {
    title: '加州圣巴巴拉梦幻庄园',
    description: '这里曾经是迈克尔·杰克逊的住所，名字来自童话《小飞侠》中的神奇王国Neverland。住进去之后，是不是真的不会长大呢？',
    imageUrl: ''
}, {
    title: '匹兹堡流水别墅',
    description: 'F·L·赖特设计的杰作之一，凌空建于溪流和瀑布之上，与大自然融为一体。这样梦幻的场景，真的不是在做梦吗？',
    imageUrl: ''
}, {
    title: '洛杉矶桑德汽车旅馆',
    description: '位于洛杉矶的桑德汽车旅馆就在好莱坞附近，出门便是星光大道，戴上耳机听着《加州旅店》出门散散步，随时有可能邂逅某个大明星。',
    imageUrl: ''
}, {
    title: '波士顿文艺小洋楼',
    description: '住在文艺的小洋楼里，和哈佛MIT的学霸们做邻居，窗外就是查尔斯河的美丽风光。还有比你更幸福的生活吗？',
    imageUrl: ''
}, {
    title: '辛辛那提蘑菇房',
    description: '这个巨型“蘑菇”是由波浪形的木料和一大堆杂乱的材料粘合在一起建造的，这座天马行空的蘑菇房，最适合充满奇思妙想的你！',
    imageUrl: ''
}, {
    title: '夏威夷热情稻草屋',
    description: '住进夏威夷的稻草屋，享受海天一色的美景，摇曳多姿的椰子树。快换上草裙，和热情的当地居民一起起舞吧！',
    imageUrl: ''
}, {
    title: '布鲁克林大桥下的桥洞',
    description: '纽约可不仅仅是曼哈顿，去住一晚布鲁克林大桥的桥洞，体验一把惊险刺激的城市狂想曲吧！不过，千万要注意安全哦。',
    imageUrl: ''
}, {
    title: '霸道总裁的卧室',
    description: '变身《五十度灰》女主角，入住霸道总裁卧室……接下来，@#$%（此处省略一万字）',
    imageUrl: ''
}, {
    title: 'RoomHunter纽约全球总部的办公室',
    description: '恭喜你！能够进入严格保密的RoomHunter纽约全球总部，这是一个连Google Map都搜索不到的未知之地。RoomHunter是一家炙手可热的科技公司，致力于将租房变得更简单。',
    imageUrl: ''
}];
function getRandomPlace() {
    var index = Math.floor(Math.random() * places.length);
    var answer = places[index];
    return answer;
}