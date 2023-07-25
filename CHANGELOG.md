# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).


## Unreleased


## 3.0.0 - 2023-07-25

### Changed
- `core` [BREAKING] Upgraded all components to work with core branding v6.x.x
- `core` Upgraded components' syntax to better align with core branding
- `core` Upgraded Stencil to v3
- `core` Upgraded Storybook to v7
- `core` Upgraded most packages to latest versions
- `core` Changed the package scope
- `cookie-content-blocker` [BREAKING] Changed the 'title' prop to 'message' to prevent interference with the standard HTML attribute

### Added
- `core` Added possibility to change all text strings (e.g. for translation)
- `cookie-consent` Added a back button to go back from the detail screen to the main screen

### Fixed
- `cookie-consent` Fixed a focus-trap console error when cookies are already set

### Removed
- `core` [BREAKING] Removed support for older brandings
- `core` Removed flexboxgrid as a dependency
- `core` Removed some packages in favor of internal code
- `cookie-consent` Removed the default configuration
