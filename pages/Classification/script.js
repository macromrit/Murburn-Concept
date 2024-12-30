/* document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultDetails = document.getElementById('resultDetails');
    const uploadBox = document.querySelector('.upload-box');

    const results = [
        "It's a Murzyme 🌟\nTITLE: CRYSTAL STRUCTURE OF ACTIVATED RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA\nTITLE 2: COMPLEXED WITH ITS SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: ALTERNATE STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA\nTITLE 2: COMPLEXED WITH DIFFERENT SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: ANOTHER CRYSTAL STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA\nTITLE 2: COMPLEXED WITH NEW SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA MUTANT\nTITLE 2: COMPLEXED WITH INHIBITOR, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA COMPLEX\nTITLE 2: BOUND TO COFACTOR, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: MODIFIED RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA\nTITLE 2: INTERACTING WITH SMALL MOLECULE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA WITH MUTATION\nTITLE 2: SUBSTRATE ANALOG, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: NEW FORM OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA\nTITLE 2: COMPLEXED WITH ALTERNATIVE SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: CRYSTAL STRUCTURE OF RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA DERIVATIVE\nTITLE 2: BOUND TO DIFFERENT COFACTOR, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON",
        "It's a Murzyme 🌟\nTITLE: RIBULOSE 1,5-BISPHOSPHATE CARBOXYLA VARIANT\nTITLE 2: INTERACTING WITH NOVEL SUBSTRATE, RIBULOSE 1,5-BISPHOSPHA\nKEYWORDS: LYASE/CARBON CARBON"
    ];

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            showRandomResult();
        }
    });

    removeFile.addEventListener('click', () => {
        fileInput.value = "";
        fileInfo.style.display = 'none';
        resultContainer.style.display = 'none';
    });

    uploadBox.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file) {
            fileInput.files = event.dataTransfer.files;
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            showRandomResult();
        }
    });

    function showRandomResult() {
        const randomResult = results[Math.floor(Math.random() * results.length)];
        const [title, ...details] = randomResult.split('\n');
        resultTitle.textContent = title;
        resultDetails.innerHTML = details.join('<br>');
        resultContainer.style.display = 'block';
    }
});
 */

/* document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultDetails = document.getElementById('resultDetails');
    const uploadBox = document.querySelector('.upload-box');

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        if (file) {
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('http://your-fastapi-server-url/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Upload failed');
                }

                const result = await response.json();
                handleClassificationResult(result);
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error display or logging
            }
        }
    });

    removeFile.addEventListener('click', () => {
        fileInput.value = "";
        fileInfo.style.display = 'none';
        resultContainer.style.display = 'none';
    });

    uploadBox.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file) {
            fileInput.files = event.dataTransfer.files;
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            // You can optionally call showRandomResult() here if desired
        }
    });

    function handleClassificationResult(result) {
        resultTitle.textContent = result.type || 'Unknown';
        resultDetails.innerHTML = `PDB ID: ${result['PDB-Id'] || 'N/A'}`;
        resultContainer.style.display = 'block';
    }
});
 */

/* document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultDetails = document.getElementById('resultDetails');
    const uploadBox = document.querySelector('.upload-box');

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        console.log('Selected file:', file); // Check if file is selected

        if (file) {
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            try {
                const formData = new FormData();
                formData.append('file', file);
                console.log('Form data:', formData); // Check form data before sending

                const response = await fetch('http://your-fastapi-server-url/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Upload failed');
                }

                const result = await response.json();
                console.log('Server response:', result); // Check server response

                handleClassificationResult(result);
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error display or logging
            }
        }
    });

    removeFile.addEventListener('click', () => {
        fileInput.value = "";
        fileInfo.style.display = 'none';
        resultContainer.style.display = 'none';
    });

    uploadBox.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file) {
            fileInput.files = event.dataTransfer.files;
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            // You can optionally call showRandomResult() here if desired
        }
    });

    function handleClassificationResult(result) {
        resultTitle.textContent = result.type || 'Unknown';
        resultDetails.innerHTML = `PDB ID: ${result['PDB-Id'] || 'N/A'}`;
        resultContainer.style.display = 'block';
    }
});
 */

/* document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultDetails = document.getElementById('resultDetails');
    const uploadBox = document.querySelector('.upload-box');

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        console.log('Selected file:', file); // Check if file is selected

        if (file) {
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            try {
                const formData = new FormData();
                formData.append('file', file);
                console.log('Form data:', formData); // Check form data before sending

                const response = await fetch('http://localhost:8000/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Upload failed');
                }

                const result = await response.json();
                console.log('Server response:', result); // Check server response

                handleClassificationResult(result);
            } catch (error) {
                console.error('Error uploading file:', error);
                // Handle error display or logging
            }
        }
    });

    removeFile.addEventListener('click', () => {
        fileInput.value = "";
        fileInfo.style.display = 'none';
        resultContainer.style.display = 'none';
    });

    uploadBox.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file) {
            fileInput.files = event.dataTransfer.files;
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            // You can optionally call showRandomResult() here if desired
        }
    });

    function handleClassificationResult(result) {
        resultTitle.textContent = result.type || 'Unknown';
        resultDetails.innerHTML = `PDB ID: ${result['PDB-Id'] || 'N/A'}`;
        resultContainer.style.display = 'block';
    }
});
 */


document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultDetails = document.getElementById('resultDetails');
    const uploadBox = document.querySelector('.upload-box');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            uploadFile(file);
        }
    });

    removeFile.addEventListener('click', () => {
        fileInput.value = "";
        fileInfo.style.display = 'none';
        resultContainer.style.display = 'none';
    });

    uploadBox.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadBox.classList.remove('dragover');
        const file = event.dataTransfer.files[0];
        if (file) {
            fileInput.files = event.dataTransfer.files;
            fileName.textContent = file.name;
            fileInfo.style.display = 'flex';
            uploadFile(file);
        }
    });

    async function uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                showResult(data);
            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function showResult(data) {
        if (data.error) {
            resultTitle.textContent = "Error";
            resultDetails.textContent = data.error;
        } else {
            resultTitle.textContent = `It's a ${data.type} 🌟`;
            resultDetails.innerHTML = `PDB-ID: ${data["PDB-Id"]}`;
        }
        resultContainer.style.display = 'block';
    }
});
