/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Common ignore patterns used across multiple tools for basic exclusions.
 * These are the most commonly ignored directories in development projects.
 */
export const COMMON_IGNORE_PATTERNS: string[] = [
  '**/node_modules/**',
  '**/.git/**',
];

/**
 * Binary file extension patterns that are typically excluded from text processing.
 */
export const BINARY_FILE_PATTERNS: string[] = [
  '**/*.bin',
  '**/*.exe',
  '**/*.dll',
  '**/*.so',
  '**/*.dylib',
  '**/*.class',
  '**/*.jar',
  '**/*.war',
  '**/*.zip',
  '**/*.tar',
  '**/*.gz',
  '**/*.bz2',
  '**/*.rar',
  '**/*.7z',
  '**/*.doc',
  '**/*.docx',
  '**/*.xls',
  '**/*.xlsx',
  '**/*.ppt',
  '**/*.pptx',
  '**/*.odt',
  '**/*.ods',
  '**/*.odp',
];

/**
 * Common directory patterns that are typically ignored in development projects.
 */
export const COMMON_DIRECTORY_EXCLUDES: string[] = [
  '**/.vscode/**',
  '**/.idea/**',
  '**/dist/**',
  '**/build/**',
  '**/coverage/**',
  '**/__pycache__/**',
];

/**
 * Python-specific patterns.
 */
export const PYTHON_EXCLUDES: string[] = ['**/*.pyc', '**/*.pyo'];

/**
 * System and environment file patterns.
 */
export const SYSTEM_FILE_EXCLUDES: string[] = ['**/.DS_Store', '**/.env'];

/**
 * Comprehensive file exclusion patterns combining all common ignore patterns.
 * These patterns are compatible with glob ignore patterns.
 */
export const DEFAULT_FILE_EXCLUDES: string[] = [
  ...COMMON_IGNORE_PATTERNS,
  ...COMMON_DIRECTORY_EXCLUDES,
  ...BINARY_FILE_PATTERNS,
  ...PYTHON_EXCLUDES,
  ...SYSTEM_FILE_EXCLUDES,
];

/**
 * Extracts file extensions from glob patterns.
 * Converts patterns like "**\/*.exe" to ".exe"
 */
function extractExtensionsFromPatterns(patterns: string[]): string[] {
  return patterns
    .filter((pattern) => pattern.includes('*.'))
    .map((pattern) => pattern.substring(pattern.lastIndexOf('*') + 1))
    .filter((ext) => ext && !ext.includes('/') && ext.startsWith('.'))
    .sort();
}

/**
 * Binary file extensions extracted from BINARY_FILE_PATTERNS for quick lookup.
 * Additional extensions not covered by the patterns are included for completeness.
 */
export const BINARY_EXTENSIONS: string[] = [
  ...extractExtensionsFromPatterns(BINARY_FILE_PATTERNS),
  // Additional binary extensions not in the main patterns
  '.dat',
  '.obj',
  '.o',
  '.a',
  '.lib',
  '.wasm',
].sort();
