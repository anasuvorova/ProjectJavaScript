document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const planetName = document.getElementById("planet-name");
    const planetInfo = document.getElementById("planet-info");

    let currentPlanet = null;
    
    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".modal-content")) {
            modal.classList.add("hidden");
            currentPlanet=null;
        }
    });

    const spaceButtons = document.querySelectorAll(".space");

    spaceButtons.forEach((button) => {
        button.addEventListener("click", async () => {
        const classList = [...button.classList];
        const planet = classList.find(cls => cls !== "space" && cls !== "planet");

        if (modal && !modal.classList.contains("hidden") && currentPlanet === planet) {
            modal.classList.add("hidden");
            currentPlanet = null;
            return;
        }

        try {
            const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`);
            if (!response.ok) throw new Error("Ошибка при получении данных");
            const data = await response.json();

            planetName.textContent = data.englishName ?? "Неизвестно";
            planetInfo.innerHTML = `
            <p><strong>Гравитация:</strong> ${data.gravity ?? "Нет данных"} м/с²</p>
            <p><strong>Радиус:</strong> ${data.meanRadius ?? "Нет данных"} км</p>
            <p><strong>Масса:</strong> ${data.mass ? `${data.mass.massValue}e${data.mass.massExponent} кг` : "Нет данных"}</p>
            <p><strong>Открыл:</strong> ${data.discoveredBy || 'Неизвестно'}</p>
            <p><strong>Дата открытия:</strong> ${data.discoveryDate || 'Нет данных'}</p>
            `;

            modal.classList.remove("hidden");
            currentPlanet = planet;

            } catch (error) {
                planetName.textContent = "Ошибка";
                planetInfo.textContent = "Не удалось загрузить информацию.";
                modal.classList.remove("hidden");
                currentPlanet = null;
            }
        });
    });
});