
document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", () => {
            document.getElementById("phone").scrollIntoView({ behavior: "smooth" });
        });
    }
});
const learnMoreBtn = document.getElementById("learn-more-btn");
if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
        document.getElementById("phone").scrollIntoView({ behavior: "smooth" });
    });
}




