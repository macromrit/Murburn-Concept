/* const murzymeData = [
  { id: "1MBO", type: "murzyme", title: "STRUCTURE AND REFINEMENT OF OXYMYOGLOBIN AT 1.5 ANGSTROMS RESOLUTION", keywords: "OXYGEN STORAGE" },
  { id: "1QJD", type: "murzyme", title: "QUINONE REDUCTASE/FAD/CIBACRON BLUE/DUROQUINONE COMPLEX", keywords: "QUINONE-REDUCTASE, FLAVOPROTEIN" },
  { id: "fake1", type: "non-murzyme", title: "CRYSTAL STRUCTURE OF ACTIVATED RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH ITS SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
  { id: "fake2", type: "non-murzyme", title: "ALTERNATE STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH DIFFERENT SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
];

function getRandomData() {
  const shuffledData = murzymeData.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, 4);
}

function createCard(data) {
  const card = document.createElement('div');
  card.className = 'adv-card';

  const title = document.createElement('div');
  title.className = 'adv-desc';
  title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}<br><strong>Title 2:</strong> ${data.title2 || ''}<br><strong>Keywords:</strong> ${data.keywords}`;

  const downloadIcon = document.createElement('div');
  downloadIcon.className = 'download-icon';
  downloadIcon.innerHTML = '⬇';
  downloadIcon.onclick = () => downloadPDB(data.id);

  card.appendChild(title);
  card.appendChild(downloadIcon);

  return card;
}

function downloadPDB(id) {
  const url = `/mnt/data/${id}.pdb`; // Adjust the path to where the PDB files are located
  const link = document.createElement('a');
  link.href = url;
  link.download = `${id}.pdb`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderCards(cards) {
  const container = document.getElementById('adv-cards-container');
  container.innerHTML = '';
  cards.forEach(cardData => {
    container.appendChild(createCard(cardData));
  });
}

function filterCards(query) {
  const filtered = murzymeData.filter(data => 
    data.title.toLowerCase().includes(query.toLowerCase()) ||
    (data.title2 && data.title2.toLowerCase().includes(query.toLowerCase())) ||
    data.keywords.toLowerCase().includes(query.toLowerCase())
  );
  renderCards(filtered);
}

document.getElementById('search-bar').addEventListener('input', (e) => {
  filterCards(e.target.value);
});

// Initial render
const initialData = getRandomData();
renderCards(initialData);
 */


    
    
/* document.addEventListener('DOMContentLoaded', () => {
  const murzymeData = [
    { id: "1MBO", type: "murzyme", title: "STRUCTURE AND REFINEMENT OF OXYMYOGLOBIN AT 1.5 ANGSTROMS RESOLUTION", keywords: "OXYGEN STORAGE" },
    { id: "1QJD", type: "murzyme", title: "QUINONE REDUCTASE/FAD/CIBACRON BLUE/DUROQUINONE COMPLEX", keywords: "QUINONE-REDUCTASE, FLAVOPROTEIN" },
    { id: "fake1", type: "non-murzyme", title: "CRYSTAL STRUCTURE OF ACTIVATED RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH ITS SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
    { id: "fake2", type: "non-murzyme", title: "ALTERNATE STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH DIFFERENT SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
  ];

  function getRandomData() {
    const shuffledData = murzymeData.sort(() => 0.5 - Math.random());
    return shuffledData.slice(0, 4);
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}<br><strong>Title 2:</strong> ${data.title2 || ''}<br><strong>Keywords:</strong> ${data.keywords}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    const url = `/path/to/pdb/files/${id}.pdb`; // Adjust the path to where the PDB files are located
    const link = document.createElement('a');
    link.href = url;
    link.download = `${id}.pdb`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function filterCards(query) {
    const filtered = murzymeData.filter(data => 
      data.title.toLowerCase().includes(query.toLowerCase()) ||
      (data.title2 && data.title2.toLowerCase().includes(query.toLowerCase())) ||
      data.keywords.toLowerCase().includes(query.toLowerCase())
    );
    renderCards(filtered);
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Initial render
  const initialData = getRandomData();
  renderCards(initialData);
});

// JavaScript code to handle the search functionality
const murzymeData = [
  { title: "Title 1", keywords: "key1, key2", content: "Content 1" },
  { title: "Title 2", keywords: "key3, key4", content: "Content 2" },
  // Add more data as needed
];

// Function to toggle visibility of search icon
function toggleSearchIcon() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "none"; // Hide the search icon
  document.getElementById("search-bar").focus(); // Focus on the search input
}

// Function to handle search on Enter key press
document.getElementById("search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value.toLowerCase();
    const results = murzymeData.filter(item => {
      return item.title.toLowerCase().includes(searchTerm) || item.keywords.toLowerCase().includes(searchTerm);
    });

    displaySearchResults(results);
    resetSearch(); // Reset search input and show search icon
  }
});

// Function to display search results in adv-cards-container
function displaySearchResults(results) {
  const advCardsContainer = document.getElementById("adv-cards-container");
  advCardsContainer.innerHTML = ""; // Clear previous results
  
  results.forEach(result => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${result.title}</h2><p>${result.content}</p>`;
    advCardsContainer.appendChild(card);
  });
}

// Function to reset search input and show search icon
function resetSearch() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "inline-block"; // Show the search icon again
  document.getElementById("search-bar").value = ""; // Clear the search input
}
 */


// previous code 
/* document.addEventListener('DOMContentLoaded', () => {
  // Your murzymeData and related functions
  const murzymeData = [
    { id: "1MBO", type: "murzyme", title: "STRUCTURE AND REFINEMENT OF OXYMYOGLOBIN AT 1.5 ANGSTROMS RESOLUTION", keywords: "OXYGEN STORAGE" },
    { id: "1QJD", type: "murzyme", title: "QUINONE REDUCTASE/FAD/CIBACRON BLUE/DUROQUINONE COMPLEX", keywords: "QUINONE-REDUCTASE, FLAVOPROTEIN" },
    { id: "fake1", type: "non-murzyme", title: "CRYSTAL STRUCTURE OF ACTIVATED RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH ITS SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
    { id: "fake2", type: "non-murzyme", title: "ALTERNATE STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA", title2: "COMPLEXED WITH DIFFERENT SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA", keywords: "LYASE/CARBON CARBON" },
  ];

  function getRandomData() {
    const shuffledData = murzymeData.sort(() => 0.5 - Math.random());
    return shuffledData.slice(0, 4);
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}<br><strong>Title 2:</strong> ${data.title2 || ''}<br><strong>Keywords:</strong> ${data.keywords}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    const url = `/path/to/pdb/files/${id}.pdb`; // Adjust the path to where the PDB files are located
    const link = document.createElement('a');
    link.href = url;
    link.download = `${id}.pdb`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function filterCards(query) {
    const filtered = murzymeData.filter(data => 
      data.title.toLowerCase().includes(query.toLowerCase()) ||
      (data.title2 && data.title2.toLowerCase().includes(query.toLowerCase())) ||
      data.keywords.toLowerCase().includes(query.toLowerCase())
    );
    renderCards(filtered);
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Initial render
  const initialData = getRandomData();
  renderCards(initialData);
});

// Function to toggle visibility of search icon
function toggleSearchIcon() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "none"; // Hide the search icon
  document.getElementById("search-bar").focus(); // Focus on the search input
}

// Function to handle search on Enter key press
document.getElementById("search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value.toLowerCase();
    const results = murzymeData.filter(item => {
      return item.title.toLowerCase().includes(searchTerm) || item.keywords.toLowerCase().includes(searchTerm);
    });

    displaySearchResults(results);
    resetSearch(); // Reset search input and show search icon
  }
});

// Function to display search results in adv-cards-container
function displaySearchResults(results) {
  const advCardsContainer = document.getElementById("adv-cards-container");
  advCardsContainer.innerHTML = ""; // Clear previous results
  
  results.forEach(result => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${result.title}</h2><p>${result.content}</p>`;
    advCardsContainer.appendChild(card);
  });
}

// Function to reset search input and show search icon
function resetSearch() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "inline-block"; // Show the search icon again
  document.getElementById("search-bar").value = ""; // Clear the search input
}
 */

/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}<br><strong>Keywords:</strong> ${data.keywords || 'Unknown'}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown',
      keywords: 'Unknown' // Assuming no keywords field is available in the current structure
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});

// Function to toggle visibility of search icon
function toggleSearchIcon() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "none"; // Hide the search icon
  document.getElementById("search-bar").focus(); // Focus on the search input
}

// Function to handle search on Enter key press
document.getElementById("search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value.toLowerCase();
    filterCards(searchTerm);
    resetSearch(); // Reset search input and show search icon
  }
});

// Function to reset search input and show search icon
function resetSearch() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "inline-block"; // Show the search icon again
  document.getElementById("search-bar").value = ""; // Clear the search input
}
 */


/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});

// Function to toggle visibility of search icon
function toggleSearchIcon() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "none"; // Hide the search icon
  document.getElementById("search-bar").focus(); // Focus on the search input
}

// Function to handle search on Enter key press
document.getElementById("search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    const searchTerm = event.target.value.toLowerCase();
    filterCards(searchTerm);
    resetSearch(); // Reset search input and show search icon
  }
});

// Function to reset search input and show search icon
function resetSearch() {
  const searchIcon = document.getElementById("search-icon");
  searchIcon.style.display = "inline-block"; // Show the search icon again
  document.getElementById("search-bar").value = ""; // Clear the search input
}
 */


/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Function to toggle visibility of search icon
  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none"; // Hide the search icon
    document.getElementById("search-bar").focus(); // Focus on the search input
  }

  document.getElementById('search-bar').addEventListener('click', () => {
    toggleSearchIcon();
  });

  // Function to handle search on Enter key press
  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch(); // Reset search input and show search icon
    }
  });

  // Function to reset search input and show search icon
  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block"; // Show the search icon again
    document.getElementById("search-bar").value = ""; // Clear the search input
  }

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});
 */

/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  // Function to toggle visibility of search icon
  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none"; // Hide the search icon
    document.getElementById("search-bar").focus(); // Focus on the search input
  }

  document.getElementById('search-bar').addEventListener('click', () => {
    toggleSearchIcon();
  });

  // Function to handle search on Enter key press
  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch(); // Reset search input and show search icon
    }
  });

  // Function to reset search input and show search icon
  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block"; // Show the search icon again
    document.getElementById("search-bar").value = ""; // Clear the search input
  }

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});
 
 */




/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  async function downloadPDB(id) {
    try {
      const response = await fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`);
      const data = await response.json();
      const fileContent = atob(data['file-content']); // Decode base64 content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${id}.pdb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDB file:', error);
    }
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error filtering cards:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none"; // Hide the search icon
    document.getElementById("search-bar").focus(); // Focus on the search input
  }

  document.getElementById('search-bar').addEventListener('click', () => {
    toggleSearchIcon();
  });

  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch(); // Reset search input and show search icon
    }
  });

  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block"; // Show the search icon again
    document.getElementById("search-bar").value = ""; // Clear the search input
  }

  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error during initial render:', error);
    }
  }

  initialRender();
});

*/


/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  async function downloadPDB(id) {
    try {
      const response = await fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`);
      const data = await response.json();
      const fileContent = atob(data['file-content']); // Decode base64 content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${id}.pdb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDB file:', error);
    }
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error filtering cards:', error);
    }
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none";
    document.getElementById("search-bar").focus();
  }

  document.getElementById('search-bar').addEventListener('click', () => {
    toggleSearchIcon();
  });

  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch();
    }
  });

  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block";
    document.getElementById("search-bar").value = "";
  }

  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error during initial render:', error);
    }
  }

  initialRender();
});
 */

/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  async function downloadPDB(id) {
    try {
      const response = await fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`);
      const data = await response.json();
      const fileContent = atob(data['file-content']); // Decode base64 content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${id}.pdb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDB file:', error);
    }
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error filtering cards:', error);
    }
  }

  function addSearchContainer() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.id = 'search-bar';
    searchBar.placeholder = 'Search...';

    searchContainer.appendChild(searchBar);

    const advSections = document.querySelectorAll('.adv-section');
    advSections.forEach(section => {
      section.prepend(searchContainer.cloneNode(true));
    });
  }

  document.getElementById('search-bar').addEventListener('input', (e) => {
    filterCards(e.target.value);
  });

  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none";
    document.getElementById("search-bar").focus();
  }

  document.getElementById('search-bar').addEventListener('click', () => {
    toggleSearchIcon();
  });

  document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch();
    }
  });

  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block";
    document.getElementById("search-bar").value = "";
  }

  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
      addSearchContainer(); // Add the search container dynamically
    } catch (error) {
      console.error('Error during initial render:', error);
    }
  }

  initialRender();
});
 */

document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  async function downloadPDB(id) {
    try {
      const response = await fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`);
      const data = await response.json();
      const fileContent = atob(data['file-content']); // Decode base64 content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${id}.pdb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDB file:', error);
    }
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error filtering cards:', error);
    }
  }

  function addSearchContainer() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.id = 'search-bar';
    searchBar.placeholder = 'Search...';

    searchContainer.appendChild(searchBar);

    const advSections = document.querySelectorAll('.adv-section');
    advSections.forEach(section => {
      section.prepend(searchContainer.cloneNode(true));
    });

    // Attach event listeners to dynamically added search bars
    document.querySelectorAll('#search-bar').forEach(searchBar => {
      searchBar.addEventListener('input', (e) => {
        filterCards(e.target.value);
      });

      searchBar.addEventListener('click', () => {
        toggleSearchIcon();
      });

      searchBar.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          const searchTerm = event.target.value.toLowerCase();
          filterCards(searchTerm);
          resetSearch();
        }
      });
    });
  }

  function toggleSearchIcon() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "none";
    document.getElementById("search-bar").focus();
  }

  function resetSearch() {
    const searchIcon = document.getElementById("search-icon");
    searchIcon.style.display = "inline-block";
    document.getElementById("search-bar").value = "";
  }

  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
      addSearchContainer(); // Add the search container dynamically
    } catch (error) {
      console.error('Error during initial render:', error);
    }
  }

  initialRender();
});

/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Event listener for nav bar search input
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) {
      filterCards(query);
    } else {
      initialRender();
    }
  });

  // Function to handle search on Enter key press
  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch(); // Reset search input and show search icon
    }
  });

  // Function to reset search input and show search icon
  function resetSearch() {
    document.getElementById("searchInput").value = ""; // Clear the search input
  }

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});
 */

/* document.addEventListener('DOMContentLoaded', () => {
  async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createCard(data) {
    const card = document.createElement('div');
    card.className = 'adv-card';

    const title = document.createElement('div');
    title.className = 'adv-desc';
    title.innerHTML = `<strong>ID:</strong> ${data.id}<br><strong>Type:</strong> ${data.type}<br><strong>Title:</strong> ${data.title}`;

    const downloadIcon = document.createElement('div');
    downloadIcon.className = 'download-icon';
    downloadIcon.innerHTML = '⬇';
    downloadIcon.onclick = () => downloadPDB(data.id);

    card.appendChild(title);
    card.appendChild(downloadIcon);

    return card;
  }

  function downloadPDB(id) {
    fetch(`http://localhost:8000/get_pdb_details_from_rcsb/${id}`)
      .then(response => response.json())
      .then(data => {
        const fileContent = atob(data['file-content']); // Decode base64 content
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${id}.pdb`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error:', error));
  }

  function renderCards(cards) {
    const container = document.getElementById('adv-cards-container');
    container.innerHTML = '';
    cards.forEach(cardData => {
      container.appendChild(createCard(cardData));
    });
  }

  function processData(rawData) {
    return rawData['similar-chunks'].map(item => ({
      id: item[1][1] || 'Unknown',
      type: item[1][2] || 'Unknown',
      title: item[1][0] || 'Unknown'
    }));
  }

  async function filterCards(query) {
    try {
      const data = await fetchData(`http://localhost:8000/get_pdb_details_from_local_bank/${query}`);
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Event listener for nav bar search input
  document.getElementById('nav-search-bar').addEventListener('input', (e) => {
    const query = e.target.value;
    if (query) {
      filterCards(query);
    } else {
      initialRender();
    }
  });

  // Function to handle search on Enter key press
  document.getElementById("nav-search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const searchTerm = event.target.value.toLowerCase();
      filterCards(searchTerm);
      resetSearch(); // Reset search input and show search icon
    }
  });

  // Function to reset search input and show search icon
  function resetSearch() {
    const searchIcon = document.getElementById("nav-search-icon");
    searchIcon.style.display = "inline-block"; // Show the search icon again
    document.getElementById("nav-search-bar").value = ""; // Clear the search input
  }

  // Initial render
  async function initialRender() {
    try {
      const data = await fetchData('http://localhost:8000/get_all_pdb_details_from_local_bank/');
      const processedData = processData(data);
      renderCards(processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initialRender();
});
 */