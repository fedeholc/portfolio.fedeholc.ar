# portfolio.fedeholc.ar

[![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/fedeholc/portfolio.fedeholc.ar/blob/master/README.es.md)

My developer portfolio website.

Online: [portfolio.fedeholc.ar](https://portfolio.fedeholc.ar)

## CV

The CV lives in the [`public/cv`](public/cv) folder. The **Markdown file is the
source of truth** and the `.docx` / `.pdf` are generated from it with:

```bash
npm run cv:build
```

The script uses [pandoc](https://pandoc.org/) (Markdown → DOCX) and
[LibreOffice](https://www.libreoffice.org/) (DOCX → PDF), which must be
installed. Because it lives in `public/`, the `.md` is also published on the web
so people and AI agents can read it directly. Full details in
[`public/cv/README.md`](public/cv/README.md).

## Resources / Libraries

This project uses the following resources/libraries:

- [SVG Backgrounds](https://www.svgbackgrounds.com/)
- [tabler icons](https://github.com/tabler/tabler-icons)

## License

- [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) This project is under the GPL v3 License - see the file [LICENSE.md](LICENSE.md) for more details.

## Author

👤 **Federico Holc** [@fedeholc](https://github.com/fedeholc)
