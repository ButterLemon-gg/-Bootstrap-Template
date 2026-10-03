// วงจรที่ 1: รอสัญญาณว่า "เว็บโหลด HTML เสร็จแล้วนะ" ค่อยเริ่มทำงาน
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. ส่วนของ Navbar
    // ==========================================
    const navbarCode = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
                <img src="image/logo.jfif" alt="Logo" width="40" height="40" class="d-inline-block align-text-top me-2 rounded-circle">IT Camp</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html" >Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html" >About</a></li>
                        
                        <!-- แก้ไขตรงนี้: เพิ่ม Dropdown Component (ชนิดที่ 8+) -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="services.html" >หลักสูตร Web Dev</a></li>
                                <li><a class="dropdown-item" href="services.html" >หลักสูตร App Dev</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="services.html" >ดูหลักสูตรทั้งหมด</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item"><a class="nav-link" href="contact.html" >Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navContainer = document.getElementById('navbar-container');
    if (navContainer) {
        navContainer.innerHTML = navbarCode;
    }

    // ==========================================
    // 2. ส่วนของ Footer (มีชื่อและรหัสนักศึกษาแล้ว)
    // ==========================================
    const footerCode = `
        <footer class="bg-dark text-white text-center py-4 mt-5 highlight-box tooltip-top" data-description="Footer: ดึงโค้ดมาจาก script.js อัตโนมัติในทุกหน้า">
            <div class="container">
                <p class="mb-0">&copy; 2026 IT Camp. ออกแบบและพัฒนาด้วย Bootstrap 5 <br>ออกแบบโดยนักศึกษา นางสาวณัฐนรี ภควัตศิตานนท์ รหัสนักศึกษา 69702277</p>
            </div>
        </footer>
    `;

    const footContainer = document.getElementById('footer-container');
    if (footContainer) {
        footContainer.innerHTML = footerCode;
    }

});

// วงจรที่ 2: ฟังก์ชันสำหรับเปลี่ยนหน้า (ตามโจทย์)
function navigateTo(event, urlTarget) {
    event.preventDefault(); 
    alert("ระบบ JavaScript รับทราบคำสั่ง! กำลังพาคุณไปที่หน้า: " + urlTarget);
    window.location.href = urlTarget; 
}