import{u as t,j as o}from"./index-06fdc14f.js";const d=t.div`
  display: flex;
  column-gap: 20px;
  /* width: 300px; */
  height: 86px;
  border-radius: 12px;
  padding: 20px 24px;
  align-items: center;

  background-color: rgba(15, 15, 15, 1);
`,a=t.img`
  width: 46px;
  height: 46px;
`,l=t.div`
  width: 186px;
  height: 46px;
  overflow: hidden;

  font-family: Poppins;
  font-style: normal;
`,c=t.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,h=t.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,p=t.p`
  font-weight: 500;
  margin-left: 6px;
  color: rgba(182, 182, 182, 1);
`,x=({info:e})=>{const{name:r,amount:n,img:i,calories:s}=e;return o.jsxs(d,{children:[o.jsx(a,{src:i,alt:"name"}),o.jsxs(l,{children:[o.jsx(c,{children:r}),o.jsxs(h,{children:[o.jsx("p",{children:n}),o.jsxs(p,{children:[s," calories"]})]})]})]})},g=(e,r=4)=>{const n=[];if(e){do{const i=Math.round(Math.random()*(e.length-1));n.includes(i)||n.push(i)}while(n.length!==r);return e.filter((i,s)=>n.includes(s))}return n},f=e=>e.recommendedFood.food;export{x as R,f as g,g as r};
