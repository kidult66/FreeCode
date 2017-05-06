/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var input_city = document.getElementById("aqi-city-input");
    var input_num = document.getElementById("aqi-value-input");
    
    var city = input_city.value.trim();
    var num = input_num.value.trim();

    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("输入有误，请输入中文或英文");
        return;
    }
    if(!num.match(/^\d+$/)){
        alert("输入有误，空气质量指数须为整数");
        return;
    }

    aqiData[city] = num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    var table_content = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        /*if(table.children.length === 0){
            table_content = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        }*/
        table_content += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td>" + "<button type='button' onclick='delBtnHandle(\""+ city + "\")'>删除</button></td></tr>";
    }
    table.innerHTML = table_content;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    delete aqiData[city];
    renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var add_btn = document.getElementById("add-btn");
    // add_btn.addEventListener("click",addBtnHandle(),false);
    add_btn.addEventListener("click",addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    
}

init();