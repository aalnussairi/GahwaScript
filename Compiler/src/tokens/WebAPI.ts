// https://www.w3schools.com/jsref/obj_window.asp
export default new Map([
  ['نافذة', 'window'],
  ['مغلق', 'closed'],
  ['لوحة', 'console'],
  // Start console props and methods
  ['اكد', 'assert'],
  ['امسح', 'clear'],
  ['عدد', 'count'],
  ['خطأ', 'error'],
  ['جمع', 'group'],
  ['أطوي', 'groupCollapsed'],
  ['قسم', 'groupEnd'],
  ['انبء', 'info'],
  ['سجل', 'log'],
  ['جدول', 'table'],
  ['وقت', 'time'],
  ['انهي', 'timeEnd'],
  ['تتبع', 'trace'],
  ['حذر', 'warn'],
  // End Console props and methods
  ['الوضع', 'defaultStatus'],
  ['صحيفة', 'document'],
  // Start Document props and methods
  ['المركز', 'activeElement'],
  ['اسمع', 'addEventListener'],
  ['تبنى', 'adoptNode'],
  ['مراسي', 'anchors'],
  ['صغير', 'applet'],
  ['الاساسي', 'baseURI'],
  ['نص', 'body'],
  ['اغلق', 'close'],
  ['بسكويت', 'cookie'],
  ['ترميز', 'characterSet'],
  ['ميزة', 'createAttribute'],
  ['تعليق', 'createComment'],
  ['شظية', 'createDocumentFragment'],
  ['جزء', 'createElement'],
  ['حدث', 'createEvent'],
  ['كاتب', 'createTextNode'],
  // TODO: The one above is tough...
  // Maybe GahwaScript should breakdown
  // PascalCase and camelCase stuff in
  // english into multiple identifiers
  // separated by dots in arabic? like
  // window.document.get.element.id ???
  // I think this may be of use at it
  // can highlight to learners that
  // U can camelCase stuff in code
  ['المظهر', 'defaultView'],
  ['صمم', 'designMode'],
  ['نوع', 'doctype'],
  ['قارئ', 'documentElement'],
  ['مراسل', 'documentMode'], // See this one is dumb
  ['نادل', 'documentURI'], // same here
  ['مجال', 'domain'],
  ['مضمنات', 'embeds'],
  ['نفذ', 'execCommand'],
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
]);
