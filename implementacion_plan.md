# 🧩 Plan de Implementación — MENUTEC

## 1. Objetivo general
Definir las tareas, roles y etapas necesarias para implementar el sistema MENUTEC de forma estructurada y eficiente.

---

## 2. Fases del proyecto

| Fase | Tareas principales | Responsable | Duración estimada |
|------|--------------------|--------------|-------------------|
| 1 | Crear repositorio GitHub, configurar estructura inicial | Líder | 1 día |
| 2 | Documentar requisitos y casos de uso | Analista de requisitos | 2 días |
| 3 | Diseñar diagramas UML (casos de uso, clases) | Diseñador UML | 3 días |
| 4 | Crear base de datos y modelos | Dev Lead | 3 días |
| 5 | Implementar backend (API y lógica de negocio) | Dev Lead | 5 días |
| 6 | Desarrollar frontend (interfaz web) | Desarrollador | 5 días |
| 7 | Integración y pruebas | QA / Equipo | 3 días |
| 8 | Preparar presentación final | Presentador / Todos | 2 días |

---

## 3. Mapeo de trazabilidad (Casos de uso → Clases → Implementación)

| Caso de uso | Clases involucradas | Módulo / Componente |
|--------------|--------------------|----------------------|
| Registrarse / Iniciar sesión | Usuario | AuthController |
| Ver menú | Cliente, Menu, Plato | MenuController |
| Opinar sobre menú | Cliente, Plato | ReviewController |
| Clasificar plato | Cliente, Plato | RatingController |
| Gestionar menú | Administrador, Menu, Plato | AdminPanel |
| Actualizar menú | Administrador, Menu | AdminPanel |
| Mantenimiento del sistema | Lider | SystemMaintenance |

---

## 4. Estimaciones globales

- Duración total del desarrollo: **~20 días efectivos**
- Equipo: **4–5 integrantes**
- Tecnologías: **PHP / Node.js, MySQL, HTML, CSS, JS**

---

## 5. Criterios de aceptación

- Menú se visualiza correctamente por día.  
- Registro y login funcionales.  
- Administrador puede crear y editar menús.  
- Clientes pueden dejar opiniones y calificaciones.  
- Página estable y accesible.  

---

## 6. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|--------|----------|------------|
| Retraso en entrega de diagramas | Medio | Priorizar documentación antes del código |
| Conflictos en GitHub | Bajo | Usar ramas separadas y commits claros |
| Problemas en la base de datos | Alto | Probar cada módulo con datos de ejemplo |
| Falta de tiempo para presentación | Medio | Ensayar y preparar slides con anticipación |

---
