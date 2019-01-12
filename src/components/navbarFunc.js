export function showStuff(element_id) {
    var elements = document.getElementsByClassName('linkButtons');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.display = 'none';
    }
    document.getElementById(element_id).style.display = 'block';
}