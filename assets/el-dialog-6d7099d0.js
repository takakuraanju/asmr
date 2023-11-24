import{ah as we,D as P,a0 as me,E as Z,k as q,o as b,l as L,e as A,K as R,n as g,f as e,t as Q,d as _,b as w,c as S,W as Fe,s as C,m as ae,O as ve,G as I,r as V,v as ge,R as _e,a7 as x,al as ee,S as Le,a3 as Se,a4 as Pe,T as ye,B as W,C as $,am as F,F as Te,V as Ue,ai as be,q as N,an as De,Z as Oe,z as te,X as ne,ao as Ae,w as re,ab as Be,ae as je}from"./index-4ba2d79a.js";import{g as Me,h as qe,u as Ie,i as Ne,j as Ke,k as ze,l as He,m as Ge}from"./el-message-box-d55c5d39.js";import{E as M,_ as K,a7 as Ve,i as se,a8 as We,a9 as Xe,aa as Je,r as Ye,G as Ze,$ as Qe,ab as xe}from"./index-e8ef4e39.js";import{F as et,a as tt}from"./el-popper-f23d2298.js";import{u as ie}from"./index-42d2b847.js";import{E as st}from"./el-progress-426765e3.js";import{t as le,i as he,d as ot}from"./error-f1912ce6.js";import{c as X}from"./el-button-30e4aac0.js";import{b as at}from"./el-message-7996c4bf.js";import{i as lt}from"./el-card-f7e299f0.js";import{c as nt}from"./request-4c50beb0.js";var rt=1,it=4;function ue(o){return at(o,rt|it)}const ut=(...o)=>l=>{o.forEach(t=>{we(t)?t(l):t.value=l})},ke=Symbol("dialogInjectionKey"),dt=["aria-label"],ct=["id"],pt=P({name:"ElDialogContent"}),ft=P({...pt,props:Me,emits:qe,setup(o){const l=o,{t}=me(),{Close:r}=Ve,{dialogRef:d,headerRef:p,bodyId:f,ns:v,style:E}=Z(ke),{focusTrapRef:u}=Z(et),k=q(()=>[v.b(),v.is("fullscreen",l.fullscreen),v.is("draggable",l.draggable),v.is("align-center",l.alignCenter),{[v.m("center")]:l.center},l.customClass]),m=ut(u,d),a=q(()=>l.draggable);return Ie(d,p,a),(n,s)=>(b(),L("div",{ref:e(m),class:g(e(k)),style:ae(e(E)),tabindex:"-1"},[A("header",{ref_key:"headerRef",ref:p,class:g(e(v).e("header"))},[R(n.$slots,"header",{},()=>[A("span",{role:"heading",class:g(e(v).e("title"))},Q(n.title),3)]),n.showClose?(b(),L("button",{key:0,"aria-label":e(t)("el.dialog.close"),class:g(e(v).e("headerbtn")),type:"button",onClick:s[0]||(s[0]=c=>n.$emit("close"))},[_(e(M),{class:g(e(v).e("close"))},{default:w(()=>[(b(),S(Fe(n.closeIcon||e(r))))]),_:1},8,["class"])],10,dt)):C("v-if",!0)],2),A("div",{id:e(f),class:g(e(v).e("body"))},[R(n.$slots,"default")],10,ct),n.$slots.footer?(b(),L("footer",{key:0,class:g(e(v).e("footer"))},[R(n.$slots,"footer")],2)):C("v-if",!0)],6))}});var mt=K(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const vt=["aria-label","aria-labelledby","aria-describedby"],gt=P({name:"ElDialog",inheritAttrs:!1}),yt=P({...gt,props:Ne,emits:Ke,setup(o,{expose:l}){const t=o,r=ve();ie({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},q(()=>!!r.title)),ie({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},q(()=>!!t.customClass));const d=I("dialog"),p=V(),f=V(),v=V(),{visible:E,titleId:u,bodyId:k,style:m,overlayDialogStyle:a,rendered:n,zIndex:s,afterEnter:c,afterLeave:y,beforeLeave:i,handleClose:U,onModalClick:T,onOpenAutoFocus:z,onCloseAutoFocus:H,onCloseRequested:j,onFocusoutPrevented:J}=ze(t,p);ge(ke,{dialogRef:p,headerRef:f,bodyId:k,ns:d,rendered:n,style:m});const B=Ge(T),Y=q(()=>t.draggable&&!t.fullscreen);return l({visible:E,dialogContentRef:v}),(h,D)=>(b(),S(Pe,{to:"body",disabled:!h.appendToBody},[_(Se,{name:"dialog-fade",onAfterEnter:e(c),onAfterLeave:e(y),onBeforeLeave:e(i),persisted:""},{default:w(()=>[_e(_(e(He),{"custom-mask-event":"",mask:h.modal,"overlay-class":h.modalClass,"z-index":e(s)},{default:w(()=>[A("div",{role:"dialog","aria-modal":"true","aria-label":h.title||void 0,"aria-labelledby":h.title?void 0:e(u),"aria-describedby":e(k),class:g(`${e(d).namespace.value}-overlay-dialog`),style:ae(e(a)),onClick:D[0]||(D[0]=(...O)=>e(B).onClick&&e(B).onClick(...O)),onMousedown:D[1]||(D[1]=(...O)=>e(B).onMousedown&&e(B).onMousedown(...O)),onMouseup:D[2]||(D[2]=(...O)=>e(B).onMouseup&&e(B).onMouseup(...O))},[_(e(tt),{loop:"",trapped:e(E),"focus-start-el":"container",onFocusAfterTrapped:e(z),onFocusAfterReleased:e(H),onFocusoutPrevented:e(J),onReleaseRequested:e(j)},{default:w(()=>[e(n)?(b(),S(mt,x({key:0,ref_key:"dialogContentRef",ref:v},h.$attrs,{"custom-class":h.customClass,center:h.center,"align-center":h.alignCenter,"close-icon":h.closeIcon,draggable:e(Y),fullscreen:h.fullscreen,"show-close":h.showClose,title:h.title,onClose:e(U)}),ee({header:w(()=>[h.$slots.title?R(h.$slots,"title",{key:1}):R(h.$slots,"header",{key:0,close:e(U),titleId:e(u),titleClass:e(d).e("title")})]),default:w(()=>[R(h.$slots,"default")]),_:2},[h.$slots.footer?{name:"footer",fn:w(()=>[R(h.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):C("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,vt)]),_:3},8,["mask","overlay-class","z-index"]),[[Le,e(E)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var bt=K(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const is=ye(bt),Ce=Symbol("uploadContextKey"),ht="ElUpload";class kt extends Error{constructor(l,t,r,d){super(l),this.name="UploadAjaxError",this.status=t,this.method=r,this.url=d}}function de(o,l,t){let r;return t.response?r=`${t.response.error||t.response}`:t.responseText?r=`${t.responseText}`:r=`fail to ${l.method} ${o} ${t.status}`,new kt(r,t.status,l.method,o)}function Ct(o){const l=o.responseText||o.response;if(!l)return l;try{return JSON.parse(l)}catch{return l}}const Et=o=>{typeof XMLHttpRequest>"u"&&le(ht,"XMLHttpRequest is undefined");const l=new XMLHttpRequest,t=o.action;l.upload&&l.upload.addEventListener("progress",p=>{const f=p;f.percent=p.total>0?p.loaded/p.total*100:0,o.onProgress(f)});const r=new FormData;if(o.data)for(const[p,f]of Object.entries(o.data))Array.isArray(f)?r.append(p,...f):r.append(p,f);r.append(o.filename,o.file,o.file.name),l.addEventListener("error",()=>{o.onError(de(t,o,l))}),l.addEventListener("load",()=>{if(l.status<200||l.status>=300)return o.onError(de(t,o,l));o.onSuccess(Ct(l))}),l.open(o.method,t,!0),o.withCredentials&&"withCredentials"in l&&(l.withCredentials=!0);const d=o.headers||{};if(d instanceof Headers)d.forEach((p,f)=>l.setRequestHeader(f,p));else for(const[p,f]of Object.entries(d))he(f)||l.setRequestHeader(p,String(f));return l.send(r),l},Ee=["text","picture","picture-card"];let $t=1;const oe=()=>Date.now()+$t++,$e=W({action:{type:String,default:"#"},headers:{type:$(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>se({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:$(Array),default:()=>se([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:Ee,default:"text"},httpRequest:{type:$(Function),default:Et},disabled:Boolean,limit:Number}),Rt=W({...$e,beforeUpload:{type:$(Function),default:F},beforeRemove:{type:$(Function)},onRemove:{type:$(Function),default:F},onChange:{type:$(Function),default:F},onPreview:{type:$(Function),default:F},onSuccess:{type:$(Function),default:F},onProgress:{type:$(Function),default:F},onError:{type:$(Function),default:F},onExceed:{type:$(Function),default:F}}),wt=W({files:{type:$(Array),default:()=>se([])},disabled:{type:Boolean,default:!1},handlePreview:{type:$(Function),default:F},listType:{type:String,values:Ee,default:"text"}}),Ft={remove:o=>!!o},_t=["onKeydown"],Lt=["src"],St=["onClick"],Pt=["title"],Tt=["onClick"],Ut=["onClick"],Dt=P({name:"ElUploadList"}),Ot=P({...Dt,props:wt,emits:Ft,setup(o,{emit:l}){const{t}=me(),r=I("upload"),d=I("icon"),p=I("list"),f=X(),v=V(!1),E=u=>{l("remove",u)};return(u,k)=>(b(),S(De,{tag:"ul",class:g([e(r).b("list"),e(r).bm("list",u.listType),e(r).is("disabled",e(f))]),name:e(p).b()},{default:w(()=>[(b(!0),L(Te,null,Ue(u.files,m=>(b(),L("li",{key:m.uid||m.name,class:g([e(r).be("list","item"),e(r).is(m.status),{focusing:v.value}]),tabindex:"0",onKeydown:be(a=>!e(f)&&E(m),["delete"]),onFocus:k[0]||(k[0]=a=>v.value=!0),onBlur:k[1]||(k[1]=a=>v.value=!1),onClick:k[2]||(k[2]=a=>v.value=!1)},[R(u.$slots,"default",{file:m},()=>[u.listType==="picture"||m.status!=="uploading"&&u.listType==="picture-card"?(b(),L("img",{key:0,class:g(e(r).be("list","item-thumbnail")),src:m.url,alt:""},null,10,Lt)):C("v-if",!0),m.status==="uploading"||u.listType!=="picture-card"?(b(),L("div",{key:1,class:g(e(r).be("list","item-info"))},[A("a",{class:g(e(r).be("list","item-name")),onClick:N(a=>u.handlePreview(m),["prevent"])},[_(e(M),{class:g(e(d).m("document"))},{default:w(()=>[_(e(We))]),_:1},8,["class"]),A("span",{class:g(e(r).be("list","item-file-name")),title:m.name},Q(m.name),11,Pt)],10,St),m.status==="uploading"?(b(),S(e(st),{key:0,type:u.listType==="picture-card"?"circle":"line","stroke-width":u.listType==="picture-card"?6:2,percentage:Number(m.percentage),style:ae(u.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):C("v-if",!0)],2)):C("v-if",!0),A("label",{class:g(e(r).be("list","item-status-label"))},[u.listType==="text"?(b(),S(e(M),{key:0,class:g([e(d).m("upload-success"),e(d).m("circle-check")])},{default:w(()=>[_(e(Xe))]),_:1},8,["class"])):["picture-card","picture"].includes(u.listType)?(b(),S(e(M),{key:1,class:g([e(d).m("upload-success"),e(d).m("check")])},{default:w(()=>[_(e(Je))]),_:1},8,["class"])):C("v-if",!0)],2),e(f)?C("v-if",!0):(b(),S(e(M),{key:2,class:g(e(d).m("close")),onClick:a=>E(m)},{default:w(()=>[_(e(Ye))]),_:2},1032,["class","onClick"])),C(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),C(" This is a bug which needs to be fixed "),C(" TODO: Fix the incorrect navigation interaction "),e(f)?C("v-if",!0):(b(),L("i",{key:3,class:g(e(d).m("close-tip"))},Q(e(t)("el.upload.deleteTip")),3)),u.listType==="picture-card"?(b(),L("span",{key:4,class:g(e(r).be("list","item-actions"))},[A("span",{class:g(e(r).be("list","item-preview")),onClick:a=>u.handlePreview(m)},[_(e(M),{class:g(e(d).m("zoom-in"))},{default:w(()=>[_(e(Ze))]),_:1},8,["class"])],10,Tt),e(f)?C("v-if",!0):(b(),L("span",{key:0,class:g(e(r).be("list","item-delete")),onClick:a=>E(m)},[_(e(M),{class:g(e(d).m("delete"))},{default:w(()=>[_(e(Qe))]),_:1},8,["class"])],10,Ut))],2)):C("v-if",!0)])],42,_t))),128)),R(u.$slots,"append")]),_:3},8,["class","name"]))}});var ce=K(Ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const At=W({disabled:{type:Boolean,default:!1}}),Bt={file:o=>Oe(o)},jt=["onDrop","onDragover"],Re="ElUploadDrag",Mt=P({name:Re}),qt=P({...Mt,props:At,emits:Bt,setup(o,{emit:l}){const t=Z(Ce);t||le(Re,"usage: <el-upload><el-upload-dragger /></el-upload>");const r=I("upload"),d=V(!1),p=X(),f=E=>{if(p.value)return;d.value=!1,E.stopPropagation();const u=Array.from(E.dataTransfer.files),k=t.accept.value;if(!k){l("file",u);return}const m=u.filter(a=>{const{type:n,name:s}=a,c=s.includes(".")?`.${s.split(".").pop()}`:"",y=n.replace(/\/.*$/,"");return k.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?c===i:/\/\*$/.test(i)?y===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?n===i:!1)});l("file",m)},v=()=>{p.value||(d.value=!0)};return(E,u)=>(b(),L("div",{class:g([e(r).b("dragger"),e(r).is("dragover",d.value)]),onDrop:N(f,["prevent"]),onDragover:N(v,["prevent"]),onDragleave:u[0]||(u[0]=N(k=>d.value=!1,["prevent"]))},[R(E.$slots,"default")],42,jt))}});var It=K(qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const Nt=W({...$e,beforeUpload:{type:$(Function),default:F},onRemove:{type:$(Function),default:F},onStart:{type:$(Function),default:F},onSuccess:{type:$(Function),default:F},onProgress:{type:$(Function),default:F},onError:{type:$(Function),default:F},onExceed:{type:$(Function),default:F}}),Kt=["onKeydown"],zt=["name","multiple","accept"],Ht=P({name:"ElUploadContent",inheritAttrs:!1}),Gt=P({...Ht,props:Nt,setup(o,{expose:l}){const t=o,r=I("upload"),d=X(),p=te({}),f=te(),v=s=>{if(s.length===0)return;const{autoUpload:c,limit:y,fileList:i,multiple:U,onStart:T,onExceed:z}=t;if(y&&i.length+s.length>y){z(s,i);return}U||(s=s.slice(0,1));for(const H of s){const j=H;j.uid=oe(),T(j),c&&E(j)}},E=async s=>{if(f.value.value="",!t.beforeUpload)return u(s);let c,y={};try{const U=t.data,T=t.beforeUpload(s);y=ne(t.data)?ue(t.data):t.data,c=await T,ne(t.data)&&lt(U,y)&&(y=ue(t.data))}catch{c=!1}if(c===!1){t.onRemove(s);return}let i=s;c instanceof Blob&&(c instanceof File?i=c:i=new File([c],s.name,{type:s.type})),u(Object.assign(i,{uid:s.uid}),y)},u=(s,c)=>{const{headers:y,data:i,method:U,withCredentials:T,name:z,action:H,onProgress:j,onSuccess:J,onError:B,httpRequest:Y}=t,{uid:h}=s,D={headers:y||{},withCredentials:T,file:s,data:c??i,method:U,filename:z,action:H,onProgress:G=>{j(G,s)},onSuccess:G=>{J(G,s),delete p.value[h]},onError:G=>{B(G,s),delete p.value[h]}},O=Y(D);p.value[h]=O,O instanceof Promise&&O.then(D.onSuccess,D.onError)},k=s=>{const c=s.target.files;c&&v(Array.from(c))},m=()=>{d.value||(f.value.value="",f.value.click())},a=()=>{m()};return l({abort:s=>{Ae(p.value).filter(s?([y])=>String(s.uid)===y:()=>!0).forEach(([y,i])=>{i instanceof XMLHttpRequest&&i.abort(),delete p.value[y]})},upload:E}),(s,c)=>(b(),L("div",{class:g([e(r).b(),e(r).m(s.listType),e(r).is("drag",s.drag)]),tabindex:"0",onClick:m,onKeydown:be(N(a,["self"]),["enter","space"])},[s.drag?(b(),S(It,{key:0,disabled:e(d),onFile:v},{default:w(()=>[R(s.$slots,"default")]),_:3},8,["disabled"])):R(s.$slots,"default",{key:1}),A("input",{ref_key:"inputRef",ref:f,class:g(e(r).e("input")),name:s.name,multiple:s.multiple,accept:s.accept,type:"file",onChange:k,onClick:c[0]||(c[0]=N(()=>{},["stop"]))},null,42,zt)],42,Kt))}});var pe=K(Gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const fe="ElUpload",Vt=o=>{var l;(l=o.url)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(o.url)},Wt=(o,l)=>{const t=xe(o,"fileList",void 0,{passive:!0}),r=a=>t.value.find(n=>n.uid===a.uid);function d(a){var n;(n=l.value)==null||n.abort(a)}function p(a=["ready","uploading","success","fail"]){t.value=t.value.filter(n=>!a.includes(n.status))}const f=(a,n)=>{const s=r(n);s&&(console.error(a),s.status="fail",t.value.splice(t.value.indexOf(s),1),o.onError(a,s,t.value),o.onChange(s,t.value))},v=(a,n)=>{const s=r(n);s&&(o.onProgress(a,s,t.value),s.status="uploading",s.percentage=Math.round(a.percent))},E=(a,n)=>{const s=r(n);s&&(s.status="success",s.response=a,o.onSuccess(a,s,t.value),o.onChange(s,t.value))},u=a=>{he(a.uid)&&(a.uid=oe());const n={name:a.name,percentage:0,status:"ready",size:a.size,raw:a,uid:a.uid};if(o.listType==="picture-card"||o.listType==="picture")try{n.url=URL.createObjectURL(a)}catch(s){ot(fe,s.message),o.onError(s,n,t.value)}t.value=[...t.value,n],o.onChange(n,t.value)},k=async a=>{const n=a instanceof File?r(a):a;n||le(fe,"file to be removed not found");const s=c=>{d(c);const y=t.value;y.splice(y.indexOf(c),1),o.onRemove(c,y),Vt(c)};o.beforeRemove?await o.beforeRemove(n,t.value)!==!1&&s(n):s(n)};function m(){t.value.filter(({status:a})=>a==="ready").forEach(({raw:a})=>{var n;return a&&((n=l.value)==null?void 0:n.upload(a))})}return re(()=>o.listType,a=>{a!=="picture-card"&&a!=="picture"||(t.value=t.value.map(n=>{const{raw:s,url:c}=n;if(!c&&s)try{n.url=URL.createObjectURL(s)}catch(y){o.onError(y,n,t.value)}return n}))}),re(t,a=>{for(const n of a)n.uid||(n.uid=oe()),n.status||(n.status="success")},{immediate:!0,deep:!0}),{uploadFiles:t,abort:d,clearFiles:p,handleError:f,handleProgress:v,handleStart:u,handleSuccess:E,handleRemove:k,submit:m}},Xt=P({name:"ElUpload"}),Jt=P({...Xt,props:Rt,setup(o,{expose:l}){const t=o,r=ve(),d=X(),p=te(),{abort:f,submit:v,clearFiles:E,uploadFiles:u,handleStart:k,handleError:m,handleRemove:a,handleSuccess:n,handleProgress:s}=Wt(t,p),c=q(()=>t.listType==="picture-card"),y=q(()=>({...t,fileList:u.value,onStart:k,onProgress:s,onSuccess:n,onError:m,onRemove:a}));return Be(()=>{u.value.forEach(({url:i})=>{i!=null&&i.startsWith("blob:")&&URL.revokeObjectURL(i)})}),ge(Ce,{accept:je(t,"accept")}),l({abort:f,submit:v,clearFiles:E,handleStart:k,handleRemove:a}),(i,U)=>(b(),L("div",null,[e(c)&&i.showFileList?(b(),S(ce,{key:0,disabled:e(d),"list-type":i.listType,files:e(u),"handle-preview":i.onPreview,onRemove:e(a)},ee({append:w(()=>[_(pe,x({ref_key:"uploadRef",ref:p},e(y)),{default:w(()=>[e(r).trigger?R(i.$slots,"trigger",{key:0}):C("v-if",!0),!e(r).trigger&&e(r).default?R(i.$slots,"default",{key:1}):C("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:w(({file:T})=>[R(i.$slots,"file",{file:T})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):C("v-if",!0),!e(c)||e(c)&&!i.showFileList?(b(),S(pe,x({key:1,ref_key:"uploadRef",ref:p},e(y)),{default:w(()=>[e(r).trigger?R(i.$slots,"trigger",{key:0}):C("v-if",!0),!e(r).trigger&&e(r).default?R(i.$slots,"default",{key:1}):C("v-if",!0)]),_:3},16)):C("v-if",!0),i.$slots.trigger?R(i.$slots,"default",{key:2}):C("v-if",!0),R(i.$slots,"tip"),!e(c)&&i.showFileList?(b(),S(ce,{key:3,disabled:e(d),"list-type":i.listType,files:e(u),"handle-preview":i.onPreview,onRemove:e(a)},ee({_:2},[i.$slots.file?{name:"default",fn:w(({file:T})=>[R(i.$slots,"file",{file:T})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):C("v-if",!0)]))}});var Yt=K(Jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const us=ye(Yt);async function ds(o,l){try{const t=await nt.get(o,{responseType:"arraybuffer"}),r=new Blob([t.data],{type:t.headers["content-type"]});return new File([r],l,{type:t.headers["content-type"]})}catch(t){return console.error("Error converting image URL to File object:",t),null}}export{us as E,is as a,ds as i};
