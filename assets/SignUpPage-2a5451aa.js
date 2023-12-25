import{u as i,g as t,N as re,r as c,j as e,a as oe,s as ae}from"./index-2e7381ac.js";import{F as S,a as b,E as y,b as z}from"./index.esm-5eefb97e.js";import{S as V,Y as se,A as le,B as de,a as pe}from"./YupSchemas-c5a142cd.js";import{s as x}from"./symbol-31b12b17.js";import{I as ce}from"./IllustrationDesctop-3bd24af3.js";const xe=i.div`
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
`,he=i.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,me=i.img`
  width: 100%;
  height: auto;
`,ge=i.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,ue=i.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
   
  }
   @media (min-width: 1440px) {
      text-align: left;
    }
`,we=i.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: ${t.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
      text-align: left;
    }
`;i.p`
  font-size: 12px;
  color: ${t.colorSecondaryGreen};
  margin: 0 10px 0 0;
`;const fe=i(S)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;

    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`,A=i.div`
  background: transparent;
  position: relative;
`,I=i.input`
  width: -webkit-fill-available;
  padding: 8px 10px;

  border: 1px solid ${t.colorPrimaryGreenLite};
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: ${t.colorPrimaryWhite};

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${t.colorPrimaryGrey};
  }
`,W=i.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`,G=i.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${t.colorSecondaryRed};
`,ye=i.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 20px 0 0 0;
  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color:  ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }
`,be=i.div`
display: flex;
gap: 16px;
flex-direction: column;
margin: 48px 0 0 0;
@media (min-width: 834px) {
  width: 380px;
  flex-direction: row;
  margin: 206px 0 60px 0;
}

@media (min-width: 1440px) {
  text-align: left;
  flex-direction: column;
}
`,je=i.p`
  font-size: 14px;
  line-height: 1.42;
  color: ${t.colorPrimaryGrey};
 margin: 0;
 
`,ve=i(re)`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  color: ${t.colorPrimaryWhite};
  margin: 0 0 40px 0;
  @media (min-width: 834px) {
    margin: 0;
  }
`,f=i.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`,ke=({goNext:m,setName:s,setEmail:a,setPassword:g})=>{const[l,h]=c.useState(!1),d=()=>{h(n=>!n)},o=async n=>{try{await V.validate(n,{abortEarly:!1}),s(n.name),a(n.email.toLowerCase()),g(n.password),m()}catch(r){console.log("Form validation errors:",r)}};return e.jsxs(xe,{children:[e.jsx(he,{children:e.jsx(me,{src:ce,alt:"The main picture a girl with a watch"})}),e.jsxs(ge,{children:[e.jsx(ue,{children:"Sign up"}),e.jsx(we,{children:"You need to register to use the service"}),e.jsx(b,{initialValues:{name:"",email:"",password:""},validationSchema:V,onSubmit:o,children:({errors:n,touched:r,handleChange:u,handleBlur:p,isValid:$,values:w})=>e.jsxs(fe,{autoComplete:"off",children:[e.jsxs(A,{style:{borderColor:r.name?n.name?"#E74A3B":"#3CBC81":""},children:[e.jsx(I,{type:"text",id:"name",name:"name",placeholder:"Name",onChange:u,onBlur:p,value:w.name,style:{borderColor:r.name?n.name?"#E74A3B":"#3CBC81":""},"aria-label":"Name Input"}),e.jsx(W,{style:{display:w.name?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:n.name&&r.name?e.jsx(f,{children:e.jsx("use",{href:x+"#icon-error"})}):e.jsx(f,{children:e.jsx("use",{href:x+"#icon-correct"})})})]}),e.jsx(y,{name:"name",component:G}),e.jsxs(A,{style:{borderColor:r.email?n.email?"#E74A3B":"#3CBC81":""},children:[e.jsx(I,{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:u,onBlur:p,value:w.email,style:{borderColor:r.email?n.email?"#E74A3B":"#3CBC81":""},"aria-label":"Email Input"}),e.jsx(W,{style:{display:w.email?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:n.email&&r.email?e.jsx(f,{children:e.jsx("use",{href:x+"#icon-error"})}):e.jsx(f,{children:e.jsx("use",{href:x+"#icon-correct"})})})]}),e.jsx(y,{name:"email",component:G}),e.jsxs(A,{style:{borderColor:r.password?n.password?"#E74A3B":"#3CBC81":""},children:[e.jsx(I,{type:l?"text":"password",id:"password",name:"password",placeholder:"Password",success:"true",onChange:u,onBlur:p,value:w.password,style:{borderColor:r.password?n.password?"#E74A3B":"#3CBC81":""},"aria-label":"Password Input"}),e.jsxs(W,{style:{display:w.password?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},onClick:d,children:[r.password&&e.jsx(f,{children:n.password?e.jsx("use",{href:x+"#icon-error"}):e.jsx("use",{href:x+"#icon-correct"})}),l?e.jsx(f,{children:e.jsx("use",{href:x+"#icon-eye"})}):e.jsx(f,{children:e.jsx("use",{href:x+"#icon-eye-off"})})]})]}),r.password&&w.password.length>=8&&e.jsx("div",{style:{color:"#3CBC81",fontSize:"12px"},children:"Password is secure"}),e.jsx(y,{name:"password",component:G}),e.jsx(ye,{type:"submit",disabled:!$,children:"Next"})]})}),e.jsxs(be,{children:[e.jsx(je,{children:"Do you already have an account?"}),e.jsx(ve,{to:"/signin",children:"Sign in"})]})]})]})},Se="/HealthyHub/assets/IllustrationGoals-a0a0dde1.png",$e=i.div`
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
`,Pe=i.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,Be=i.img`
  width: 100%;
  height: auto;
`,Ce=i.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,Ge=i.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,ze=i.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: ${t.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,Ae=i(S)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;

    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`,Ie=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 834px) {
    width: 380px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`,E=i.label`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: flex;
  align-items: center;
  gap: 8px;
`,L=i(z)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${t.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${t.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${t.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }
`,We=i.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 366px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 228px 0;
  }
`,M=i.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 0 0 20px 0;
  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }
`;i.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${t.colorSecondaryRed};
`;const Ee=({goNext:m,setGoal:s,dataGoal:a,goBack:g})=>{c.useEffect(()=>{const h='input[type="radio"][value="'+a+'"]',d=document.querySelector(h);d&&(d.checked=!0)},[a]);const l=({goal:h})=>{s(h),m()};return e.jsxs($e,{children:[e.jsx(Pe,{children:e.jsx(Be,{src:Se,alt:"Hiking"})}),e.jsxs(Ce,{children:[e.jsx(Ge,{children:"Your goal"}),e.jsx(ze,{children:"Choose a goal so that we can help you effectively"}),e.jsx(b,{initialValues:{goal:a},validationSchema:se,onSubmit:l,children:e.jsxs(Ae,{children:[e.jsxs(Ie,{role:"group","aria-labelledby":"goalGroup",children:[e.jsxs(E,{children:[e.jsx(L,{type:"radio",name:"goal",value:"1",required:!0}),"Lose Fat"]}),e.jsxs(E,{children:[e.jsx(L,{type:"radio",name:"goal",value:"2",required:!0}),"Maintain"]}),e.jsxs(E,{children:[e.jsx(L,{type:"radio",name:"goal",value:"3",required:!0}),"Gain Muscle"]})]}),e.jsxs(We,{children:[e.jsx(M,{type:"submit",children:"Next"}),e.jsx(M,{type:"button",onClick:g,children:"Back"})]})]})})]})]})},Le="/HealthyHub/assets/IllustrationGender-a3b492c2.png",Ne=i.div`
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
`,Te=i.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,Ye=i.img`
  width: 100%;
  height: auto;
`,Fe=i.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,He=i.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,qe=i.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: ${t.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,Ue=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 24px 0 0 0;
`,Re=i.div`
  display: flex;
  flex-direction: row;
  width: 230px;
  margin: 12px 0 0 0;
  justify-content: space-between;
  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
    margin: 12px 0 0 0;
    gap: 16px;
  }
`,D=i.label`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ve=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 24px 0 0 0;
`,Q=i(z)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${t.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${t.colorPrimaryGrey};
  border-radius: 50%;

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
`,Me=i.div`
  background: transparent;
  position: relative;
  margin: 12px 0 0 0;
  @media (min-width: 1440px) {
    width: 212px;
  }
`,De=i.input`
  width: -webkit-fill-available;
  padding: 8px 10px;

  border: 1px solid ${t.colorPrimaryGreenLite};
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: ${t.colorPrimaryWhite};

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${t.colorPrimaryGrey};
  }
`,Qe=i.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`,J=i.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`,Je=i.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 366px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 144px 0;
  }
`,K=i.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 0 0 20px 0;
  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }
`;i.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${t.colorSecondaryRed};
`;const Ke=({goNext:m,goBack:s,setAge:a,setGender:g,dataGender:l,dataAge:h})=>{c.useEffect(()=>{const o='input[type="radio"][value="'+l+'"]',n=document.querySelector(o);n&&(n.checked=!0)},[l]);const d=o=>{const{age:n,gender:r}=o;a(n),g(r.toLowerCase()),m()};return e.jsxs(Ne,{children:[e.jsx(Te,{children:e.jsx(Ye,{src:Le,alt:"Healthy life style"})}),e.jsxs(Fe,{children:[e.jsx(He,{children:"Select gender, Age"}),e.jsx(qe,{children:"Choose a goal so that we can help you effectively"}),e.jsx(b,{initialValues:{gender:l,age:h},validationSchema:le,onSubmit:d,children:({errors:o,touched:n,handleChange:r,handleBlur:u,values:p})=>e.jsxs(S,{autoComplete:"off",children:[e.jsx(Ue,{id:"ageAndGenderGroup",children:"Gender"}),e.jsxs(Re,{role:"group","aria-labelledby":"ageAndGenderGroup",children:[e.jsxs(D,{children:[e.jsx(Q,{type:"radio",name:"gender",value:"Male",required:!0}),"Male"]}),e.jsxs(D,{children:[e.jsx(Q,{type:"radio",name:"gender",value:"Female",required:!0}),"Female"]})]}),e.jsxs("div",{children:[e.jsx(Ve,{children:"Your age"}),e.jsxs(Me,{style:{borderColor:n.age?o.age?"#E74A3B":"#3CBC81":""},children:[e.jsx(De,{type:"number",id:"age",name:"age",placeholder:"Enter your age",onChange:r,onBlur:u,value:p.age,style:{borderColor:n.age?o.age?"#E74A3B":"#3CBC81":""},"aria-label":"Age Input"}),e.jsx(Qe,{style:{display:p.age?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:o.age&&n.age?e.jsx(J,{children:e.jsx("use",{href:x+"#icon-error"})}):e.jsx(J,{children:e.jsx("use",{href:x+"#icon-correct"})})})]}),e.jsx(y,{name:"name",component:G})]}),e.jsxs(Je,{children:[e.jsx(K,{type:"submit",children:"Next"}),e.jsx(K,{type:"button",onClick:s,children:"Back"})]})]})})]})]})},Oe="/HealthyHub/assets/IllustrationBody-f895129d.png",Xe=i.div`
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
`,Ze=i.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,_e=i.img`
  width: 100%;
  height: auto;
`,ei=i.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,ii=i.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,ti=i.p`
  font-size: 18px;
  line-height: 1.33;
  color: ${t.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,O=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  margin: 24px 0 0 0;
`;i(z)`
  place-content: center;
  appearance: none;
  background-color: black;
  margin-top: auto;
  font: inherit;
  color: ${t.colorPrimaryGreenLite};
  width: 12px;
  height: 12px;
  border: 0.15em solid ${t.colorPrimaryGrey};
  border-radius: 50%;
  transform: translateY(-0.075em);

  &:checked {
    background-color: rgba(227, 255, 168, 1);
    transform: scale(1);
  }
  @media (min-width: 834px) {
    margin-top: 0;
  }
`;const X=i.div`
  background: transparent;
  position: relative;
  margin: 12px 0 0 0;
  @media (min-width: 1440px) {
    width: 212px;
  }
`,Z=i.input`
  width: -webkit-fill-available;
  padding: 8px 10px;

  border: 1px solid ${t.colorPrimaryGreenLite};
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: ${t.colorPrimaryWhite};

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${t.colorPrimaryGrey};
  }
`,_=i.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`,C=i.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`,ni=i.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 196px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 164px 0;
  }
`,ee=i.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 0 0 20px 0;
  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }
`,ie=i.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${t.colorSecondaryRed};
`,ri=({goNext:m,goBack:s,setWeight:a,setHeight:g,dataHeight:l,dataWeight:h})=>{const d=o=>{const{height:n,weight:r}=o;g(n),a(r),m()};return e.jsxs(Xe,{children:[e.jsx(Ze,{children:e.jsx(_e,{src:Oe,alt:"Body parameters"})}),e.jsxs(ei,{children:[e.jsx(ii,{children:"Body parameters"}),e.jsx(ti,{children:"Enter your parameters for correct performance tracking"}),e.jsx(b,{initialValues:{height:l??"",weight:h??""},validationSchema:de,onSubmit:d,children:({errors:o,touched:n,handleChange:r,handleBlur:u,values:p})=>e.jsxs(S,{autoComplete:"off",children:[e.jsx(O,{children:"Height"}),e.jsxs(X,{style:{borderColor:n.height?o.height?"#E74A3B":"#3CBC81":""},children:[e.jsx(Z,{type:"number",id:"height",name:"height",placeholder:"Enter your height",onChange:r,onBlur:u,value:p.height,style:{borderColor:n.height?o.height?"#E74A3B":"#3CBC81":""},"aria-label":"Height Input"}),e.jsx(_,{style:{display:p.height?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:o.height&&n.height?e.jsx(C,{children:e.jsx("use",{href:x+"#icon-error"})}):e.jsx(C,{children:e.jsx("use",{href:x+"#icon-correct"})})})]}),e.jsx(y,{name:"name",component:ie}),e.jsx(O,{children:"Weight"}),e.jsxs(X,{style:{borderColor:n.weight?o.weight?"#E74A3B":"#3CBC81":""},children:[e.jsx(Z,{type:"number",id:"weight",name:"weight",placeholder:"Enter your weight",onChange:r,onBlur:u,value:p.weight,style:{borderColor:n.weight?o.weight?"#E74A3B":"#3CBC81":""},"aria-label":"Weight Input"}),e.jsx(_,{style:{display:p.weight?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:o.weight&&n.weight?e.jsx(C,{children:e.jsx("use",{href:x+"#icon-error"})}):e.jsx(C,{children:e.jsx("use",{href:x+"#icon-correct"})})})]}),e.jsx(y,{name:"name",component:ie}),e.jsxs(ni,{children:[e.jsx(ee,{type:"submit",children:"Next"}),e.jsx(ee,{type:"button",onClick:s,children:"Back"})]})]})})]})]})},oi="/HealthyHub/assets/IllustrationActivity-a9e7c674.png",ai=i.div`
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
`,si=i.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,li=i.img`
  width: 100%;
  height: auto;
`,di=i.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,pi=i.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,ci=i.p`
  font-size: 18px;
  line-height: 1.33;
  color: ${t.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,xi=i(S)`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 438px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`,hi=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`,v=i.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {

    letter-spacing: 0.01em;
  }
`,k=i(z)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${t.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${t.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${t.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }
`,mi=i.div`
  weidth: 100%;
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  @media (min-width: 834px) {
    width: 380px;
    margin: 24px auto 186px auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
    margin: 24px 0 228px 0;
  }
`,te=i.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 0 0 20px 0;
  background-color: ${t.colorPrimaryGreenLite};
  color: ${t.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${t.colorPrimaryWhite};
  }
`;i.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${t.colorSecondaryRed};
`;const gi=({goNext:m,setActivity:s,dataActivity:a,goBack:g})=>{c.useEffect(()=>{const d=`input[type="radio"][value="${a}"]`,o=document.querySelector(d);o&&(o.checked=!0)},[a]);const l=({activity:d})=>{s(Number(d)),m()},h=()=>{g()};return e.jsxs(ai,{children:[e.jsx(si,{children:e.jsx(li,{src:oi,alt:"Physical activity"})}),e.jsxs(di,{children:[e.jsx(pi,{children:"Your Activity"}),e.jsx(ci,{children:"To correctly calculate calorie and water intake"}),e.jsx(b,{initialValues:{activity:a},validationSchema:pe,onSubmit:l,children:e.jsxs(xi,{children:[e.jsxs(hi,{role:"group","aria-labelledby":"activityGroup",children:[e.jsxs(v,{children:[e.jsx(k,{type:"radio",name:"activity",value:"1",required:!0,checked:!0}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(v,{children:[e.jsx(k,{type:"radio",name:"activity",value:"2",required:!0}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(v,{children:[e.jsx(k,{type:"radio",name:"activity",value:"3",required:!0}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(v,{children:[e.jsx(k,{type:"radio",name:"activity",value:"4",required:!0}),"1.725 ​​- if you train fully 6-7 times a week"]}),e.jsxs(v,{children:[e.jsx(k,{type:"radio",name:"activity",value:"5",required:!0}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]}),e.jsxs(mi,{children:[e.jsx(te,{type:"submit",children:"Sign Up"}),e.jsx(te,{type:"button",onClick:h,children:"Back"})]})]})})]})]})},ui={name:"",email:"",password:"",goal:"1",gender:"male",height:"",weight:"",age:"",activity:1},wi=()=>{const m=oe(),[s,a]=c.useState(1),[g,l]=c.useState(""),[h,d]=c.useState(""),[o,n]=c.useState(""),[r,u]=c.useState("1"),[p,$]=c.useState("male"),[w,N]=c.useState(""),[T,Y]=c.useState(""),[F,H]=c.useState(""),[q,U]=c.useState(1),R=()=>{const j={name:g,email:h,password:o,goal:r,gender:p,height:Number(w),weight:Number(T),age:Number(F),activity:Number(q)};try{m(ae(j)),a(1),l(""),d(""),n(""),u(1),$("male"),N(""),Y(""),H(""),U(1)}catch(ne){setErrorsMessage(ne)}},P=()=>{a(j=>j+1)},B=()=>{a(j=>j-1)};return e.jsx(b,{initialValues:ui,onSubmit:R,children:e.jsxs("div",{children:[s===1&&e.jsx("div",{children:e.jsx(ke,{goNext:P,setName:l,setEmail:d,setPassword:n})}),s===2&&e.jsx("div",{children:e.jsx(Ee,{goNext:P,goBack:B,setGoal:u,dataGoal:r})}),s===3&&e.jsx(Ke,{goNext:P,goBack:B,setAge:H,setGender:$,dataGender:p,dataAge:F}),s===4&&e.jsx(ri,{goNext:P,goBack:B,setHeight:N,setWeight:Y,dataHeight:w,dataWeight:T}),s===5&&e.jsx(gi,{goNext:R,goBack:B,setActivity:U,dataActivity:q})]})})},ki=()=>e.jsx("section",{children:e.jsx(wi,{})});export{ki as default};
