var w = window.innerWidth;

//dropDownIconAppear/Disappear according to screen size on webpage start
function disappear() {
    if (w <= 800) {
        document.getElementById("flex2").style.display = "none";
        document.getElementById("dropDownButton").style.display = "flex";
    } else {
        document.getElementById("flex2").style.display = "flex";
        document.getElementById("dropDownButton").style.display = "none";
    }
}
disappear();

function titleSize() {
    let navBar = 60;
    document.getElementsByClassName("titleFlex")[0].style.height = window.outerHeight + "px";
}
titleSize();

function open_nav_bar() {
    document.getElementById("dropDownSVG").setAttribute("d", "M1 8L10 1L19 8");

    document.getElementsByClassName("expandedNavBarItems")[0].style.transitionDelay = "0.55s";
    document.getElementsByClassName("expandedNavBarItems")[1].style.transitionDelay = "0.5s";
    document.getElementsByClassName("expandedNavBarItems")[2].style.transitionDelay = "0.45s";
    document.getElementsByClassName("expandedNavBarItems")[3].style.transitionDelay = "0.4s";

    document.getElementById("navBar").style.transitionDelay = "0s";

    document.getElementById("navBar").style.height = "230px";
    document.getElementById("navBar").style.backgroundColor = "rgba(255, 255, 255, 1)";

    document.getElementsByClassName("expandedNavBarItems")[0].style.opacity = 100;
    document.getElementsByClassName("expandedNavBarItems")[1].style.opacity = 100;
    document.getElementsByClassName("expandedNavBarItems")[2].style.opacity = 100;
    document.getElementsByClassName("expandedNavBarItems")[3].style.opacity = 100;

    document.getElementsByClassName("expandedNavBarItems")[1].style.visibility = "visible";
    document.getElementsByClassName("expandedNavBarItems")[0].style.visibility = "visible";
    document.getElementsByClassName("expandedNavBarItems")[2].style.visibility = "visible";
    document.getElementsByClassName("expandedNavBarItems")[3].style.visibility = "visible";

    document.getElementsByClassName("expandedNavBarItems")[0].style.transform = "translateY(0px)";
    document.getElementsByClassName("expandedNavBarItems")[1].style.transform = "translateY(0px)";
    document.getElementsByClassName("expandedNavBarItems")[2].style.transform = "translateY(0px)";
    document.getElementsByClassName("expandedNavBarItems")[3].style.transform = "translateY(0px)";

    document.getElementById("everything").style.transitionDelay = "0s";
    document.getElementById("everything").style.opacity = 0.2;

    navBarTogCount = 1;
}

function close_nav_bar() {
    document.getElementById("dropDownSVG").setAttribute("d", "M1 1L10 8L19 1");

    document.getElementsByClassName("expandedNavBarItems")[0].style.transitionDelay = "0s";
    document.getElementsByClassName("expandedNavBarItems")[1].style.transitionDelay = "0.05s";
    document.getElementsByClassName("expandedNavBarItems")[2].style.transitionDelay = "0.1s";
    document.getElementsByClassName("expandedNavBarItems")[3].style.transitionDelay = "0.15s";

    document.getElementById("navBar").style.transitionDelay = "0.3s";

    document.getElementById("navBar").style.height = "60px";
    document.getElementById("navBar").style.backgroundColor = "rgba(255, 255, 255, 0.7)";

    document.getElementsByClassName("expandedNavBarItems")[0].style.opacity = 0;
    document.getElementsByClassName("expandedNavBarItems")[1].style.opacity = 0;
    document.getElementsByClassName("expandedNavBarItems")[2].style.opacity = 0;
    document.getElementsByClassName("expandedNavBarItems")[3].style.opacity = 0;

    document.getElementsByClassName("expandedNavBarItems")[1].style.visibility = "hidden";
    document.getElementsByClassName("expandedNavBarItems")[0].style.visibility = "hidden";
    document.getElementsByClassName("expandedNavBarItems")[2].style.visibility = "hidden";
    document.getElementsByClassName("expandedNavBarItems")[3].style.visibility = "hidden";

    document.getElementsByClassName("expandedNavBarItems")[0].style.transform = "translateY(-30px)";
    document.getElementsByClassName("expandedNavBarItems")[2].style.transform = "translateY(-30px)";
    document.getElementsByClassName("expandedNavBarItems")[3].style.transform = "translateY(-30px)";
    document.getElementsByClassName("expandedNavBarItems")[1].style.transform = "translateY(-30px)";


    document.getElementById("everything").style.transitionDelay = "0.3s";
    document.getElementById("everything").style.opacity = 0;

    navBarTogCount = 0;
}

var navBarTogCount = 0;
function dropdown_clicked() {
    if (navBarTogCount == 0) {
        open_nav_bar();
    } else {
        close_nav_bar();
    }
}

function headingFontWidthGradient() {
    if (window.innerWidth > 800) {
        let object = document.getElementsByClassName("title")[0];
        var spac = 0;
        spac = window.outerHeight - object.getBoundingClientRect().top - object.offsetHeight;
        object.style.letterSpacing = (spac / 80) ** 2 + "px";
    } else {
        let object = document.getElementsByClassName("title")[0];
        var spac = 0;
        spac = window.outerHeight - object.getBoundingClientRect().top - object.offsetHeight;
        object.style.letterSpacing = (spac / 200) ** 2 + "px";
    }
}

function introParaGradient() {
    for (let i = 0; i < 5; i++) {
        let object = document.getElementsByClassName("introPara")[i];
        let opac = 1 - Math.abs((object.getBoundingClientRect().top + (object.offsetHeight / 2) - window.outerHeight / 2) / (window.outerHeight / 2));
        object.style.opacity = opac;
    }
}

function subParagraphGradient() {
    for (let i = 0; i < 5; i++) {
        var object = document.getElementsByClassName("smallerFont")[i];
        if (window.innerHeight - object.getBoundingClientRect().top >= 100) {
            object.style.opacity = 1;
            object.style.transform = "translateY(0px)";
        }
        else {
            object.style.opacity = 0;
            object.style.transform = "translateY(30px)";
        }
    }
}

function setOffsetClassHeight() {
    offset = document.getElementsByClassName("offset")[0];
    title = document.getElementsByClassName("titleFlex")[0];
    offset.style.height = title.clientHeight + "px";
}

function titlePosition() {
    offset = document.getElementsByClassName("offset")[0];
    title = document.getElementsByClassName("titleFlex")[0];
    title.style.transform = "translateY(" + offset.getBoundingClientRect().top / 1.5 + "px)";
}

function parallaxTitle() {
    setOffsetClassHeight()
    titlePosition()
}

parallaxTitle()
headingFontWidthGradient()

function close_nav_bar_from_change() {
    var w = window.innerWidth;
    if (w <= 800) {
        //small size
        document.getElementById("flex2").style.display = "none";
        document.getElementById("dropDownButton").style.display = "flex";
    } else {
        //large size
        document.getElementById("flex2").style.display = "flex";
        document.getElementById("dropDownButton").style.display = "none";


        close_nav_bar();
    }
}

// dropDownIconAppear/Disappear from screen size change
window.addEventListener("resize", function () {
    close_nav_bar_from_change()
    titleSize();
    introParaGradient();
    headingFontWidthGradient();
    parallaxTitle()
});


// intro paragraph and title fading by on scroll
window.addEventListener("scroll", function () {
    close_nav_bar_from_change()
    introParaGradient();
    subParagraphGradient();
    headingFontWidthGradient();
    parallaxTitle()
});
