import{j as e,r as p,h as V,u as t,g as o,a as k,d as m,e as F,i as T,L as j,k as B,l as A,m as H,n as O,o as Z}from"./index-46f6913b.js";import{C as z,a as N,L as Y,B as _,p as q,b as M,c as L,d as U,A as X,D as J}from"./index-39ce1f7d.js";import{s as E}from"./symbol-ecff546f.js";import{B as K,L as Q,D as ee,S as te}from"./Snack-8b956cdd.js";import{g as D,r as ie,R as ne}from"./selectors-6aca065b.js";import{F as oe,b as re,c as ae,e as se,a as le,E as de}from"./index.esm-72d491ed.js";z.register(N,Y,_,q,M,L);const pe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ce=["Intake"],xe=({waterIntake:i})=>{const n={labels:ce,datasets:[{label:"Water",data:[i],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(U,{data:n,options:pe})})},he=i=>p.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},p.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),me=V` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,ge=t.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;
  color: ${o.colorPrimaryWhite};
  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,fe=t.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 276px;
  height: 224px;
  border-radius: 12px;
  position: relative;
  background-color: ${o.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media (min-width: 834px) {
    width: 356px;
    height: 208px;

    column-gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 404px;
height: 192px;
    padding: 24px 40px;
  }
`,ue=t.div`
  position: relative;
  width: 80px;
  height: 178px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,we=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:i})=>i}px);
  color: ${({$percentColor:i})=>i};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`,ye=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px rgba(255, 196, 247, 1);
    animation: ${me} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`,be=t.div`
  width: 166px;
  height: 148px;

  @media (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ke=t.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;
  color: ${o.colorPrimaryWhite};

  @media (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,je=t.div`
  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,Ce=t.p`
  display: flex;
  align-items: center;

  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  margin-bottom: 8px;
  color: ${o.colorPrimaryWhite};
  @media (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`,C=t.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
  color: ${o.colorPrimaryGrey};
`,ve=t.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${o.colorPrimaryWhite};

  @media (min-width: 834px) {
    margin-bottom: 0px;
  }
`,We=t.span`
  font-weight: 500;
  margin-left: 4px;
  color: ${o.colorPrimaryGrey};
`,Ie=t.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  // width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 20px 0 0 0;
  background-color: ${o.colorPrimaryGreenLite};
  color: ${o.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${o.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${o.colorPrimaryWhite};
  }
`,$e=t(he)`
  stroke: ${o.colorPrimaryBlack2};
`,Pe=t.svg`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Fe=t.button`
  position: absolute;
  right: 12px;
  top: 0;
  width: 24px;
  height: 24px;
  transform: translateY(50%);
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;

  @media (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`,Be=()=>{const i=document.querySelector("#bubbles"),n=document.createElement("span");let a=Math.random()*(11-5)+5;n.style.width=a+"px",n.style.height=a+"px",n.style.left=8+Math.random()*50+"px",i.appendChild(n),setTimeout(()=>{n.remove()},9e3)},ze=({handleModal:i,waterConsumption:n})=>{const a=k(),s=m(F),l=s!=null&&s.rateWater?s.rateWater*1e3:0,d=l||l-n,r=n<=d?Math.round(n*100/d):100;p.useEffect(()=>{console.log("Water Consumption in MainPage:",n)},[n]);const c=r<=84?Math.ceil(r/100*176+10):88,x=r<=85?"rgba(182, 195, 255, 1)":"green";p.useEffect(()=>{const g=setInterval(Be,1e3);return()=>{clearInterval(g)}},[]);const h=()=>{console.log("Resetting water intake..."),a(T(n))};return e.jsxs("div",{children:[e.jsx(ge,{children:"Water"}),e.jsxs(fe,{children:[e.jsx(ue,{children:e.jsxs(ye,{id:"bubbles",children:[e.jsx(we,{$offset:c,$percentColor:x,children:`${r}%`}),e.jsx(xe,{waterIntake:r})]})}),e.jsxs(be,{children:[e.jsx(ke,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(Ce,{children:[n," ",e.jsx(C,{children:"ml"})]}),e.jsxs(ve,{children:["left:",e.jsx(We,{children:Math.max(d,0)}),e.jsx(C,{children:"ml"})]})]}),e.jsxs(Ie,{onClick:i,children:[e.jsx($e,{}),"Add water intake"]}),e.jsxs(Fe,{type:"button",onClick:h,children:[" ",e.jsx(Pe,{children:e.jsx("use",{href:E+"#icon-trash-03"})})]})]})]})]})};z.register(X,M,L);const Me={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Le={id:"bcgCircle",beforeDatasetsDraw(i,n,a){const{ctx:s}=i;s.save();const l=i.getDatasetMeta(0).data[0].x,d=i.getDatasetMeta(0).data[0].y,r=i.getDatasetMeta(0).data[0].innerRadius,c=i.getDatasetMeta(0).data[0].outerRadius,x=c-r,h=Math.PI/180;s.beginPath(),s.lineWidth=x,s.strokeStyle="rgba(41, 41, 40, 1)",s.arc(l,d,c-x/2,0,h*360,!1),s.stroke()}},S=({dailyCalories:i,inputValue:n,chartBcg:a})=>{n>i&&(n=i,a="red");const s=i-n,l={datasets:[{label:[],data:[n,s],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(J,{options:Me,data:l,plugins:[Le]})})},Ee=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,De=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Se=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${o.colorPrimaryGrey};
  font-size: 14px;
  font-weight: 400;
`,Ge=t.p`
margin: 0;
`,Re=t.div`
  display: flex;
  flex-direction: column;
`,Ve=t.h3`
  font-size: 18px;
  font-weight: 400;
  line-height:1.33;
  margin: 0 2px 0 0;
  color: ${o.colorPrimaryWhite};
`,Te=t.div`
  display: flex;
  align-items: center;

`,v=t.span`
  font-weight: 500;
  color: ${o.colorPrimaryGrey};
`,Ae=t.p`
  width: 78px;
  margin: 0;
`,He=t.p`
  margin: 0;
  
`,b=i=>{const{title:n,chartBcg:a,elementGoal:s,elementValue:l}=i;let d=s-l;d<0&&(d=0);let r=Math.round(l*100/s);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(Ee,{children:[e.jsxs(De,{children:[e.jsx(S,{dailyCalories:s,inputValue:l,chartBcg:a}),e.jsx(Se,{children:e.jsx(Ge,{children:`${r}%`})})]}),e.jsxs(Re,{children:[e.jsx(Ve,{children:n}),e.jsxs(Te,{children:[e.jsxs(Ae,{children:["Goal: ",e.jsx(v,{children:s})]}),e.jsxs(He,{children:["left: ",e.jsx(v,{children:d})]})]})]})]})})},Oe=t.h2`
  color:  ${o.colorPrimaryWhite};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ze=t.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: ${o.colorPrimaryBlack2};
  margin-bottom: 20px;

  font-family: Poppins;
  font-style: normal;

  @media (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media (min-width: 1440px) {
    width: 510px;
    height: 240px;
  }
`,Ne=t.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 38px;

  p:last-child {
    color:  ${o.colorPrimaryGrey};

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,Ye=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,_e=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,qe=i=>i.foodIntake,Ue=i=>i.foodIntake,Xe=i=>i.foodIntake,Je="rgba(255, 196, 247, 1)",Ke="rgba(255, 243, 183, 1)",Qe="rgba(182, 182, 182, 1)",et=({dailyCalories:i,user:n})=>{const a=m(qe),s=m(Ue);let l="#45FFBC",d=0,r=0,c=0;for(const f in a){const y=Math.round(a[f].reduce((u,{fat:w=0})=>u+w,0)*10/10);d+=y;const G=Math.round(a[f].reduce((u,{protein:w=0})=>u+w,0)*10/10);r+=G;const R=Math.round(a[f].reduce((u,{carbonohidrates:w=0})=>u+w,0)*10/10);c+=R}const{carbs:x,protein:h,fat:g}=n;return e.jsxs("div",{children:[e.jsx(Oe,{children:"Food"}),e.jsxs(Ze,{children:[e.jsxs(Ne,{children:[e.jsx(S,{dailyCalories:i,inputValue:s,chartBcg:l}),e.jsxs(Ye,{children:[e.jsx("p",{children:s}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(_e,{children:[e.jsx(b,{title:"Carbonohidrates",chartBcg:Je,elementGoal:x,elementValue:c}),e.jsx(b,{title:"Protein",chartBcg:Ke,elementGoal:h,elementValue:r}),e.jsx(b,{title:"Fat",chartBcg:Qe,elementGoal:g,elementValue:d})]})]})]})},tt=i=>p.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},p.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),p.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),p.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),it=i=>p.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},p.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),nt=t.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 6px;
  color: ${o.colorPrimaryWhite};

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ot=t.div`
  box-sizing: border-box;
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${o.colorPrimaryBlack2};
  margin-bottom: 20px;

 @media (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media (min-width: 1440px) {
    width: 328px;
  }
`,rt=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,W=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,I=t.p`
  color: ${o.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`,$=t.p`
  display: flex;
  align-items: center;
  color: ${o.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`,at=t.span`
  color: ${o.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,st=({dailyCalories:i,dailyWaterIntake:n})=>e.jsxs("div",{children:[e.jsx(nt,{children:"Daily goal"}),e.jsx(ot,{children:e.jsxs(rt,{children:[e.jsx(tt,{}),e.jsxs(W,{children:[e.jsx(I,{children:"Calories"}),e.jsx($,{children:i})]}),e.jsx(it,{}),e.jsxs(W,{children:[e.jsx(I,{children:"Water"}),e.jsxs($,{children:[n,e.jsx(at,{children:"ml"})]})]})]})})]}),lt=t.div`
 width: 300px;

  @media (min-width: 834px) {
    max-width: 558px;
    padding: 27px;
  }
`,dt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;

`,pt=t.h2`
  font-size: 18px;
  line-height: 1.4;
 
`,ct=t.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: ${o.colorPrimaryGrey};
  text-align: center;
`,xt=t.div`
  width: 300px;

  @media (min-width: 834px) {
    max-width: 558px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media (min-width: 1440px) {
    max-width: 558px;
    row-gap: 28px;
  }
`,ht=()=>e.jsxs(lt,{children:[e.jsxs(dt,{children:[e.jsx(pt,{children:"Diary"}),e.jsx(j,{to:"/diary",children:e.jsx(ct,{children:"See more"})})]}),e.jsxs(xt,{children:[e.jsx(K,{}),e.jsx(Q,{}),e.jsx(ee,{}),e.jsx(te,{})]})]}),mt=t.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,gt=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,ft=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ut=t(j)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color-secondary-gre);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
`,wt=()=>{const i=m(D),n=ie(i);return e.jsxs(mt,{children:[e.jsx(gt,{children:"Recommended food"}),e.jsx(ft,{children:n.map(a=>e.jsx(ne,{info:a},a.name))}),e.jsx(ut,{to:"/recommended-food",children:"See more"})]})},yt="/HealthyHub/assets/error-3cccb7e1.svg",bt=t.div`
  width: 300px;
  @media (min-width: 834px) {
    width: 780px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 1372px;
    display: flex;

    flex-direction: row;
    align-items: flex-start;
  }
`,kt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,jt=t.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 300px;
  height: 266px;
  border-radius: 12px;
  padding: 0 12px;
  background-color: ${o.colorPrimaryBlack2};

  font-style: normal;

  @media (min-width: 834px) {
    top: 180px;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }

  @media (min-width: 1440px) {
    top: 215px;
  }
`,Ct=t(oe)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,vt=t.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
  }
`,Wt=t.label`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin: 24px 0 0 24px;

  &::after {
    position: absolute;
    bottom: 50%;
    right: -10%;
    transform: translateY(50px);
    content: '';
    display: ${({$showIcon:i})=>i};
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url('${yt}');
  }
`,It=t(re)`
width: 100%;
  padding: 8px 10px;
  background: transparent;
  border: 1px solid ${o.colorPrimaryGreenLite};
  border-radius: 12px;
  margin: 12px auto 0 24px;
  outline: none;
  font-size: 14px;
  line-height: 1.42;
  color: ${o.colorPrimaryWhite};
  &::placeholder {
    font-size: 14px;
    line-height: 1.42;
    color: ${o.colorPrimaryGrey};
  }


`,$t=t.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 32px 0 0 0;
gap: 16px;
  @media (min-width: 834px) {
    width: 212px;
    margin: 24px auto 366px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 144px 0;
  }
`,P=t.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 276px;
  text-transform: none;
  padding: 8px 10px;
  margin: 0;
  background-color: ${o.colorPrimaryGreenLite};
  color: ${o.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${o.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${o.colorPrimaryWhite};
  }
`,Pt=t.div`
  position: absolute;
  top: 100px;
  left: 0;
  color: ${o.colorSecondaryRed};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 10px;

  @media (min-width: 834px) {
    margin-left: 42px;
  }
`;t.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: transparent;
  border: none;

  color: ${o.colorPrimaryGrey} ;
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: 834px) {
    width: 212px;
  }
`;const Ft=ae({waterIntake:se().required("Required")}),Bt=({handleModal:i})=>{const n=k(),a=l=>{(l.code==="Escape"||l.currentTarget===l.target)&&i()};p.useEffect(()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}));const s=async(l,{resetForm:d})=>{const{waterIntake:r}=l;console.log("Olya",r),n(await B({value:r})),d(),i()};return e.jsx(bt,{children:e.jsx(kt,{onClick:a,children:e.jsxs(jt,{children:[e.jsx(vt,{children:"Add water intake"}),e.jsx(le,{initialValues:{waterIntake:""},validationSchema:Ft,onSubmit:s,children:({errors:l,touched:d})=>e.jsxs(Ct,{children:[e.jsx(Wt,{htmlFor:"waterIntake",$showIcon:l.waterIntake&&d.waterIntake?"block":"none",children:"How much water"}),e.jsx(It,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:l.waterIntake&&d.waterIntake?"1px solid red":""}),e.jsx(de,{name:"waterIntake",children:r=>e.jsx(Pt,{children:r})}),e.jsxs($t,{children:[e.jsx(P,{type:"submit",children:"Confirm"}),e.jsx(P,{type:"button",onClick:i,children:"Cancel"})]})]})})]})})})},zt=t.main`

  padding-top: 16px;
  padding-bottom: 16px;
  @media (min-width: 834px) {
    padding-top: 24px;
  }

  @media (min-width: 1440px) {
    padding-top: 27px;
   
  }
`,Mt=t.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`,Lt=t.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
  color: ${o.colorPrimaryWhite};

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`,Et=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Dt=t(j)`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  color: ${o.colorPrimaryGrey};
  @media (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;t.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  color: ${o.colorPrimaryGrey};
`;const St=t.svg`
  width: 16px;
  height: 16px;
  margin: 0 0 0 5px;
  @media (min-width: 834px) {
    margin: 0 15px 0 5px;
  }
`,Gt=t.div`
  margin: 20px 0 0 0;
  @media (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`;t.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const Rt=t.div`
  @media (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin: 20px ;
  }
`,Vt=t.div`
  width: 300px;

  @media (min-width: 834px) {
    width: 558px;
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1440px) {
    display: flex;
    margin-right: 220px;
  }
`,Tt=A("api/user/fetchCaloriesIntake",async(i,n)=>{try{return(await H.get("/api/user/daily-goal-calories")).data}catch(a){return n.rejectWithValue(a.message)}}),_t=()=>{const i=m(F),n=(i==null?void 0:i.BMR)||0,a=i!=null&&i.rateWater?i.rateWater*1e3:0,s=m(g=>{var f,y;return(y=(f=g.waterIntake.water)==null?void 0:f.data)==null?void 0:y.water}),l=m(Xe),d=m(D),r=k(),[c,x]=p.useState(!1),h=()=>{x(g=>!g)};return p.useEffect(()=>{l||r(O())},[r,l]),p.useEffect(()=>{c?document.body.style.overflow="hidden":document.body.style.overflow=""},[c]),p.useEffect(()=>{!n&&r(Tt()),!d&&r(Z()),s===null&&r(B())},[r,n,s,d]),e.jsxs(zt,{children:[e.jsxs(Mt,{children:[e.jsx(Lt,{children:"Today"}),e.jsx(Et,{children:e.jsxs(Dt,{to:"/dashboard",children:["On the way to the goal",e.jsx(St,{children:e.jsx("use",{href:E+"#icon-arrow-right"})})]})})]}),e.jsxs(Gt,{children:[e.jsx(st,{dailyCalories:n,dailyWaterIntake:a}),e.jsx(ze,{handleModal:h,waterConsumption:s}),e.jsx(et,{dailyCalories:n,user:i})]}),e.jsxs(Rt,{children:[e.jsx(Vt,{children:e.jsx(ht,{})}),e.jsx(wt,{})]}),c&&e.jsx(Bt,{handleModal:h})]})};export{_t as default};
