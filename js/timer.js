var theCanvas = document.getElementById("canvasOne");
var cx = theCanvas.getContext("2d");
var color;
var cardStartX;
var cardStartY;

function drawScreen() {
    //背景
    cx.fillStyle = "gray";
    cx.fillRect(0, 0, theCanvas.width, theCanvas.height);

}

function drawCurveCard(cardStartX, cardStartY, color, first) {
    //起點
    var startX = 0;
    var startY = 0;
    //矩形長寬
    var rectX = 150;
    var rectY = 250;
    var curveRectX = rectX + 10;
    var curveRectY = rectY + 10;
    var curveX = startX - 10;
    var curveY = startY + 10;
    var arrowStartX = curveRectX;
    var arrowStartY = startY + 100;
    var arrowMiddleX = arrowStartX + 20;
    var arrowMiddleY = arrowStartY + 20;
    var arrowEndX = curveRectX;
    var arrowEndY = arrowStartY + 40;

    //取出下張卡片距離
    var nextStartX = curveRectX + 20;
    //變更起始繪圖座標
    cx.translate(cardStartX, cardStartY);
    // color = "black";
    cx.fillStyle = color;


    cx.beginPath();
    //座標到原點
    cx.moveTo(startX, startY);
    // 畫線至右上角
    cx.lineTo(rectX, startY);
    // 畫出右上圓角
    cx.quadraticCurveTo(curveRectX, startY, curveRectX, curveY);
    //劃線至箭頭起點
    cx.lineTo(arrowStartX, arrowStartY);
    // 畫線至箭頭頂點
    cx.lineTo(arrowMiddleX, arrowMiddleY);
    // 畫線至箭頭終點
    cx.lineTo(arrowEndX, arrowEndY);
    // 畫線至右下角
    cx.lineTo(curveRectX, rectY);
    // 畫出右下圓角
    cx.quadraticCurveTo(curveRectX, curveRectY, rectX, curveRectY);
    // 畫線至左下角
    cx.lineTo(startX, curveRectY);
    // 畫出左下圓角
    cx.quadraticCurveTo(curveX, curveRectY, curveX, rectY);
    //畫線至左上角
    cx.lineTo(curveX, curveY);
    // 畫出左上圓角
    cx.quadraticCurveTo(curveX, startY, startX, startY);
    //著色
    cx.fill();

    // cx.stroke();


}


function drawCard() {
    var cardDistance;

    cx.fillStyle = "black";
    cx.fillRect(125, 125, 125, 250);
    cx.save();
    cx.translate(250, 175);
    cx.rotate(45 * Math.PI / 180);
    //畫三角形
    cx.fillRect(32, 32, 32, 32);
    cx.restore();
    cx.fillStyle = "yellow";
    cx.translate(160, 0);
    cx.fillRect(125, 125, 125, 250);
    cx.save();
    cx.translate(250, 175);
    cx.rotate(45 * Math.PI / 180);
    cx.fillRect(32, 32, 32, 32);
    cx.restore();
    cx.fillStyle = "red";
    cx.translate(160, 0);
    cx.fillRect(125, 125, 125, 250);
    cx.save();
    cx.translate(250, 175);
    cx.rotate(45 * Math.PI / 180);
    cx.fillRect(32, 32, 32, 32);
    cx.restore();
    cx.fillStyle = "green";
    cx.translate(160, 0);
    cx.fillRect(125, 125, 125, 250);
    cx.save();
    cx.translate(250, 175);
    cx.rotate(45 * Math.PI / 180);
    cx.fillRect(32, 32, 32, 32);
    cx.restore();





    //　Math.Pi/180為一圓




}


drawCurveCard(30, 250);
drawCurveCard(200, 0, color = "green");
drawCurveCard(200, 0, color = "yellow");
drawCurveCard(200, 0, color = "red");
// drawCard();
// drawScreen();