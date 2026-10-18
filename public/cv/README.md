# CV — fuente de verdad y conversión

En esta carpeta vive el CV en tres formatos por idioma. El **Markdown es la
fuente de verdad**: el `.docx` y el `.pdf` se generan a partir de él y no deben
editarse a mano.

| Idioma | Fuente (editar)                                   | Generados                                        |
| ------ | ------------------------------------------------- | ------------------------------------------------ |
| ES     | `CV_-_Federico_Holc_-_Desarrollador_Web.md`       | `..._Desarrollador_Web.docx` · `..._Desarrollador_Web.pdf` |
| EN     | `Resume_-_Federico_Holc_-_Web_Developer.md`       | `Resume_-_Federico_Holc_-_Web_Developer.docx` · `..._Web_Developer.pdf` |

## Cómo actualizar el CV

1. Editá el archivo `.md` correspondiente (es la única fuente de verdad).
2. Regenerá el `.docx` y el `.pdf`:

   ```bash
   npm run cv:build
   ```

3. Listo. El `.pdf` y el `.docx` quedan actualizados en esta misma carpeta y la
   web los sirve automáticamente (no hay que tocar ningún componente).

## Qué hace `npm run cv:build`

El script [`scripts/build-cv.mjs`](../../scripts/build-cv.mjs) recorre todos los
`.md` de esta carpeta y, para cada uno:

1. **Markdown → DOCX** con [pandoc](https://pandoc.org/):

   ```bash
   pandoc <archivo>.md -f gfm -o <archivo>.docx
   ```

2. **DOCX → PDF** con [LibreOffice](https://www.libreoffice.org/) en modo headless:

   ```bash
   soffice --headless --convert-to pdf --outdir public/cv <archivo>.docx
   ```

El PDF se genera desde el DOCX, así que ambos formatos siempre salen del mismo
Markdown y quedan consistentes.

### Requisitos

Las dos herramientas tienen que estar en el `PATH`:

```bash
# Debian / Ubuntu
sudo apt install pandoc libreoffice
```

Si falta alguna, el script lo avisa y termina con error.

## Por qué el `.md` está en `public/`

Al estar dentro de `public/`, el Markdown también queda **publicado en la web**,
lo que permite que tanto personas como agentes de IA lo consuman directamente
en texto plano (por ejemplo, para leer el CV sin parsear un PDF):

- <https://portfolio.fedeholc.ar/cv/CV_-_Federico_Holc_-_Desarrollador_Web.md>
- <https://portfolio.fedeholc.ar/cv/Resume_-_Federico_Holc_-_Web_Developer.md>

La página `/cv` incluye un enlace a esta versión Markdown. Además, el archivo
[`public/llms.txt`](../llms.txt) lista estos recursos para los agentes.
