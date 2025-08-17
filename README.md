# 🔺 Triangle Visualizer

פרויקט ויזואליזציה של משולש עם חישוב זוויות - משימת מיון ל-SmileCloud

## 🚀 הרצת הפרויקט

```bash
# התקנת חבילות
npm install

# הרצה בסביבת פיתוח
npm start

# בניית גרסת production
npm build
```

הפרויקט ירוץ על [http://localhost:3000](http://localhost:3000)

## 📁 מבנה הפרויקט

```
triangle-visualizer/
├── src/
│   ├── components/          # React Components
│   │   ├── InputPage.tsx    # עמוד הקלט
│   │   ├── DisplayPage.tsx  # עמוד התצוגה
│   │   ├── TriangleCanvas.tsx # קנבס ה-SVG
│   │   └── AngleSummary.tsx # סיכום הזוויות
│   ├── utils/
│   │   └── mathUtils.ts     # פונקציות מתמטיות
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── App.tsx              # קומפוננטה ראשית
│   ├── index.tsx            # Entry point
│   └── index.css            # סגנונות ו-Tailwind
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠 טכנולוגיות

- **React 18** עם **TypeScript** - למבנה type-safe ומודרני
- **Tailwind CSS** - לעיצוב מהיר ומקצועי
- **SVG** - לגרפיקה וקטורית מדויקת
- **Lucide Icons** - לאייקונים מודרניים

## 📊 תשובות למשימה

### 1. באיזו שיטה השתמשתי לציור המשולש?

השתמשתי ב-**SVG (Scalable Vector Graphics)** עם React components מודולריות:

- **SVG polygon** - לציור המשולש עצמו
- **SVG path עם Arc commands** - לציור קשתות הזוויות
- **SVG circles ו-text** - לסימון הנקודות

**למה בחרתי בשיטה זו:**

- דיוק מתמטי מושלם בעבודה עם קואורדינטות
- ביצועים מעולים ורנדור חלק
- תמיכה מלאה באנימציות CSS
- קלות בהוספת אלמנטים גרפיים כמו grid ו-gradients

### 2. כיצד חישבתי את ערך הזוויות?

השתמשתי בשיטת **וקטורים ומכפלה סקלרית**:

```typescript
// יצירת וקטורים מהקודקוד לנקודות
const v1 = { x: p1.x - vertex.x, y: p1.y - vertex.y };
const v2 = { x: p2.x - vertex.x, y: p2.y - vertex.y };

// מכפלה סקלרית ודטרמיננטה
const dot = v1.x * v2.x + v1.y * v2.y;
const det = v1.x * v2.y - v1.y * v2.x;

// חישוב הזווית עם atan2
let angle = Math.atan2(det, dot) * (180 / Math.PI);
```

השיטה מדויקת ומטפלת נכון בכל סוגי הזוויות (חדות, קהות, ישרות).

### 3. מה היה מאתגר בתרגיל?

- **ארכיטקטורה מודולרית**: חלוקה נכונה לקומפוננטות עם separation of concerns
- **חישובי SVG מדויקים**: יצירת paths לקשתות עם הפרמטרים הנכונים
- **עיצוב UX/UI מרשים**: יצירת חוויית משתמש חלקה עם אנימציות ומשוב ויזואלי
- **TypeScript typing**: הגדרת interfaces נכונות לכל הנתונים

### 4. האם יש משהו שלא הצלחתי לפתור?

הפתרון מלא ועובד מצוין! הוספתי גם:

- ✅ ולידציה שהנקודות יוצרות משולש תקין
- ✅ אנימציות חלקות במעברים
- ✅ תצוגת סכום הזוויות (180°)
- ✅ עיצוב responsive

אם היה לי יותר זמן, הייתי מוסיף:

- תמיכה במובייל עם touch events
- אפשרות לגרור נקודות ב-canvas
- חישוב אורכי צלעות וסוג המשולש
- export ל-PNG/SVG

### 5. האם השתמשתי בעזרים חיצוניים?

**כן, השתמשתי ב:**

- **AI (Claude)** - לסיוע בארכיטקטורה, אופטימיזציה וbest practices
- **MDN Documentation** - לתיעוד SVG paths
- **React Docs** - לבדיקת Hooks ו-patterns
- **Tailwind Docs** - לעיצוב מהיר

**איך ה-AI עזר:**

- תכנון מבנה הפרויקט המודולרי
- אופטימיזציה של החישובים המתמטיים
- יצירת עיצוב מודרני ומרשים
- כתיבת קוד נקי עם TypeScript

## ✨ תכונות מיוחדות

- 🎨 **עיצוב מודרני** - UI מרשים עם gradients ואנימציות
- 🔢 **TypeScript** - Type safety וטעויות קומפילציה
- 📐 **דיוק מתמטי** - חישובים מדויקים עם וקטורים
- 🎯 **קוד מודולרי** - קומפוננטות נפרדות וutils
- ⚡ **ביצועים** - רנדור יעיל עם SVG
- 🛡️ **ולידציות** - בדיקת תקינות המשולש

## 👨‍💻 מחבר

פותח עבור משימת מיון ב-SmileCloud - Full-Stack Developer Position

---

**הערה:** הפרויקט פותח תוך שעה וחצי כנדרש במשימה, עם דגש על קוד איכותי, עיצוב מרשים וחשיבה טכנית מעמיקה.
