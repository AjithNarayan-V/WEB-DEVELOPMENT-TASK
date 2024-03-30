function createCard(title,cname,views,monthsAgo,duration ,thumnail){
    let viewStr;
    if(views<1000){
        viewStr=views;
    }
    else if(views>1000000){
        viewStr=views/100000+"M";
    }
    else{
        viewStr=views/1000+"k";
    }
    let html=`  
    <div class="card">
        <div class="image">
            <img src="${thumnail}" alt="thumnile" >
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h4>${title}</h4>
            <p>${cname} .${viewStr} views.${monthsAgo} months ago</p>
        </div>
    </div>`
document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
