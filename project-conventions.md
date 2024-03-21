# React Project Naming Conventions

## Components

- **Component Names**: Use PascalCase for component names. Start with a capital letter.

  - Example: `Header`, `LoginForm`, `ProductCard`

- **Component Files**: Use PascalCase for component file names. Match the component name.

  - Example: `Header.js`, `LoginForm.jsx`, `ProductCard.tsx`

- **Component Folders**: Use kebab-case for component folder names. Match the component name.
  - Example: `header`, `login-form`, `product-card`

## Variables and Functions

- **Variable Names**: Use camelCase for variable names. Start with a lowercase letter.

  - Example: `userName`, `productList`, `isLoggedIn`

- **Function Names**: Use camelCase for function names. Start with a lowercase letter.
  - Example: `getUserData`, `calculateTotalPrice`, `handleFormSubmit`

## CSS Classes and IDs

- **CSS Class Names**: Use kebab-case for CSS class names.

  - Example: `.header-container`, `.login-form`, `.product-card`

- **ID Names**: Use camelCase for ID names.
  - Example: `userProfile`, `cartItems`, `productDetails`

## File and Folder Names

- **File Names**: Use kebab-case for file names.

  - Example: `header.styles.css`, `login-form.js`, `product-card.tsx`

- **Folder Names**: Use kebab-case for folder names.
  - Example: `components`, `styles`, `utils`

## Constants

- **Constant Names**: Use uppercase letters and underscores for constant names.
  - Example: `API_URL`, `MAX_ITEMS_PER_PAGE`, `DEFAULT_TIMEOUT`

## Enums

- **Enum Names**: Use PascalCase for enum names.
  - Example: `Color`, `Size`, `Status`

## Imports

- **Import Names**: Use the same naming conventions as mentioned above for imported components, variables, and functions.

- **Order of Imports**: Organize your imports in the following order:

  1. **Built-in Modules**: Import any built-in Node.js or browser APIs first.
  2. **External Modules**: Next, import any modules from the npm registry or other external sources.
  3. **Internal Modules**: After that, import any modules, components, or utilities from within your own codebase.
  4. **Style Imports**: Lastly, import any CSS or style-related modules.

  Each group should be separated by a blank line. Within each group, imports should be sorted alphabetically for easier readability.

  Example:

  ```javascript
  // Built-in Modules
  import path from "path";

  // External Modules
  import React from "react";
  import PropTypes from "prop-types";

  // Internal Modules
  import MyComponent from "./MyComponent";
  import { myUtilityFunction } from "./utils";

  // Style Imports
  import "./styles.css";
  ```
