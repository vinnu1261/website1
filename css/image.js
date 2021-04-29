window.onload = choosePic;

var myPix = new Array("image_1/2.png","image_1/3.png","image_1/4.png","image_1/5.png","image_1/6.png","image_1/7.png",
                        "image_1/8.png","image_1/9.png","image_1/10.png"
                        );
var myPix2 = new Array("image_1/11.png","image_1/12.png","image_1/13.png",
"image_1/14.png","image_1/15.png","image_1/16.png","image_1/17.png","image_1/18.png","image_1/19.png","image_1/20.png");
var myPix3 = new Array("image_1/21.png","image_1/22.png","image_1/23.png","image_1/24.png","image_1/25.png","image_1/26.png","image_1/27.png",
"image_1/28.png","image_1/29.png","image_1/30.png");
var myPix4 = new Array("image_1/71.png","image_1/32.png","image_1/33.png","image_1/34.png",
"image_1/35.png","image_1/36.png","image_1/37.png","image_1/38.png","image_1/39.png","image_1/40.png");
var myPix5 = new Array("image_1/41.png",
"image_1/42.png","image_1/43.png","image_1/44.png","image_1/45.png","image_1/46.png","image_1/47.png","image_1/48.png",
"image_1/49.png","image_1/50.png");
var myPix6 = new Array("image_1/51.png","image_1/52.png","image_1/53.png","image_1/54.png","image_1/55.png",
"image_1/56.png","image_1/57.png","image_1/58.png","image_1/59.png","image_1/60.png");
var myPix7 = new Array("image_1/61.png","image_1/62.png",
"image_1/63.png","image_1/64.png","image_1/65.png","image_1/66.png","image_1/67.png","image_1/68.png","image_1/69.png",
"image_1/70.png");
function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById('myPicture').src = myPix[randomNum];
    choosePic1();
}
function choosePic1() {
    var randomNum = Math.floor(Math.random() * myPix2.length);
    document.getElementById('myPicture1').src = myPix2[randomNum];
    choosePic2()
}
function choosePic2() {
    var randomNum = Math.floor(Math.random() * myPix3.length);
    document.getElementById('myPicture2').src = myPix3[randomNum];
    choosePic3()
}
function choosePic3() {
    var randomNum = Math.floor(Math.random() * myPix4.length);
    document.getElementById('myPicture3').src = myPix4[randomNum];
    choosePic4()
}
function choosePic4() {
    var randomNum = Math.floor(Math.random() * myPix5.length);
    document.getElementById('myPicture4').src = myPix5[randomNum];
    choosePic5()
}
function choosePic5() {
    var randomNum = Math.floor(Math.random() * myPix6.length);
    document.getElementById('myPicture5').src = myPix6[randomNum];
    choosePic6()
}function choosePic6() {
    var randomNum = Math.floor(Math.random() * myPix7.length);
    document.getElementById('myPicture6').src = myPix7[randomNum];
    choosePic7()
}
function choosePic7() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById('myPicture7').src = myPix[randomNum];
    choosePic8()
}
function choosePic8() {
    var randomNum = Math.floor(Math.random() * myPix2.length);
    document.getElementById('myPicture8').src = myPix2[randomNum];
    choosePic9()
}
function choosePic9() {
    var randomNum = Math.floor(Math.random() * myPix3.length);
    document.getElementById('myPicture9').src = myPix3[randomNum];
    choosePic10()
}
function choosePic10() {
    var randomNum = Math.floor(Math.random() * myPix4.length);
    document.getElementById('myPicture10').src = myPix4[randomNum];
    choosePic11()
}
function choosePic11() {
    var randomNum = Math.floor(Math.random() * myPix5.length);
    document.getElementById('myPicture11').src = myPix5[randomNum];
    choosePic12()
}
function choosePic12() {
    var randomNum = Math.floor(Math.random() * myPix6.length);
    document.getElementById('myPicture12').src = myPix6[randomNum];
    choosePic13()
}
function choosePic13() {
    var randomNum = Math.floor(Math.random() * myPix7.length);
    document.getElementById('myPicture13').src = myPix7[randomNum];
    choosePic14()
}
function choosePic14() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById('myPicture14').src = myPix[randomNum];
    choosePic15()
}
function choosePic15() {
    var randomNum = Math.floor(Math.random() * myPix2.length);
    document.getElementById('myPicture15').src = myPix2[randomNum];
    choosePic16()
}
function choosePic16() {
    var randomNum = Math.floor(Math.random() * myPix3.length);
    document.getElementById('myPicture16').src = myPix3[randomNum];
    choosePic17()
}
function choosePic17() {
    var randomNum = Math.floor(Math.random() * myPix4.length);
    document.getElementById('myPicture17').src = myPix4[randomNum];
    choosePic18()
}
function choosePic18() {
    var randomNum = Math.floor(Math.random() * myPix5.length);
    document.getElementById('myPicture18').src = myPix5[randomNum];
    choosePic19()
}
function choosePic19() {
    var randomNum = Math.floor(Math.random() * myPix6.length);
    document.getElementById('myPicture19').src = myPix6[randomNum];
    choosePic20()
}
function choosePic20() {
    var randomNum = Math.floor(Math.random() * myPix7.length);
    document.getElementById('myPicture20').src = myPix7[randomNum];
}