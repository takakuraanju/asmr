import{b as o}from"./request-4c50beb0.js";const s=()=>o.get("/voiceovers"),r=({name:e,profile:v})=>o.post("/voiceovers",{name:e,profile:v}),t=e=>o.post("/voiceovers/mapping",e),a=({id:e,name:v,profile:c})=>o.put("/voiceovers",{id:e,name:v,profile:c}),n=e=>o.delete(`/voiceovers/${e}`);export{t as a,a as b,r as c,n as d,s as v};
