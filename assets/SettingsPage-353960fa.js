import{u as t,g as a,r as h,e as y,j as e,o as S}from"./index-e6dc2434.js";import{c as $,d as w,e as p,u as B}from"./index.esm-d2a75ff2.js";const U=t.div`
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
`,L=t.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`,u=t.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 60px;
  }
`,R=t.form`
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
`,l=t.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 280px;

  color: ${a.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 212px;
  }
`,x=t.input`
  padding: 8px 10px;

  width: 100%;

  color: ${a.colorPrimaryWhite};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${a.colorPrimaryGrey};
  background: ${a.colorPrimaryBlack2};

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${a.colorPrimaryGreenLite};
    background: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,v=t.div`
  @media (min-width: 834px) {
    width: 219px;
  }
`,W=t.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  @media (min-width: 834px) {
    width: 219px;
  }
`,G=t.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`,z=t.div`
  display: flex;
  align-items: center;
`,A=t.input`
  display: none;
`,F=t.svg`
  width: 16px;
  height: 16px;

  stroke: ${a.colorPrimaryGreenLite};

  cursor: pointer;
`,q=t.span`
  color: ${a.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`,b=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,I=t.div`
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
`,j=t.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 14px;
  line-height: 1.43;
`,s=t.input`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${a.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${a.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${a.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }

  @media (min-width: 834px) {
    margin-top: 0;
  }
`,D=t.div`
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
`,c=t.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 300px;

  font-size: 14px;
  line-height: 1.43;

  color: ${a.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 430px;
  }
`,H=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 100%;

  @media (min-width: 834px) {
    flex-direction: row;

    width: 416px;
  }
`,M=t.button`
  padding: 8px 10px;

  width: 100%;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;

  background-color: ${a.colorPrimaryGreenLite};
  color: ${a.colorPrimaryBlack2};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${a.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${a.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 212px;
  }
`,T=t.button`
  width: 280px;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border: none;

  background-color: transparent;
  color: ${a.colorPrimaryGrey};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${a.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${a.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,E=$().shape({name:w().min(2,"Too Short!").max(50,"Too Long!").required("Required"),age:p().label("Age").min(1,"Must be a number from 1 to 200").max(200,"Must be a number from 1 to 200").required("Age is required"),gender:w().required("Choose one of these fields"),height:p().label("Height").min(1,"Must be a number from 1 to 300").max(300,"Must be a number from 1 to 300").required("Height is required"),weight:p().label("Weight").min(1,"Must be a number from 1 to 500").max(500,"Must be a number from 1 to 500").required("Weight is required"),activity:p()}),Y=()=>{const[o,f]=h.useState({}),[C,m]=h.useState(null),g=h.useRef(null);h.useEffect(()=>{(async()=>{try{const n=await y.get("/api/user/current");f(n.data),n.data.avatar&&m(URL.createObjectURL(n.data.avatar))}catch(n){console.error("Error fetching user data:",n)}})()},[]);const i=B({initialValues:{name:o.name??"",avatar:o.avatar??null,age:o.age??"",gender:o.gender??"male",height:o.height??"",weight:o.weight??"",activity:o.activity??1},validationSchema:E,onSubmit:async r=>{const n=new FormData;n.append("name",r.name),n.append("avatar",r.avatar),n.append("age",r.age),n.append("gender",r.gender),n.append("height",r.height),n.append("weight",r.weight),n.append("activity",r.activity);try{const d=await y.put("/api/user/update",n);console.log("User data updated:",d.data),f(d.data),d.data.avatar&&m(URL.createObjectURL(d.data.avatar))}catch(d){console.error("Error updating user data:",d)}}}),k=()=>{g.current&&g.current.click()},P=r=>{i.setFieldValue("avatar",r.currentTarget.files[0]),m(URL.createObjectURL(r.currentTarget.files[0]))};return e.jsx(U,{children:e.jsxs(R,{onSubmit:i.handleSubmit,children:[e.jsxs(L,{children:[e.jsxs(u,{children:[e.jsxs(l,{children:["Your name",e.jsx(x,{type:"text",id:"name",name:"name",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name})]}),e.jsxs(v,{children:[e.jsx(l,{children:"Your photo"}),e.jsxs(W,{children:[e.jsx(G,{src:C,alt:"User Avatar"}),e.jsxs(z,{children:[e.jsx(A,{type:"file",ref:g,accept:"image/*",onChange:P}),e.jsxs("div",{onClick:k,style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[e.jsx(F,{width:"16",height:"16",children:e.jsx("use",{href:`${S}#icon-direct-inbox`})}),e.jsx(q,{children:"Download new photo"})]})]})]})]})]}),e.jsxs(u,{children:[e.jsxs(l,{children:["Your age",e.jsx(x,{type:"number",id:"age",name:"age",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.age})]}),e.jsxs(v,{children:[e.jsx(b,{children:"Gender"}),e.jsxs(I,{children:[e.jsxs(j,{children:[e.jsx(s,{type:"radio",name:"gender",value:"male",checked:i.values.gender==="male",onChange:i.handleChange}),"Male"]}),e.jsxs(j,{children:[e.jsx(s,{type:"radio",name:"gender",value:"female",checked:i.values.gender==="female",onChange:i.handleChange}),"Female"]})]})]})]}),e.jsxs(u,{children:[e.jsxs(l,{children:["Height",e.jsx(x,{type:"number",id:"height",name:"height",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.height})]}),e.jsxs(l,{children:["Weight",e.jsx(x,{type:"number",id:"weight",name:"weight",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.weight})]})]})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Your activity"}),e.jsxs(D,{children:[e.jsxs(c,{children:[e.jsx(s,{type:"radio",name:"activity",value:"1",checked:i.values.activity===1,onChange:i.handleChange}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(c,{children:[e.jsx(s,{type:"radio",name:"activity",value:"2",checked:i.values.activity===2,onChange:i.handleChange}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(c,{children:[e.jsx(s,{type:"radio",name:"activity",value:"3",checked:i.values.activity===3,onChange:i.handleChange}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(c,{children:[e.jsx(s,{type:"radio",name:"activity",value:"4",checked:i.values.activity===4,onChange:i.handleChange}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(c,{children:[e.jsx(s,{type:"radio",name:"activity",value:"5",checked:i.values.activity===5,onChange:i.handleChange}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(H,{children:[e.jsx(M,{type:"submit",children:"Save"}),e.jsx(T,{type:"button",onClick:i.handleReset,children:"Cancel"})]})]})})},O="/HealthyHub/assets/settings-hero-33d54d5d.svg",V=t.div`
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
`,J=t.h2`
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
`,K=t.div`
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
`,N=t.img`
  width: 100%;
  height: auto;
`,Z=()=>e.jsxs("div",{children:[e.jsx(J,{children:"Profile setting"}),e.jsxs(V,{children:[e.jsx(K,{children:e.jsx(N,{src:O,alt:"Settings Hero Image"})}),e.jsx(Y,{})]})]});export{Z as default};
