const a0_0x31f336=a0_0x2097;(function(_0x26274c,_0x460da8){const _0x29303e=a0_0x2097,_0x3a957c=_0x26274c();while(!![]){try{const _0x25a19c=-parseInt(_0x29303e(0x11d))/0x1*(-parseInt(_0x29303e(0x11b))/0x2)+-parseInt(_0x29303e(0x12a))/0x3*(-parseInt(_0x29303e(0x111))/0x4)+parseInt(_0x29303e(0x110))/0x5*(-parseInt(_0x29303e(0x119))/0x6)+-parseInt(_0x29303e(0x125))/0x7*(parseInt(_0x29303e(0x114))/0x8)+parseInt(_0x29303e(0x100))/0x9*(-parseInt(_0x29303e(0x10d))/0xa)+parseInt(_0x29303e(0x127))/0xb+parseInt(_0x29303e(0x115))/0xc*(parseInt(_0x29303e(0x123))/0xd);if(_0x25a19c===_0x460da8)break;else _0x3a957c['push'](_0x3a957c['shift']());}catch(_0x1057a3){_0x3a957c['push'](_0x3a957c['shift']());}}}(a0_0x3a01,0x48d17));let db=firebase['firestore'](),auth=firebase[a0_0x31f336(0x118)]();var url=new URL(window[a0_0x31f336(0xfc)][a0_0x31f336(0xfb)]),searchParams=new URLSearchParams(url[a0_0x31f336(0x104)]),redirectURL=searchParams[a0_0x31f336(0x122)](a0_0x31f336(0xfd));function signin(){const _0x2e1890=a0_0x31f336;let _0xc46383=document[_0x2e1890(0x129)](_0x2e1890(0x10a))['value'],_0x173d27=document[_0x2e1890(0x129)]('password')[_0x2e1890(0x11a)];auth[_0x2e1890(0x11c)](_0xc46383,_0x173d27)[_0x2e1890(0x101)](_0x3f6ac0=>{const _0xf2eff5=_0x2e1890;redirectURL!=null?window[_0xf2eff5(0xfc)]=redirectURL:window[_0xf2eff5(0xfc)]='/index.html';})[_0x2e1890(0xfa)](_0x349fdb=>{const _0x1ce421=_0x2e1890;console[_0x1ce421(0x10b)](_0x349fdb['code']);if(_0x349fdb[_0x1ce421(0x116)]===_0x1ce421(0x117))alert(_0x1ce421(0x10f)),console['error'](_0x1ce421(0x120),_0x349fdb);else _0x349fdb[_0x1ce421(0x116)]===_0x1ce421(0x121)||_0x349fdb[_0x1ce421(0x113)]['includes'](_0x1ce421(0x10e))?alert(_0x1ce421(0x109)):(alert(_0x349fdb),console[_0x1ce421(0x11e)](_0x349fdb));});}function signup(){const _0x38dd19=a0_0x31f336,_0xd54988=document['getElementById'](_0x38dd19(0x10a))[_0x38dd19(0x11a)],_0x2634d4=document[_0x38dd19(0x129)](_0x38dd19(0xfe))[_0x38dd19(0x11a)];auth['createUserWithEmailAndPassword'](_0xd54988,_0x2634d4)[_0x38dd19(0x101)](_0x184961=>{const _0x3c2d35=_0x38dd19,_0x403959=_0x184961['user'];_0x403959[_0x3c2d35(0x128)]()[_0x3c2d35(0x101)](()=>{const _0x5907db=_0x3c2d35;db['collection'](_0x5907db(0x108))[_0x5907db(0x12b)](_0x184961[_0x5907db(0x103)][_0x5907db(0x105)])[_0x5907db(0x102)]({'email':_0xd54988,'uid':_0x184961[_0x5907db(0x103)]['uid'],'isAdmin':![],'createdOn':firebase[_0x5907db(0x107)][_0x5907db(0xff)][_0x5907db(0x106)]()})[_0x5907db(0x101)](()=>{const _0x450752=_0x5907db;alert(_0x450752(0x124)),redirectURL!=null?window[_0x450752(0xfc)]=redirectURL:window[_0x450752(0xfc)]=_0x450752(0x112);})[_0x5907db(0xfa)](_0x46b8c6=>{const _0x1dd37d=_0x5907db;console[_0x1dd37d(0x11e)](_0x46b8c6);});});});}function signout(){const _0x3e709b=a0_0x31f336;auth['signOut']()[_0x3e709b(0x101)](()=>{const _0x1a0c8d=_0x3e709b;window[_0x1a0c8d(0xfc)]='/index.html';});}function a0_0x3a01(){const _0x38c4b8=['auth','120vpPfCR','value','164YoBUuY','signInWithEmailAndPassword','6719mDveIz','error','/signup.html','No\x20user\x20found\x20with\x20this\x20email.','auth/wrong-password','get','156RoBcQI','An\x20verification\x20link\x20has\x20been\x20sent\x20to\x20your\x20email.\x20Please\x20check\x20your\x20inbox\x20to\x20verify\x20your\x20account.','89033cvKMBP','/signin.html?redirect=','4253249IKXJYT','sendEmailVerification','getElementById','9mHaUvj','doc','catch','href','location','redirect','password','FieldValue','50850JiOxYV','then','set','user','search','uid','serverTimestamp','firestore','Users','Incorrect\x20credencials.\x20Please\x20try\x20again.','email','log','/signup.html?redirect=','450nwNHFu','INVALID_LOGIN_CREDENTIALS','No\x20user\x20found\x20associated\x20with\x20this\x20email.\x20Please\x20check\x20your\x20email\x20address\x20or\x20create\x20a\x20new\x20account.','50920ucgbdb','234008rScqrQ','/index.html','message','272ThhhQM','75516exLXvf','code','auth/user-not-found'];a0_0x3a01=function(){return _0x38c4b8;};return a0_0x3a01();}function a0_0x2097(_0x4bddbd,_0x5eb3a9){const _0x3a0194=a0_0x3a01();return a0_0x2097=function(_0x20971c,_0x1d44dd){_0x20971c=_0x20971c-0xfa;let _0x46bf14=_0x3a0194[_0x20971c];return _0x46bf14;},a0_0x2097(_0x4bddbd,_0x5eb3a9);}function redirectCreateAccount(){const _0x3de5f3=a0_0x31f336;redirectURL!=null?window[_0x3de5f3(0xfc)]=_0x3de5f3(0x10c)+redirectURL:window[_0x3de5f3(0xfc)]=_0x3de5f3(0x11f);}function redirectSignin(){const _0x3313e8=a0_0x31f336;redirectURL!=null?window[_0x3313e8(0xfc)]=_0x3313e8(0x126)+redirectURL:window[_0x3313e8(0xfc)]='/signin.html';}