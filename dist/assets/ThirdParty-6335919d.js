import"./axios-6304c0c0.js";/* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                */import{G as C,H as A,a1 as v,a2 as g,_ as x,r as w,o as p,b as D,f as o,w as l,e as t,F as B,Q as I,g as F,c as d,l as U,O as K,P as S,T,U as Y,I as H,p as N,k as G}from"./index-b0380461.js";import{l as c,a as P}from"./url-566c741c.js";const O={data(){return{form:{baidu_api_key:"",baidu_secret_key:"",fastgpt_appid:"",fastgpt_api_key:"",openAPI_KEY:"",api2d_forward_key:"",sd_url:"",baidu_config:{video_type:"",spd:5,pit:5,vol:5,per:5003}},update:!0,showPass1:!1,showPass2:!1,showPass3:!1,showPass4:!1,showPass5:!1,showPass6:!1}},mounted(){c(P.config,"get").then(_=>{this.form=_.data.data})},methods:{onSubmit(_){c(P.config,"post",_).then(s=>{C({title:"保存成功",message:A("i",{style:"color: red"},s.data.message),type:"success"}),this.form=s.data.data}).catch(s=>{C({title:"错误",message:s.data.message,type:"error"})})}},components:{Hide:v,View:g}};const n=_=>(N("data-v-5acbb3da"),_=_(),G(),_),Q={class:"box"},j={class:"minbox"},q=n(()=>t("p",null,[t("a",{href:"https://console.bce.baidu.com/ai/#/ai/speech/app/list"},"百度API")],-1)),z=n(()=>t("p",null,"取值0-15，默认为5中语速",-1)),J=n(()=>t("p",null,"取值0-15，默认为5中语调",-1)),L=n(()=>t("p",null,"基础音库取值0-9，精品音库取值0-15，默认为5中音量（取值为0时为音量最小值，并非为无声）",-1)),M=n(()=>t("p",null,"(基础音库) 度小宇=1，度小美=0，度逍遥=3，度丫丫=4",-1)),R=n(()=>t("p",null,"(精品音库) 度逍遥=5003，度小鹿=5118，度博文=106，度小童=110，度小萌=111，度米朵=103，度小娇=5",-1)),W=n(()=>t("br",null,null,-1)),X={class:"minbox"},Z=n(()=>t("p",null,[t("a",{href:"https://platform.openai.com/docs/introduction"},"ChatGPT配置")],-1)),$=n(()=>t("br",null,null,-1)),ee={class:"minbox"},se=n(()=>t("p",null,[t("a",{href:"https://fastgpt.run/app/list"},"FastGPT配置")],-1)),oe=n(()=>t("br",null,null,-1)),le={class:"minbox"},ue=n(()=>t("p",null,[t("a",{href:"https://api2d.com/profile"},"API2D")],-1)),te=n(()=>t("br",null,null,-1)),ne={class:"minbox"},ie=n(()=>t("p",null,"Stable Diffusion",-1)),pe=n(()=>t("br",null,null,-1));function de(_,s,ae,_e,e,h){const k=w("spen"),f=w("View"),m=w("Hide"),r=U,a=K,i=S,b=T,E=Y,y=H,V=I;return p(),D(B,null,[o(k,null,{default:l(()=>[F("第三方设置")]),_:1}),t("div",Q,[o(V,{model:e.form,"label-width":"120px"},{default:l(()=>[t("div",j,[q,o(i,{label:"API Key"},{default:l(()=>[o(a,{type:e.showPass1?"text":"password",modelValue:e.form.baidu_api_key,"onUpdate:modelValue":s[2]||(s[2]=u=>e.form.baidu_api_key=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass1?(p(),d(f,{key:0,onClick:s[0]||(s[0]=u=>e.showPass1=!e.showPass1)})):(p(),d(m,{key:1,onClick:s[1]||(s[1]=u=>e.showPass1=!e.showPass1)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(i),o(i,{label:"Secret Key"},{default:l(()=>[o(a,{type:e.showPass2?"text":"password",modelValue:e.form.baidu_secret_key,"onUpdate:modelValue":s[5]||(s[5]=u=>e.form.baidu_secret_key=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass2?(p(),d(f,{key:0,onClick:s[3]||(s[3]=u=>e.showPass2=!e.showPass2)})):(p(),d(m,{key:1,onClick:s[4]||(s[4]=u=>e.showPass2=!e.showPass2)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(E,{fill:""},{default:l(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:l(()=>[z]),_:1}),o(i,{label:"语速"},{default:l(()=>[o(a,{modelValue:e.form.baidu_config.spd,"onUpdate:modelValue":s[6]||(s[6]=u=>e.form.baidu_config.spd=u),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:l(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:l(()=>[J]),_:1}),o(i,{label:"音调"},{default:l(()=>[o(a,{modelValue:e.form.baidu_config.pit,"onUpdate:modelValue":s[7]||(s[7]=u=>e.form.baidu_config.pit=u),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:l(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:l(()=>[L]),_:1}),o(i,{label:"音量"},{default:l(()=>[o(a,{modelValue:e.form.baidu_config.vol,"onUpdate:modelValue":s[8]||(s[8]=u=>e.form.baidu_config.vol=u),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:l(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:l(()=>[M]),_:1}),o(b,{type:"success","show-icon":"",closable:!1},{default:l(()=>[R]),_:1}),o(i,{label:"音库"},{default:l(()=>[o(a,{modelValue:e.form.baidu_config.per,"onUpdate:modelValue":s[9]||(s[9]=u=>e.form.baidu_config.per=u),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),W,t("div",X,[Z,o(i,{label:"openAPI_KEY"},{default:l(()=>[o(a,{type:e.showPass6?"text":"password",modelValue:e.form.openAPI_KEY,"onUpdate:modelValue":s[12]||(s[12]=u=>e.form.openAPI_KEY=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass6?(p(),d(f,{key:0,onClick:s[10]||(s[10]=u=>e.showPass6=!e.showPass6)})):(p(),d(m,{key:1,onClick:s[11]||(s[11]=u=>e.showPass6=!e.showPass6)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),$,t("div",ee,[se,o(i,{label:"AppId"},{default:l(()=>[o(a,{type:e.showPass3?"text":"password",modelValue:e.form.fastgpt_appid,"onUpdate:modelValue":s[15]||(s[15]=u=>e.form.fastgpt_appid=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass3?(p(),d(f,{key:0,onClick:s[13]||(s[13]=u=>e.showPass3=!e.showPass3)})):(p(),d(m,{key:1,onClick:s[14]||(s[14]=u=>e.showPass3=!e.showPass3)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(i,{label:"API KEY"},{default:l(()=>[o(a,{type:e.showPass4?"text":"password",modelValue:e.form.fastgpt_api_key,"onUpdate:modelValue":s[18]||(s[18]=u=>e.form.fastgpt_api_key=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass4?(p(),d(f,{key:0,onClick:s[16]||(s[16]=u=>e.showPass4=!e.showPass4)})):(p(),d(m,{key:1,onClick:s[17]||(s[17]=u=>e.showPass4=!e.showPass4)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),oe,t("div",le,[ue,o(i,{label:"ForwardKey"},{default:l(()=>[o(a,{type:e.showPass5?"text":"password",modelValue:e.form.api2d_forward_key,"onUpdate:modelValue":s[21]||(s[21]=u=>e.form.api2d_forward_key=u),disabled:e.update},{suffix:l(()=>[o(r,{class:"el-input__icon"},{default:l(()=>[e.showPass5?(p(),d(f,{key:0,onClick:s[19]||(s[19]=u=>e.showPass5=!e.showPass5)})):(p(),d(m,{key:1,onClick:s[20]||(s[20]=u=>e.showPass5=!e.showPass5)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),te,t("div",ne,[ie,t("div",null,[o(i,{label:"启动路径配置"},{default:l(()=>[o(a,{modelValue:e.form.sd_url,"onUpdate:modelValue":s[22]||(s[22]=u=>e.form.sd_url=u),disabled:e.update},{prepend:l(()=>[F("http://")]),append:l(()=>[F("/sdapi/v1/txt2img")]),_:1},8,["modelValue","disabled"])]),_:1})]),o(i)]),pe,o(i,null,{default:l(()=>[o(y,{type:"info",class:"my_button",onClick:s[23]||(s[23]=u=>e.update=!1)},{default:l(()=>[F("修改")]),_:1}),o(y,{type:"primary",class:"my_button",onClick:s[24]||(s[24]=u=>h.onSubmit(e.form))},{default:l(()=>[F("保存")]),_:1})]),_:1})]),_:1},8,["model"])])],64)}const Ce=x(O,[["render",de],["__scopeId","data-v-5acbb3da"]]);export{Ce as default};
