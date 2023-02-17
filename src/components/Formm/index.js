 
import El from '../../utils/EL';
import './index.css'
const Formm = () => {   

const nav = El ({
  element:'div',
    className:'flex bg-white-200  ',
    style:'margin:10%',
    children:[
    El({
    element:'nav',
    className: '  gap-5 p mx-auto pt-2 shadow-sm',
    style:"border:solid 1.8px #d3d4d4;border-radius:10px;  padding:20px; width:450px;",
    children:[El({
        element:"div",
        clasName:'',
        children: [El({
          element:'img',
          className:'w-30  ',
          style:"margin:10px 10px 10px 150px; ",
          src:'https://www.digikala.com/statics/img/svg/logo.svg'
      })
   ] }),
   El({
    element:'h1',
    innerText:"ورود | ثبت نام ",
    className:' text-right p-4 text-lg ',
    style:'font-weight:bold'
  }),
  El({
    element:'div',
    className:'text-xs text-right pr-2',
    children:[El({
      element:'p',
      innerText:"!سلام "
    }),
El({
  element:'p',
  innerText:"لطفا شماره موبایل خود را وارد کنید" ,
  className:'pb-5 pt-4 '

})
]}),
    
        El({
          element:'div',
          children:El({
            element:"div",
                style:"",
                className:"",
                children:[El({
                    element:"input",
                    className:"ml-5",
                    style:"background:none;width:370px; height:50px; border:solid 1.8px #54bbbbcd; border-radius:4px",
                    })]          
                 })
        
              }),
El({
  element:"br"
}),
El({
  element:'button',
  innerText:"ورود" ,
  className:"bg-red-500 rounded text-white h-12  text-center ml-5 text-base font-semibold",
      style:"color:var(--white);border-radius:10px; width:370px;",
  onclick:()=> alert ('hi') 
}),

El({
  element:'div',
  className:'text-xs text-center mt-7 mb-3',
  children:[
  El({
    element:'span',
    innerText:" ورود شما به معنای پذیرش "
  }),
El({
element:'a',
innerText:" شرایط دیجی کالا" ,
className:'text-cyan-500'

})  ,
El({
element:'span',
innerText:" و "        
}) , 
El({
element:'span',
innerText:"قوانین حریم‌ خصوصی " ,
className:'text-cyan-500'      
}) ,

El({
element:'span',
innerText:"است "        
}) 
]})
     
]})
    
 ] })


return nav;
          
}
export default Formm;