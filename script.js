function showSection(id) {
    // إخفاء جميع الأقسام
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    // إظهار القسم المطلوب
    document.getElementById(id).classList.add("active");
}
