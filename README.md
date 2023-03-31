# Storybook and React: documenting Frotnend

...

## Step by Step

yarn init -y

yarn add react react-dom next

yarn add --dev typescript @types/react @types/node

npx eslint --init

yarn add --dev --exact prettier

npx gitignore node

yarn add styled-components @types/styled-components

## How to add a storybook to your project.

npx storybook init

yarn storybook

yarn add --dev @storybook/addons @storybook/theming

yarn add addon-screen-reader

yarn install && yarn build-storybook
