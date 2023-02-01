var w,h;
function block(i){
    if(i==1){
        document.querySelector(".body1").style.display="block";
        document.querySelector(".body2").style.display="none";
        document.querySelector(".body3").style.display="none";
        document.querySelector(".body4").style.display="none";
        document.querySelector(".q").classList.add("active");
        document.querySelector(".w").classList.remove("active");
        document.querySelector(".e").classList.remove("active");
        document.querySelector(".r").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".body1").style.display="none";
        document.querySelector(".body2").style.display="block";
        document.querySelector(".body3").style.display="none";
        document.querySelector(".body4").style.display="none";
        document.querySelector(".q").classList.remove("active");
        document.querySelector(".w").classList.add("active");
        document.querySelector(".e").classList.remove("active");
        document.querySelector(".r").classList.remove("active");
    }
    else if(i==3){
        document.querySelector(".body1").style.display="none";
        document.querySelector(".body2").style.display="none";
        document.querySelector(".body3").style.display="block";
        document.querySelector(".body4").style.display="none";
        document.querySelector(".q").classList.remove("active");
        document.querySelector(".w").classList.remove("active");
        document.querySelector(".e").classList.add("active");
        document.querySelector(".r").classList.remove("active");
    }
    else if(i==4){
        document.querySelector(".body1").style.display="none";
        document.querySelector(".body2").style.display="none";
        document.querySelector(".body3").style.display="none";
        document.querySelector(".body4").style.display="block";
        document.querySelector(".q").classList.remove("active");
        document.querySelector(".w").classList.remove("active");
        document.querySelector(".e").classList.remove("active");
        document.querySelector(".r").classList.add("active");
    }
}
function mainblock(i){
    if(i==1){
        document.querySelector(".b1").style.display="flex";
        document.querySelector(".b2").style.display="none";
        document.querySelector(".b3").style.display="none";
        document.querySelector(".b4").style.display="none";
        document.querySelector(".a").classList.add("active");
        document.querySelector(".b").classList.remove("active");
        document.querySelector(".c").classList.remove("active");
        document.querySelector(".d").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".b1").style.display="none";
        document.querySelector(".b2").style.display="flex";
        document.querySelector(".b3").style.display="none";
        document.querySelector(".b4").style.display="none";
        document.querySelector(".a").classList.remove("active");
        document.querySelector(".b").classList.add("active");
        document.querySelector(".c").classList.remove("active");
        document.querySelector(".d").classList.remove("active");
    }
    else if(i==3){
        document.querySelector(".b1").style.display="none";
        document.querySelector(".b2").style.display="none";
        document.querySelector(".b3").style.display="flex";
        document.querySelector(".b4").style.display="none";
        document.querySelector(".a").classList.remove("active");
        document.querySelector(".b").classList.remove("active");
        document.querySelector(".c").classList.add("active");
        document.querySelector(".d").classList.remove("active");
    }
    else if(i==4){
        document.querySelector(".b1").style.display="none";
        document.querySelector(".b2").style.display="none";
        document.querySelector(".b3").style.display="none";
        document.querySelector(".b4").style.display="block";
        document.querySelector(".a").classList.remove("active");
        document.querySelector(".b").classList.remove("active");
        document.querySelector(".c").classList.remove("active");
        document.querySelector(".d").classList.add("active");
    }
}