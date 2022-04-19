let qHtml = function (query) {
    return document.querySelector(query);
}

let showUploadModal = function() {
    qHtml("#uploadFileModal").style.display = "block";
}
window.onclick = function(event) {
    let modal = qHtml("#uploadFileModal");
    if (event.target === modal) {
        console.log('hide modal');
        modal.style.display = "none";
    }
}