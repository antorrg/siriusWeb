Excelente pregunta 👏
`mask` (y su prima `-webkit-mask`) es una **propiedad CSS muy poderosa** que te permite usar **una imagen o SVG como “plantilla de transparencia”** —es decir, lo que está dibujado se ve, lo que no está, se vuelve transparente.

Es una técnica moderna (compatible con la mayoría de navegadores actuales, incluso móviles) y es **perfecta para iconos SVG coloreables**, sin tener que incrustar el SVG en el HTML.

Vamos paso a paso 👇

---

## 🎨 1️⃣ Qué hace exactamente `mask`

Cuando aplicás:

```css
mask: url('icono.svg') no-repeat center / contain;
background-color: red;
```

👉 Lo que ocurre es:

* El navegador toma tu SVG como una **máscara en escala de grises**.

  * Las zonas **blancas** (o con más opacidad) dejan pasar el color.
  * Las zonas **negras o transparentes** se vuelven invisibles.
* El `background-color` se “pinta” solo donde el SVG es visible.

💡 En otras palabras:
El SVG actúa como **plantilla** que “recorta” el color de fondo.

---

## 🧱 2️⃣ Ejemplo básico

Supongamos que tienes `check.svg` (sin color, sólo formas):

```css
.icon {
  width: 64px;
  height: 64px;
  background-color: #00cc88; /* color visible */
  mask: url('check.svg') no-repeat center / contain;
  -webkit-mask: url('check.svg') no-repeat center / contain; /* Safari */
}
```

HTML:

```html
<div class="icon"></div>
```

🟩 Resultado: un **check verde** totalmente sólido.
Y si cambias el color en CSS:

```css
.icon:hover { background-color: violet; }
```

➡️ el ícono cambia de color sin tocar el SVG.

---

## ⚙️ 3️⃣ Propiedades más comunes

| Propiedad                                   | Qué hace                                               |
| ------------------------------------------- | ------------------------------------------------------ |
| `mask`                                      | Shorthand para definir imagen, posición y tamaño.      |
| `mask-image`                                | Imagen o SVG que sirve de máscara.                     |
| `mask-repeat`, `mask-position`, `mask-size` | Igual que en `background`.                             |
| `mask-mode`                                 | Controla si se usa luminancia (`alpha` o `luminance`). |
| `-webkit-mask`                              | Versión para Safari.                                   |

Ejemplo más explícito:

```css
.icon {
  width: 48px;
  height: 48px;
  background-color: var(--icon-color, #444);
  mask-image: url('check.svg');
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-image: url('check.svg');
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}
```

---

## 💡 4️⃣ Ventajas frente a `<img>` o SVG inline

✅ **Color dinámico** (por CSS, incluso con variables o temas)
✅ **Soporta hover, active, dark mode, etc.**
✅ **Ligero**: el HTML solo tiene un `<div>`
✅ **Reutilizable**: podés usar el mismo SVG en varios colores
⚠️ **Limitación**: solo usa un color sólido (no soporta degradados dentro del SVG)

---

## 🌗 5️⃣ Ejemplo práctico con modo oscuro

```css
.icon {
  width: 40px;
  height: 40px;
  background-color: var(--icon-color);
  mask: url('icons/check.svg') no-repeat center / contain;
  -webkit-mask: url('icons/check.svg') no-repeat center / contain;
}

:root {
  --icon-color: #222;
}

.light-mode {
  --icon-color: #00cc88;
}

.dark-mode {
  --icon-color: #b0b0b0;
}
```

Y en HTML:

```html
<div class="icon light-mode"></div>
```

👉 Automáticamente cambia de color si cambias el tema.

---

## ⚡ En resumen

| Ventaja                       | Explicación                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| 🎨 Color controlado desde CSS | Con `background-color`                                      |
| 🧩 Reutilizable               | Un solo archivo SVG sirve para todo                         |
| ⚙️ Compatible                 | Funciona en Chrome, Firefox, Edge y Safari (con `-webkit-`) |
| 🚫 Limitación                 | Solo un color plano por icono (no multicolor)               |

---

¿Querés que te prepare un mini ejemplo con **varios iconos (check, warning, error)** todos usando `mask:` y con cambio de color en hover y modo oscuro? Te lo dejo en HTML + CSS listo para copiar.
