
// 取得具有 id 為 "header-content" 的元素
let tar = document.getElementById("header-content");

// 取得具有 id 為 "hamburger" 的元素
let ham = document.getElementById("hamburger");

// 為 "hamburger" 元素添加點擊事件監聽器
ham.addEventListener("click", function (event) {
  // 切換 "header-content" 元素的 "header-content_active" class
  tar.classList.toggle("header-content_active");
});