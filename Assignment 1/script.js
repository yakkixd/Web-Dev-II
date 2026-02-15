// This is where we store our list of events
let eventData = [];

// This function runs when you click "Add to List"
function addEvent() {
    const titleInput = document.getElementById('eventTitle');
    const dateInput = document.getElementById('eventDate');
    const categoryInput = document.getElementById('eventCategory');
    const descInput = document.getElementById('eventDesc');

    // Basic check: Don't add if title is empty
    if (titleInput.value === "") {
        alert("Please give your event a name!");
        return;
    }

    // Create a "package" (object) for our new event
    const newEvent = {
        id: Date.now(), // Unique ID based on time
        title: titleInput.value,
        date: dateInput.value,
        category: categoryInput.value,
        description: descInput.value
    };

    // Add it to our list and update the screen
    eventData.push(newEvent);
    updateDisplay();

    // Clear the form fields for the next entry
    titleInput.value = "";
    descInput.value = "";
}

// This function refreshes the UI to show current events
function updateDisplay() {
    const listArea = document.getElementById('eventList');
    
    // If no events, show the empty message
    if (eventData.length === 0) {
        listArea.innerHTML = '<p class="empty-msg">Your schedule is empty. Add an event!</p>';
        return;
    }

    // Otherwise, build the HTML for each card
    listArea.innerHTML = eventData.map(item => `
        <div class="event-card">
            <div>
                <small>${item.date} | ${item.category}</small>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <button onclick="removeOne(${item.id})" style="color:red; background:none; border:none; cursor:pointer;">Delete</button>
        </div>
    `).join('');
}

// Remove a single event
function removeOne(id) {
    eventData = eventData.filter(item => item.id !== id);
    updateDisplay();
}

// Wipe everything
function clearAll() {
    if(confirm("Are you sure you want to clear everything?")) {
        eventData = [];
        updateDisplay();
    }
}
