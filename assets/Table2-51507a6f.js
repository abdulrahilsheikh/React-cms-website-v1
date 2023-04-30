import{j as e}from"./index-e9a5684f.js";const d=({})=>((async()=>{const r=await(await fetch("../../company_table_data.json")).json();console.log(r)})(),e.jsx("section",{className:"bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ",children:e.jsx("div",{className:"mx-auto max-w-screen-xl px-4 lg:px-12",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsxs("form",{className:"flex items-center",children:[e.jsx("label",{htmlFor:"simple-search",className:"sr-only",children:"Search"}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),e.jsx("input",{type:"text",id:"simple-search",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Search"})]})]})}),e.jsxs("div",{className:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0",children:[e.jsxs("button",{type:"button",className:"flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg- focus:outline-none dark:focus:ring-primary-800",children:[e.jsx("svg",{className:"h-3.5 w-3.5 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{clipRule:"evenodd","fill-rule":"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"})}),"Add product"]}),e.jsxs("div",{className:"flex items-center space-x-3 w-full md:w-auto",children:[e.jsxs("button",{id:"actionsDropdownButton","data-dropdown-toggle":"actionsDropdown",className:"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",type:"button",children:[e.jsx("svg",{className:"-ml-1 mr-1.5 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{clipRule:"evenodd","fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})}),"Actions"]}),e.jsxs("div",{id:"actionsDropdown",className:"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",children:[e.jsx("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"actionsDropdownButton",children:e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Mass Edit"})})}),e.jsx("div",{className:"py-1",children:e.jsx("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Delete all"})})]}),e.jsxs("button",{id:"filterDropdownButton","data-dropdown-toggle":"filterDropdown",className:"w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",type:"button",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"h-4 w-4 mr-2 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",clipRule:"evenodd"})}),"Filter",e.jsx("svg",{className:"-mr-1 ml-1.5 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{clipRule:"evenodd","fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})})]}),e.jsxs("div",{id:"filterDropdown",className:"z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsx("h6",{className:"mb-3 text-sm font-medium text-gray-900 dark:text-white",children:"Choose brand"}),e.jsxs("ul",{className:"space-y-2 text-sm","aria-labelledby":"filterDropdownButton",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{id:"apple",type:"checkbox",value:"",className:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),e.jsx("label",{htmlFor:"apple",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"Apple (56)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{id:"fitbit",type:"checkbox",value:"",className:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),e.jsx("label",{htmlFor:"fitbit",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"Microsoft (16)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{id:"razor",type:"checkbox",value:"",className:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),e.jsx("label",{htmlFor:"razor",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"Razor (49)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{id:"nikon",type:"checkbox",value:"",className:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),e.jsx("label",{htmlFor:"nikon",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"Nikon (12)"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{id:"benq",type:"checkbox",value:"",className:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"}),e.jsx("label",{htmlFor:"benq",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"BenQ (74)"})]})]})]})]})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-4 py-3",children:"Product name"}),e.jsx("th",{scope:"col",className:"px-4 py-3",children:"Category"}),e.jsx("th",{scope:"col",className:"px-4 py-3",children:"Brand"}),e.jsx("th",{scope:"col",className:"px-4 py-3",children:"Description"}),e.jsx("th",{scope:"col",className:"px-4 py-3",children:"Price"}),e.jsx("th",{scope:"col",className:"px-4 py-3",children:e.jsx("span",{className:"sr-only",children:"Actions"})})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border-b dark:border-gray-700",children:[e.jsx("th",{scope:"row",className:"px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:'Apple iMac 27"'}),e.jsx("td",{className:"px-4 py-3",children:"PC"}),e.jsx("td",{className:"px-4 py-3",children:"Apple"}),e.jsx("td",{className:"px-4 py-3",children:"300"}),e.jsx("td",{className:"px-4 py-3",children:"$2999"}),e.jsxs("td",{className:"px-4 py-3 flex items-center justify-end",children:[e.jsx("button",{id:"apple-imac-27-dropdown-button","data-dropdown-toggle":"apple-imac-27-dropdown",className:"inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100",type:"button",children:e.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})}),e.jsxs("div",{id:"apple-imac-27-dropdown",className:"hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600",children:[e.jsxs("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"apple-imac-27-dropdown-button",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Show"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Edit"})})]}),e.jsx("div",{className:"py-1",children:e.jsx("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Delete"})})]})]})]})})]})}),e.jsxs("nav",{className:"flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4","aria-label":"Table navigation",children:[e.jsxs("span",{className:"text-sm font-normal text-gray-500 dark:text-gray-400",children:["Showing",e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"1-10"}),"of",e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"1000"})]}),e.jsxs("ul",{className:"inline-flex items-stretch -space-x-px",children:[e.jsx("li",{children:e.jsxs("a",{href:"#",className:"flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsx("span",{className:"sr-only",children:"Previous"}),e.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:"1"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:"2"})}),e.jsx("li",{children:e.jsx("a",{href:"#","aria-current":"page",className:"flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",children:"3"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:"..."})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:"100"})}),e.jsx("li",{children:e.jsxs("a",{href:"#",className:"flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsx("span",{className:"sr-only",children:"Next"}),e.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})})]})]})]})})}));export{d as default};
