
const myJobList = document.getElementById("job-list");
const myFilterSection = document.getElementById("filter-buttons");
const myEmptyMessage = document.getElementById("no-jobs-empty");

const countAll = document.getElementById("total-count");
const countInterview = document.getElementById("interview-count");
const countRejected = document.getElementById("rejected-count");
const miniText = document.getElementById("listing-count");


function refreshEverything() {

    const cards = document.querySelectorAll(".job-card");
    

    let total = 0;
    let interviews = 0;
    let rejected = 0;


    cards.forEach(function(card) {
        total = total + 1;
        
        const status = card.getAttribute("data-status");
        if (status === "interview") {
            interviews = interviews + 1;
        }
        if (status === "rejected") {
            rejected = rejected + 1;
        }
    });

    countAll.innerText = total;
    countInterview.innerText = interviews;
    countRejected.innerText = rejected;
    miniText.innerText = total;

    checkIfListIsEmpty();
}

function checkIfListIsEmpty() {
    const cards = document.querySelectorAll(".job-card");
    let visibleCardsFound = 0;


    cards.forEach(function(card) {
        if (card.classList.contains("hidden-card") === false) {
            visibleCardsFound = visibleCardsFound + 1;
        }
    });


    if (visibleCardsFound === 0) {
        myEmptyMessage.classList.remove("hidden");
    } else {
        myEmptyMessage.classList.add("hidden");
    }
}


function filterTheCards(choice) {
    const cards = document.querySelectorAll(".job-card");

    cards.forEach(function(card) {
        const cardStatus = card.getAttribute("data-status");

        if (choice === "all") {
            card.classList.remove("hidden-card"); 
        } else if (choice === cardStatus) {
            card.classList.remove("hidden-card"); 
        } else {
            card.classList.add("hidden-card");    
        }
    });
}



myJobList.addEventListener("click", function(event) {
    const clickedThing = event.target;
    const card = clickedThing.closest(".job-card");

    if (!card) return; 
    const badge = card.querySelector(".status-badge");

    if (clickedThing.classList.contains("delete-btn") || clickedThing.closest(".delete-btn")) {
        card.remove();
        refreshEverything();
    }


    if (clickedThing.classList.contains("interview-btn")) {
        card.setAttribute("data-status", "interview");
        badge.innerText = "INTERVIEW";
        badge.className = "status-badge btn btn-success text-white mb-4";
        refreshEverything();
    }

    if (clickedThing.classList.contains("reject-btn")) {
        card.setAttribute("data-status", "rejected");
        badge.innerText = "REJECTED";
        badge.className = "status-badge btn btn-error text-white mb-4";
        refreshEverything();
    }
});


myFilterSection.addEventListener("click", function(event) {
    const btn = event.target.closest("button");
    if (!btn) return;


    const allButtons = myFilterSection.querySelectorAll("button");
    allButtons.forEach(function(b) { b.classList.remove("btn-active"); });
    btn.classList.add("btn-active");


    const kind = btn.getAttribute("data-filter");
    filterTheCards(kind);
    checkIfListIsEmpty();
});

refreshEverything();


