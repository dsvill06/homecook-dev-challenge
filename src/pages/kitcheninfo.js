import React from 'react'

const KitchenInfo = props => {
  const {kitchen} = props.location.state
  return (
    <div class="fontLink ">
      <h1 class="text-3xl m-10 text-left underline pl-3">
        {kitchen.name}
      </h1>
      <div class="grid grid-cols-2 kitcheninfo">
        <img class="ml-10 rounded-xl shadow-lg position-absolute w-[620px] h-[400px] object-cover sm:w-screen" alt='Kitchen' src='https://www.citiindustries.com.au/wp-content/uploads/2018/09/kitchen-flooring.jpg'/>
      </div>
    </div>
  )
}

export default KitchenInfo
