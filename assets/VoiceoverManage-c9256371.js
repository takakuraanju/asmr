import{r as d,u as T,o as h,c as k,b as r,d as o,f as e,g as D,t as S,R as N,l as M,s as P}from"./index-4ba2d79a.js";import{v as A}from"./el-loading-31426dd4.js";import{E as F,_ as I,a as U,b as $,c as z}from"./el-message-box-d55c5d39.js";import"./el-tooltip-1e4c83a7.js";import"./el-popper-f23d2298.js";import{E as L}from"./el-scrollbar-1dc2ba44.js";import{E as O}from"./el-empty-11682fee.js";import"./el-card-f7e299f0.js";import{E as C}from"./el-button-30e4aac0.js";import{Z as R,$ as W}from"./index-e8ef4e39.js";import{b as Y,c as q,v as G,d as Z}from"./voiceover-aa9c07dd.js";import{b as j}from"./format-54ff4f88.js";import{E as H,a as J}from"./el-message-7996c4bf.js";import{E as K}from"./el-input-357e38f4.js";import{E as b}from"./request-4c50beb0.js";import"./index-23229e5d.js";import"./index-42d2b847.js";import"./error-f1912ce6.js";import"./_Uint8Array-e65dad1c.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={__name:"VoiceoverEdit",emits:["success"],setup(B,{expose:a,emit:_}){const n=d(!1),t=T(),m=d(),l=d({name:"",profile:""}),V={name:[{required:!0,message:t.charSet.enterTheVoiceoverName,trigger:"blur"},{min:1,max:20,message:t.charSet.theVoiceoverNameMustBeBetween1And20Characters,trigger:"blur"}],profile:[{max:2e3,message:t.charSet.notSupportedForOver2000Words,trigger:"blur"}]},g=async()=>{if(!await m.value.validate(()=>{}))return b.error(t.charSet.formValidationFailed);l.value.id?(await Y(l.value),b.success(t.charSet.successfullyEdited)):(await q(l.value),b.success(t.charSet.successfullyAdded)),n.value=!1,_("success")},y=f=>{n.value=!0,l.value={...f}},i=()=>{m.value.clearValidate()};return a({open:y}),(f,c)=>{const s=K,v=H,E=C,w=J,x=L,u=F;return h(),k(u,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=p=>n.value=p),onOpen:i,title:l.value.id?e(t).charSet.editVoiceover:e(t).charSet.addVoiceover,direction:"rtl",size:"40%"},{default:r(()=>[o(x,null,{default:r(()=>[o(w,{ref_key:"form",ref:m,model:l.value,rules:V,"label-width":"120px"},{default:r(()=>[o(v,{label:e(t).charSet.voiceoverName+":",prop:"name"},{default:r(()=>[o(s,{modelValue:l.value.name,"onUpdate:modelValue":c[0]||(c[0]=p=>l.value.name=p),placeholder:e(t).charSet.enterTheVoiceoverName},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(v,{label:e(t).charSet.voiceoverProfile+":",prop:"profile"},{default:r(()=>[o(s,{modelValue:l.value.profile,"onUpdate:modelValue":c[1]||(c[1]=p=>l.value.profile=p),placeholder:e(t).charSet.enterTheVoiceoverProfile,type:"textarea",resize:"none",maxlength:"2000","show-word-limit":"",autosize:{minRows:6,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(v,null,{default:r(()=>[o(E,{onClick:g,type:"primary"},{default:r(()=>[D(S(e(t).charSet.ok),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["modelValue","title"])}}},X={key:0},Ve={__name:"VoiceoverManage",setup(B){const a=T(),_=d([]),n=d(!1),t=d(),m=async()=>{n.value=!0;const i=await G();_.value=i.data.data,n.value=!1};m();const l=async i=>{await U.confirm(a.charSet.areYouSureYouWantToDeleteThisVoiceover,a.charSet.prompt,{type:"warning",confirmButtonText:a.charSet.ok,cancelButtonText:a.charSet.cancel}).then(async()=>{await Z(i.id),b.success(a.charSet.successfullyDeleted),m()}).catch(()=>{})},V=i=>{t.value.open(i)},g=()=>{t.value.open({})},y=()=>{m()};return(i,f)=>{const c=C,s=$,v=O,E=z,w=I,x=A;return h(),k(w,{title:e(a).charSet.voiceoverManage},{extra:r(()=>[o(c,{type:"primary",onClick:g},{default:r(()=>[D(S(e(a).charSet.addVoiceover),1)]),_:1})]),default:r(()=>[N((h(),k(E,{data:_.value,style:{width:"100%"}},{empty:r(()=>[o(v,{description:e(a).charSet.noData},null,8,["description"])]),default:r(()=>[o(s,{prop:"id",label:"ID",width:"100"}),o(s,{prop:"name",label:e(a).charSet.voiceoverName},null,8,["label"]),o(s,{prop:"profile",label:e(a).charSet.voiceoverProfile},{default:r(({row:u})=>[u.profile?P("",!0):(h(),M("span",X,S(e(a).charSet.noIntroductionProvided),1))]),_:1},8,["label"]),o(s,{label:e(a).charSet.createDate,prop:"createDatetime"},{default:r(({row:u})=>[D(S(e(j)(u.createDatetime)),1)]),_:1},8,["label"]),o(s,{label:e(a).charSet.operate,width:"200"},{default:r(({row:u})=>[o(c,{circle:"",plain:"",icon:e(R),type:"primary",onClick:p=>V(u)},null,8,["icon","onClick"]),o(c,{circle:"",plain:"",icon:e(W),type:"danger",onClick:p=>l(u)},null,8,["icon","onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[x,n.value]]),o(Q,{ref_key:"drawer",ref:t,onSuccess:y},null,512)]),_:1},8,["title"])}}};export{Ve as default};
