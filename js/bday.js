function alertOnbody() {
    alert(
        "Хүслээ шивнээд бялуун дээр дарж ЛАА үлээгээрэй! 10 секундын дараа бэлэг гарч ирнэ шүү хэхэ :) сайхан баярлаарай миний гүнж хайртай шүү <3"
    );
    var audio = new Audio('https://www.8notes.com/school/mp32/piano/happy_birthday.mp3');
    audio.play();
}

function onClickCake() {
    document.getElementById("flame").style.display = "none";
    setTimeout(function () {
        window.open("https://bolderdene1221.github.io/birthdaygift/cv.html", "_blank")
    }, 10000);
}