// webInterface
var run = document
    .getElementById('run')
    .addEventListener('click', runCompiler);
function runCompiler() {
    console.log('Hello World');
    var input = document.getElementById('code-area').nodeValue.toString();
    console.log(input);
    console.log(compiler(input));
    var func = new Function(compiler(input));
    func();
}

// Compiler
function compiler (input) {
  var parser = new Parser();
  var transformed = parser.parse(input);
  var output = [];
  for (var i = 0; i < transformed.length; i++) {
      output.push(transformed[i].value);
  }
  var expressions = output.join('');
  return expressions;
}


//parser
var Parser = (function () {
  function Parser() {
      this.input = '';
      this.tokeizer = new Tokenizer(this.input);
  }
  Parser.prototype.parse = function (input) {
      this.input = input;
      this.tokeizer.tokenize();
      return this.tokeizer.getOutput();
  };
  return Parser;
}());

var Tokenizer = (function () {
  function Tokenizer(input) {
      this.input = input;
      this.output = [];
      this.tokens = [];
  }
  Tokenizer.prototype.getOutput = function () {
      return this.output;
  };
  Tokenizer.prototype.tokenize = function () {
      var current = 0;
      while (current < this.input.length) {
          var char = this.input[current];
          if (char === '(' || char === ')') {
              this.tokens.push({
                  type: 'paren',
                  start: current,
                  end: current,
                  value: char
              });
              current++;
              continue;
          }
          if (punctuators.has(char)) {
              this.tokensPush('punctuation', current, current, punctuators.get(char));
              current++;
              continue;
          }
          var STRINGS = /'|"/;
          if (STRINGS.test(char)) {
              var startPoint = current, startIdentifier = char;
              console.log(startIdentifier);
              var value = '';
              do {
                  char = this.input[++current];
                  if (char === '"')
                      break;
                  value += char;
              } while (char !== startIdentifier);
              char = this.input[++current];
              this.tokensPush('string', startPoint, current - 1, "\"" + value + "\"");
              continue;
          }
          var WHITESPACE = /\s/;
          if (WHITESPACE.test(char)) {
              current++;
              continue;
          }
          var NUMBERS = /[٠-٩0-9]/;
          if (NUMBERS.test(char)) {
              var startPoint = current;
              var value = '';
              while (NUMBERS.test(char)) {
                  value += char;
                  char = this.input[++current];
              }
              this.tokensPush('number', startPoint, current - 1, value);
              continue;
          }
          var LETTERS = /^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;
          if (LETTERS.test(char)) {
              var startPoint = current;
              var value = '';
              while (LETTERS.test(char)) {
                  value += char;
                  char = this.input[++current];
              }
              if (identifiers.has(value)) {
                  this.tokensPush('keyword', startPoint, current - 1, identifiers.get(value));
                  continue;
              }
              if (WebAPI.has(value)) {
                  this.tokensPush('identifier', startPoint, current - 1, WebAPI.get(value));
                  continue;
              }
              this.tokensPush('name', startPoint, current - 1, value);
              continue;
          }
          throw new TypeError("I don't know what this is " + char + " at position " + current);
      }
      this.output = this.tokens;
  };
  Tokenizer.prototype.tokensPush = function (type, start, end, value) {
      this.tokens.push({
          type: type,
          start: start,
          end: end,
          value: value
      });
  };
  return Tokenizer;
}());

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
  ['}', '{'],
  ['{', '}'],
  [']', '['],
  ['[', ']'],
  [')', '('],
  ['(', ')'],
  ['.', '.'],
  ['؛', ';'],
  [';', ';'],
  ['،', ','],
  [',', ','],
  ['>', '<'],
  ['<', '>'],
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
