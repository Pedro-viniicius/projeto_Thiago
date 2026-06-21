const WHATSAPP_NUMBER = "5500000000000";

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
  });
}

const form = document.querySelector("[data-lead-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const tutor = String(data.get("tutor") || "").trim();
    const pet = String(data.get("pet") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const tipo = String(data.get("tipo") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    const lines = [
      "Olá, gostaria de agendar um atendimento na Pet Clínica Veterinária.",
      "",
      `Nome do tutor: ${tutor}`,
      `Nome do pet: ${pet}`,
      `Telefone / WhatsApp: ${telefone}`,
      `Tipo de atendimento desejado: ${tipo}`,
      mensagem ? `Mensagem: ${mensagem}` : "Mensagem: não informada"
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
