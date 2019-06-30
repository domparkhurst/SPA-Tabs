document.getElementById("tab-2").style.display="none";
document.getElementById("tab-3").style.display="none";
document.getElementById("tab-4").style.display="none";

function tab1() { 
    document.getElementById("tab-2").style.display="none";
    document.getElementById("tab-3").style.display="none";
    document.getElementById("tab-4").style.display="none";
     
    var tab1 = document.getElementById("tab-1");
    tab1.removeAttribute("style");
    tab1.removeAttribute("class");

    var tab2 = document.getElementById("tab-2");;
    tab2.removeAttribute("class");

    var tab3 = document.getElementById("tab-3");
    tab3.removeAttribute("class");

    var tab4 = document.getElementById("tab-4");
    tab4.removeAttribute("class"); 
}

function tab2() {
    var tab2 = document.getElementById("tab-2");
    tab2.classList.add("display-block");
    tab2.classList.remove("display-none");
    tab2.removeAttribute("style");

    var tab1 = document.getElementById("tab-1");
    tab1.classList.add("display-none");

    var tab3 = document.getElementById("tab-3");
    tab3.classList.add("display-none");
    tab3.classList.remove("display-block");
    tab3.removeAttribute("style");

    var tab4 = document.getElementById("tab-4");
    tab4.classList.remove("display-block");
    tab4.classList.add("display-none");
    tab4.removeAttribute("style"); 
}

function tab3() {
    var tab3 = document.getElementById("tab-3");
    tab3.classList.add("display-block");
    tab3.classList.remove("display-none");
    tab3.removeAttribute("style");
    
    var tab1 = document.getElementById("tab-1");
    tab1.classList.add("display-none");
    tab1.classList.remove("display-block");

    var tab2 = document.getElementById("tab-2");
    tab2.classList.add("display-none");
    tab2.classList.remove("display-block");
    tab2.removeAttribute("style");

    var tab4 = document.getElementById("tab-4");
    tab4.classList.remove("display-block");
    tab4.classList.add("display-none");
    tab4.removeAttribute("style");    
}

function tab4() {
    var tab4 = document.getElementById("tab-4");
    tab4.classList.add("display-block");
    tab4.classList.remove("display-none");
    tab4.removeAttribute("style");  

    var tab1 = document.getElementById("tab-1");
    tab1.classList.add("display-none");
    tab1.classList.remove("display-block");

    var tab2 = document.getElementById("tab-2");
    tab2.classList.add("display-none");
    tab2.classList.remove("display-block");
    tab2.removeAttribute("style");

    var tab3 = document.getElementById("tab-3");
    tab3.classList.add("display-none");
    tab3.classList.remove("display-block");
    tab3.removeAttribute("style");
}
