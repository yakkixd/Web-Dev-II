let events = JSON.parse(localStorage.getItem("events")) || [];

function saveEvents(){
    localStorage.setItem("events", JSON.stringify(events));
    renderEvents();
}

function addEvent(){
    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    if(!title || !date){
        alert("Enter title and date");
        return;
    }

    events.push({title,date,category,desc});
    saveEvents();

    document.getElementById("title").value="";
    document.getElementById("date").value="";
    document.getElementById("desc").value="";
}

function renderEvents(){
    const list=document.getElementById("list");
    const empty=document.getElementById("empty");

    list.innerHTML="";

    if(events.length===0){
        empty.style.display="block";
        return;
    }

    empty.style.display="none";

    events.forEach(e=>{
        const div=document.createElement("div");
        div.className="event";
        div.innerHTML=`
            <strong>${e.title}</strong><br>
            📅 ${e.date} | ${e.category}<br>
            ${e.desc}
        `;
        list.appendChild(div);
    });
}

function clearEvents(){
    events=[];
    saveEvents();
}

renderEvents();
