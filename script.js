


const toggles = document.getElementsByClassName("toggle");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].onclick = () => {
    const panel = toggles[i].nextElementSibling;
    // if it has height, close it. otherwise open it to its natural size
    if (panel.style.height && panel.style.height !== "0px") {
      panel.style.height = "0px";
    } else {
      panel.style.height = panel.scrollHeight + "px";
    }
  };
}


