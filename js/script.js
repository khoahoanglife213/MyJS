// Ẩn/hiện nội dung
document.getElementById("toggleBtn").addEventListener("click", function() {
  const content = document.getElementById("content");
  content.style.display = content.style.display === "none" ? "block" : "none";
});

// Form liên hệ
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;

  if (!name || !email) {
    document.getElementById("msg").textContent = "Vui lòng điền đầy đủ thông tin!";
    document.getElementById("msg").style.color = "red";
  } else {
    document.getElementById("msg").textContent = "Gửi thành công! Cảm ơn " + name;
    document.getElementById("msg").style.color = "green";
  }
});
