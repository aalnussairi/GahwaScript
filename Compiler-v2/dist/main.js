(()=>{var e=new Map([["غير متزامن","async"],["أكسر","break"],["حالة","case"],["أمسك","catch"],["فئة","class"],["ثابت","const"],["كمل","continue"],["مصلح","debugger"],["معيار","default"],["احذف","delete"],["افعل","do"],["وإلا","else"],["متعدد","enum"],["اصدر","export"],["يمتد","extends"],["زائف","false"],["اخيرا","finally"],["لكل","for"],["دالة","function"],["اذا","if"],["استورد","import"],["في","in"],["مثل","instanceof"],["دع","let"],["اصنع","new"],["باطل","null"],["رجع","return"],["والد","super"],["قارن","switch"],["هذا","this"],["ارمي","throw"],["صادق","true"],["حاول","try"],["نوع","typeof"],["متغير","var"],["فراغ","void"],["بينما","while"],["مع","with"],["تمهل","yield"]]),t=new Map([["}","{"],["{","}"],["]","["],["[","]"],[")","("],["(",")"],[".","."],["؛",";"],[";",";"],["،",","],[",",","],[">","<"],["<",">"],["=","="],["!","!"],["+","+"],["+","+"],["-","-"],["*","*"],["*","*"],["/","/"],["\\","\\"],["٪","%"],["%","%"],["&","&"],["|","|"],["؟","?"],["?","?"],["^","^"],[":",":"],[":",":"],["±","~"],["~","~"]]),n=new Map([["نافذة","window"],["مغلق","closed"],["لوحة","console"],["اكد","assert"],["امسح","clear"],["عدد","count"],["خطأ","error"],["مجموعة","group"],["مجموعة.مطوية","groupCollapsed"],["مجموعة.انهي","groupEnd"],["انبء","info"],["سجل","log"],["جدول","table"],["وقت","time"],["انهي.التوقيت","timeEnd"],["تتبع","trace"],["حذر","warn"],["الوضع.افتراضي","defaultStatus"],["صحيفة","document"],["جزء.منتبة","activeElement"],["ضيف.مستمع.لحدث","addEventListener"],["تبنى.عقدة","adoptNode"],["مراسي","anchors"],["صغير","applet"],["محدد.الموقع.الاساسي","baseURI"],["نص","body"],["اغلق","close"],["بسكويت","cookie"],["مجموعة.الترميز","characterSet"],["انتج.ميزة","createAttribute"],["انتج.تعليق","createComment"],["انتج.شظية.صفحة","createDocumentFragment"],["انتج.جزء","createElement"],["انتج.حدث","createEvent"],["انتج.عقدة.نصية","createTextNode"],["منظر.افتراضي","defaultView"],["صمم","designMode"],["صفحة.نوع","doctype"],["صفحة.جزء","documentElement"],["صفحة.وضع","documentMode"],["صفحة.محدد.الموقع","documentURI"],["مجال","domain"],["مضمنات","embeds"],["نفذ.الاوامر","execCommand"],["استمارات","forms"],["شاشة.مملوء.جزء","fullscreenElement"],["هل.شاشة.مملوء","fullscreenEnabled"],["حصل.جزء.معرف","getElementById"],["حصل.اجزاء.فئة","getElementsByClassName"],["حصل.اجزاء.اسم","getElementsByName"],["حصل.اجزاء.علامة","getElementsByTagName"],["لديه.انتباه","hasFocus"],["رأس","head"],["صور","images"],["التنفيذ","implementation"],["استورد.عقدة","importNode"],["ترميز.المدخلات","inputEncoding"],["اخر.تعديل","lastModified"],["روابط","links"],["سطح","normalize"],["سطح.صحيفة","normalizeDocument()"],["افتح","open"],["اطلب.محدد","querySelector"],["اطلب.محدد.جميع","querySelectorAll"],["الوضع.الحالي","readyState"],["واسطة","referrer"],["احذف.مستمع.حدث","removeEventListener"],["اعد.تسمية.عقدة","renameNode"],["نصوص","scripts"],["فحص.صارم","strictErrorChecking"],["عنوان","title"],["محدد.الموقع","URL"],["اكتب","write"],["اكتب.سطر","writeLn"],["اطار.جزء","frameElement"],["اطارات","frames"],["تاريخ","history"],["طول","length"],["عد","back"],["تقدم","forward"],["اذهب","go"],["مدى.عامودي","innerHeight"],["مدى.افقي","ّinnerWidth"],["طول","length"],["تخزين.محلي","localStorage"],["موقع","location"],["مرساة","hash"],["مضيف","host"],["مضيف.اسم","hostName"],["رابط","href"],["اصل","origin"],["مسار.اسم","pathname"],["منفذ","port"],["بروتوكول","protocol"],["ابحث","search"],["عيين","assign"],["اعد.تحميل","reload"],["بدل","replace"]]),r=document.querySelector("#code-area");document.querySelector("#run").addEventListener("click",(function(){console.log("Detected a click of the run button"),r=document.querySelector("#code-area"),new Function(function(r){for(var o=function(r){for(var o=0,a=[];o<r.length;){var s=r[o];if("("!==s&&")"!==s)if(t.has(s))a.push({type:"punctuation",start:o,end:o,value:t.get(s)}),o++;else if(/'|"/.test(s)){var l=o,i=s;console.log(i);var c="";do{if('"'===(s=r[++o]))break;c+=s}while(s!==i);s=r[++o],a.push({type:"string",start:l,end:o-1,value:'"'+c+'"'})}else if(/\s/.test(s))o++;else{var u=/[٠-٩0-9]/;if(u.test(s)){for(l=o,c="";u.test(s);)c+=s,s=r[++o];a.push({type:"number",start:l,end:o-1,value:c})}else{var d=/^[ء-ي$_]+([ء-ي٠-٩0-9$ـ]*)$/;if(!d.test(s))throw new TypeError("I don't know what this is "+s+" at position "+o);for(l=o,c="";d.test(s);)c+=s,s=r[++o];if(e.has(c)){a.push({type:"keyword",start:l,end:o-1,value:e.get(c)});continue}if(n.has(c)){a.push({type:"identifier",start:l,end:o-1,value:n.get(c)});continue}a.push({type:"name",start:l,end:o-1,value:c})}}else a.push({type:"paren",start:o,end:o,value:s}),o++}return a}(r),a=0;a<o.length;a++)o[a]=o[a].value;return console.log(o.join("")),o.join("")}(r.value))()}))})();