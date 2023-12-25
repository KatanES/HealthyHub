import{u as i,g as n,r as h,i as y,j as e,p as S}from"./index-b6d702de.js";import{c as $,d as w,e as p,u as U}from"./index.esm-3486fdf3.js";const L=i.div`
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
`,B=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`,u=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 60px;
  }
`,R=i.form`
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
`,l=i.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 280px;

  color: ${n.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 212px;
  }
`,x=i.input`
  padding: 8px 10px;

  width: 100%;

  color: ${n.colorPrimaryWhite};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${n.colorPrimaryGrey};
  background: ${n.colorPrimaryBlack2};

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${n.colorPrimaryGreenLite};
    background: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,v=i.div`
  @media (min-width: 834px) {
    width: 219px;
  }
`,W=i.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  @media (min-width: 834px) {
    width: 219px;
  }
`,G=i.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`,z=i.div`
  display: flex;
  align-items: center;
`,A=i.input`
  display: none;
`,F=i.svg`
  width: 16px;
  height: 16px;

  stroke: ${n.colorPrimaryGreenLite};

  cursor: pointer;
`,q=i.span`
  color: ${n.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`,b=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,I=i.div`
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
`,d=i.input`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${n.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${n.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${n.colorPrimaryGreenLite} 40%,
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
`,c=i.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 300px;

  font-size: 14px;
  line-height: 1.43;

  color: ${n.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 430px;
  }
`,H=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 100%;

  @media (min-width: 834px) {
    flex-direction: row;

    width: 416px;
  }
`,M=i.button`
  padding: 8px 10px;

  width: 100%;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;

  background-color: ${n.colorPrimaryGreenLite};
  color: ${n.colorPrimaryBlack2};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${n.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${n.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 212px;
  }
`,T=i.button`
  width: 280px;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border: none;

  background-color: transparent;
  color: ${n.colorPrimaryGrey};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${n.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${n.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,E=$().shape({name:w().min(2,"Too Short!").max(50,"Too Long!").required("Required"),age:p().label("Age").min(1,"Must be a number from 1 to 200").max(200,"Must be a number from 1 to 200").required("Age is required"),gender:w().required("Choose one of these fields"),height:p().label("Height").min(1,"Must be a number from 1 to 300").max(300,"Must be a number from 1 to 300").required("Height is required"),weight:p().label("Weight").min(1,"Must be a number from 1 to 500").max(500,"Must be a number from 1 to 500").required("Weight is required"),activity:p()}),Y=()=>{const[t,f]=h.useState({}),[C,m]=h.useState(null),g=h.useRef(null);h.useEffect(()=>{(async()=>{try{const r=await y.get("/api/user/current");f(r.data[0]),r.data.avatarURL&&m(URL.createObjectURL(r.data.avatarURL))}catch(r){console.error("Error fetching user data:",r)}})()},[]);const a=U({initialValues:{name:t.name??"",avatar:t.avatar??null,age:t.age??"",gender:t.gender??"male",height:t.height??"",weight:t.weight??"",activity:t.activity??1},validationSchema:E,onSubmit:async o=>{const r=new FormData;r.append("name",o.name),r.append("avatar",o.avatar),r.append("age",o.age),r.append("gender",o.gender),r.append("height",o.height),r.append("weight",o.weight),r.append("activity",o.activity);try{const s=await y.put("/api/user/update",r);console.log("User data updated:",s.data),f(s.data),s.data.avatarUrl&&m(URL.createObjectURL(s.data.avatarUrl))}catch(s){console.error("Error updating user data:",s)}}}),k=()=>{g.current&&g.current.click()},P=o=>{a.setFieldValue("avatar",o.currentTarget.files[0]),m(URL.createObjectURL(o.currentTarget.files[0]))};return e.jsx(L,{children:e.jsxs(R,{onSubmit:a.handleSubmit,children:[e.jsxs(B,{children:[e.jsxs(u,{children:[e.jsxs(l,{children:["Your name",e.jsx(x,{type:"text",id:"name",name:"name",onChange:a.handleChange,onBlur:a.handleBlur,value:t.name})]}),e.jsxs(v,{children:[e.jsx(l,{children:"Your photo"}),e.jsxs(W,{children:[e.jsx(G,{src:C,alt:"User Avatar"}),e.jsxs(z,{children:[e.jsx(A,{type:"file",ref:g,accept:"image/*",onChange:P}),e.jsxs("div",{onClick:k,style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[e.jsx(F,{width:"16",height:"16",children:e.jsx("use",{href:`${S}#icon-direct-inbox`})}),e.jsx(q,{children:"Download new photo"})]})]})]})]})]}),e.jsxs(u,{children:[e.jsxs(l,{children:["Your age",e.jsx(x,{type:"number",id:"age",name:"age",onChange:a.handleChange,onBlur:a.handleBlur,value:t.age})]}),e.jsxs(v,{children:[e.jsx(b,{children:"Gender"}),e.jsxs(I,{children:[e.jsxs(j,{children:[e.jsx(d,{type:"radio",name:"gender",value:"male",checked:t.gender==="male",onChange:a.handleChange}),"Male"]}),e.jsxs(j,{children:[e.jsx(d,{type:"radio",name:"gender",value:"female",checked:t.gender==="female",onChange:a.handleChange}),"Female"]})]})]})]}),e.jsxs(u,{children:[e.jsxs(l,{children:["Height",e.jsx(x,{type:"number",id:"height",name:"height",onChange:a.handleChange,onBlur:a.handleBlur,value:t.height})]}),e.jsxs(l,{children:["Weight",e.jsx(x,{type:"number",id:"weight",name:"weight",onChange:a.handleChange,onBlur:a.handleBlur,value:t.weight})]})]})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Your activity"}),e.jsxs(D,{children:[e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"activity",value:"1",checked:t.activity===1,onChange:a.handleChange}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"activity",value:"2",checked:t.activity===2,onChange:a.handleChange}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"activity",value:"3",checked:t.activity===3,onChange:a.handleChange}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"activity",value:"4",checked:t.activity===4,onChange:a.handleChange}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(c,{children:[e.jsx(d,{type:"radio",name:"activity",value:"5",checked:t.activity===5,onChange:a.handleChange}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(H,{children:[e.jsx(M,{type:"submit",children:"Save"}),e.jsx(T,{type:"button",onClick:a.handleReset,children:"Cancel"})]})]})})},O="/HealthyHub/assets/settings-hero-33d54d5d.svg",V=i.div`
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
`,J=i.h2`
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
`,K=i.div`
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
`,N=i.img`
  width: 100%;
  height: auto;
`,Z=()=>e.jsxs("div",{children:[e.jsx(J,{children:"Profile setting"}),e.jsxs(V,{children:[e.jsx(K,{children:e.jsx(N,{src:O,alt:"Settings Hero Image"})}),e.jsx(Y,{})]})]});export{Z as default};
