# Pipeline Control Center v1.0.1

## تغییرات اصلی

- Import مقاوم‌تر KML/KMZ؛ کنترل مقادیر null و KMLهای namespace‌دار.
- بازگردانی Stitch مسیرهای چندتکه و تشخیص گروه‌های 56 و 42 اینچ.
- اضافه شدن OpenFreeMap، MapTiler Satellite/Hybrid، NASA GIBS و Custom XYZ.
- Attribution و fallback امن‌تر برای Basemapهای آنلاین.
- جایگزینی لوگوی نهایی Pipeline Control Center در برنامه، README و آیکن Windows.
- پیش‌فرض پروژه‌های جدید: Esri Hybrid.

## نکته MapTiler
MapTiler Satellite/Hybrid به API Key نیاز دارد. کلید فقط در صورتی داخل Presentation Viewer قرار می‌گیرد که گزینه مربوطه را فعال کنید.

## نکته OpenFreeMap
OpenFreeMap بدون API Key است. برای جلوگیری از ناسازگاری با Rotation لایه Leaflet، هنگام انتخاب آن Bearing روی شمال صفر می‌شود.
