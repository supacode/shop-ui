const menuToggler = document.querySelector(".sidebar__toggler");
const sidebar = document.querySelector(".sidebar");

menuToggler.addEventListener("click", function() {
  if (this.classList.contains("open")) {
    this.classList.remove("open");
    sidebar.classList.add("collapse");
  } else {
    this.classList.add("open");
    sidebar.classList.remove("collapse");
  }
});
