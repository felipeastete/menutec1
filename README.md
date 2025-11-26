# 🍽️ Menutec: Plataforma Ágil de Feedback para Menús Diarios

## 📊 Estado del Proyecto

[](https://www.google.com/search?q=https://github.com/tu-usuario/tu-repositorio)
[](https://www.google.com/search?q=https://github.com/tu-usuario/tu-repositorio)

-----

## 💡 Resumen Ejecutivo

**Menutec** es una solución de software diseñada para abordar la **falta de trazabilidad y la lentitud en el ciclo de *feedback*** del menú diario en un casino institucional.

El proyecto implementa un prototipo de interfaz de usuario (Frontend Estático) que permite a los usuarios **visualizar la oferta** detallada y **proporcionar calificaciones y comentarios** en tiempo real, validando la interacción crítica y la experiencia de usuario (UX).

### 🎯 Problema Resuelto

La dificultad para recopilar datos objetivos sobre la calidad de los platos, limitando la capacidad del casino para responder a las necesidades de la comunidad universitaria.

-----

## 🚀 1. Ejecución Local (Pasos Precisos)

El proyecto utiliza una arquitectura de **Cliente Ligero (Estático)**, lo que simplifica su despliegue y ejecución.

### 1.1. Estructura del Repositorio

Asegúrese de clonar el repositorio y verificar la siguiente estructura:

```
menutec/
├── menutec.html      # Estructura y Contenido (Menús, Precios, Descripciones)
├── styles.css        # Estilos (Diseño Responsivo)
├── script.js         # Lógica de Interacción (Votación y Comentarios Dinámicos)
└── images/           # Activos (Imágenes de los platos)
└── README.md         # Documentación (Este archivo)
```

### 1.2. Cómo Ejecutar la Aplicación

No se requiere un servidor de aplicaciones (como Node.js o PHP).

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories
    cd menutec
    ```
2.  **Abrir en el Navegador:**
      * Simplemente haga doble clic en el archivo **`menutec.html`**. Se abrirá directamente en su navegador predeterminado.
3.  **Alternativa (Servidor Local Recomendado):**
      * Si utiliza VS Code, use la extensión **Live Server** para abrir el archivo.
      * Si usa Python, puede ejecutar: `python -m http.server 8000` y luego navegar a `http://localhost:8000/menutec.html`.

-----

## 🏗️ 2. Arquitectura y Stack Tecnológico

### 2.1. Arquitectura

  * **Modelo:** **Cliente Ligero (Monolito Estático)**.
  * **Justificación Técnica:** Se eligió para **maximizar la velocidad de desarrollo** y validar la funcionalidad de la interfaz de usuario con el mínimo de dependencias. Se enfoca en la **reactividad del DOM** (JavaScript Vanilla) para simular la experiencia de una aplicación moderna.
  * **Patrón:** **Separación de Preocupaciones** (HTML para contenido, CSS para presentación, JS para comportamiento).

### 2.2. Tecnologías (Stack)

| Componente | Tecnología | Rol Principal |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) | Interfaz, diseño responsivo, y lógica de interacción. |
| **Librerías** | Font Awesome (CDN) | Iconografía (Estrellas de votación). |
| **Persistencia** | N/A | Simulación mediante manipulación del DOM y `alert()`s. |

-----

## 3\. Requisitos y Funcionalidad Implementada

El proyecto verifica los siguientes criterios de aceptación:

| ID | Criterio de Aceptación | Validación |
| :--- | :--- | :--- |
| **R1** | Visualización de Oferta | Se muestran los 3 menús con descripciones detalladas (ej. formato `° Categoría:`) y precios actualizados. |
| **R2** | Votación por Estrellas | El usuario puede hacer `mouseover` (previsualización) y `click` (registro simulado) en el *widget* de estrellas, manejado por `script.js`. |
| **R3** | Comentarios Dinámicos | Al hacer clic en "Enviar Comentario", el texto se inyecta inmediatamente en la lista de comentarios (usando `prepend()` en el DOM), validando la interactividad. |

-----

## 4\. Uso de Inteligencia Artificial (IA) - Transparencia Obligatoria

En cumplimiento con el Requisito 6, declaramos el uso de IA como herramienta de apoyo en la implementación:

  * **Modelo Utilizado:** **Google Gemini** (Asistente de código y análisis).
  * **Fases de Aplicación:** Implementación y optimización de la lógica de **JavaScript** (manejo de `event listeners` para las estrellas y la inyección de comentarios en el DOM) y refinamiento del **HTML/CSS**.
  * **Ejemplos de Prompts Relevantes:**
    1.  `Generar el event listener para el botón de enviar comentario, asegurando que use DOM.prepend().`
    2.  `Revisar el código JavaScript para la votación de estrellas y asegurar que aplique la clase 'active' correctamente en el evento 'click'.`
  * **Ajustes y Validación Humana:** Se realizaron ajustes manuales y validación rigurosa del código generado para asegurar la compatibilidad con el diseño modular y el cumplimiento de las buenas prácticas de ingeniería de software. La arquitectura fue una decisión propia del equipo.

-----

## 5\. Próximos Pasos (Plan de Mantenimiento)

La limitación actual del proyecto es la ausencia de persistencia de datos.

1.  **Migración Arquitectónica:** Evolucionar a una arquitectura de 3 capas (e.g., Node.js + Express para el Backend).
2.  **Base de Datos:** Implementar una base de datos (PostgreSQL o SQLite) para el registro permanente y trazable de las puntuaciones y comentarios.
3.  **Métricas:** Implementar un *dashboard* de métricas real (cálculo real del promedio, volumen de comentarios).

-----

*(Fin del README.md)*
