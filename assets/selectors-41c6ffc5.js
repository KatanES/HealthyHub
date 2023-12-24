import{u as t,j as i}from"./index-cf284e06.js";const s=t.div`
  display: flex;
  column-gap: 20px;
  /* width: 300px; */
  height: 86px;
  border-radius: 12px;
  padding: 20px 24px;
  align-items: center;

  background-color: rgba(15, 15, 15, 1);
  /* 
  @media screen and (min-width: 834px) {
    width: 380px;
  } */

  /* @media screen and (min-width: 1440px) {
    width: 328px;
  } */
`,a=t.img`
  width: 46px;
  height: 46px;
`,c=t.div`
  width: 186px;
  height: 46px;
  overflow: hidden;

  font-family: Poppins;
  font-style: normal;
`,h=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,l=t.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,p=t.p`
  font-weight: 500;
  margin-left: 6px;
  color: rgba(182, 182, 182, 1);
`,x=({info:e})=>{const{name:d,amount:n,img:o,calories:r}=e;return i.jsxs(s,{children:[i.jsx(a,{src:o,alt:"name"}),i.jsxs(c,{children:[i.jsx(h,{children:d}),i.jsxs(l,{children:[i.jsx("p",{children:n}),i.jsxs(p,{children:[r," calories"]})]})]})]})},g=(e,d=4)=>{const n=[];if(e){do{const o=Math.round(Math.random()*(e.length-1));n.includes(o)||n.push(o)}while(n.length!==d);return e.filter((o,r)=>n.includes(r))}return n},f=e=>e.recommendedFood.food;export{x as R,f as g,g as r};
