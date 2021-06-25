// https://www.w3schools.com/jsref/obj_window.asp
// MDN seems to have a more expansive set of references
// W3 will do for now as I already started with it.
// https://developer.mozilla.org/en-US/docs/Web/API
export default new Map([
  // Window
  // Window props
  ['نافذة', 'window'],
  ['مغلق', 'closed'],
  ['لوحة', 'console'],
  // Start console props and methods
  ['اكد', 'assert'],
  ['امسح', 'clear'],
  ['عدد', 'count'],
  ['خطأ', 'error'],
  ['مجموعة', 'group'], // chained method
  ['مجموعة.مطوية', 'groupCollapsed'], // chained method
  ['مجموعة.انهي', 'groupEnd'], // chained method
  ['انبء', 'info'],
  ['سجل', 'log'],
  ['جدول', 'table'],
  ['وقت', 'time'],
  ['انهي.التوقيت', 'timeEnd'], // chained method
  ['تتبع', 'trace'],
  ['حذر', 'warn'],
  // End Console props and methods
  ['الوضع.افتراضي', 'defaultStatus'], // chained prop
  ['صحيفة', 'document'],
  // Start Document props and methods
  ['جزء.منتبة', 'activeElement'], // chained prop
  ['ضيف.مستمع.لحدث', 'addEventListener'], // chained method
  ['تبنى.عقدة', 'adoptNode'], // chained method
  ['مراسي', 'anchors'],
  ['صغير', 'applet'],
  ['محدد.الموقع.الاساسي', 'baseURI'], // chained prop
  ['نص', 'body'],
  ['اغلق', 'close'],
  ['بسكويت', 'cookie'],
  ['مجموعة.الترميز', 'characterSet'], // chained prop
  ['انتج.ميزة', 'createAttribute'], // chained method
  ['انتج.تعليق', 'createComment'], // chained method
  ['انتج.شظية.صفحة', 'createDocumentFragment'], // chained method
  ['انتج.جزء', 'createElement'], // chained method
  ['انتج.حدث', 'createEvent'], // chained method
  ['انتج.عقدة.نصية', 'createTextNode'], // chained method
  ['منظر.افتراضي', 'defaultView'], // chained prop
  ['صمم', 'designMode'],
  ['صفحة.نوع', 'doctype'], // chained prop
  ['صفحة.جزء', 'documentElement'], // chained prop
  ['صفحة.وضع', 'documentMode'], // chained prop
  ['صفحة.محدد.الموقع', 'documentURI'], // chained prop
  ['مجال', 'domain'],
  ['مضمنات', 'embeds'],
  ['نفذ.الاوامر', 'execCommand'], // chained method
  ['استمارات', 'forms'], // review all above for the chained naming conv.
  ['شاشة.مملوء.جزء', 'fullscreenElement'], //chained prop
  ['هل.شاشة.مملوء', 'fullscreenEnabled'], //chained method
  ['حصل.جزء.معرف', 'getElementById'], //chained method
  ['حصل.اجزاء.فئة', 'getElementsByClassName'], //chained method
  ['حصل.اجزاء.اسم', 'getElementsByName'], // chained method
  ['حصل.اجزاء.علامة', 'getElementsByTagName'], // chained method
  ['لديه.انتباه', 'hasFocus'], // chained method
  ['رأس', 'head'],
  ['صور', 'images'],
  ['التنفيذ', 'implementation'],
  ['استورد.عقدة', 'importNode'], // chained method
  ['ترميز.المدخلات', 'inputEncoding'], //chained prop
  ['اخر.تعديل', 'lastModified'], // chained prop
  ['روابط', 'links'],
  ['سطح', 'normalize'],
  ['سطح.صحيفة', 'normalizeDocument()'], // chained method
  ['افتح', 'open'],
  ['اطلب.محدد', 'querySelector'], // chained method
  ['اطلب.محدد.جميع', 'querySelectorAll'], // chained method
  ['الوضع.الحالي', 'readyState'], //chained prop
  ['واسطة', 'referrer'],
  ['احذف.مستمع.حدث', 'removeEventListener'],
  ['اعد.تسمية.عقدة', 'renameNode'], // chained method
  ['نصوص', 'scripts'],
  ['فحص.صارم', 'strictErrorChecking'], //chained prop
  ['عنوان', 'title'],
  ['محدد.الموقع', 'URL'], // chained prop
  ['اكتب', 'write'],
  ['اكتب.سطر', 'writeLn'],
  // End document props and methods
  ['اطار.جزء', 'frameElement'],
  ['اطارات', 'frames'],
  ['تاريخ', 'history'],
  // Start history props and methods
  ['طول', 'length'],
  ['عد', 'back'],
  ['تقدم', 'forward'],
  ['اذهب', 'go'],
  // End history props and methods
  ['مدى.عامودي', 'innerHeight'],
  ['مدى.افقي', 'ّinnerWidth'],
  ['طول', 'length'],
  ['تخزين.محلي', 'localStorage'],
  ['موقع', 'location'],
  // Start location props and methods
  ['مرساة', 'hash'],
  ['مضيف', 'host'],
  ['مضيف.اسم', 'hostName'],
  ['رابط', 'href'],
  ['اصل', 'origin'],
  ['مسار.اسم', 'pathname'],
  ['منفذ', 'port'],
  ['بروتوكول', 'protocol'],
  ['ابحث', 'search'],
  ['عيين', 'assign'],
  ['اعد.تحميل', 'reload'],
  ['بدل', 'replace'],
]);
