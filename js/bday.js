function alertOnbody() {
    alert(
        "Хүслээ шивнээд бялуу дээрээ дарж ЛАА үлээгээрэй! 10 секундын дараа бэлэг гарч ирнэ шүү хэхэ :) Миний гүнж хайртай шүү <3"
    );
}

function onClickCake() {
    document.getElementById("flame").style.display = "none";
    // window.location.href = "/cv.html", "_blank";
    setTimeout(function () {
        window.open("https://bolderdene1221.github.io/birthdaygift/cv.html", "_blank")
    }, 3000);
}