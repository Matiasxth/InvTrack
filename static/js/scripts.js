document.addEventListener("DOMContentLoaded", () => {
    const inventoryDiv = document.getElementById("inventory");
    const form = document.getElementById("add-item-form");

    // Cargar el inventario
    const loadInventory = async () => {
        const response = await fetch("/api/inventory");
        const items = await response.json();
        inventoryDiv.innerHTML = items.map(item => `
            <div>
                <strong>${item.nombre}</strong> (Cantidad: ${item.cantidad})
                <button onclick="deleteItem(${item.id})">Eliminar</button>
            </div>
        `).join("");
    };

    // Agregar un ítem
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = {
            nombre: document.getElementById("nombre").value,
            cantidad: parseInt(document.getElementById("cantidad").value),
            categoria: document.getElementById("categoria").value,
            ubicacion: document.getElementById("ubicacion").value,
            observaciones: document.getElementById("observaciones").value,
        };
        await fetch("/api/inventory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        form.reset();
        loadInventory();
    });

    // Eliminar un ítem
    window.deleteItem = async (id) => {
        await fetch(`/api/inventory/${id}`, { method: "DELETE" });
        loadInventory();
    };

    loadInventory();
});
