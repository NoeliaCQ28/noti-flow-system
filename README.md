# 📨 Sistema de Gestión de Envíos (Notification Flow)

Una aplicación interactiva construida con **React** y **Vite** que simula un flujo de configuración y envío de notificaciones multicanal. El sistema utiliza un **Stepper Dinámico** que se adapta según las selecciones del usuario, manteniendo la persistencia de datos entre pasos.

![Status](https://img.shields.io/badge/Status-Completed-success)
![Tech](https://img.shields.io/badge/React-Vite-blue)
![UI](https://img.shields.io/badge/Mantine-UI-cyan)

## 🚀 Características Principales

* **Flujo Dinámico (Stepper):** La navegación se genera en tiempo real. Si seleccionas SMS y Email, el sistema crea pasos específicos para editar esos canales.
* **Gestión de Estado Global:** Uso de **Context API** para persistir la información (plantillas, canales, textos) mientras el usuario navega hacia adelante o atrás.
* **Lógica de Ordenamiento Estricto:** Implementación de algoritmos con `es-toolkit` para asegurar que, sin importar el orden de clic del usuario, los canales siempre se procesen en el orden de negocio (SMS → Email → WhatsApp).
* **Plantillas Inteligentes:** Al seleccionar una plantilla (Invitación, Recordatorio), los campos de texto se autocompletan con variables dinámicas, pero permanecen editables.
* **Interfaz Moderna:** Diseño limpio y responsivo utilizando componentes de **Mantine v7**.

## 🛠️ Stack Tecnológico

* **Core:** React 18, Vite.
* **UI/UX:** @mantine/core, @mantine/hooks.
* **Utilidades:** `es-toolkit` (para lógica de intersección y ordenamiento de arrays).
* **Estilos:** PostCSS, CSS Modules (vía Mantine).

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular para facilitar la escalabilidad:

```bash
src/
├── components/       # Componentes reutilizables
├── constants/        # Configuraciones estáticas (Plantillas, Orden de Canales)
├── context/          # FormContext (Manejo de estado y lógica del Stepper)
├── views/            # Vistas y Pasos del Flujo
│   ├── Home.jsx             # Pantalla de bienvenida
│   ├── ModalManager.jsx     # Orquestador del Modal y Stepper
│   ├── StepOne.jsx          # Paso 1: Selección de Configuración
│   └── ConfiguracionCanal.jsx # Paso Dinámico: Formulario por canal
└── main.jsx          # Punto de entrada y Providers
