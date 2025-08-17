# 🔺 Triangle Visualizer

פרויקט ויזואליזציה של משולש עם חישוב זוויות - משימת מיון ל-SmileCloud

## 🌐 **צפייה ישירה באפליקציה**

### **[👉 לחצו כאן לצפייה באפליקציה](https://YOUR_USERNAME.github.io/triangle-visualizer-smilecloud)**

---

## 🚀 **הרצה מקומית (אופציונלי)**

אם ברצונכם להריץ את הפרויקט באופן מקומי:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/triangle-visualizer-smilecloud.git

# 2. Navigate to project
cd triangle-visualizer-smilecloud

# 3. Install dependencies
npm install

# 4. Start the application
npm start
```

האפליקציה תרוץ על [http://localhost:3000](http://localhost:3000)

---

## 📸 **תצוגה מקדימה**

![Triangle Visualizer Demo](./demo.png)

## ✨ **תכונות**

- ✅ **ממשק קלט אינטואיטיבי** - הזנת 3 נקודות עם ולידציה
- ✅ **ויזואליזציה מדויקת** - ציור המשולש ב-SVG
- ✅ **חישוב זוויות** - חישוב מתמטי מדויק עם וקטורים
- ✅ **עיצוב מודרני** - UI מרשים עם אנימציות
- ✅ **TypeScript** - Type safety וקוד איכותי

## 🛠 **טכנולוגיות**

- React 18 + TypeScript
- Tailwind CSS
- SVG Graphics
- Lucide Icons

## 📊 **תשובות למשימה**

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

---

## 👨‍💻 **מחבר**

פותח עבור משימת מיון ב-SmileCloud - Full-Stack Developer Position

**זמן פיתוח:** שעה וחצי (כנדרש במשימה)

---

💡 **הערה:** האפליקציה זמינה לצפייה ישירה בלינק למעלה, ללא צורך בהתקנה או הרצה מקומית.
