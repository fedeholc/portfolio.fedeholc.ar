# portfolio.fedeholc.ar

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/fedeholc/portfolio.fedeholc.ar/blob/master/README.md)

Mi portfolio de desarrollador web.

Online: [portfolio.fedeholc.ar](https://portfolio.fedeholc.ar)

## CV

El CV vive en la carpeta [`public/cv`](public/cv). El archivo **Markdown es la
fuente de verdad** y los `.docx` / `.pdf` se generan a partir de él con:

```bash
npm run cv:build
```

El script usa [pandoc](https://pandoc.org/) (Markdown → DOCX) y
[LibreOffice](https://www.libreoffice.org/) (DOCX → PDF), que tienen que estar
instalados. Al estar en `public/`, el `.md` también queda publicado en la web
para que lo puedan leer personas y agentes de IA. El detalle completo está en
[`public/cv/README.md`](public/cv/README.md).

## Librerías y recursos

Este proyecto utiliza las siguientes librerías / recursos:

- [SVG Backgrounds](https://www.svgbackgrounds.com/)
- [tabler icons](https://github.com/tabler/tabler-icons)

## Licencia

- [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) Este proyecto está bajo la Licencia GPL v3 - vea el archivo [LICENSE.md](LICENSE.md) para más detalles.

### Autor

👤 **Federico Holc** [@fedeholc](https://github.com/fedeholc)
