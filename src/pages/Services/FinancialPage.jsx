import React from 'react'
import { FaArrowDown, FaArrowUp, FaWifi, FaShoppingBag,} from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi'; 
import FinancialCard from '../../components/reUsableComponents/ServiceFinancial/FinancialCard'
import { RiH1 } from 'react-icons/ri';
import imagepath from '../../assets/images/Ellipse309.png'

const FinancialPage = () => {
  const handleCardClick = (name, date, amount) => {
    console.log(`Card clicked: ${name} on ${date} with amount: ${amount}`);
 }
  return (

    <div className=" bg-light-gray flex flex-col justify-between px-4 md:w-full mx-auto h-auto md:flex-row md:justify-between gap-8   ">

        <div className='md:w-1/3 md:ml-3 md:mt-10'>
    <div className="flex items-center mt-7 ">
        <img
          className="w-12 h-12 rounded-lg object-cover"
          src={imagepath}
          alt="Profile"
        />
        <div className="ml-4">
          <p className="text-sm font-medium text-profilefont">Lasso Kayne</p>
          <p className="text-profilefont font-semibold">Welcome Back!</p>
        </div>
      </div>
      </div>

      <div className='md:w-2/3 w-full mr-12 md:mt-10'>
       <div className="grid grid-cols-2 gap-4 mt-6 ">
       <div className="bg-incomepurple1   shadow-xl p-4 rounded-xl flex justify-between items-center">
       <FaArrowUp className="text-incomepurple1 text-xl bg-primary rectangle-rounded-lg w-10 h-10 p-2" />
         <div>
           <p className="text-sm text-primary font-semibold">Income</p>
           <p className="text-lg font-bold text-primary">$21,000</p>

         </div>
        
       </div>
       <div className="bg-expenditurepink shadow-xl p-4 rounded-xl flex justify-between items-center">

       <FaArrowDown className="text-expenditurepink text-xl bg-primary rectangle-rounded-lg w-10 h-10 p-2" />
         <div >
          <p className="text-sm text-primary font-semibold">Expenditure</p>
           <p className="text-lg font-bold text-primary">$11,000</p>

         </div>
        
       </div>
     </div>
     <div className="bg-gray-500 p-6 mt-6 rounded-xl shadow-xl">

        <p className="text-lg font-semibold text-primary">Lasso Kayne</p>
        <p className="text-sm tracking-wider font-bold mt-6 text-white">4551 5667 8886 7775</p>
        <p className="mt-6 font-semibold text-primary">Account Balance</p>
=
        <p className="text-2xl font-semibold  text-yellow-50">$121,000</p>
      </div>
      </div>
      <div className='md:w-3/3 md:w-full md:mt-10'>
      <div className="mt-6 h-screen">
        <div className='flex justify-between'>
        <h3 className="text-md font-semibold text-profilefont">Transactions</h3>
        <button
          
          className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <FiMoreVertical size={24} />
        </button>
        </div>
        
        <div className="space-y-4 mt-4">
            {/* <FinancialCard
            name= "Aswin"
            date= "22 September 2021"
            amount= "$22"
            
            /> */}

          <div onClick={() => handleCardClick("Sri Rajan", "22 September 2021", "$22")} className="flex justify-between items-center bg-primary p-4 rounded-xl shadow-lg">
            <div  className="flex items-center">
              <FaShoppingBag className="text-vector_blue text-xl" />

              <div  className="ml-4">
                <p className="text-sm text-profilefont font-semibold">Sri Rajan</p>
                <p className="text-xs text-profilefont font-semibold">22 September 2021</p>
              </div>
            </div>

            <p className="text-amount_red">$22</p>
          </div>

          <div onClick={() => handleCardClick("Sri Rajan", "22 September 2021", "$22")} className="flex justify-between items-center bg-primary p-4 rounded-xl shadow-lg">
            <div className="flex items-center">
              <FaWifi className="text-vector_blue text-xl" />

              <div className="ml-4">
                <p className="text-sm text-profilefont font-semibold">Sofiya</p>
                <p className="text-xs text-profilefont font-semibold">14 September 2021</p>
              </div>
            </div>

            <p className="text-amount_red">$120</p>
          </div>
          <div onClick={() => handleCardClick("Sri Rajan", "22 September 2021", "$22")} className="flex justify-between items-center bg-primary p-4 rounded-xl shadow-lg ">
            <div className="flex items-center">
              <FaShoppingBag className="text-vector_blue text-xl" />

              <div className="ml-4">
                <p className="text-sm  text-profilefont font-semibold">Sofiya</p>
                <p className="text-xs text-profilefont font-semibold ">14 September 2021</p>
              </div>
            </div>

            <p className="text-amount_red">$120</p>

          </div>
        </div>
        </div> 
      </div>

  
     </div>

  )
}

export default FinancialPage