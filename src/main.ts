// Definitions, I suggest that you collapse them
// in your code editor

// example code:
//  لكل(دع ا = ٠؛ ا<=١٠٠٠؛ ا++){
//   لوحة.سجل("ا يوساوي: "، ا)؛
// }؛
const keywords = new Map([
  ['غير متزامن', 'async'],
  ['أكسر', 'break'],
  ['حالة', 'case'],
  ['أمسك', 'catch'],
  ['فئة', 'class'],
  ['ثابت', 'const'],
  ['كمل', 'continue'],
  ['مصلح', 'debugger'],
  ['معيار', 'default'],
  ['احذف', 'delete'],
  ['افعل', 'do'],
  ['وإلا', 'else'],
  ['متعدد', 'enum'],
  ['اصدر', 'export'],
  ['يمتد', 'extends'],
  ['زائف', 'false'],
  ['اخيرا', 'finally'],
  ['لكل', 'for'],
  ['دالة', 'function'],
  ['اذا', 'if'],
  ['استورد', 'import'],
  ['في', 'in'],
  ['مثل', 'instanceof'],
  ['دع', 'let'],
  ['اصنع', 'new'],
  ['باطل', 'null'],
  ['رجع', 'return'],
  ['والد', 'super'],
  ['قارن', 'switch'],
  ['هذا', 'this'],
  ['ارمي', 'throw'],
  ['صادق', 'true'],
  ['حاول', 'try'],
  ['نوع', 'typeof'],
  ['متغير', 'var'],
  ['فراغ', 'void'],
  ['بينما', 'while'],
  ['مع', 'with'],
  ['تمهل', 'yield'],
]);

const punctuation = new Map([
  ['}', '}'],
  ['{', '{'],
  [']', '['],
  ['[', ']'],
  [')', '('],
  ['(', ')'],
  ['.', '.'],
  ['؛', ';'],
  [';', ';'],
  ['،', ','],
  [',', ','],
  ['>', '>'],
  ['<', '<'],
  ['=', '='],
  ['!', '!'],
  ['+', '+'],
  ['+', '+'],
  ['-', '-'],
  ['*', '*'],
  ['*', '*'],
  ['/', '/'],
  ['\\', '\\'],
  ['٪', '%'],
  ['%', '%'],
  ['&', '&'],
  ['|', '|'],
  ['؟', '?'],
  ['?', '?'],
  ['^', '^'],
  [':', ':'],
  [':', ':'],
  ['±', '~'],
  ['~', '~'],
]);

const WebAPI = new Map([
  ['نافذة', 'window'],
  ['مغلق', 'closed'],
  ['لوحة', 'console'],
  ['اكد', 'assert'],
  ['امسح', 'clear'],
  ['عدد', 'count'],
  ['خطأ', 'error'],
  ['مجموعة', 'group'],
  ['مجموعة.مطوية', 'groupCollapsed'],
  ['مجموعة.انهي', 'groupEnd'],
  ['انبء', 'info'],
  ['سجل', 'log'],
  ['جدول', 'table'],
  ['وقت', 'time'],
  ['انهي.التوقيت', 'timeEnd'],
  ['تتبع', 'trace'],
  ['حذر', 'warn'],
  ['الوضع.افتراضي', 'defaultStatus'],
  ['صحيفة', 'document'],
  ['جزء.منتبة', 'activeElement'],
  ['ضيف.مستمع.لحدث', 'addEventListener'],
  ['تبنى.عقدة', 'adoptNode'],
  ['مراسي', 'anchors'],
  ['صغير', 'applet'],
  ['محدد.الموقع.الاساسي', 'baseURI'],
  ['نص', 'body'],
  ['اغلق', 'close'],
  ['بسكويت', 'cookie'],
  ['مجموعة.الترميز', 'characterSet'],
  ['انتج.ميزة', 'createAttribute'],
  ['انتج.تعليق', 'createComment'],
  ['انتج.شظية.صفحة', 'createDocumentFragment'],
  ['انتج.جزء', 'createElement'],
  ['انتج.حدث', 'createEvent'],
  ['انتج.عقدة.نصية', 'createTextNode'],
  ['منظر.افتراضي', 'defaultView'],
  ['صمم', 'designMode'],
  ['صفحة.نوع', 'doctype'],
  ['صفحة.جزء', 'documentElement'],
  ['صفحة.وضع', 'documentMode'],
  ['صفحة.محدد.الموقع', 'documentURI'],
  ['مجال', 'domain'],
  ['مضمنات', 'embeds'],
  ['نفذ.الاوامر', 'execCommand'],
  ['استمارات', 'forms'],
  ['شاشة.مملوء.جزء', 'fullscreenElement'],
  ['هل.شاشة.مملوء', 'fullscreenEnabled'],
  ['حصل.جزء.معرف', 'getElementById'],
  ['حصل.اجزاء.فئة', 'getElementsByClassName'],
  ['حصل.اجزاء.اسم', 'getElementsByName'],
  ['حصل.اجزاء.علامة', 'getElementsByTagName'],
  ['لديه.انتباه', 'hasFocus'],
  ['رأس', 'head'],
  ['صور', 'images'],
  ['التنفيذ', 'implementation'],
  ['استورد.عقدة', 'importNode'],
  ['ترميز.المدخلات', 'inputEncoding'],
  ['اخر.تعديل', 'lastModified'],
  ['روابط', 'links'],
  ['سطح', 'normalize'],
  ['سطح.صحيفة', 'normalizeDocument()'],
  ['افتح', 'open'],
  ['اطلب.محدد', 'querySelector'],
  ['اطلب.محدد.جميع', 'querySelectorAll'],
  ['الوضع.الحالي', 'readyState'],
  ['واسطة', 'referrer'],
  ['احذف.مستمع.حدث', 'removeEventListener'],
  ['اعد.تسمية.عقدة', 'renameNode'],
  ['نصوص', 'scripts'],
  ['فحص.صارم', 'strictErrorChecking'],
  ['عنوان', 'title'],
  ['محدد.الموقع', 'URL'],
  ['اكتب', 'write'],
  ['اكتب.سطر', 'writeLn'],
  ['اطار.جزء', 'frameElement'],
  ['اطارات', 'frames'],
  ['تاريخ', 'history'],
  ['طول', 'length'],
  ['عد', 'back'],
  ['تقدم', 'forward'],
  ['اذهب', 'go'],
  ['مدى.عامودي', 'innerHeight'],
  ['مدى.افقي', 'ّinnerWidth'],
  ['طول', 'length'],
  ['تخزين.محلي', 'localStorage'],
  ['موقع', 'location'],
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

const numbers = new Map([
  ['٠', 0],
  ['١', 1],
  ['٢', 2],
  ['٣', 3],
  ['٤', 4],
  ['٥', 5],
  ['٦', 6],
  ['٧', 7],
  ['٨', 8],
  ['٩', 9],
]);

interface Token {
  type: string;
  start: number;
  end: number;
  value: string;
}

// WebElements
let codeInput = document.querySelector('#code-area');
let runButton = document.querySelector('#run');

// Event Listeners
runButton.addEventListener('click', runCompiler);

// Event Handlers
function runCompiler() {
  codeInput = document.querySelector('#code-area');
  const runner = new Function(compile(codeInput.value));
  runner();
}

function compile(input: string) {
  const tokens: any = parser(input);
  console.time('Compiled code in');
  console.log('Compiling...');
  for (let i = 0; i < tokens.length; i++) {
    tokens[i] = tokens[i].value;
  }
  console.log(tokens.join(''));
  console.timeEnd('Compiled code in');
  return tokens.join('');
}

function parser(input: string): Token[] {
  let current = 0;
  let tokens: Token[] = [];

  while (current < input.length) {
    let char = input[current];
    //check paren
    if (char === '(' || char === ')') {
      tokens.push({
        type: 'paren',
        start: current,
        end: current,
        value: char,
      });
      current++;
      continue;
    }

    //check for punctuation
    if (punctuation.has(char)) {
      // 'punctuation', current, current, punctuation.get(char)
      tokens.push({
        type: 'punctuation',
        start: current,
        end: current,
        value: punctuation.get(char),
      });
      current++;
      continue;
    }

    // THIS LOOKS UGLY BUT AT LEAST IT WORKS
    // TODO: MAKE IT LOOK A BIT BETTER JEEZ
    const STRINGS = /'|"/;
    if (STRINGS.test(char)) {
      const startPoint = current,
        startIdentifier = char;
      console.log(startIdentifier);
      let value = '';
      do {
        char = input[++current];
        if (char === '"') break;
        value += char;
      } while (char !== startIdentifier);
      char = input[++current];
      // 'string', startPoint, current - 1, `"${value}"`
      tokens.push({
        type: 'string',
        start: startPoint,
        end: current - 1,
        value: `"${value}"`,
      });
      continue;
    }

    // check for whitespace
    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      tokens.push({
        type: 'whitespace',
        start: current,
        end: current,
        value: ' ',
      });
      current++;
      continue;
    }

    //Check for Numbers
    const NUMBERS = /[٠-٩0-9]/;
    if (NUMBERS.test(char)) {
      const startPoint = current;
      let value = '';

      while (NUMBERS.test(char)) {
        if (numbers.has(char)) value += numbers.get(char);
        char = input[++current];
      }
      // 'number', startPoint, current - 1, value
      tokens.push({
        type: 'number',
        start: startPoint,
        end: current - 1,
        value: value,
        // need to somehow change the value in arabic to english... I guess...
      });
      continue;
    }

    // Check for words
    const LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
    if (LETTERS.test(char)) {
      const startPoint = current;
      let value = '';

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
      if (keywords.has(value)) {
        tokens.push({
          type: 'keyword',
          start: startPoint,
          end: current - 1,
          value: keywords.get(value),
        });
        continue;
      }
      if (WebAPI.has(value)) {
        tokens.push({
          type: 'identifier',
          start: startPoint,
          end: current - 1,
          value: WebAPI.get(value),
        });
        continue;
      }
      tokens.push({
        type: 'name',
        start: startPoint,
        end: current - 1,
        value: value,
      });
      continue;
    }
    throw new TypeError(
      `I don't know what this is ${char} at position ${current}`
    );
  }
  return tokens;
}
