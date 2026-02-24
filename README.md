# 📅 Appointment Booking System — نظام حجز المواعيد

> تطبيق ويب حديث لإدارة المواعيد، مبني بـ Next.js و MongoDB  
> A modern web application for managing appointments, built with Next.js and MongoDB.

---

## 🌐 نظرة عامة | Overview

**mldweb** هو تطبيق ويب متكامل يتيح للمستخدمين حجز المواعيد وعرضها وحذفها بكل سهولة. يعتمد على معمارية **Full-Stack** باستخدام Next.js App Router في الواجهة الأمامية، وMongoDB مع Mongoose في الخلفية.

**mldweb** is a full-stack web application that allows users to book, view, and delete appointments with ease. It leverages the **Next.js App Router** for the frontend and **MongoDB + Mongoose** for the backend.

---

## ✨ المميزات | Features

| الميزة | الوصف |
|--------|-------|
| 📝 **حجز المواعيد** | نموذج حجز سهل الاستخدام مع التحقق من صحة البيانات |
| 📋 **عرض المواعيد** | قائمة بجميع المواعيد المحجوزة مع تفاصيلها |
| 🗑️ **حذف المواعيد** | إمكانية حذف أي موعد مباشرة من القائمة |
| 🔔 **إشعارات فورية** | تنبيهات نجاح/فشل العمليات باستخدام react-hot-toast |
| 📱 **تصميم متجاوب** | يعمل على جميع الأجهزة (موبايل، تابلت، ديسكتوب) |
| 🌙 **الوضع الليلي** | دعم وضع الليل تلقائياً عبر CSS custom properties |
| 🔗 **RESTful API** | عمليات CRUD كاملة للمواعيد |

---

## 🛠️ التقنيات المستخدمة | Tech Stack

### Frontend
| التقنية | الإصدار | الاستخدام |
|---------|---------|----------|
| **Next.js** | 15.5.9 | إطار العمل الرئيسي + App Router |
| **React** | 19.1.0 | مكتبة واجهة المستخدم |
| **Tailwind CSS** | v4 | التنسيق والتصميم |
| **Lucide React** | ^0.545.0 | أيقونات UI |
| **React Icons** | ^5.5.0 | مكتبة أيقونات إضافية |
| **React Hot Toast** | ^2.6.0 | إشعارات المستخدم |
| **Axios** | ^1.12.2 | HTTP Client لاستدعاء الـ API |

### Backend
| التقنية | الإصدار | الاستخدام |
|---------|---------|----------|
| **MongoDB** | ^6.20.0 | قاعدة البيانات |
| **Mongoose** | ^8.19.1 | ODM لـ MongoDB |
| **Next.js API Routes** | — | نقاط نهاية الـ API (App Router) |

### Tools
- **Turbopack** — أداة بناء سريعة (تُستخدم في dev و build)
- **ESLint** — تحليل جودة الكود
- **dotenv** — إدارة متغيرات البيئة

---

## 📁 هيكل المشروع | Project Structure

```
mldweb/
├── public/
│   ├── undraw_articles_visl.svg     # رسم توضيحي للصفحة الرئيسية
│   ├── undraw_online-stats_50mk.svg # رسم توضيحي لصفحة About
│   └── backg.avif                   # خلفية صفحة الحجز
│
├── src/
│   ├── app/
│   │   ├── layout.js                # Layout الرئيسي (Header + Toaster)
│   │   ├── page.js                  # الصفحة الرئيسية (Home)
│   │   ├── globals.css              # الأنماط العامة + Tailwind
│   │   │
│   │   ├── about/
│   │   │   └── page.jsx             # صفحة "من نحن"
│   │   │
│   │   ├── book/
│   │   │   └── page.jsx             # صفحة الحجز
│   │   │
│   │   ├── Appointement/
│   │   │   └── page.jsx             # صفحة عرض وحذف المواعيد
│   │   │
│   │   ├── components/
│   │   │   ├── header.jsx           # رأس الصفحة (Navbar متجاوب)
│   │   │   ├── bookingForm.jsx      # نموذج الحجز
│   │   │   └── apoinmentsList.jsx   # قائمة المواعيد (مكوّن مساعد)
│   │   │
│   │   ├── api/
│   │   │   └── appointment/
│   │   │       └── route.js         # API: GET / POST / DELETE
│   │   │
│   │   ├── lib/
│   │   │   └── db.js                # اتصال MongoDB
│   │   │
│   │   └── models/
│   │       └── apoinment.js         # Mongoose Schema للمواعيد
│   │
│   └── models/
│       └── Appointment.js           # Re-export للاستخدام مع alias @/models
│
├── .env.local                       # متغيرات البيئة (غير مُتتبَّع)
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🗄️ نموذج البيانات | Data Model

### Appointment Schema

```javascript
{
  name:      String,   // required — اسم العميل
  email:     String,   // required — البريد الإلكتروني
  date:      String,   // required — تاريخ ووقت الموعد (datetime-local)
  note:      String,   // required — ملاحظات إضافية
  createdAt: Date,     // auto — تاريخ الإنشاء (timestamps)
  updatedAt: Date,     // auto — تاريخ آخر تعديل (timestamps)
}
```

---

## 🔌 نقاط نهاية API | API Endpoints

| الطريقة | المسار | الوصف |
|--------|--------|-------|
| `GET` | `/api/appointment` | جلب جميع المواعيد مرتبةً من الأحدث |
| `POST` | `/api/appointment` | إنشاء موعد جديد |
| `DELETE` | `/api/appointment?id={id}` | حذف موعد بواسطة ID |

### مثال على جسم طلب POST | POST Request Body Example

```json
{
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "date": "2026-03-15T10:30",
  "note": "First consultation visit"
}
```

### مثال على الاستجابة | Response Example

```json
{
  "_id": "665f1a2b3c4d5e6f7a8b9c0d",
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "date": "2026-03-15T10:30",
  "note": "First consultation visit",
  "createdAt": "2026-02-24T08:00:00.000Z",
  "updatedAt": "2026-02-24T08:00:00.000Z"
}
```

---

## 🚀 البدء السريع | Getting Started

### المتطلبات الأساسية | Prerequisites

- **Node.js** v18 أو أحدث
- **MongoDB** (محلي أو عبر MongoDB Atlas)
- **npm** أو **yarn**

### خطوات التثبيت | Installation Steps

#### 1️⃣ استنساخ المستودع | Clone the Repository

```bash
git clone https://github.com/Mldrasd1/mldweb.git
cd mldweb
```

#### 2️⃣ تثبيت التبعيات | Install Dependencies

```bash
npm install
```

#### 3️⃣ إعداد متغيرات البيئة | Configure Environment Variables

أنشئ ملف `.env.local` في جذر المشروع:

```env
MONGODBURI=your_mongodb_connection_string
```

> **مثال مع MongoDB Atlas:**
> ```env
> MONGODBURI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/mldweb?retryWrites=true&w=majority
> ```

#### 4️⃣ تشغيل خادم التطوير | Run Development Server

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

---

## 📜 الأوامر المتاحة | Available Scripts

```bash
npm run dev      # تشغيل خادم التطوير مع Turbopack
npm run build    # بناء نسخة الإنتاج مع Turbopack
npm start        # تشغيل خادم الإنتاج
npm run lint     # فحص جودة الكود بـ ESLint
```

---

## 📄 الصفحات | Pages

| المسار | الوصف |
|--------|-------|
| `/` | الصفحة الرئيسية — ترحيب + زر البدء |
| `/book` | نموذج حجز موعد جديد |
| `/Appointement` | قائمة جميع المواعيد مع إمكانية الحذف |
| `/about` | صفحة التعريف بالتطبيق والفريق |

---

## 🤝 المساهمة | Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

--

---

Made  by Mldrasd1
