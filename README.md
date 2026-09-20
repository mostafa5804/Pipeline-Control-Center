# Pipeline Control Center — v1.0.1

<p align="center"><img src="assets/pipeline-control-center-logo.png" alt="Pipeline Control Center" width="150"></p>

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

> نسخه HTML خام برای موتور Leaflet از CDN استفاده می‌کند. در نسخه Windows/Electron، Leaflet و موتور Rotation به‌صورت محلی همراه برنامه بسته‌بندی می‌شوند؛ بنابراین خود رابط و پس‌زمینه Engineering/None بدون اینترنت اجرا می‌شوند. Basemapهای آنلاین به اینترنت نیاز دارند. علاوه بر Esri/OSM/OpenTopo/CARTO، گزینه‌های OpenFreeMap، NASA GIBS، MapTiler (با API Key)، Google Hybrid و Custom XYZ نیز در تنظیمات نقشه موجود است.


### نقشه‌های پس‌زمینه

- **Esri Satellite / Hybrid**: گزینه عمومی و مناسب برای کار روزمره پروژه.
- **OpenFreeMap**: نقشه برداری وکتوری آزاد و بدون API Key.
- **MapTiler Satellite / Hybrid**: کیفیت خوب؛ نیازمند API Key حساب MapTiler.
- **NASA GIBS**: تصویر ماهواره‌ای روزانه برای دید کلی؛ به علت رزولوشن، برای کنترل مهندسی در زوم بالا مناسب نیست.
- **Custom XYZ**: برای Tile Server داخلی، سازمانی یا سرویس‌های GIS دیگر.
- **Engineering / None**: بدون اینترنت.

در صورت اختلال یک Basemap آنلاین، قابلیت fallback به پس‌زمینه Engineering فعال است.

## انتقال پروژه‌های نسخه‌های قبلی

اگر پروژه‌ای را در نسخه 8.x ساخته‌اید، از نسخه قبلی **Backup JSON** بگیرید و در v1.0.1 از بخش «داده و خروجی → Restore Backup» وارد کنید. مسیرهای قدیمی هم به‌عنوان مسیرهای عادی این نسخه شناخته می‌شوند.

## ساخت Windows EXE

روی **سیستم Build** یک‌بار Node.js نصب کنید و `BUILD-EXE.bat` را اجرا کنید. خروجی در پوشه `dist` ساخته می‌شود. سیستم‌هایی که فایل Setup/EXE نهایی را نصب می‌کنند به Python یا Node.js نیاز ندارند.

همچنین Workflow آماده GitHub Actions در `.github/workflows/windows-build.yml` وجود دارد؛ با اجرای دستی Workflow یا Push کردن Tag مثل `V1.0.1`، GitHub روی Windows فایل EXE را Build می‌کند، آن را به‌عنوان Artifact نگه می‌دارد و همان EXE را در GitHub Release مربوط به Tag منتشر می‌کند.

## سازنده

**مصطفی عرفانی (Mostafa Erfani)**  
GitHub: **mostafa5804/Pipeline-Control-Center** — https://github.com/mostafa5804/Pipeline-Control-Center — https://github.com/mostafa5804/Pipeline-Control-Center

## مجوز

این پروژه تحت مجوز **MIT License** منتشر شده است؛ متن کامل در فایل `LICENSE` مخزن قرار دارد.


## انتشار نسخه Windows با Tag

Workflow در `.github/workflows/windows-build.yml` فقط با Tagهایی که با حرف بزرگ **`V`** شروع می‌شوند اجرا می‌شود. مثال:

```bash
git tag V1.0.1
git push origin V1.0.1
```

GitHub Actions نسخه را از نام Tag استخراج می‌کند، Windows Installer را Build می‌کند و فایل EXE را به‌صورت خودکار داخل GitHub Release همان Tag منتشر می‌کند.

Repository: https://github.com/mostafa5804/Pipeline-Control-Center
