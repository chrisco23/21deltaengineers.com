import{C as s}from"./Index.1fd8fc42.js";import{_ as l,h as c,d as i,w as n,z as u,r as f,o as p,x as r}from"./_plugin-vue_export-helper.2d9794a3.js";const m={emits:["close"],components:{CoreModal:s},props:{noHeader:Boolean,classes:Array,allowOverflow:Boolean,confirmation:Boolean}};function d(o,a,e,_,w,y){const t=f("core-modal");return p(),c(u,{to:"#aioseo-modal-portal"},[i(t,{classes:["aioseo-app",...e.classes],"no-header":e.noHeader,onClose:a[0]||(a[0]=C=>o.$emit("close")),"allow-overflow":e.allowOverflow,confirmation:e.confirmation},{headerTitle:n(()=>[r(o.$slots,"headerTitle")]),body:n(()=>[r(o.$slots,"body")]),footer:n(()=>[r(o.$slots,"footer")]),_:3},8,["classes","no-header","allow-overflow","confirmation"])])}const B=l(m,[["render",d]]);export{B as C};