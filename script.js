const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page
    elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);
        page.addEventListener("click", (evt) => {
            if (evt.target.closest("a")) return;
            const curr = evt.target.closest(".back") ? idx : idx + 1;
            elBook.style.setProperty("--c", curr);
        });
    });
};

document.querySelectorAll(".book").forEach(flipBook);


// Kiểm tra orientation
function checkOrientation() {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const rotateMessage = document.querySelector(".rotate-message");

    if (isLandscape) {
        // Ẩn thông báo nếu ở chế độ ngang
        if (rotateMessage) rotateMessage.style.display = "none";
    } else {
        // Hiển thị thông báo nếu ở chế độ dọc
        if (rotateMessage) rotateMessage.style.display = "flex";
    }
}

// Gọi kiểm tra ngay khi tải trang
checkOrientation();

// Gọi kiểm tra khi thay đổi hướng thiết bị
window.addEventListener("orientationchange", checkOrientation);
