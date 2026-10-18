// Allow side-effect imports of plain global stylesheets, e.g. `import "@app/globals.css"`.
// Next.js only declares CSS Modules (`*.module.css`), so these would otherwise fail to
// resolve when `noUncheckedSideEffectImports` is enabled.
declare module "*.css";
