import React, { useState } from 'react'
import { BagIcon, KeyIcon, SettingsIcon, UserIcon, WebIcon } from '../assets/svgIcons'

const Form = () => {
  const [showFowarders, setShowFowarders] = useState(false);
  const [groups, setGroups] = useState([]);
  const handleAddGroup = (group) => {
    setGroups((prev) => {
        if(!group) return prev;
        const copyOfPrev = [...prev];
        if(copyOfPrev.indexOf(group) < 0) {
          copyOfPrev.push(group);  
        }
        return copyOfPrev
    })
  }
  const handleRemoveGroup = (group) => {
    setGroups((prev) => {
        const copyOfPrev = [...prev];
        if(copyOfPrev.indexOf(group) > -1) {
          copyOfPrev.splice(copyOfPrev.indexOf(group), 1);  
        }
        return copyOfPrev
    })
  }
  return (
    <div>
        <div className='max-w-[1200px] mx-auto w-[90%]'>
            <div className='flex gap-7 flex-col md:flex-row'>
                <div className='h-full rounded-3xl bg-[#111] p-6 flex-1'>
                    <h1 className='text-lg text-white font-semibold'>Customer Details</h1>
                    <div className='py-5 flex flex-col gap-y-5'>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500'>
                            <div className='text-white text-2xl'>
                                <UserIcon />
                            </div>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Name</label>
                                <input type="text" placeholder='Enter customer name' className='outline-none border-none bg-transparent text-white placeholder:text-[#555] font-semibold w-full h-full tracking-wider' />
                            </div>
                        </div>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500'>
                            <div className='text-white text-2xl'>
                                <KeyIcon />
                            </div>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Code</label>
                                <input type="text" placeholder='Enter code' className='outline-none border-none bg-transparent text-white placeholder:text-[#555] font-semibold w-full h-full tracking-wider' />
                            </div>
                        </div>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500'>
                            <div className='text-white text-2xl'>
                                <WebIcon />
                            </div>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Sub-domain</label>
                                <input type="text" placeholder='Enter sub-domain' className='outline-none border-none bg-transparent text-white placeholder:text-[#555] font-semibold w-full h-full tracking-wider' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-h-full rounded-3xl bg-[#111] p-6 flex-1'>
                    <h1 className='text-lg text-white font-semibold'>Project</h1>
                    <div className='py-5 flex flex-col gap-y-5'>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500'>
                            <div className='text-white text-2xl'>
                                <BagIcon />
                            </div>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Project Name</label>
                                <input type="text" placeholder='Enter project name' className='outline-none border-none bg-transparent text-white placeholder:text-[#555] font-semibold w-full h-full tracking-wider' />
                            </div>
                        </div>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500'>
                            <div className='text-white text-2xl'>
                                <SettingsIcon />
                            </div>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Service Type</label>
                                <select placeholder='Enter code' className='outline-none border-none bg-[#222] text-white font-semibold w-full h-full tracking-wider'>
                                    <option>Select service type</option>
                                    <option>Service 1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-3 items-center my-9'>
                <button className={`size-10 rounded-lg ${showFowarders ? "bg-purple-800" : "bg-[#444]"}`} onClick={() => setShowFowarders(!showFowarders)}>
                </button>
                <p className='text-white font-medium'>Create Fowarders</p>
            </div>
            <div className='rounded-3xl bg-[#111] p-6 flex-1'>
                    <h1 className='text-lg text-white font-semibold'>IdP Configuration</h1>
                    <div className='py-5 flex flex-col gap-y-5'>
                        <div className='flex gap-x-4 px-4 py-3 bg-[#222] items-center rounded-lg border-b-2 border-transparent focus-within:border-purple-800 transition-all duration-500 max-w-[500px]'>
                            <div className='flex flex-col gap-y-1 flex-1'>
                                <label className='text-sm font-bold text-[#888] tracking-wider'>Group</label>
                                <select placeholder='Enter code' className='outline-none border-none bg-[#222] text-white font-semibold w-full h-full tracking-wider' onChange={(e) => handleAddGroup(e.target.value)}>
                                    <option>Select group</option>
                                    <option value={"Viewer"}>Viewer</option>
                                    <option value={"Editor"}>Editor</option>
                                    <option value={"Admin"}>Admin</option>
                                </select>
                            </div>
                        </div>
                        {
                            groups.length > 0 && (
                                <div>
                                    <p className='text-white font-semibold py-3'>Click to remove</p>
                                    <div className='flex flex-wrap gap-3'>
                                        {
                                            groups.map((val, i) => (
                                                <button key={i} onClick={() => handleRemoveGroup(val)} className='text-white px-4 py-1 font-bold rounded-full bg-purple-800'>{val}</button>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Form