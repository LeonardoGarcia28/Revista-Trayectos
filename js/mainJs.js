function downloadFile(href, download) {
    const link = document.createElement('a');
    link.href = href;
    link.download = download;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}