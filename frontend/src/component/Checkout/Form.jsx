import React from 'react'

const Form = () => {
  return (
    <div className='border rounded-md p-3 '>
     <div className="flex flex-col">
  <form className="flex flex-col space-y-2">
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>Name</label>
      <input type="text" className='checkout-input'/>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>Email</label>
      <input type="text" className='checkout-input'/>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>Address</label>
      <input type="text" className='checkout-input'/>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>City</label>
      <input type="text" className='checkout-input'/>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>Country</label>
      <input type="text" className='checkout-input'/>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className='checkout-label'>Postal Code</label>
      <input type="text" className='checkout-input'/>
    </div>
  </form>
</div>

    </div>
  )
}

export default Form