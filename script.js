const links = [
    { name: "GitHub", url: "https://github.com/FILIPITY/" },
{ name: "Ko-Fi", url: "https://ko-fi.com/filipity" },
{ name: "Discord", url: "https://discord.com/users/1291115997381525514" }
// add more links as you like
];

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("links");
    links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";
        container.appendChild(a);
    });
});
