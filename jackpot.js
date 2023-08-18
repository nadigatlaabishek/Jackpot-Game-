function randomNum()
{
    var num1=Math.floor(Math.random()*4);
    var num2=Math.floor(Math.random()*4);
    var num3=Math.floor(Math.random()*4);
    var num4=Math.floor(Math.random()*4);
    console.log(num1,num2,num3,num4)
    document.getElementById("num1").value=num1;
    document.getElementById("num2").value=num2;
    document.getElementById("num3").value=num3;
    document.getElementById("num4").value=num4;
    if(num1==num2 && num2===num3 && num3==num4)
    {
        document.getElementById("cong").style.display="flex";
        document.getElementById("Num").innerHTML=`${num1} ${num2} ${num3} ${num4}`
        music();
    }
}
function congwindowClose()
{
    document.getElementById("cong").style.display="none"
}
var audio=new Audio();
audio.src="./Congratulations.mp3";
function music()
{
    audio.play();
    audio.loop=Infinity;
    console.log(audio)
    return music;
}