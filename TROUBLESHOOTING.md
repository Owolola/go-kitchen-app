# 🔧 TROUBLESHOOTING GUIDE

## Common Issues & Solutions

---

## 1️⃣ Installation Issues

### Issue: "npm: command not found"
**Cause:** Node.js or npm not installed

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Choose LTS version (Long Term Support)
3. Run installer and follow instructions
4. Restart your terminal
5. Verify: `node --version` and `npm --version`

---

### Issue: "Cannot find module 'react'"
**Cause:** Dependencies not installed or outdated

**Solution:**
```bash
# Clean install
rm -r node_modules
rm package-lock.json
npm install
```

Or on Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

---

### Issue: npm install very slow
**Cause:** Slow internet or npm registry issues

**Solution:**
```bash
# Try using npm cache clean
npm cache clean --force

# Or try a different npm registry
npm install --registry https://registry.npmmirror.com

# Or use npm 7+
npm install --legacy-peer-deps
```

---

## 2️⃣ Environment & Configuration Issues

### Issue: "Cannot find .env.local file"
**Cause:** File not created during setup

**Solution:**
1. Create `.env.local` file in project root:
   - **VS Code:** File → New File → Type `.env.local`
   - **Terminal:** `echo GEMINI_API_KEY=your_key > .env.local`
2. Add your Gemini API key
3. Restart dev server

---

### Issue: "GEMINI_API_KEY is undefined"
**Cause:** 
- API key not set in `.env.local`
- Typo in `.env.local`
- Dev server not restarted

**Solution:**
1. Check `.env.local` exists and contains: `GEMINI_API_KEY=your_actual_key`
2. Verify no spaces around `=` sign
3. Stop dev server (`Ctrl+C`)
4. Start again: `npm run dev`
5. Clear browser cache (Ctrl+Shift+Del)

---

### Issue: "process.env not defined"
**Cause:** Vite not loading environment variables

**Solution:**
1. Verify `vite.config.ts` has:
   ```typescript
   define: {
     'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
   }
   ```
2. Restart dev server
3. Check browser console for actual value

---

## 3️⃣ Development Server Issues

### Issue: "Port 3000 already in use"
**Cause:** Another application using port 3000

**Solutions:**

**Option A - Close the app using port 3000:**
```bash
# On Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force

# On Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Option B - Use different port:**
1. Edit `vite.config.ts`
2. Change: `port: 3000` to `port: 3001` (or another number)
3. Save and restart dev server
4. Access: `http://localhost:3001`

---

### Issue: "EACCES: permission denied"
**Cause:** Permission issues (usually on Mac/Linux)

**Solution:**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Or use sudo (not recommended)
sudo npm install
```

---

## 4️⃣ React & TypeScript Issues

### Issue: "React is not defined"
**Cause:** Missing React import

**Solution:**
Add at top of `.tsx` files:
```typescript
import React from 'react';
```

---

### Issue: TypeScript compilation errors
**Cause:** Type mismatches or missing dependencies

**Solution:**
```bash
# Install type definitions
npm install --save-dev @types/react @types/react-dom

# Or verify tsconfig.json has correct settings
# Check: "jsx": "react-jsx" is present
```

---

### Issue: "Cannot find module '@/...'"
**Cause:** Path alias not working

**Solution:**
1. Check `vite.config.ts` has:
   ```typescript
   resolve: {
     alias: {
       '@': path.resolve(__dirname, '.'),
     }
   }
   ```
2. Check `tsconfig.json` has:
   ```json
   "paths": {
     "@/*": ["./*"]
   }
   ```
3. Restart dev server

---

## 5️⃣ Chatbot Issues

### Issue: "Chatbot not responding"
**Cause:** API key invalid or quota exceeded

**Solution:**
1. Verify API key in `.env.local` is correct
2. Check browser console for error messages
3. Visit https://ai.google.dev/ and check:
   - API key is active
   - Project has sufficient quota
   - API is enabled
4. Try creating new API key
5. Check network tab in browser DevTools

---

### Issue: "CORS error when calling Gemini API"
**Cause:** Browser blocking API request

**Solution:**
1. Use server-side proxy (recommended for production)
2. Or enable CORS in Gemini API settings
3. Check that API endpoint is correct

---

### Issue: Chatbot icon not visible
**Cause:** Component not rendering

**Solution:**
1. Check browser console for errors
2. Verify `components/Chatbot.tsx` exists
3. Check `App.tsx` includes `<Chatbot />` component
4. Clear cache: `Ctrl+Shift+Del`

---

## 6️⃣ Build & Production Issues

### Issue: "Build fails with errors"
**Cause:** TypeScript or dependency issues

**Solution:**
```bash
# Check for errors before building
npm run build

# If error occurs, check:
# 1. All TypeScript types are correct
# 2. All imports are valid
# 3. No missing dependencies

# Try clean build
rm -r dist
npm run build
```

---

### Issue: "Build succeeds but app doesn't work"
**Cause:** Missing environment variables in production

**Solution:**
1. Environment variables need to be set at build time
2. For deployment (Vercel, Netlify, etc.):
   - Add `GEMINI_API_KEY` in platform settings
   - Rebuild/redeploy

---

### Issue: "dist folder is empty or missing files"
**Cause:** Build didn't complete properly

**Solution:**
```bash
# Full clean rebuild
rm -r node_modules dist
npm install
npm run build
```

---

## 7️⃣ Browser & Display Issues

### Issue: Page not loading / blank screen
**Cause:** Multiple possibilities

**Solution:**
1. Check browser console for errors (`F12` → Console tab)
2. Verify dev server is running: `npm run dev`
3. Clear browser cache: `Ctrl+Shift+Del`
4. Try different browser
5. Check `http://localhost:3000` is accessible

---

### Issue: Styles not loading (missing Tailwind CSS)
**Cause:** CDN not loading or CSS not compiled

**Solution:**
1. Check `index.html` has Tailwind CDN link:
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```
2. Check internet connection (CDN requires internet)
3. Clear browser cache
4. Verify browser DevTools shows CSS is loaded

---

### Issue: Icons not displaying
**Cause:** Icon components not imported correctly

**Solution:**
1. Verify icon file exists in `components/icons/`
2. Check import path is correct
3. Verify component exports default
4. Rebuild if using build tool

---

## 8️⃣ Data Persistence Issues

### Issue: "Favorites not saving"
**Cause:** localStorage not working

**Solution:**
1. Check browser has localStorage enabled
2. Not in private/incognito mode
3. Verify browser console shows no localStorage errors
4. Check browser storage limit not exceeded

---

### Issue: "Cart items lost after refresh"
**Cause:** Data only in memory, not persisted

**Solution - Add localStorage:**
Edit `App.tsx` to save cart items:
```typescript
useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

useEffect(() => {
    const saved = localStorage.getItem('cartItems');
    if (saved) setCartItems(JSON.parse(saved));
}, []);
```

---

## 9️⃣ Git & Version Control Issues

### Issue: ".env.local accidentally committed"
**Cause:** Not added to `.gitignore` before commit

**Solution:**
```bash
# Remove from git history
git rm --cached .env.local

# Ensure .gitignore has: *.local
echo ".env.local" >> .gitignore

# Commit
git add .gitignore
git commit -m "Remove .env.local from tracking"
```

**For production:** Regenerate API key in Google AI Studio

---

### Issue: "Git merge conflicts in files"
**Cause:** Changes to same file from different sources

**Solution:**
1. Open conflicted file
2. Look for `<<<<<<< HEAD` markers
3. Choose correct version (or combine)
4. Remove conflict markers
5. Save and commit:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   ```

---

## 🔟 Performance Issues

### Issue: "App is slow / laggy"
**Cause:** Multiple possibilities

**Solution:**
1. Check browser DevTools Performance tab
2. Look for unnecessary re-renders
3. Verify no infinite loops
4. Check for large unoptimized images
5. Profile: `npm run build` and check bundle size

---

### Issue: "Hot reload not working"
**Cause:** HMR configuration issue

**Solution:**
1. Ensure `vite.config.ts` has correct settings
2. Try full page refresh: `F5`
3. Check browser console for errors
4. Restart dev server

---

## 🆘 STILL STUCK?

### Check These Resources:
1. **SETUP.md** - Detailed setup guide
2. **CONFIG_SUMMARY.md** - Configuration details
3. **Browser Console** - Press `F12` → Console tab
4. **Network Tab** - Check API calls
5. **Terminal Output** - Read error messages carefully

### Get Help:
- **React Issues:** https://react.dev/
- **Vite Issues:** https://vitejs.dev/guide/troubleshooting.html
- **TypeScript Issues:** https://www.typescriptlang.org/
- **Google Gemini:** https://ai.google.dev/

---

## 📝 Debugging Tips

### Enable Debug Mode:
```typescript
// In App.tsx or specific component
console.log('Debug info:', { state, props });
```

### Check Variables:
```typescript
// In browser console (F12)
console.log(process.env.GEMINI_API_KEY);
```

### Network Request Debugging:
```typescript
// In browser DevTools → Network tab
// Check all requests to ensure they succeed
```

### React DevTools:
- Install: Chrome/Firefox "React Developer Tools" extension
- Helpful for inspecting component props and state

---

## ✅ Quick Diagnostic Checklist

Run through this to identify issues:

- [ ] Node.js installed? (`node --version`)
- [ ] npm working? (`npm --version`)
- [ ] Dependencies installed? (`npm install`)
- [ ] `.env.local` exists and has API key?
- [ ] Dev server running? (`npm run dev`)
- [ ] No terminal errors?
- [ ] Browser console clear (F12)?
- [ ] Page loads at http://localhost:3000?
- [ ] Can interact with app?
- [ ] Chatbot responding?

If any fail, refer to corresponding section above.

---

**Last Updated:** November 15, 2025  
**For More Help:** See SETUP.md or CONFIG_SUMMARY.md
