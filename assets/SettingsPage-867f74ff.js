import{u as i,g as t,a as L,d as U,e as W,r as m,F as y,j as e,G as A,H as G}from"./index-6c5e21d6.js";import{a as q}from"./formik.esm-f35d2fae.js";import{c as R,a as h,b as l}from"./index.esm-923e3956.js";const z=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  width: 300px;

  @media (min-width: 834px) {
    margin-top: 0;
    width: 491px;
  }

  @media (min-width: 1440px) {
    width: 491px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`,I=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`,g=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 60px;
  }
`,F=i.form`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    margin: 24px auto 0 auto;

    max-width: 491px;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`,s=i.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 280px;

  color: ${t.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 212px;
  }
`,p=i.input`
  padding: 8px 10px;

  width: 100%;

  color: ${t.colorPrimaryWhite};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${t.colorPrimaryGrey};
  background: ${t.colorPrimaryBlack2};

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${t.colorPrimaryGreenLite};
    background: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,w=i.div`
  @media (min-width: 834px) {
    width: 219px;
  }
`,M=i.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  @media (min-width: 834px) {
    width: 219px;
  }
`,b=i.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;i.svg`
  margin-right: 10px;

  width: 36px;
  height: 36px;

  stroke: ${t.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;const B=i.div`
  display: flex;
  align-items: center;
`,H=i.input`
  display: none;
`,T=i.svg`
  width: 16px;
  height: 16px;

  stroke: ${t.colorPrimaryGreenLite};

  cursor: pointer;
`,Y=i.span`
  color: ${t.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`,v=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,E=i.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-top: 12px;

  width: 230px;

  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    margin-top: 12px;

    gap: 16px;

    text-align: left;
  }
`,j=i.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`,a=i.input`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${t.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${t.colorPrimaryGrey};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    background: radial-gradient(
      circle,
      ${t.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }

  @media (min-width: 834px) {
    margin-top: 0;
  }
`,D=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  margin-top: 12px;

  width: 300px;

  @media (min-width: 834px) {
    align-items: start;
    width: 464px;
  }
`,d=i.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 300px;

  font-size: 14px;
  line-height: 1.43;

  color: ${t.colorPrimaryWhite};

  cursor: pointer;

  @media (min-width: 834px) {
    width: 430px;
  }
`,O=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 100%;

  @media (min-width: 834px) {
    flex-direction: row;

    width: 416px;
  }
`,V=i.button`
  padding: 8px 10px;

  width: 100%;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;

  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 212px;
  }
`,J=i.button`
  width: 280px;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border: none;

  background-color: transparent;
  color: ${t.colorPrimaryGrey};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,K=R().shape({name:h().min(2,"Too Short!").max(50,"Too Long!").required("Required"),age:l().label("Age").min(1,"Must be a number from 1 to 200").max(200,"Must be a number from 1 to 200").required("Age is required"),gender:h().required("Choose one of these fields"),avatar:h(),height:l().positive("Must be a positive number").label("Height").min(1,"Must be a number from 1 to 300").max(300,"Must be a number from 1 to 300").required("Height is required"),weight:l().positive("Must be a positive number").label("Weight").min(1,"Must be a number from 1 to 500").max(500,"Must be a number from 1 to 500").required("Weight is required"),activity:l().required("Activity is required")}),N=()=>{const c=L(),o=U(W),[u,f]=m.useState(null),x=m.useRef(null);m.useEffect(()=>{c(y(o))},[c,o]);const k=()=>{x.current&&x.current.click()},P=r=>{f(URL.createObjectURL(r.currentTarget.files[0]))},$=r=>{c(G(r))},S=()=>{f(null),c(y(o))},C={name:o.name??"",avatar:o.avatarURL??null,age:o.age??"",gender:o.gender??"male",height:o.height??"",weight:o.weight??"",activity:String(o.activity)??"1"};return e.jsx(z,{children:e.jsx(q,{initialValues:C,onSubmit:$,validationSchema:K,children:({handleChange:r,values:n})=>e.jsxs(F,{children:[e.jsxs(I,{children:[e.jsxs(g,{children:[e.jsxs(s,{children:["Your name",e.jsx(p,{type:"text",id:"name",name:"name",value:n.name,onChange:r})]}),e.jsxs(w,{children:[e.jsx(s,{children:"Your photo"}),e.jsxs(M,{children:[u?e.jsx(b,{src:u,alt:"User Avatar"}):e.jsx(b,{src:n.avatar,alt:"User Avatar"}),e.jsxs(B,{children:[e.jsx(H,{type:"file",name:"avatarUrl",ref:x,accept:"image/*",onChange:P}),e.jsxs("div",{onClick:k,style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[e.jsx(T,{width:"16",height:"16",children:e.jsx("use",{href:`${A}#icon-direct-inbox`})}),e.jsx(Y,{children:"Download new photo"})]})]})]})]})]}),e.jsxs(g,{children:[e.jsxs(s,{children:["Your age",e.jsx(p,{type:"number",id:"age",name:"age",value:n.age,onChange:r})]}),e.jsxs(w,{children:[e.jsx(v,{children:"Gender"}),e.jsxs(E,{children:[e.jsxs(j,{children:[e.jsx(a,{type:"radio",name:"gender",value:"male",checked:n.gender==="male",onChange:r}),"Male"]}),e.jsxs(j,{children:[e.jsx(a,{type:"radio",name:"gender",value:"female",checked:n.gender==="female",onChange:r}),"Female"]})]})]})]}),e.jsxs(g,{children:[e.jsxs(s,{children:["Height",e.jsx(p,{type:"number",id:"height",name:"height",value:n.height,onChange:r})]}),e.jsxs(s,{children:["Weight",e.jsx(p,{type:"number",id:"weight",name:"weight",value:n.weight,onChange:r})]})]})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Your activity"}),e.jsxs(D,{children:[e.jsxs(d,{children:[e.jsx(a,{type:"radio",name:"activity",value:"1",checked:n.activity==="1",onChange:r}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(d,{children:[e.jsx(a,{type:"radio",name:"activity",value:"2",checked:n.activity==="2",onChange:r}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(d,{children:[e.jsx(a,{type:"radio",name:"activity",value:"3",checked:n.activity==="3",onChange:r}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(d,{children:[e.jsx(a,{type:"radio",name:"activity",value:"4",checked:n.activity==="4",onChange:r}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(d,{children:[e.jsx(a,{type:"radio",name:"activity",value:"5",checked:n.activity==="5",onChange:r}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(O,{children:[e.jsx(V,{type:"submit",children:"Save"}),e.jsx(J,{type:"button",onClick:S,children:"Cancel"})]})]})})})},Q="/HealthyHub/assets/settings-hero-33d54d5d.svg",X=i.div`
  padding-bottom: 40px;

  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 174px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 160px;

    margin-left: 116px;
    padding-bottom: 72px;

    width: 1181px;
  }
`,Z=i.h2`
  margin: 16px 0;

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;

    width: 200px;

    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`,_=i.div`
  width: 300px;

  @media (min-width: 834px) {
    margin: 0 auto;

    width: 380px;
    height: 374px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    height: 528px;
  }
`,ee=i.img`
  width: 100%;
  height: auto;
`,ne=()=>e.jsxs("div",{children:[e.jsx(Z,{children:"Profile setting"}),e.jsxs(X,{children:[e.jsx(_,{children:e.jsx(ee,{src:Q,alt:"Settings Hero Image"})}),e.jsx(N,{})]})]});export{ne as default};
