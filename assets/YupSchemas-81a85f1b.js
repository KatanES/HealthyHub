import{c as r,d as e,e as a}from"./index.esm-3486fdf3.js";const i=r().shape({name:e().required("Name is required"),email:e().email("Invalid email address").required("Email is required"),password:e().min(8,"Password must be at least 8 characters").required("Password is required")}),o=r().shape({email:e().email("Invalid email address").required("Email is required"),password:e().min(8,"Password must be at least 8 characters").required("Password is required")}),t=r({goal:e().required("Choose one of these fields")}),m=r({gender:e().required("Choose one of these fields"),age:a().label("Age").min(1,"Must be a number from 1 to 200").max(200,"Must be a number from 1 to 200").required("Age required")}),d=r({height:a().label("Height").min(1,"Must be a number from 1 to 300").max(300,"Must be a number from 1 to 300").required("Height is required"),weight:a().label("Weight").min(1,"Must be a number from 1 to 500").max(500,"Must be a number from 1 to 500").required("Weight is required")}),u=r({activity:a().required("Choose one of these fields")});export{m as A,d as B,i as S,t as Y,u as a,o as b};