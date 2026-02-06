# ArgoCD Example UI Extensions

This repository contains example "Hello World" implementations for each of the six [Argo CD UI extension](https://argo-cd.readthedocs.io/en/stable/developer-guide/extensions/ui-extensions/) types. Each extension is a standalone project that can be built and installed independently.

## Extensions

| Extension | Directory | API Method | Description |
|---|---|---|---|
| **Resource Tab** | `resource-tab-extension/` | `registerResourceExtension` | Adds a custom tab to a resource's sliding panel (Pod) |
| **Application Tab** | `application-tab-extension/` | `registerResourceExtension` | Adds a custom tab to the Application resource detail view |
| **System Level** | `system-level-extension/` | `registerSystemLevelExtension` | Adds a new page accessible from the sidebar navigation |
| **Status Panel** | `status-panel-extension/` | `registerStatusPanelExtension` | Adds an item to the application status panel with a flyout |
| **Top Bar Action Menu** | `top-bar-action-menu-extension/` | `registerTopBarActionMenuExt` | Adds a button to the application view's top bar action menu |
| **App View** | `app-view-extension/` | `registerAppViewExtension` | Adds an alternative application details view (alongside Node Tree and Pod views) |

## Building

Each extension is independently buildable. From the repository root:

```bash
cd <extension-folder>
yarn install
yarn build
```

The build produces `dist/extension.tar` containing the bundled JavaScript that Argo CD loads at runtime.

## Project Structure

Each extension follows the same layout:

```
<extension-folder>/
├── src/
│   ├── index.tsx        # Extension component and registration
│   └── tsconfig.json    # TypeScript config
├── package.json         # Dependencies and build script
└── webpack.config.js    # Webpack bundling config
```

## Learn More

- [Argo CD UI Extensions Documentation](https://argo-cd.readthedocs.io/en/stable/developer-guide/extensions/ui-extensions/)
