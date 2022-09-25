"use strict";(self.webpackChunkecommerce_app=self.webpackChunkecommerce_app||[]).push([[695],{56752:($,y,e)=>{e.r(y),e.d(y,{SettingsPage:()=>T,default:()=>Q});var t=e(53547),z=e(15482),B=e(97132),g=e(68547),I=e(22754),L=e.n(I),P=e(94117),k=e(40264),f=e(53575),A=e(33483),N=e(64459),x=e(80117),C=e(9524),u=e(39272),p=e(35395),G=e(9669),R=e.n(G),U=e(18446),F=e.n(U),n=e(50779);const H=a=>a;var j=e(8041),W=e(36968),X=e.n(W);const Z={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},J=(a,l)=>(0,j.default)(a,i=>{switch(l.type){case"CANCEL_CHANGES":{i.modifiedData=a.initialData;break}case"GET_DATA_SUCCEEDED":{i.isLoading=!1,i.initialData=l.data,i.modifiedData=l.data;break}case"ON_CHANGE":{X()(i,["modifiedData",...l.keys.split(".")],l.value);break}case"ON_SUBMIT":{i.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{i.initialData=a.modifiedData,i.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{i.isSubmiting=!1;break}default:return a}});var K=e(24442),D=e(25108),M=(a,l,i)=>new Promise((v,m)=>{var h=s=>{try{r(i.next(s))}catch(d){m(d)}},E=s=>{try{r(i.throw(s))}catch(d){m(d)}},r=s=>s.done?v(s.value):Promise.resolve(s.value).then(h,E);r((i=i.apply(a,l)).next())});const T=()=>{const{formatMessage:a}=(0,B.useIntl)(),{lockApp:l,unlockApp:i}=(0,g.useOverlayBlocker)(),v=(0,g.useNotification)();(0,g.useFocusWhenNavigate)();const[{initialData:m,isLoading:h,isSubmiting:E,modifiedData:r},s]=(0,t.useReducer)(J,Z,H),d=(0,t.useRef)(!0);(0,t.useEffect)(()=>{const c=R().CancelToken.source(),Y=()=>M(void 0,null,function*(){try{const{data:{data:b}}=yield n.be.get((0,n.IF)("settings"),{cancelToken:c.token});s({type:"GET_DATA_SUCCEEDED",data:b})}catch(b){D.error(b)}});return d.current&&Y(),()=>{c.cancel("Operation canceled by the user."),d.current=!1}},[]);const S=F()(m,r),V=o=>M(void 0,null,function*(){if(o.preventDefault(),!S){l(),s({type:"ON_SUBMIT"});try{yield n.be.put((0,n.IF)("settings"),r),s({type:"SUBMIT_SUCCEEDED"}),v({type:"success",message:{id:"notification.form.success.fields"}})}catch(c){D.error(c),s({type:"ON_SUBMIT_ERROR"})}i()}}),O=({target:{name:o,value:c}})=>{s({type:"ON_CHANGE",keys:o,value:c})};return t.createElement(x.Main,{tabIndex:-1},t.createElement(z.Helmet,{title:a({id:(0,n.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),t.createElement("form",{onSubmit:V},t.createElement(p.HeaderLayout,{title:a({id:(0,n.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:t.createElement(N.Button,{disabled:S,"data-testid":"save-button",loading:E,type:"submit",startIcon:t.createElement(L(),null),size:"L"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,n.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),t.createElement(p.ContentLayout,null,h?t.createElement(g.LoadingIndicatorPage,null):t.createElement(p.Layout,null,t.createElement(C.Stack,{spacing:12},t.createElement(P.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(C.Stack,{spacing:4},t.createElement(k.Flex,null,t.createElement(A.Typography,{variant:"delta",as:"h2"},a({id:(0,n.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),t.createElement(u.Grid,{gap:6},t.createElement(u.GridItem,{col:6,s:12},t.createElement(f.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:r.responsiveDimensions,hint:a({id:(0,n.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,n.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{O({target:{name:"responsiveDimensions",value:o.target.checked}})}})),t.createElement(u.GridItem,{col:6,s:12},t.createElement(f.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:r.sizeOptimization,hint:a({id:(0,n.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,n.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{O({target:{name:"sizeOptimization",value:o.target.checked}})}})),t.createElement(u.GridItem,{col:6,s:12},t.createElement(f.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:r.autoOrientation,hint:a({id:(0,n.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,n.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{O({target:{name:"autoOrientation",value:o.target.checked}})}}))))))))))},Q=()=>t.createElement(g.CheckPagePermissions,{permissions:K.Z.settings},t.createElement(T,null))}}]);