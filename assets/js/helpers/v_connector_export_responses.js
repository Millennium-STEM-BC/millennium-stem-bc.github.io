function a0_0x1b32(){const _0x5caa6f=['data','Error\x20fetching\x20data\x20from\x20Firestore:','2GcPXgb','4837506Ilrxwy','title','href','postal_code','click','description','collection','appendChild','firstname','1538055SrnLxm','exists','You\x20do\x20not\x20have\x20permission\x20to\x20access\x20this\x20page.','4120718BFnERs','5ohgwCf','forEach','url','city','map','isAdmin','1149552ZvHbLs','then','removeChild','join','type','email','uid','auth','street','csvURL','450314IwWcMg','organization','location','province','back','get','V_Connector_Contribute_Responses','14743926XNtKbJ','status','createElement','text/csv','lastname','firestore','body','129968LuQJJV'];a0_0x1b32=function(){return _0x5caa6f;};return a0_0x1b32();}const a0_0xadf0c9=a0_0x2388;function a0_0x2388(_0x2dedfe,_0x27837f){const _0x1b32ae=a0_0x1b32();return a0_0x2388=function(_0x2388fb,_0x2c35fa){_0x2388fb=_0x2388fb-0x1d4;let _0x555661=_0x1b32ae[_0x2388fb];return _0x555661;},a0_0x2388(_0x2dedfe,_0x27837f);}(function(_0x375594,_0x4ce8f7){const _0x4e2150=a0_0x2388,_0x474050=_0x375594();while(!![]){try{const _0x3e313a=-parseInt(_0x4e2150(0x1fb))/0x1*(-parseInt(_0x4e2150(0x1dd))/0x2)+parseInt(_0x4e2150(0x1e7))/0x3+-parseInt(_0x4e2150(0x1da))/0x4+-parseInt(_0x4e2150(0x1eb))/0x5*(-parseInt(_0x4e2150(0x1de))/0x6)+parseInt(_0x4e2150(0x1ea))/0x7+-parseInt(_0x4e2150(0x1f1))/0x8+-parseInt(_0x4e2150(0x202))/0x9;if(_0x3e313a===_0x4ce8f7)break;else _0x474050['push'](_0x474050['shift']());}catch(_0x12d236){_0x474050['push'](_0x474050['shift']());}}}(a0_0x1b32,0x84b24));let db=firebase[a0_0xadf0c9(0x1d8)](),auth=firebase[a0_0xadf0c9(0x1f8)]();async function fetchResponses(){const _0x3e11d9=a0_0xadf0c9;try{const _0x1bf228=await db['collection'](_0x3e11d9(0x201))['get'](),_0x2f4d5c=[_0x3e11d9(0x1ed),_0x3e11d9(0x1e6),'lastname','email',_0x3e11d9(0x1fc),_0x3e11d9(0x1df),_0x3e11d9(0x1d4),_0x3e11d9(0x1f5),_0x3e11d9(0x1e3),_0x3e11d9(0x1f9),_0x3e11d9(0x1ee),_0x3e11d9(0x1fe),'postal_code',_0x3e11d9(0x1fa)];let _0x364864=_0x2f4d5c[_0x3e11d9(0x1f4)](',')+'\x0a';return _0x1bf228[_0x3e11d9(0x1ec)](_0x1ff649=>{const _0x4f6e4e=_0x3e11d9,_0x3e16f7=_0x1ff649[_0x4f6e4e(0x1db)](),_0x1ef4eb=[_0x3e16f7[_0x4f6e4e(0x1ed)]||'',_0x3e16f7[_0x4f6e4e(0x1e6)]||'',_0x3e16f7[_0x4f6e4e(0x1d7)]||'',_0x3e16f7[_0x4f6e4e(0x1f6)]||'',_0x3e16f7[_0x4f6e4e(0x1fc)]||'',_0x3e16f7[_0x4f6e4e(0x1df)]||'',_0x3e16f7[_0x4f6e4e(0x1d4)]||'',_0x3e16f7[_0x4f6e4e(0x1f5)]||'',_0x3e16f7[_0x4f6e4e(0x1e3)]||'',_0x3e16f7[_0x4f6e4e(0x1f9)]||'',_0x3e16f7[_0x4f6e4e(0x1ee)]||'',_0x3e16f7[_0x4f6e4e(0x1fe)]||'',_0x3e16f7[_0x4f6e4e(0x1e1)]||'',_0x3e16f7[_0x4f6e4e(0x1fa)]||''][_0x4f6e4e(0x1ef)](_0x5f021f=>'\x22'+_0x5f021f+'\x22')[_0x4f6e4e(0x1f4)](',');_0x364864+=_0x1ef4eb+'\x0a';}),_0x364864;}catch(_0xcb19be){console['error'](_0x3e11d9(0x1dc),_0xcb19be);}}function downloadResponses(_0x5c650d,_0x597be8){const _0x45d42e=a0_0xadf0c9,_0x1bcdcf=new Blob([_0x5c650d],{'type':_0x45d42e(0x1d6)}),_0x5ca4b5=document[_0x45d42e(0x1d5)]('a');_0x5ca4b5[_0x45d42e(0x1e0)]=URL['createObjectURL'](_0x1bcdcf),_0x5ca4b5['download']=_0x597be8+'.csv',document[_0x45d42e(0x1d9)][_0x45d42e(0x1e5)](_0x5ca4b5),_0x5ca4b5[_0x45d42e(0x1e2)](),document[_0x45d42e(0x1d9)][_0x45d42e(0x1f3)](_0x5ca4b5);}window['onload']=async()=>{auth['onAuthStateChanged'](async _0x242802=>{const _0x20d130=a0_0x2388;_0x242802?db[_0x20d130(0x1e4)]('Users')['doc'](_0x242802[_0x20d130(0x1f7)])[_0x20d130(0x200)]()[_0x20d130(0x1f2)](async _0x229a37=>{const _0x562122=_0x20d130;if(_0x229a37[_0x562122(0x1e8)]){const _0x28ff1f=_0x229a37[_0x562122(0x1db)]();if(_0x28ff1f[_0x562122(0x1f0)]){const _0x1bd9c9=await fetchResponses();downloadResponses(_0x1bd9c9,'responses');}else alert(_0x562122(0x1e9)),window['history'][_0x562122(0x1ff)]();}}):window[_0x20d130(0x1fd)]='/signin.html?redirect=/helpers/v_connector_export_responses.html';});};