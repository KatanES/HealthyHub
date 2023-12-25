import{j as e,r as l,h as G,u as n,d as c,g,L as u,e as M,i as f,a as B,k as H,l as N}from"./index-6ab748ed.js";import{C as L,a as Z,L as O,B as A,p as _,b as E,c as $,d as U,A as q,D as Y}from"./index-aba45a7d.js";import{B as X,L as J,D as K,S as Q}from"./Snack-bfc8e415.js";import{g as P,r as ee,R as te}from"./selectors-4f637336.js";import{F as ne,b as oe,c as ie,e as ae,a as re,E as se}from"./index.esm-146dc7c1.js";import{s as de}from"./symbol-b8a774a7.js";L.register(Z,O,A,_,E,$);const le={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},pe=["Intake"],ce=({waterIntake:t})=>{const o={labels:pe,datasets:[{label:"Water",data:[t],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(U,{data:o,options:le})})},xe=t=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),he=G` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,me=n.h2`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,ge=n.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: rgba(15, 15, 15, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`,fe=n.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,ue=n.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:t})=>t}px);
  color: ${({$percentColor:t})=>t};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`,we=n.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px rgba(255, 196, 247, 1);
    animation: ${he} 4s linear infinite;

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
`,be=n.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ye=n.p`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,je=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ke=n.p`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`,C=n.span`
  color: rgba(182, 182, 182, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ve=n.p`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,Ce=n.span`
  color: rgba(182, 182, 182, 1);
  font-weight: 500;
  margin-left: 4px;
`,We=n.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: rgba(227, 255, 168, 1);

  color: rgba(15, 15, 15, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,Ie=n(xe)`
  stroke: rgba(15, 15, 15, 1);
`,Fe=()=>{const t=document.querySelector("#bubbles"),o=document.createElement("span");let a=Math.random()*(11-5)+5;o.style.width=a+"px",o.style.height=a+"px",o.style.left=8+Math.random()*50+"px",t.appendChild(o),setTimeout(()=>{o.remove()},9e3)},ze=({handleModal:t,waterConsumtion:o})=>{const a=1500-o,i=o<=1500?Math.round(o*100/1500):100,r=i<=84?Math.ceil(i/100*176+10):88,s=i<=85?"rgba(182, 195, 255, 1)":"green";return l.useEffect(()=>{const d=setInterval(Fe,1e3);return()=>{clearInterval(d)}},[]),e.jsxs("div",{children:[e.jsx(me,{children:"Water"}),e.jsxs(ge,{children:[e.jsx(fe,{children:e.jsxs(we,{id:"bubbles",children:[e.jsx(ue,{$offset:r,$percentColor:s,children:`${i}%`}),e.jsx(ce,{waterIntake:i})]})}),e.jsxs(be,{children:[e.jsx(ye,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(ke,{children:[o," ",e.jsx(C,{children:"ml"})]}),e.jsxs(ve,{children:["left:",e.jsx(Ce,{children:a>0?a:0}),e.jsx(C,{children:"ml"})]})]}),e.jsxs(We,{onClick:t,children:[e.jsx(Ie,{}),"Add water intake"]})]})]})]})};L.register(q,E,$);const Me={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Be={id:"bcgCircle",beforeDatasetsDraw(t,o,a){const{ctx:i}=t;i.save();const r=t.getDatasetMeta(0).data[0].x,s=t.getDatasetMeta(0).data[0].y,d=t.getDatasetMeta(0).data[0].innerRadius,p=t.getDatasetMeta(0).data[0].outerRadius,x=p-d,b=Math.PI/180;i.beginPath(),i.lineWidth=x,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(r,s,p-x/2,0,b*360,!1),i.stroke()}},S=({dailyCalories:t,inputValue:o,chartBcg:a})=>{o>t&&(o=t,a="red");const i=t-o,r={datasets:[{label:[],data:[o,i],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Y,{options:Me,data:r,plugins:[Be]})})},Le=(t,o)=>{let a,i,r;switch(o){case"lose":a=.25,i=.2;break;case"gain":a=.3,i=.2;break;case"maintain":a=.2,i=.25;break;default:a=.25,i=.2}r=1-(a+i);const s=Math.round(a*t/4),d=Math.round(i*t/9);return{carbs:Math.round(r*t/4),protein:s,fat:d}},Ee=n.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,$e=n.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Pe=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Se=n.div`
  display: flex;
  flex-direction: column;
`,Te=n.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ve=n.div`
  display: flex;
  column-gap: 12px;
`,W=n.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,De=n.p`
  width: 78px;
`,j=t=>{const{title:o,chartBcg:a,elementGoal:i,elementValue:r}=t;let s=i-r;s<0&&(s=0);let d=Math.round(r*100/i);return(d===1/0||isNaN(d))&&(d=0),d>100&&(d=100),e.jsx(e.Fragment,{children:e.jsxs(Ee,{children:[e.jsxs($e,{children:[e.jsx(S,{dailyCalories:i,inputValue:r,chartBcg:a}),e.jsx(Pe,{children:e.jsx("p",{children:`${d}%`})})]}),e.jsxs(Se,{children:[e.jsx(Te,{children:o}),e.jsxs(Ve,{children:[e.jsxs(De,{children:["Goal: ",e.jsx(W,{children:i})]}),e.jsxs("p",{children:["left: ",e.jsx(W,{children:s})]})]})]})]})})},Re=n.h2`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ge=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: rgba(15, 15, 15, 1);
  margin-bottom: 20px;

  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,He=n.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 38px;

  p:last-child {
    color: rgba(182, 182, 182, 1);

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,Ne=n.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ze=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Oe=t=>t.foodIntake,Ae=t=>t.foodIntake,_e=t=>t.foodIntake,Ue="rgba(255, 196, 247, 1)",qe="rgba(255, 243, 183, 1)",Ye="rgba(182, 182, 182, 1)",Xe=({dailyCalories:t})=>{const o=c(Oe),a=c(Ae);let i="#45FFBC",r=0,s=0,d=0;for(const y in o){const V=Math.round(o[y].reduce((h,{fat:m=0})=>h+m,0)*10/10);r+=V;const D=Math.round(o[y].reduce((h,{protein:m=0})=>h+m,0)*10/10);s+=D;const R=Math.round(o[y].reduce((h,{carbonohidrates:m=0})=>h+m,0)*10/10);d+=R}const{carbs:p,protein:x,fat:b}=Le(t,"lose");return e.jsxs("div",{children:[e.jsx(Re,{children:"Food"}),e.jsxs(Ge,{children:[e.jsxs(He,{children:[e.jsx(S,{dailyCalories:t,inputValue:a,chartBcg:i}),e.jsxs(Ne,{children:[e.jsx("p",{children:a}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ze,{children:[e.jsx(j,{title:"Carbonohidrates",chartBcg:Ue,elementGoal:p,elementValue:d}),e.jsx(j,{title:"Protein",chartBcg:qe,elementGoal:x,elementValue:s}),e.jsx(j,{title:"Fat",chartBcg:Ye,elementGoal:b,elementValue:r})]})]})]})},Je=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),Ke=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Qe=n.h2`
  color: ${g.colorPrimaryWhite};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,et=n.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${g.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
  }
`,tt=n.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=n.p`
  color: ${g.colorPrimaryGrey};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
`,z=n.p`
  display: flex;
  align-items: center;
  color: ${g.colorPrimaryWhite};
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`,nt=n.span`
  color: ${g.colorPrimaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ot=({dailyCalories:t})=>e.jsxs("div",{children:[e.jsx(Qe,{children:"Daily goal"}),e.jsx(et,{children:e.jsxs(tt,{children:[e.jsx(Je,{}),e.jsxs(I,{children:[e.jsx(F,{children:"Calories"}),e.jsx(z,{children:t})]}),e.jsx(Ke,{}),e.jsxs(I,{children:[e.jsx(F,{children:"Water"}),e.jsxs(z,{children:["1500",e.jsx(nt,{children:"ml"})]})]})]})})]}),it=n.div`
  /* border: 2px solid white; */
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,at=n.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,rt=n.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,st=n.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,dt=n.div`
  /* border: 2px solid white; */
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    row-gap: 28px;
  }
`,lt=()=>e.jsxs(it,{children:[e.jsxs(st,{children:[e.jsx(at,{children:"Diary"}),e.jsx(u,{to:"/diary",children:e.jsx(rt,{children:"See more"})})]}),e.jsxs(dt,{children:[e.jsx(X,{}),e.jsx(J,{}),e.jsx(K,{}),e.jsx(Q,{})]})]}),pt=n.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,ct=n.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,xt=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,ht=n(u)`
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
`,mt=()=>{const t=c(P),o=ee(t);return e.jsxs(pt,{children:[e.jsx(ct,{children:"Recommended food"}),e.jsx(xt,{children:o.map(a=>e.jsx(te,{info:a},a.name))}),e.jsx(ht,{to:"/recommended-food",children:"See more"})]})},gt="/HealthyHub/assets/error-3cccb7e1.svg",ft=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,ut=n.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  width: 300px;
  height: 266px;
  border-radius: 12px;
  padding: 16px 12px;
  background-color: var(--bg-secondary);

  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    top: 180px;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    top: 215px;
  }
`,wt=n(ne)`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,bt=n.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,yt=n.label`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;

  &::after {
    position: absolute;
    bottom: -38px;
    right: 10px;
    content: '';
    display: ${({$showIcon:t})=>t};
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url('${gt}');
  }
`,jt=n(oe)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--input-border-color-normal);
  border-radius: 12px;
  margin-bottom: 16px;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border: ${({borderstyle:t})=>t};

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,kt=n.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  background-color: var(--bg-button-color);
  border: none;

  color: var(--text-color-button-black);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,vt=n.div`
  position: absolute;
  top: 69px;
  left: 0;
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 10px;

  @media screen and (min-width: 834px) {
    left: 25px;
  }
`,Ct=n.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: transparent;
  border: none;

  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,k=M.create({baseURL:"https://healthyhubserver.onrender.com/"}),T=t=>{k.defaults.headers.common.Authorization=`Bearer ${t}`},Wt=f("waterIntake/get",async(t,o)=>{try{const i=o.getState().auth.token;return i?(T(i),(await k("api/user/water-intake")).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}}),It=f("waterIntake/post",async(t,o)=>{try{const i=o.getState().auth.token;return i?(T(i),(await k.post("api/user/water-intake",t)).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}}),Ft=ie({waterIntake:ae().required("Required")}),zt=({handleModal:t})=>{const o=B(),a=r=>{(r.code==="Escape"||r.currentTarget===r.target)&&t()};l.useEffect(()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}));const i=(r,{resetForm:s})=>{const{waterIntake:d}=r;o(It({value:d})),s(),t()};return e.jsx(ft,{onClick:a,children:e.jsxs(ut,{children:[e.jsx(bt,{children:"Add water intake"}),e.jsx(re,{initialValues:{waterIntake:""},validationSchema:Ft,onSubmit:i,children:({errors:r,touched:s})=>e.jsxs(wt,{children:[e.jsx(yt,{htmlFor:"waterIntake",$showIcon:r.waterIntake&&s.waterIntake?"block":"none",children:"How much water"}),e.jsx(jt,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:r.waterIntake&&s.waterIntake?"1px solid red":""}),e.jsx(se,{name:"waterIntake",children:d=>e.jsx(vt,{children:d})}),e.jsx(kt,{type:"submit",children:"Confirm"}),e.jsx(Ct,{type:"button",onClick:t,children:"Cancel"})]})})]})})},Mt=n.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,Bt=n.h1`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;n(u)`
  display: flex;
  align-items: center;
  color: rgba(182, 182, 182, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;n.span`
  margin-right: 6px;
`;const Lt=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Et=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,$t=n.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;n.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const Pt=n.div`
  display: flex;
`,St=n.div`
  /* border: 2px solid white; */
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 10;
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    padding: 10px;
    display: flex;
  }
`,Tt=n.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;n.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;const Vt=n.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,Dt=t=>t.caloriesGoal,Rt=t=>t.waterIntake,w=M.create({baseURL:"https://backend-healthyhub.onrender.com/"}),v=t=>{w.defaults.headers.common.Authorization=`Bearer ${t}`},Gt=f("foodIntake/get",async(t,o)=>{try{const i=o.getState().auth.token;return i?(v(i),(await w("api/user/food-intake")).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});f("foodIntake/post",async(t,o)=>{try{const i=o.getState().auth.token;return i?(v(i),(await w.post("api/user/food-intake",t)).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});f("foodIntake/update",async({ident:t,type:o,product:a},i)=>{try{const s=i.getState().auth.token;return s?(v(s),(await w.put(`api/user/food-intake/${t}`,{type:o,product:a})).data):i.rejectWithValue("No token")}catch(r){return i.rejectWithValue(r.message)}});const Ut=()=>{const t=c(Dt),o=c(Rt),a=c(_e),i=c(P),r=B(),[s,d]=l.useState(!1),p=()=>{d(x=>!x)};return l.useEffect(()=>{a||r(Gt())},[r,a]),l.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow=""},[s]),l.useEffect(()=>{!t&&r(H()),!i&&r(N()),o===null&&r(Wt())},[r,t,o,i]),e.jsxs(Mt,{children:[e.jsxs(Lt,{children:[e.jsx(Bt,{children:"Today"}),e.jsx(u,{to:"/dashboard",children:e.jsxs(Pt,{children:[e.jsx(Tt,{children:"On the way to the goal"}),e.jsx($t,{children:e.jsx("use",{href:de+"#icon-arrow-right"})})]})})]}),e.jsxs(Et,{children:[e.jsx(ot,{dailyCalories:t}),e.jsx(ze,{handleModal:p,waterConsumtion:o}),e.jsx(Xe,{dailyCalories:t})]}),e.jsxs(Vt,{children:[e.jsx(St,{children:e.jsx(lt,{})}),e.jsx(mt,{})]}),s&&e.jsx(zt,{handleModal:p})]})};export{Ut as default};
