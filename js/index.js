function toggleContent(letter) {
    const content = document.getElementById(`content${letter}`);
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
}