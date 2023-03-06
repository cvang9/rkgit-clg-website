function tgl() {
    let t = document.getElementById("sub-btn");
    if (t.getAttribute('data-toggle') === "OFF") {
        document.querySelector('.sub-btn').style.display = 'block';
        t.setAttribute('data-toggle', "ON");
        console.log("first")
    }
    else if (t.getAttribute('data-toggle') === "ON") {
        document.querySelector('.sub-btn').style.display = 'none';
        t.setAttribute('data-toggle', "OFF");
    }
}