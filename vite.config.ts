import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		// Optimize build output
		rollupOptions: {
			output: {
				manualChunks: {
					// Separate vendor chunks for better caching
					'react-vendor': ['react', 'react-dom'],
					'router-vendor': ['@tanstack/react-router'],
					'icons-vendor': ['@hugeicons/react', '@hugeicons/core-free-icons'],
				},
			},
		},
		// Enable minification
		minify: 'esbuild',
		// Optimize chunk size
		chunkSizeWarningLimit: 1000,
		// Source maps for production debugging (can be disabled for smaller builds)
		sourcemap: false,
	},
});
