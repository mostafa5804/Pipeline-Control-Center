# Pipeline Control Center — v1.0.0

یک ابزار عمومی برای مدیریت و ارائه پیشرفت پروژه‌های خط لوله روی نقشه.

## شروع کار

برنامه به‌صورت **خام** منتشر می‌شود و هیچ مسیر پروژه‌ای از پیش داخل آن وجود ندارد. از بخش «مدیریت → Import مسیر» یک فایل KML یا KMZ وارد کنید. برنامه LineStringها و توالی‌های Station قابل استفاده را Preview می‌کند؛ می‌توانید یک یا چند مسیر را انتخاب کنید، نام هر مسیر را تغییر دهید و سپس جبهه‌های اجرایی و عوارض را ثبت کنید.

### قابلیت‌های اصلی

- Import امن و چندمسیره KML/KMZ با Preview و نام‌گذاری مسیرها
- نمایش KP، چند Activity هم‌زمان، عکس‌های جبهه/عارضه و عوارض آزاد خارج از مسیر
- Timeline تاریخ‌محور و Gap / Sequence Control در بخش مدیریت
- Meeting Mode و خروجی تک‌فایل Presentation HTML فقط‌خواندنی
- Backup/Restore JSON و ذخیره داده‌ها در IndexedDB
- کتابخانه تخصصی آیکن‌های خط لوله، ماشین‌آلات، نقشه‌برداری و HSE

## اجرای نسخه HTML

`run.bat` را اجرا کنید یا `index.html` را باز کنید. Python لازم نیست.

> نسخه HTML خام برای موتور Leaflet از CDN استفاده می‌کند. در نسخه Windows/Electron، Leaflet و موتور Rotation به‌صورت محلی همراه برنامه بسته‌بندی می‌شوند؛ بنابراین خود رابط و پس‌زمینه Engineering/None بدون اینترنت اجرا می‌شوند. Basemapهای Satellite/Street/Topo/Google همچنان به اینترنت نیاز دارند.

## انتقال پروژه‌های نسخه‌های قبلی

اگر پروژه‌ای را در نسخه 8.x ساخته‌اید، از نسخه قبلی **Backup JSON** بگیرید و در v1.0.0 از بخش «داده و خروجی → Restore Backup» وارد کنید. مسیرهای قدیمی هم به‌عنوان مسیرهای عادی این نسخه شناخته می‌شوند.

## ساخت Windows EXE

روی **سیستم Build** یک‌بار Node.js نصب کنید و `BUILD-EXE.bat` را اجرا کنید. خروجی در پوشه `dist` ساخته می‌شود. سیستم‌هایی که فایل Setup/EXE نهایی را نصب می‌کنند به Python یا Node.js نیاز ندارند.

همچنین Workflow آماده GitHub Actions در `.github/workflows/windows-build.yml` وجود دارد؛ با اجرای دستی Workflow یا Push کردن Tag مثل `V1.0.0`، GitHub روی Windows فایل EXE را Build می‌کند و به‌عنوان Artifact تحویل می‌دهد.

## سازنده

**مصطفی عرفانی (Mostafa Erfani)**  
GitHub: **MOSTAFA5804** — https://github.com/mostafa5804/Pipeline-Control-Center

## مجوز

برای این نسخه فایل LICENSE تعیین نشده است. قبل از انتشار عمومی، در صورت تمایل نوع مجوز پروژه را مشخص کنید.


## انتشار خودکار نسخه Windows با Tag

Workflow در `.github/workflows/windows-build.yml` فقط با Tagهایی که با حرف بزرگ **`V`** شروع شوند اجرا می‌شود؛ برای مثال:

```bash
git tag V1.0.0
git push origin V1.0.0
```

GitHub Actions نسخه را از نام Tag استخراج می‌کند، Windows Installer را می‌سازد و فایل EXE را هم به‌عنوان Artifact و هم در GitHub Release همان Tag منتشر می‌کند.

Repository: https://github.com/mostafa5804/Pipeline-Control-Center
