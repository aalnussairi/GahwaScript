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
  ['استمارات', 'forms'],
  ['شاشة.مملوء.جزء', 'fullscreenElement'], //chained method
  ['هل.شاشة.مملوء', 'fullscreenEnabled'], //chained method
  // The above two are impossible to put in one word.
  // I'll need to rethink how I'm naming these identifiers.
  // Update: To resolve this, I'll create a partials Map
  // that identifies the first word of the joined words and
  // map them to the full words e.g.
  // If document found, if next word is get and the word
  // after that is element and after that id, it should
  // set the identifier as document.get.element.id to
  // document.getElementById(). In this file, I'll
  // add the complete identifier such as for e.g.
  // get.element.by.id and add a comment next
  // to it to make it clear that this is happening.
]);
