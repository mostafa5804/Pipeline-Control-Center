# ساخت نسخه Windows

## روش 1 — روی Windows
1. Node.js LTS را فقط روی کامپیوتری که Build می‌گیرد نصب کنید.
2. فایل `BUILD-EXE.bat` را اجرا کنید.
3. `npm install` وابستگی‌های Electron را دریافت می‌کند.
4. فایل Setup در `dist` ساخته می‌شود.
5. کامپیوتر مقصد فقط Setup/EXE را اجرا می‌کند و Python/Node.js لازم ندارد.

## روش 2 — GitHub Actions
Repository را در GitHub منتشر کنید. هر Tag جدیدی که با حرف بزرگ `V` شروع شود (مثلاً `V1.0.1`) Workflow را اجرا می‌کند. نسخه از نام Tag خوانده می‌شود، Windows Installer ساخته می‌شود و EXE هم در Artifact و هم در GitHub Release قرار می‌گیرد.

## نکته انتشار
Installer فعلی بدون Code Signing ساخته می‌شود. Windows SmartScreen ممکن است برای یک ناشر جدید هشدار نشان دهد. این موضوع با Python ارتباطی ندارد؛ برای حذف هشدارهای ناشر باید بعداً Certificate امضای کد تهیه و تنظیم شود.

## اجرای آفلاین
در EXE نهایی، Leaflet و پلاگین Rotation از npm همراه برنامه بسته‌بندی می‌شوند. برای استفاده از Engineering/None اینترنت لازم نیست؛ نقشه‌های ماهواره‌ای و سایر Basemapهای آنلاین طبیعتاً به اینترنت نیاز دارند.
