import React from 'react'
import './Plans.css'

function Plans() {
    const pricingData = [{
        title:'Regular Member',
        price:'$o',
        duratiom:'/month',
        color:'#fff',
        features:[
            'unlimited access to the courses',
            'customer support',
            'personal mentor',
            'standard option',
            '5 classes per week'
        ]

    },
    {
        title:'Premimu Member',
        price:'$100',
        duratiom:'/month',
        color:'#6f55f2',
        features:[
            'unlimited access to the courses',
            'customer support',
            'personal mentor',
            'standard option',
            '5 classes per week'
        ]

    },
    {
        title:'Standard Member',
        price:'$5o',
        duratiom:'/month',
        color:'#fff',
        features:[
            'unlimited access to the courses',
            'customer support',
            'personal mentor',
            'standard option',
            '5 classes per week'
        ]

    }

    ];
  return (
    <div className='container'>
        <div className='pricing_top'>
        <h2 className='section_title'>Premium Pricing Plans</h2>
        <p>Unlock elite tech services with our Premium Pricing plan and soar ahead of the compatetion </p>
      
        </div>
        <div className='pricing_wrapper'>
            {pricingData.map((pricingItem, index)=>(

            <div className='pricing_item' key={index}>
           <div className='pricing_card-top' style={{background:pricingItem.color}}>
            <h2 className='section_title'>{pricingItem.title}</h2>
            <h2 className='pricing_section_title'>
                {pricingItem.price}<span>{pricingItem.duratiom}</span>
            </h2>
           </div>
           <div className='services'>
            <ul>
                {pricingItem.features.map((feature,index)=>(
                    <li key={index}>{feature}</li>
                ))}


            </ul>
            <button className='register-btn'>Join</button>
           </div>
           </div>
                
            ))}

       
        
      
       </div>

      
    </div>
  )
}

export default Plans
