import './css/input.css'


function Dashboard (){
    return (
        <>
            <div className='containerRoot flex flex-row h-full'>
                
                {/* navigation Start */}
                <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col static'>
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]'/>
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)] '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center  '>
                                 <img src="/img/imgNavbar/dashboard 1.png" className='w-full h-[24px] mr-2' alt="" />
                                 <p className='text-black '>dashboard</p>
                             </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8  '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                 <img src="/img/imgNavbar/writer 1.png" className='w-full h-[24px] mr-2' alt="" />
                                 <p className='text-black '>editor</p>
                             </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                 <img src="/img/imgNavbar/jadwal.png" className='w-full h-[24px] mr-2' alt="" />
                                 <p className=' text-black'>jadwal</p>
                             </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                 <img src="/img/imgNavbar/database 1.png" className='w-full h-[24px] mr-2' alt="" />
                                 <p className=' text-black'>database</p>
                             </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                 <img src="/img/imgNavbar/tentang kami.png" className='w-[24px] h-[24px] mr-2' alt="" />
                                 <p className=' text-black'>tentang kami</p>
                             </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                             <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                 <img src="/img/imgNavbar/bantuan.png" className='w-full h-[24px] mr-2' alt="" />
                                 <p className=' text-black'>bantuan</p>
                             </button>
                        </li>        
                    </div>
                </div>
                {/* navigation END */}


                
                <div className="containerIsi">

                    {/* top Dashboard */}
                    <div className="containerTop flex flex-row justify-between w-[80vw] ">
                        <h1 className= "text-3xl font-extrabold mr-auto my-auto">
                        Dashboard
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className="border-b-4 rounded-sm border-solid border-black h-5 "/>
                        </div>
                        <div className="containerLogo flex flex-row w-32 mr-3 justify-center items-center">
                            <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                            <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]"/>
                            </div>
                            <div className="containerProfil">
                                <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
                            </div>
                        </div>          
                    </div>
                    {/* Top dashboard end*/}

                    {/* mid dashboard*/}
                    <div className="containerMidDashboard">
                        <div className="container1 w-[70vw] h-[25vh] m-auto mt-5 border-solid border-2 border-[rgba(16,92,140,1)] rounded-xl flex flex-col justify-center items-start text-4xl font-bold">
                            <h1 className='text-4xl font-bold'> Halo Bunda Sari</h1>
                            <h2 className='text-xl font-semibold'>Sudah siap untuk jalani hari ini?</h2>
                            <img src="/img/imgDashboard/gambar1.png" alt="" className='top-3 right-28 absolute h-[32vh]' />   
                        </div>

                        <div className="container2 w-[80vw] h-[17vh] mt-5 border-y-2 border-solid border-[rgba(16,92,140,1)] flex flex-col justify-center ">
                            <h1 className='font-bold text-2xl'>Perkembangan anak</h1>
                            <br />
                            <h2 className='font-medium text-lg'>tambahkan data mengenai deskripsi <br /> tentang perkembangan si buah hati </h2>
                            <button className='bg-[rgba(16,92,140,1)] w-[15vw] h-[7vh] absolute right-[40%] border-solid border-2 rounded-3xl'>
                                Tambahkan data
                            </button>
                            <img src="/img/imgDashboard/gambar2.png" alt="" className='h-[16vh] w-[18vw] right-24 top-47 absolute ' />
                        </div>
                    </div>
                    
                    {/* mid dashboard end */}



                    <h1>
                        quick edit
                    </h1>

                        {/* continerDown */}
                    <div className="ContainerDown text-white">
                        <div className="containerDown1 w-[70vw] h-[15vh] bg-[rgba(16,92,140,1)] m-auto mt-3 flex items-center">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-[8vw] ml-4'/>
                            <div className="text ml-2 w-[58vw] h-full mt-5">
                                <h1 className=''>lorem</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>

                        <div className="containerDown2 w-[70vw] h-[15vh] bg-[rgba(16,92,140,1)] m-auto mt-3 flex items-center">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-[8vw] ml-4'/>
                            <div className="text ml-2 w-[58vw] h-full mt-5 ">
                                <h1 className=''>lorem</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>
                    </div>
                    {/* downcontainer end*/}
                </div>
            </div>

            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 absolute flex justify-center items-center">
                <p>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}

        </>
    )
}


export default Dashboard;