import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
	 base:'./',
  plugins: [
    uni(),
    AutoImport({
      imports: ["vue"]
    })  
  ],
})
