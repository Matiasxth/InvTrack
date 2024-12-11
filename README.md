# InvTrack
sistema local de gestión de inventarios diseñado para pequeños proyectos y equipos que requieren un seguimiento sencillo y eficiente de sus recursos. Este sistema utiliza SQLite para el almacenamiento local de datos
# InvTrack

**InvTrack** es un sistema local de gestión de inventarios desarrollado en Python con soporte para bases de datos SQLite. Es ideal para registrar, visualizar y administrar ítems como materiales, herramientas y recursos. Toda la información se almacena de manera local, garantizando su seguridad y portabilidad.

## Características

- **Gestión Completa de Inventarios**:
  - Agregar nuevos ítems con detalles como nombre, cantidad, categoría, ubicación y observaciones.
  - Visualización interactiva del inventario actual.

- **Exportación a CSV**:
  - Descarga tu inventario como un archivo CSV para usarlo en otras herramientas.

- **Persistencia Local**:
  - Almacena los datos en un archivo SQLite (`inventario.db`), asegurando que se mantengan entre sesiones.

- **Configuración Simple**:
  - Sin necesidad de configuración avanzada, todo listo para usarse localmente.

## Requisitos

- **Python**: Versión 3.8 o superior.
- **Dependencias**:
  - `streamlit`
  - `sqlalchemy`
  - `pandas`

Para instalar las dependencias, ejecuta:
```bash
pip install -r requirements.txt
