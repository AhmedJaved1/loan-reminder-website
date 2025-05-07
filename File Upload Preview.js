document.getElementById('billImage').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name || 'No file chosen';
    document.querySelector('.file-name').textContent = fileName;
    
    // Show preview if image
    if (e.target.files[0]?.type.match('image.*')) {
        const preview = document.createElement('img');
        preview.src = URL.createObjectURL(e.target.files[0]);
        preview.style.maxWidth = '200px';
        document.querySelector('.file-upload').appendChild(preview);
    }
});
