import React from 'react'
import ButtonComponent from '../reUsableComponents/ButtonComponent'
import ModalComponent from '../../components/reUsableComponents/ModalComponent'

const DeclineInput = ({isOpen, onClose, getApiCall}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 mt-4">
        <form onSubmit={getApiCall}></form>
            <input
              type="text"
              placeholder="Title"
              className="h-14 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl border border-[#5E6366] outline-none"
            />

            <textarea
              placeholder="Description"
              className="min-h-40 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl border border-[#5E6366] outline-none"
            />

            <div className="relative bg-primary h-14 px-4 py-2 shadow-[0px_4px_4px_0px_#00000040] rounded-xl">
              <input
                type="file"
                className="opacity-0 absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
              />

              <img
                src="/uploadimg-icon.svg"
                alt="upload data"
                className=" absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-0"
              />
            </div>
          </div>

          <div className="mt-4" onClick={onClose}>
            <ButtonComponent
              type=""
              btnAction=""
              label="Decline"
              bgColor="#670200"
              width="100%"
              height="52px"
            />

            <ModalComponent
              isOpen={isOpen}
              onClose={onClose}
              width="300px"
              height="170px"
              children={
                <div className="flex items-center justify-center h-full">
                  <div>
                    <p className='text-center mb-4'>Are you sure you want to decline?</p>
                    <ButtonComponent
                      type="submit"
                      label="Decline"
                      bgColor="#1D1F2A"
                      width="100%"
                      height="46px"
                      onClick={()=>getApiCall("Conform Decline")}
                    />
                  </div>
                </div>
              }
            />
          </div>
    </div>
  )
}

export default DeclineInput;