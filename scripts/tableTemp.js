const config = {
  dataFields: {
    rows: ["code", "view", "component", "data"],
    cols: ["req_code", "req_view", "req_component", "req_data"],
    val: "value"
  },
  displayNames: {
    rows: ["Код", "Представление", "Компонент", "Что тут?"],
    cols: ["Код ", "Представление ", "Компонент ", "Что тут? "],
    val: "Значение"
  }
};

let traceabilityData = [
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},

  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},

  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.1", data: "что тут 2.1.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},

  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?",  
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},
 
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},
 
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.2", data: "что тут 2.2.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},   

  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
    req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.1 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},
   
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.2 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.0},

  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.1", req_data: "что тут 1.1.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.2", req_data: "что тут 1.2.3 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.1 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.2 ?", value: 0.0},
  {code: "SYS-001", view: "Представление 2", component: "Компонент 2.3", data: "что тут 2.3.3 ?", 
   req_code: "SEC-01", req_view: "Представление 1", req_component: "Компонент 1.3", req_data: "что тут 1.3.3 ?", value: 0.1},   
  
  
 ];

function transformData(data) {
return data.map(item => {
    const newItem = {};
    config.dataFields.rows.forEach((field, i) => newItem[config.displayNames.rows[i]] = item[field]);
    config.dataFields.cols.forEach((field, i) => newItem[config.displayNames.cols[i]] = item[field]);
    newItem[config.displayNames.val] = item[config.dataFields.val];
    return newItem;
  });
}

// Global variable to track active input
var activePivotInfo = null;

$(document).on('click', function(event) {
    if (activePivotInfo && !$(event.target).closest('.pvtVal').length) {
        let td = activePivotInfo.input.parentElement;
        saveAndRemoveInput(activePivotInfo.input);
      

        let index = traceabilityData.findIndex(row => {
          let flag = true;
          for(let i = 0; i < config.dataFields.rows.length; ++i) {
            flag = row[config.dataFields.rows[i]] === activePivotInfo.filters[config.displayNames.rows[i]];
            if(!flag){
              break;
            }
          }

          if(flag){
            for(let i = 0; i < config.dataFields.cols.length; ++i) {
              flag = row[config.dataFields.cols[i]] === activePivotInfo.filters[config.displayNames.cols[i]];
              if(!flag){
                break;
              }
            }
          }

          return flag;

        });

        let newValue = parseFloat($(activePivotInfo.input).val());

        if(newValue === null || newValue < 0){
          newValue = 0;
        }
        else if(newValue > 9.9) {
          newValue = 9.9
        }
        newValue.toFixed(1);
        

        traceabilityData[index].value = newValue;

        calculateRow(td);
        calculateColumn();
        
        activePivotInfo = null;
    }
});

$(document).on('keyup', function(e) {
    if (e.key === "Escape" && activePivotInfo) {
        $(activePivotInfo.input).remove();
        activePivotInfo = null;
    }
});

function saveAndRemoveInput(inputElement) {
    var cell = $(inputElement).parent();
    var value = $(inputElement).val();
    
    if (!isNaN(value) && value >= 0 && value <= 9.9) {
        var roundedValue = Math.round(parseFloat(value) * 10) / 10;
        cell.attr("data-value", roundedValue);
        cell.html(roundedValue.toFixed(1));
    }
    else if (isNaN(value) || value <= 0){
      var roundedValue = 0;
        cell.attr("data-value", roundedValue);
        cell.html(roundedValue.toFixed(1));
    }
    else{
      var roundedValue = 9.9;
        cell.attr("data-value", roundedValue);
        cell.html(roundedValue.toFixed(1));
    }
    $(inputElement).remove();
}

function makeMatrix(transposed) {
  $("#pivotContainer")
        .empty()
        .removeData()
        //.off();
    let data = transformData(traceabilityData);
    let newCols = transposed ? config.displayNames.rows : config.displayNames.cols;
    let newRows = transposed ? config.displayNames.cols : config.displayNames.rows;
    $("#pivotContainer").pivotUI(data, {
        rows: newRows,
        cols: newCols,
        vals: [config.displayNames.val],
        aggregatorName: "Sum",
        rendererName: "Table",
        rendererOptions: {
            table: {
              clickCallback: function (e, value, filters, pivotData) {
                if (activePivotInfo) {
                  saveAndRemoveInput(activePivotInfo.input);
                  calculateRow(e.srcElement);
                  calculateColumn();
                }
                
                var cs = 'editable_' + $(e.srcElement).attr('class').replace(' ', '_').replace(' ', '_');
                // Get the current displayed value (formatted with 1 decimal)
                var currentValue = $(e.srcElement).text().trim();
                // If empty, use empty string, otherwise parse the number
                var v = currentValue === '' ? '' : parseFloat(currentValue).toFixed(1);
                
                if (!$(e.srcElement).children().length > 0) {
                    $(e.srcElement).empty();
                    var input = $("<input class='" + cs + "' type='number' min='0' max='9.9' step='0.1' value='" + v + "'/>");
                    $(e.srcElement).append(input);
                    activePivotInfo = {input: $(e.srcElement).find('input')[0], filters: filters};
                    
                    input.focus().select().keypress(function (event) {
                        var keycode = (event.keyCode ? event.keyCode : event.which);
                        if (keycode == '13') {
                          console.log(keycode);
                            var newValue = parseFloat(input.val());
                            
                            // Validate input
                            if (isNaN(newValue) || newValue < 0) {
                              newValue = 0;
                            }
                            if (newValue > 9.9) {
                              newValue = 9.9;
                            }
                            
                            // Round to one decimal place
                            newValue = Math.round(newValue * 10) / 10;
                            
                            $(e.srcElement).attr("data-value", newValue);
                            $(e.srcElement).html(newValue.toFixed(1)); // Format with 1 decimal
                            $(e.srcElement).remove('input');

                            let index = traceabilityData.findIndex(row => {
                              let flag = true;
                              for(let i = 0; i < config.dataFields.rows.length; ++i) {
                                flag = row[config.dataFields.rows[i]] === filters[config.displayNames.rows[i]];
                                if(!flag){
                                  break;
                                }
                              }

                              if(flag){
                                for(let i = 0; i < config.dataFields.cols.length; ++i) {
                                  flag = row[config.dataFields.cols[i]] === filters[config.displayNames.cols[i]];
                                  if(!flag){
                                    break;
                                  }
                                }
                              }

                              return flag;

                            });

                            traceabilityData[index].value = newValue;
            
                            calculateRow(e.srcElement);
                            calculateColumn();
                        }
                    });
                }
            }
            }
        },
        onRefresh: function(config) {
            // Format all numbers to 1 decimal place on render
            $(".pvtVal").each(function() {
                var val = parseFloat($(this).attr("data-value"));
                if (!isNaN(val)) {
                    $(this).html(val.toFixed(1));
                }
            });
        }
    });
    
};

let transposed = false;

makeMatrix(transposed);

$(document).keydown(function (e) {
  if (e.key === "Escape") { // escape key maps to keycode `27`
      $(".pvtTable tr td").each(function (i, v) {
          if ($(v).children().length > 0) {
              // Restore original value
              var originalValue = $(v).attr("data-value") || "0.0";
              $(v).html(parseFloat(originalValue).toFixed(1));
              $(v).remove('input');
          }
      });
  }
});

function calculateRow(td) {
  $tr = $(td).parent();
  $lastTd = $tr.find("td:last");
  var sum = 0;
  $tr.find('td').not(':last').each(function (i, v) {
      var data = ($(v).attr("data-value") == "null" ? 0 : $(v).attr("data-value"));
      sum +=  parseFloat(data);
  });
  $lastTd.attr("data-value");
  $lastTd.html(sum.toFixed(1));

  if (sum === 0) {
    $lastTd.addClass('zero-total');
  } else {
    $lastTd.removeClass('zero-total');
  }

}

function calculateColumn() {

  $(".pvtTable tbody tr:first td").each(function (index, val) {
      var total = 0;
      $(".pvtTable tbody tr").not(':last').each(function (i, v) {
          var value = $('td.pvtVal', this).eq(index).attr("data-value");
          var data = (value == "null" ? 0 : value);
          total += parseFloat(data);
      });
      let $totalCell = $('.pvtTable tbody tr td.colTotal').eq(index);
      $totalCell.attr("data-value", total);
      $totalCell.html(total.toFixed(1));

      if (total === 0) {
        $totalCell.addClass('zero-total');
      } else {
        $totalCell.removeClass('zero-total');
      }
      
  });

  var grandTotal = 0;
  $(".pvtTable tbody tr td.colTotal").each(function (i, v) {
      var d = ($(v).attr("data-value") == "null" ? 0 : $(v).attr("data-value"));
      grandTotal +=  parseFloat(d);
  });
  let $grandTotalCell = $("td.pvtGrandTotal");
  $grandTotalCell.attr("data-value", grandTotal);
  $grandTotalCell.html(grandTotal.toFixed(1));

  if (grandTotal === 0) {
    $grandTotalCell.addClass('zero-total');
  } else {
    $grandTotalCell.removeClass('zero-total');
  }
}

setTimeout(() => {
  const columnHeadersContainer = document.querySelector("thead").children;
  for(let i = 0; i < columnHeadersContainer.length - 1; ++i) {
    columnHeadersContainer[i].children[i===0?1:0].style.backgroundColor = "#53e153";
  }

  const rowHeaders = document.querySelector("thead").lastChild.children;
  for(let i = 0; i < rowHeaders.length - 1; ++i) {
    rowHeaders[i].style.backgroundColor = "#49d0d0";
  }

  const bigTable = document.getElementsByClassName("pvtUi")[0].children;
  bigTable[0].style.display = "none";
  bigTable[1].style.display = "none";
  bigTable[2].firstChild.style.display = "none";

  const totals = document.getElementsByClassName("pvtTotalLabel");
  totals[0].textContent = "Итого";
  totals[1].textContent = "Итого";

  $('.pvtTable td.pvtTotal, .pvtTable td.pvtGrandTotal').each(function() {
    var value = parseFloat($(this).attr("data-value")) || 0;
    if (value === 0) {
      $(this).addClass('zero-total');
    }
  });

}, 50);

document.getElementById("transposeBtn").addEventListener("click", (e) => {
  $("#pivotContainer").empty();
  transposed = !transposed;
  makeMatrix(transposed);
  setTimeout(() => {
    const columnHeadersContainer = document.querySelector("thead").children;
    for(let i = 0; i < columnHeadersContainer.length - 1; ++i) {
      columnHeadersContainer[i].children[i===0?1:0].style.backgroundColor = "#53e153";
    }
  
    const rowHeaders = document.querySelector("thead").lastChild.children;
    for(let i = 0; i < rowHeaders.length - 1; ++i) {
      rowHeaders[i].style.backgroundColor = "#49d0d0";
    }
  
    const bigTable = document.getElementsByClassName("pvtUi")[0].children;
    bigTable[0].style.display = "none";
    bigTable[1].style.display = "none";
    bigTable[2].firstChild.style.display = "none";
  
    const totals = document.getElementsByClassName("pvtTotalLabel");
    totals[0].textContent = "Итого";
    totals[1].textContent = "Итого";
  
    $('.pvtTable td.pvtTotal, .pvtTable td.pvtGrandTotal').each(function() {
      var value = parseFloat($(this).attr("data-value")) || 0;
      if (value === 0) {
        $(this).addClass('zero-total');
      }
    });
  
  }, 50);
  
})