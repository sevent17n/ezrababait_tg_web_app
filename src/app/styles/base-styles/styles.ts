"use client";

import { css } from "@emotion/react";

export const baseStyles = css`
  :root {
    --body-font-size: 1rem;
    --body-line-height: 1.5rem;
    --body-font-weight: 400;
    --color-text-primary: #000000;
    --color-text-secondary: #989999;
    --color-gray: #e2e2e2;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: var(--red-hat-text-font);
    font-size: var(--body-font-size);
    line-height: var(--body-line-height);
    font-weight: var(--body-font-weight);
    color: var(--color-text-primary);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
