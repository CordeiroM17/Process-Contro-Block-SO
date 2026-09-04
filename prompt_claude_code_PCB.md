# Prompt para Claude Code — AE1 Sistemas Operativos, Grupo 4, Tema: PCB

Copiá y pegá todo el bloque de abajo (entre las líneas ```) en tu consola de Claude Code, parado en una carpeta vacía (por ejemplo `~/AE1-PCB`).

```
Quiero que armes un sitio web estático (HTML + CSS + JS simple, sin frameworks
pesados, para poder subirlo fácil a GitHub Pages o Netlify) que cumpla con la
consigna de la Actividad de Evaluación 1 de la asignatura Sistemas Operativos
(UCP, Corrientes). El tema asignado es "PCB (Process Control Block)".

Grupo 4 — Integrantes: Cordeiro Mariano, Giovanni Vanni, Blanco Facundo.

Estructura de archivos que quiero:
- index.html (portada/inicio, con navegación a todas las secciones)
- introduccion.html
- concepto.html
- caracteristicas.html
- funcionamiento.html
- ejemplo-practico.html
- aplicaciones.html
- cuanto-conocemos.html (quiz)
- fuentes.html
- style.css compartido, con diseño prolijo, responsive, y una paleta de
  colores coherente (algo tipo "sistemas/tecnología", no genérico blanco y negro)
- script.js si hace falta para el quiz interactivo

Cada página debe tener un menú de navegación que enlace a todas las demás
secciones (nav bar o sidebar), y footer con nombre del grupo e integrantes.

CONTENIDO que tenés que redactar vos, con criterio técnico correcto y en
español, EXPLICANDO CON PALABRAS PROPIAS (no copiar textual de ningún lado):

1. Portada / index: nombre del tema, integrantes del grupo, breve
   introducción de qué van a encontrar en el sitio.

2. Introducción: qué es un proceso en un sistema operativo y por qué el SO
   necesita una estructura que almacene toda la información de cada proceso.

3. Concepto/definición: qué es el PCB, quién lo crea y dónde vive en memoria
   (a grandes rasgos).

4. Características: listar y explicar los campos típicos de un PCB
   (PID, estado del proceso, contador de programa/PC, registros de CPU,
   información de planificación -prioridad, punteros a colas-, información
   de gestión de memoria -límites, tablas de páginas-, información de
   dispositivos de E/S abiertos, información de contabilidad -tiempo de CPU
   usado, límites, etc.-).

5. Funcionamiento: cómo se crea el PCB al crearse un proceso, cómo se
   actualiza en cada cambio de contexto (context switch), cómo permite
   "congelar y restaurar" el estado exacto de un proceso, y qué pasa con el
   PCB cuando el proceso termina.

6. Ejemplo práctico: un ejemplo paso a paso (puede ser una tabla o diagrama
   con HTML/CSS) mostrando cómo cambian los valores clave del PCB de un
   proceso cuando pasa de "En ejecución" a "Bloqueado" (esperando E/S) y
   luego vuelve a "Listo".

7. Aplicaciones prácticas: por qué el PCB es indispensable para el
   multitasking, la planificación de CPU (scheduling) y el cambio de
   contexto en sistemas operativos reales (podés nombrar ejemplos generales
   de SO tipo Linux/Windows sin entrar en detalles de implementación interna
   que no puedas verificar).

8. Al menos un diagrama/esquema del PCB hecho en HTML/CSS o SVG simple
   (no hace falta imagen externa, podés dibujarlo con divs/SVG) mostrando
   los campos principales como si fuera una "ficha" del proceso.

9. Un placeholder claro para insertar un video (un <iframe> de YouTube con
   un comentario "REEMPLAZAR por el video del grupo" y también un párrafo
   invitando a grabar un video corto de 1-2 minutos explicando el tema con
   sus palabras).

10. Sección "¿Cuánto conocemos de Sistemas Operativos?" con un quiz
    interactivo de al menos 3 preguntas de opción múltiple sobre PCB, cada
    una con 4 opciones, una correcta, distractores plausibles, y que al
    responder muestre si acertaron o no y por qué (no preguntas de pura
    memorización, sino de comprensión: qué pasaría si..., por qué es
    necesario..., cómo se relaciona con...).

11. Fuentes: una sección de bibliografía con formato de cita (aunque sean
    fuentes genéricas tipo "Silberschatz, Galvin y Gagne - Fundamentos de
    Sistemas Operativos" o sitios como GeeksforGeeks/tutorialspoint),
    dejando también un placeholder para que el grupo agregue los links
    reales que hayan consultado.

IMPORTANTE:
- Todo el texto tiene que sonar como una síntesis propia del grupo, no como
  un texto copiado de internet.
- Dejá comentarios HTML tipo <!-- TODO: --> en los lugares donde el grupo
  tiene que reemplazar contenido (video real, fuentes reales, nombres si
  hace falta, capturas propias, etc.).
- Al terminar, decime cómo probar el sitio en local (por ejemplo con
  `npx serve` o abriendo index.html directo) y cómo publicarlo gratis en
  GitHub Pages para poder generar el link que después va en el informe
  de portada (AE1_Portada.docx).
```

## Después de que Claude Code lo genere

1. Revisen todo el contenido y corríjanlo/complétenlo con sus propias palabras.
2. Reemplacen los `<!-- TODO -->` (video, fuentes reales, etc.).
3. Publiquen el sitio (GitHub Pages, Netlify o similar) y copien el link.
4. Pongan ese link en el archivo **AE1_Portada.docx** que les generé abajo.
