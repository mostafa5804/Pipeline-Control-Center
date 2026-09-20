<div align="center">

# 🛠️ Pipeline Control Center

### مدیریت مسیر، پیشرفت، عوارض و ارائه مدیریتی پروژه‌های خط لوله

[![Version](https://img.shields.io/badge/version-1.0.0-0f766e?style=for-the-badge)](https://github.com/mostafa5804/Pipeline-Control-Center/releases/latest)
[![Windows](https://img.shields.io/badge/Windows-EXE-2563eb?style=for-the-badge&logo=windows11&logoColor=white)](https://github.com/mostafa5804/Pipeline-Control-Center/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-mostafa5804-181717?style=for-the-badge&logo=github)](https://github.com/mostafa5804/Pipeline-Control-Center)

**Pipeline Control Center** یک نرم‌افزار عمومی و پروژه‌مستقل برای کنترل مکانی و مدیریتی پروژه‌های خط لوله است.  
برنامه بدون مسیر از پیش‌تعریف‌شده شروع می‌شود؛ KML/KMZ خودت را وارد می‌کنی، مسیرها را نام‌گذاری می‌کنی و کل پروژه را روی همان داده واقعی پیش می‌بری.

[🚀 آخرین نسخه](https://github.com/mostafa5804/Pipeline-Control-Center/releases/latest) ·
[🌐 نسخه HTML / Repository](https://mostafa5804.github.io/Pipeline-Control-Center/) ·
[🐞 گزارش مشکل](https://github.com/mostafa5804/Pipeline-Control-Center/issues)

</div>

---

## ✨ چرا Pipeline Control Center؟

این ابزار برای زمانی ساخته شده که یک فایل مسیر داری و می‌خواهی بدون راه‌اندازی GIS سنگین یا ساخت داشبورد اختصاصی، وضعیت پروژه را به‌صورت قابل فهم روی نقشه مدیریت و ارائه کنی.

- 🗺️ **چندمسیره و پروژه‌مستقل** — ورود یک یا چند مسیر از KML/KMZ با Preview، انتخاب گروهی و نام‌گذاری
- 📍 **کنترل کیلومتراژ و جبهه‌ها** — ثبت بازه‌های اجرایی بر اساس KP و نمایش مستقیم روی مسیر
- 🧩 **عوارض و نقاط آزاد** — ثبت تقاطع‌ها، ایستگاه‌ها، ماشین‌آلات، Benchmark، کمپ و نقاط خارج از محور
- 📸 **مستندات تصویری** — تا ۴ عکس برای هر جبهه یا عارضه با نمایش داخل Viewer
- 🕒 **Timeline** — مشاهده وضعیت پروژه در تاریخ‌های مختلف
- 🔗 **Gap / Sequence Control** — تحلیل توالی فعالیت‌های اجرایی در بخش مدیریت
- 🎛️ **Meeting Mode** — نمایش تمیز و مدیریتی برای جلسه و ارائه
- 📤 **Presentation HTML** — خروجی تک‌فایل فقط‌خواندنی برای ارسال به دیگران
- 💾 **Backup / Restore** — ذخیره و بازیابی کامل اطلاعات پروژه
- 🖥️ **Windows App** — قابلیت Build به EXE بدون نیاز کاربران نهایی به Python یا Node.js

---

## 🚀 شروع سریع

### 1) نسخه Windows

به صفحه آخرین Release برو و فایل Setup را دانلود کن:

👉 **[Download Latest Release](https://github.com/mostafa5804/Pipeline-Control-Center/releases/latest)**

پس از نصب، برنامه مستقل اجرا می‌شود. Python و Node.js فقط برای توسعه و Build لازم هستند، نه برای کاربر نهایی.

### 2) نسخه HTML

Repository را Clone یا Download کن و `index.html` را اجرا کن. برای اجرای مطمئن‌تر می‌توانی از `run.bat` استفاده کنی.

> Basemapهای آنلاین به اینترنت وابسته‌اند. داده پروژه، مسیرها، جبهه‌ها، عوارض و تصاویر به‌صورت محلی روی دستگاه نگهداری می‌شوند.

---

## 🧭 روند کار

```text
KML / KMZ
   ↓
Preview مسیرها
   ↓
انتخاب همه / عدم انتخاب همه
   ↓
نام‌گذاری مسیرها
   ↓
ثبت جبهه‌ها و عوارض
   ↓
Timeline / کنترل توالی
   ↓
Meeting Mode
   ↓
Presentation HTML
```

---

## 🗺️ Import مسیر

برنامه با پروژه خالی شروع می‌شود و هیچ محور ثابتی داخل آن وجود ندارد.

هنگام Import:

1. فایل `KML` یا `KMZ` را انتخاب کن.
2. LineStringها و Stationهای قابل استفاده شناسایی می‌شوند.
3. مسیرهای پیشنهادی در Preview نمایش داده می‌شوند.
4. با **انتخاب همه / عدم انتخاب همه** مسیرهای موردنظر را سریع مشخص کن.
5. برای هر مسیر یک نام دلخواه تعیین کن.
6. مسیرها را به پروژه اضافه کن و ادامه بده.

می‌توانی بعداً فایل‌های دیگری هم اضافه کنی و پروژه را چندمسیره نگه داری.

---

## 📊 قابلیت‌های مدیریتی

| بخش | کاربرد |
|---|---|
| 🛣️ مسیرها | مدیریت چند محور، استایل، نمایش و نام‌گذاری |
| 🚧 جبهه‌ها | ثبت بازه اجرایی، Activity، وضعیت، تاریخ و عکس |
| 📌 عوارض | ثبت عارضه روی محور یا آزاد روی نقشه |
| 🕒 Timeline | بازسازی وضعیت پروژه تا تاریخ انتخابی |
| 🔗 Sequence | بررسی Backlog و مغایرت توالی فعالیت‌ها |
| 🎥 Meeting | نمایش مدیریتی بدون ابزارهای ویرایشی |
| 📤 Viewer | خروجی HTML فقط‌خواندنی و قابل ارسال |
| 💾 Data | Backup / Restore کامل پروژه |

---

## 🖥️ ساخت نسخه Windows

ساخت EXE با Electron انجام می‌شود.

### Build محلی

```bash
npm install
npm run dist:win
```

یا روی Windows:

```text
BUILD-EXE.bat
```

خروجی داخل پوشه `dist` قرار می‌گیرد.

### Build خودکار با GitHub Actions

Workflow داخل:

```text
.github/workflows/windows-build.yml
```

با هر Tag جدیدی که با **V بزرگ** شروع شود، Build و Release خودکار انجام می‌شود:

```bash
git tag V1.0.1
git push origin V1.0.1
```

GitHub Actions نسخه را از Tag استخراج می‌کند، Installer ویندوز را می‌سازد و EXE را در Release همان Tag قرار می‌دهد.

---

## 🔐 داده و حریم خصوصی

Pipeline Control Center به‌صورت **Local-first** طراحی شده است.

- اطلاعات پروژه روی دستگاه کاربر ذخیره می‌شود.
- برنامه برای ذخیره داده‌های پروژه به سرور مرکزی وابسته نیست.
- تصاویر و اطلاعات پروژه در Backup و Presentation HTML قابل انتقال هستند.
- فقط سرویس‌های Basemap آنلاین، در صورت انتخاب کاربر، نیاز به اینترنت دارند.

---

## 🧰 تکنولوژی‌ها

- HTML / CSS / JavaScript
- Leaflet
- IndexedDB
- JSZip
- Electron
- GitHub Actions
- Electron Builder

---

## 👤 سازنده

**Mostafa Erfani — مصطفی عرفانی**

[![GitHub](https://img.shields.io/badge/GitHub-mostafa5804-181717?style=flat-square&logo=github)](https://github.com/mostafa5804/Pipeline-Control-Center)

Repository:  
**https://github.com/mostafa5804/Pipeline-Control-Center**

---

## 🤝 مشارکت

Issue و Pull Request خوش‌آمد هستند. اگر Bug، ایده یا پیشنهاد بهبود داری:

- 🐞 [Open an Issue](https://github.com/mostafa5804/Pipeline-Control-Center/issues)
- 🍴 Fork the repository
- 🔧 Create a branch
- 📬 Submit a Pull Request

---

## 📄 License

این پروژه تحت مجوز **MIT License** منتشر می‌شود.

MIT اجازه استفاده، تغییر، توزیع و استفاده تجاری از پروژه را می‌دهد، به شرط حفظ متن مجوز و اعلان Copyright.

👉 [مشاهده LICENSE](LICENSE)

---

<div align="center">

### Pipeline Control Center

**From route geometry to project control.**

[⬇️ Latest Release](https://github.com/mostafa5804/Pipeline-Control-Center/releases/latest) ·
[⭐ Repository](https://github.com/mostafa5804/Pipeline-Control-Center)

</div>
