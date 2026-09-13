import React, { use, useState } from 'react';
import type { ITechnologyType } from '../types/type';
import { FaStar} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Bounce, toast } from 'react-toastify';



interface ITechnologyPromiseType {
    technologyPromise : Promise<ITechnologyType[]>
}
const Technology = ( {technologyPromise} :  ITechnologyPromiseType) => {
    // console.log(technologyPromise);
    const technologyData = use<ITechnologyType[]>(technologyPromise);
    // console.log(technologyData);
   

     const [addTechnology, setAddTechnology] = useState <ITechnologyType[]>([])

     const handleOnClick = (technology : ITechnologyType) => {
        const validation =  addTechnology.find( items => items.id === technology.id);

         if(!validation){

             setAddTechnology([...addTechnology, technology]);
             toast.success(`${technology.name} has been added to your stack!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
         }
         else{
              toast.error(`${technology.name} is already in your stack!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
         }

        // alert(`${technology.name} has been added to your stack!`);
        
        
     }



    return (
        <section className=' container mx-auto  '>
            <div className=' mt-15 mb-7 '>
                <h2 className='text-4xl font-extrabold text-[#0F172A] '>Explore the <span className=' text-transparent bg-clip-text bg-linear-to-r from-[#EC4899] to-[#8B5CF6]' >Technologies</span></h2>
                <p className='text-[16px] text-[#64748B] mt-2 '>Pick one technology per category to build your ideal stack.</p>
            </div>

                 <div className=' grid grid-cols-12 container mx-auto gap-5 items-start'>
                    <div className=' col-span-9 '>                  

                            <div className = ' grid  grid-cols-3 gap-5' >
                                {
                                    technologyData.map( (technology) =>{
                                        return (
                                            <div key={technology.id} className='technology-card border-2 shadow-xl border-[#F1F5F9] space-y-2 p-5 rounded-md'>
                                               
                                                    <div className='flex justify-between items-center '>
                                                        <img src={technology.icon} alt={technology.name} className=' w-15 h-15 ' />

                                                        {/* <div className=" badge badge-info ">{technology.badge}</div> */}
                                                        <div className={`${technology.bgColor} ${technology.color} `}>{technology.badge}</div>
                                                    </div>

                                                    <h2 className='text-[18px] font-bold text-[#0F172A] '> {technology.name}</h2>
                                                    <p className='text-sm text-[#64748B] line-clamp-3 min-h-15  '>{technology.description}</p>

                                                    <div className='flex justify-between items-center my-5 '>
                                                        
                                                        <button className="btn btn-sm">{technology.category}</button>
                                                        <p className='text-[#64748B] text-sm '>{technology.difficulty}</p>

                                                        <div className='flex gap-2 items-center'>
                                                            <FaStar className=' text-amber-400'/>
                                                            <p> {technology.rating}</p>
                                                            
                                                        </div>
                                                    </div>
                                                    <button onClick = {()=>handleOnClick (technology)} className='text-sm bg-[#0A0F1D] text-white py-2 w-full rounded-xl cursor-pointer hover:bg-[#030836]'>Add to Stack</button>

                                                </div>
                                            )
                                        } )
                                    }
                            </div>
                    </div>

                                    {/* selected technology :  */}
                            <div className=' p-5 border-2 shadow-sm border-[#F1F5F9] rounded-2xl col-span-3  '>
                                
                                <h2 className='text-[16px] font-bold text-[#0F172A] '>Your Stack</h2>

                                {/* <p className='text-[#94A3B8] text-sm mt-2.5 mb-4'> No technologies selected yet.</p> */}
                                <p className='text-[#94A3B8] text-sm mt-2.5 mb-4'> {addTechnology.length} technologies selected</p>
                                {
                                    addTechnology.length === 0 ?  (
                                        <div className=' py-6 px-15 border border-[#E2E8F0] border-dashed  rounded-xl'>
                                                  <p className='text-[#94A3B8] '>Your stack is empty.</p>
                                </div>
                                    ) : (
                                        <div className='space-y-3'>
                                            {addTechnology.map((tech, index) => (
                                                <div key={index} className='flex items-center justify-between p-3 bg-[#F1F5F9] rounded-lg'>
                                                    <div>
                                                        <img src={tech.icon} alt={tech.name} className='w-10 h-10' /> 
                                                    </div>
                                                    <div className='flex-1 ml-3'>
                                                        <h3 className='font-medium text-[#0F172A]'>{tech.name}</h3>
                                                        <p className='text-[#94A3B8] text-sm'>{tech.category}</p>

                                                    </div>

                                                    <div>
                                                        <AiOutlineClose />
                                                    </div>
                                                   
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                


                            </div>

                </div>
            
            
         </section>
    );
};

export default Technology;