function uploadFile() {
    let file = document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Please select a file first");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    document.getElementById("progress-container").style.display = "block";

    new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/files/upload", true);

        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                let percentComplete = (event.loaded / event.total) * 100;
                document.getElementById("progress-bar").style.width = percentComplete + "%";
            }
        };

        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.responseText);
            } else {
                reject("Upload failed!");
            }
        };

        xhr.onerror = function() {
            reject("Error occurred during upload");
        };

        xhr.send(formData);
    }).then(response => {
        document.getElementById("status").innerText = "Upload Successful!";
        document.getElementById("progress-bar").style.background = "green";
    }).catch(error => {
        document.getElementById("status").innerText = "Error: " + error;
        document.getElementById("progress-bar").style.background = "red";
    });
}

