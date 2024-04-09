import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Добавьте здесь вашу конфигурацию Next.js
};

export default withVanillaExtract(nextConfig);