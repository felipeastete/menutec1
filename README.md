🍽️ MENUTEC – Plataforma Ágil de Feedback para Menús Diarios

Proyecto Académico: Ingeniería de Software y Desarrollo Frontend.
Curso: Desarrollo y Diseño de Software (TINF-1109)
Equipo: Felipe Astete · Allan Quezada · Roberto Villouta
Fecha: 26 de Noviembre de 2025

📌 1. Problema y Cliente

Diagnóstico del Problema

MENUTEC surge como solución a necesidades reales detectadas en el casino universitario, enfocándose en la trazabilidad y agilidad de la información:

La información del menú diario no siempre es visible o accesible centralizadamente.

La comunidad depende de anuncios físicos o comunicación verbal.

Los cambios de último minuto no se difunden oportunamente.

No existe registro histórico de platos, opiniones ni calificaciones para la administración.

Cliente Objetivo

Usuarios Finales: Comunidad universitaria (estudiantes, funcionarios y visitantes).

Administradores: Personal del casino responsable de la gestión y publicación del menú.

Impacto Esperado

El proyecto busca mejorar la transparencia del servicio y permitir la retroalimentación directa mediante calificaciones y comentarios, dotando a la administración de datos objetivos para la mejora continua.

2. Alcance del Proyecto y Requisitos Implementados

Tipo de Entrega

🧪 Prueba de Concepto (PoC) de la capa de interacción (Frontend Puro).

El objetivo principal de esta iteración fue validar que la interfaz es capaz de capturar, procesar y gestionar correctamente la data de interacción del usuario (votos y comentarios) sin dependencia de un backend real.

Requerimientos Críticos Implementados (RCI)

Código

Descripción

Justificación

R2

El usuario puede puntuar un plato con estrellas (1 a 5).

Valida la captura de datos cuantitativos (métricas).

R3

El usuario puede enviar y visualizar comentarios dinámicamente.

Valida la captura de datos cualitativos (feedback).

🏗️ 3. Arquitectura y Diseño

Arquitectura Seleccionada: Cliente Ligero (Monolito Estático)

Tecnologías: HTML + CSS + JavaScript (Vanilla)

Justificación Arquitectónica: Se priorizó la altísima velocidad de prototipado y el control total del DOM para validar la usabilidad de la interfaz de usuario (UX) antes de acoplar un backend complejo.

Patrones y Principios Aplicados

Separación de Preocupaciones (SoC): Estricta división de roles:

HTML: Estructura semántica del contenido.

CSS: Diseño modular y responsivo (presentación estética).

JS: Lógica de comportamiento y dinámica del DOM.

Componentización Ligera: Cada tarjeta de menú (<section class="menu-card">) se maneja como un módulo independiente con su propia lógica de eventos.

⚙️ 4. Implementación y Lógica

Stack Tecnológico

Capa

Componentes

Rol

Estructura

HTML5

Contenido semántico y atributos data-value.

Estilo

CSS3

Diseño responsivo (media queries), estilos de botón.

Comportamiento

JavaScript Vanilla

Lógica del DOM y event listeners.

Iconografía

Font Awesome

Iconos de estrellas (.fa-star) para votación.

Aspectos Críticos Implementados

⭐ Votación por Estrellas (R2)

Implementación de event listeners para los eventos mouseover y click.

La lógica lee el valor mediante el atributo data-value de cada estrella.

El cambio visual (.active class) es inmediato para proporcionar feedback al usuario.

La puntuación se simula como una captura exitosa de datos (equivalente a un POST futuro).

💬 Comentarios Dinámicos (R3)

Creación Dinámica: Se utiliza document.createElement('p') para generar el nuevo comentario.

Inserción UX: El método .prepend() garantiza que el nuevo comentario aparezca inmediatamente al inicio de la lista, mejorando la experiencia del usuario.

Renderizado dinámico de la lista y limpieza automática del textarea.

🖥️ 5. Demostración Funcional (Local)

El prototipo funcional valida la interacción crítica:

Flujo de Votación: El usuario interactúa con el hover y click, registrando una puntuación simulada.

Flujo de Comentarios: El usuario envía texto y este se renderiza en la lista de comentarios sin recargar la página.

El diseño es responsivo, adaptando las tarjetas de menú a diferentes tamaños de pantalla (móvil/desktop).

🌐 6. Entorno, Pruebas y Métricas

Entorno de Ejecución

Requerimiento: Solo se necesita un Navegador Web moderno.

Despliegue: El código puede ser desplegado fácilmente en GitHub Pages, Netlify, Vercel o cualquier hosting estático.

Pruebas Realizadas

Se ejecutaron pruebas funcionales manuales para verificar la robustez de la lógica de eventos en el DOM (R2 y R3), asegurando la correcta captura de puntuaciones y la inserción dinámica de comentarios.

Métricas para el Roadmap

El sistema está diseñado para habilitar la captura de las siguientes métricas de negocio una vez se integre el backend:

Puntuación promedio por plato.

Cantidad total de comentarios por día/plato.

Tiempo de interacción usuario-interfaz.

🤖 7. Uso de Inteligencia Artificial (Transparencia Obligatoria)

En cumplimiento de las directrices académicas, declaramos el uso de IA como herramienta de apoyo:

Modelos Utilizados: Google Gemini (optimización de lógica JS) y ChatGPT (soporte en documentación y estructura de presentación/README).

Fase de Uso: Asistencia en la Implementación y Documentación.

Ética y Validación

Todo el código generado fue revisado, corregido y adaptado manualmente por el equipo para mantener la coherencia con nuestra arquitectura modular y garantizar la calidad técnica. El diseño arquitectónico y las decisiones clave son autoría del equipo.

🚀 8. Conclusión, Limitaciones y Próximos Pasos

Lecciones Aprendidas

Aplicación práctica del ciclo completo de ingeniería de software.

Dominio del DOM y eventos para construir una UX fluida y ágil.

Limitación Principal de la PoC

No existe persistencia real de datos. Todos los votos y comentarios se manejan exclusivamente en el frontend y se pierden al recargar la página.

Próximos Pasos (Roadmap Técnico)

El roadmap futuro de Menutec se centra en la escalabilidad y la persistencia:

Migrar a Arquitectura de 3 Capas: Implementación de un Backend (API REST) y una Base de Datos (MySQL o MongoDB) para almacenamiento permanente.

Implementar Autenticación: Módulo de login/registro para diferenciar usuarios.

Panel Administrativo: Interfaz para que los administradores puedan publicar menús y ver estadísticas/gráficos de feedback.

📄 9. Licencia

Este es un proyecto académico desarrollado para la Universidad Católica de Temuco.
Uso permitido únicamente para fines educativos.
