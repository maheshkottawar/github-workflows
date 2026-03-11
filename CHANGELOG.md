# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.0] - 2026-03-11

### Changed
- **BREAKING**: Migrated all API endpoints from `/api/v3/*` to `/api/v4/*`
- Enhanced API versioning strategy for better backward compatibility management

### Breaking Changes
- `GET /api/v3/users` → `GET /api/v4/users`
- `POST /api/v3/users` → `POST /api/v4/users`
- `GET /api/v3/users/:id` → `GET /api/v4/users/:id`
- `DELETE /api/v3/users/:id` → `DELETE /api/v4/users/:id`

**Migration Guide**: Update all API client calls to use the new `/api/v4/` prefix.

## [3.0.0] - 2026-03-11

### Changed
- **BREAKING**: Migrated all API endpoints from `/api/v2/*` to `/api/v3/*`

### Breaking Changes
- `GET /api/v2/users` → `GET /api/v3/users`
- `POST /api/v2/users` → `POST /api/v3/users`
- `GET /api/v2/users/:id` → `GET /api/v3/users/:id`
- `DELETE /api/v2/users/:id` → `DELETE /api/v3/users/:id`

**Migration Guide**: Update all API client calls to use the new `/api/v3/` prefix.

## [2.0.0] - 2026-03-11

### Added
- Request/Response logging middleware for all API calls with timestamps
- Enhanced error logging with timestamps and error messages
- Logging for user creation with user ID and name
- Logging for user retrieval success and failures
- Logging for user deletion with user ID and name

### Changed
- **BREAKING**: Migrated all API endpoints from `/api/*` to `/api/v2/*`
- Updated server startup logs to reflect new v2 endpoints
- Enhanced validation logging with detailed field information

### Breaking Changes
- `GET /api/users` → `GET /api/v2/users`
- `POST /api/users` → `POST /api/v2/users`
- `GET /api/users/:id` → `GET /api/v2/users/:id`
- `DELETE /api/users/:id` → `DELETE /api/v2/users/:id`

**Migration Guide**: Update all API client calls to use the new `/api/v2/` prefix.

## [1.6.0] - Previous Releases

### Features
- Health check endpoint
- User management (CRUD operations)
- Error handling with proper HTTP status codes
- Docker support
- Comprehensive logging

---

## How to Use This Changelog

- Add new entries under `[Unreleased]` section
- When releasing, rename `[Unreleased]` to `[X.Y.Z] - YYYY-MM-DD`
- Use these categories:
  - **Added** for new features
  - **Changed** for changes in existing functionality
  - **Deprecated** for soon-to-be removed features
  - **Removed** for now removed features
  - **Fixed** for any bug fixes
  - **Security** for security fixes

## Semantic Versioning

- **MAJOR** version when you make incompatible API changes (breaking changes)
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes
