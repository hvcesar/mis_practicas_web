# Fundamentos del Frontend

Conociendo un poco del funcionamiento de ***HTML** y **CSS**

---

## **Creación de la web**
**Internet** "Interconnected Network": Red de computadoras conectadas en todo el mundo. Nace en los 80's

**Tim Berners Lee**: Creador de la **World Wide Web**, comunmente llamado **web**, fundó el W3C, consorcio que se encarga de estandarizar y supervizar las tecnologías de la web:

* **HTTP** "Hyper Text Transfer Protocol": Permite la comunicación de datos entre dispositivos conectados a la red, ejemplo de dispositivos móviles, laptops a un servidor.
* **URL** "Uniform Resource Locator": Dirección de un sitio web, punto exacto dentro de la red donde se encuentra algún recurso como un archivo, imagen o video, etc.
* **HTML** "Hyper Text Markup Languaje": Da la estructura a un sitio web.
* 1994 se crea CSS: Cascade Style Sheets, series de reglas que describen la apariencia de un sitio web.

---

## **HTML y CSS**

**HTML**:

Lenguaje de marcado de hiper texto, nos permite dar la estructura e información de una página web y mostrarla en el navegador, tablas, listas, links, etc.

**CSS**:

Lenguaje de hojas de estilo que nos permite dar el diseño a las páginas web, como el color de la letra, color del fondo, tamaño de las letras, etc.

---

## **DOM, CSSOM, Render Tree y el proceso de renderizado de la Web**

**DOM**: 

Document Object Model: Forma en que el navegador transforma el código html escrito por el programador y lo convierte a objetos que el navegador pueda entender e interpretar para representarlos y renderizarlos al usuario final.

Proceso del DOM:

* Transforma el código html a bytes.
* Convierte los bytes en caracteres en codificación especificada, normalmente en UTF-8.
* Luego los caracteres son transformados en tokens (Etiquetas de html) ordenandolo por apertura y de cierre en base al W3C.
* Transforma a nodos u objetos.
* Organiza el DOM siguiendo la estructura de un arbol partiendo de la etiqueta html.

**CSSDOM**

Es la forma como el navegador procesa el lenguaje del CSS para insertarlo en la estructura previa del html y darle estilos a los objetos exitentes en el DOM.

**RENDER TREE**

Es donde se unen el DOM y el CSSOM en una estructura de arbol para poder ser renderizados para su presentación frente al usuario.

* Procesa el HTML y se construye el DOM.
* Se procesa el CSS y se construye el CSSOM.
* se unen el DOM y el CSSOM en el RENDER TREE.
* Se ejecuta el render tree.
* Se pinta sobre el Navegador.

---

## **Anatomía**

**Elemento**

Tienen etiquetas de apertura y de cierre, dentro de las etiquetas van el contenido.
```html
<h1>Contenido</h1>
```

**Atributo**

Van dentro de la etiqueta de apertura. Se compone de una sintaxis: atributo y valor
```html
<h1 id="id_h1" class="cls_h1">Contenido</h1>
```

**Anidamiento**

Cuando existen elementos que van dentro de otros elementos:
```html
<ul>
    <li>Item uno</li>
    <li>Item Dos</li>
    <li>Item Tres</li>
</ul>
```

**Elementos vacios**

Etiquetas que no tienen cierre.
```html
<br />
```

## **Anatomía de un documento HTML**

```html
<!DOCTYPE html> <!-- Decimos que vamos a trabajar con HTML% -->
<html lang="es"> <!-- Especificamos el lenguaje -->
<head> <!-- Etiqueta para la codificación de los caracteres y las metas -->
    <meta charset="UTF-8"> <!-- Tipo de codificación -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--  -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Este meta es utilizado para indicarle al navegador que el ancho total de nuestro sitio web será igual al ancho del dispositivo del usuario que esté ingresando a nuestra página (pc, celular, laptop, tablet, etc…) -->
    <title>Document</title> <!-- Título que tendrá la pestaña en el navegador -->
</head>
<body> <!-- Todo lo que se verá en el navegador -->
    <h1>Soy un título</h1>
    <div>
        <p>Soy un parrafo</p>
    </div>
</body>
</html>
```

---

## **Importancia del código semántico**

Como desarrolladores debemos tener claro el significado de escribir código.

La semántica HTML es darle sentido y estructura al codificar, no todos los elementos deben ser un div.

**Beneficios**

* Posicionamiento en buscadores.
* Accesibilidad: Hacer inclusiva la navegación para personas con discapacidad visual.
* Mantenibilidad: Un código semántico es más fácil de entender para otros desarrolladores.
* Reusabilidad: Este aspecto forma parte de la mantenibilidad. Es más fácil cambiar el diseño de un sitio semántico a través del uso de CSS que en uno cuya estructura sale fuera de los estándares.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Frontend</title>
    </head>
    <body>
        <div>
            <header>
                <div>Soy un div dentro del header</div>
                <nav>
                    <ol>
                        <li>Uno</li>
                        <li>Dos</li>
                        <li>Tres</li>
                    </ol>
                </nav>
            </header>
            <section>
                <p>Soy un párrafo dentro del section</p>
            </section>
            <footer>
                <i>Soy un i dentro del footer</i>
            </footer>
        </div>
    </body>
</html>
```

---

## **Tipos de errores en html**

* Errores Sintácticos: Escritura del código.
* Errores Lógicos: La función que cumple una acción al no ser ejecutada como se desea.

Un validador: https://validator.w3.org/

---

## **Anatomía de una declaración css**

Para declarar estilos CSS utiliza propiedades y valores, a este conjunto se le denomina declaración y su sintaxis incluye dos puntos después del nombre de la propiedad y un punto y coma para cerrar la declaración.

```css
p {
    color: red;
    font-size: 14px;
}
```

---

## **Tipos de selectores*

**Universal**: * Todos los elementos HTML
```css
* {
    margin: 0;
}
```

**De tipo**
```css
h1 {
    color: red;
}
```

**Pseudo clases**:
```css
p:first-child {
    color: white;
}
```
Documentación de Pseudo-classes https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

**Pseudo elementos**:
```css
p::nth-child(2n) {
    color: red;
}
```
Documentación de Pseudo-elements https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

---

