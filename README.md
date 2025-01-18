# Aegir Assessment with React + TypeScript + Vite

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: The project uses Node.js, version `v18.X.X` or later. Download the appropriate version from [nodejs.org](https://nodejs.org/).

- **npm**: The project utilizes npm as the package manager. Verify that you have the latest version installed with `npm -v`.

## Layers and Functions

### Assets

- **Location**: `assets` folder
- **Function**: Contains data such as json and svgs.

### Components

- **Location**: `components` folder
- **Function**: Contains reusable and code splitted components.

### Contexts

- **Location**: `contexts` folder
- **Function**: Used for providing state and methods to multiple components.

### Enums

- **Location**: `enum` folder
- **Function**: Defines constants as enumerations to ensure consistent and type-safe usage of specific sets of values across the application.

### Lib

- **Location**: `lib` folder
- **Function**: Handles simple method that can be called anytime. Usually this folder contains function to initialize something. For example initialize Directus.

### Queries

- **Location**: `queries` folder
- **Function**: Manages API query definitions and logic.

### Schemas

- **Location**: `schemas` folder
- **Function**: Defines data validation and transformation rules using Zod to ensure input or API response data meets the required structure and format.

### Services

- **Location**: `services` folder
- **Function**: Contains modules responsible for handling business logic and interacting with external APIs or internal application layers.

### Types

- **Location**: `types` folder
- **Function**: Includes data types to be used for the data.

## Getting Started

To run the web app, follow these steps:

1. Install dependencies:

```shell
npm install
```

2. Run command:

- Development:

```shell
npm run dev
```

- Production:

```shell
npm run build
npm run preview
```
