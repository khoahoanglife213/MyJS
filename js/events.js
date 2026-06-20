//click
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("clickText").textContent = "Bạn đã bấm thành công!";
});

//change
document.getElementById("colorSelect").addEventListener("change", function() {
  document.getElementById("colorText").style.color = this.value;
  document.getElementById("colorText").textContent = "Màu: " + this.value;
});

//keyup
document.getElementById("nameInput").addEventListener("keyup", function() {
  document.getElementById("preview").textContent = "Xem trước: " + this.value;
});

//submit
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("submitMsg").textContent = "Form đã gửi thành công!";
});
