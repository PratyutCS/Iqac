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
function block1(i){
    if(i==1){
        document.querySelector(".body21").style.display="flex";
        document.querySelector(".body31").style.display="none";
        document.querySelector(".body41").style.display="none";
        document.querySelector(".p").classList.add("active");
        document.querySelector(".o").classList.remove("active");
        document.querySelector(".i").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".body21").style.display="none";
        document.querySelector(".body31").style.display="flex";
        document.querySelector(".body41").style.display="none";
        document.querySelector(".p").classList.remove("active");
        document.querySelector(".o").classList.add("active");
        document.querySelector(".i").classList.remove("active");
    }
    else if(i==3){
        document.querySelector(".body21").style.display="none";
        document.querySelector(".body31").style.display="none";
        document.querySelector(".body41").style.display="flex";
        document.querySelector(".p").classList.remove("active");
        document.querySelector(".o").classList.remove("active");
        document.querySelector(".i").classList.add("active");
    }
}
function law(){
    w = window.innerWidth;
    h = window.innerHeight;
}
setInterval(law(), 500);
function block2(i){
    if(i==1){
        document.querySelector(".body22").style.display="flex";
        document.querySelector(".body32").style.display="none";
        if(w<=950){
            document.querySelector(".disbody2").style.height="172.7vh";
        }
        document.querySelector(".l").classList.add("active");
        document.querySelector(".k").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".body22").style.display="none";
        document.querySelector(".body32").style.display="flex";
        if(w<=950){
            document.querySelector(".disbody2").style.height="72.7vh";
        }
        document.querySelector(".l").classList.remove("active");
        document.querySelector(".k").classList.add("active");
    }
}
function block4(i){
    if(i==1){
        document.querySelector(".body24").style.display="flex";
        document.querySelector(".body34").style.display="none";
        document.querySelector(".m").classList.add("active");
        document.querySelector(".n").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".body24").style.display="none";
        document.querySelector(".body34").style.display="flex";
        document.querySelector(".m").classList.remove("active");
        document.querySelector(".n").classList.add("active");
    }
}