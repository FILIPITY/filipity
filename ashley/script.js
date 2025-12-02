const links = [
    { name: "GitHub", url: "https://github.com/FILIPITY/" },
    { name: "YouTube", url: "https://ko-fi.com/filipity" },
    { name: "Spotify", url: "https://open.spotify.com/artist/1CrX1ChORU0DEBNasGD6DD" },
    { name: "Apple Music", url: "https://music.apple.com/se/artist/leevjeevs/1825674336" },
    { name: "Discord", url: "https://discord.com/users/1291115997381525514" }
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
