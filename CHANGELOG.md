# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).


## Unreleased


## [3.0.0] - 2023-07-25

### Changed
- `core` [BREAKING] Upgraded all components to work with core branding v6.x.x
- `core` Upgraded components' syntax to better align with core branding
- `core` Upgraded Stencil to v3
- `core` Upgraded Storybook to v7
- `core` Upgraded most packages to latest versions
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


## [2.0.1] - 2022-02-08

### Fixed
- `cookie-consent` Added correct focus
- `cookie-consent` Removed alert role for better accessibility
- `cookie-consent` Made some copy changes


## [2.0.0] - 2022-02-08

### Added
- `cookie-consent` Added the possibility to make the cookie consent non-blocking
- `icon` Added an icon component

### Changed
- `core` [BREAKING] Upgraded all components to work with core branding v5.x.x


## [1.0.3] - 2021-06-24

### Fixed
- `cookie-consent` Fixed an issue where the component would crash when cookies from other subdomains were not recognized
- `cookie-consent` Fixed an issue where cookies from other subdomains could be deleted


## [1.0.2] - 2021-01-14

### Changed
- `cookie-consent` Removed an unnecessary margin in the modal dialog


## [1.0.1] - 2020-12-07

### Fixed
- `cookie-consent` Fixed accessibility issues


## [1.0.0] - 2020-09-07
Initial release.


[Unreleased]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v2.0.1...3.0.0
[2.0.1]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v2.0.0...2.0.1
[2.0.0]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v1.0.3...2.0.0
[1.0.3]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v1.0.2...1.0.3
[1.0.2]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v1.0.1...1.0.2
[1.0.1]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v1.0.0...1.0.1
[1.0.0]: https://github.com/digipolisantwerp/acpaas-ui_web-components/compare/v1.0.0
