import './css/input.css'

function PerkembanganAnak() {
    return (
        <>
            <div className="containerRoot flex flex-row h-full bg-slate-200">

                {/* navigation Start  */}
                <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col mr-52 fixed bg-white'>
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]' />
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
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
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
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
                {/* navigation End  */}


                <div className="containerIsi pl-32 mt-10 mb-20 ml-52 mr-0 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-[70vw]">
                        <h1 className="text-4xl font-bold mr-auto my-auto">
                            Perkembangan Anak
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className="bg-white rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl" />
                        </div>
                        <div className="containerLogo flex flex-row w-32 mr-3 justify-center items-center">
                            <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                                <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]" />
                            </div>
                            <div className="containerProfil">
                                <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
                            </div>
                        </div>
                    </div>
                    {/* Top container end*/}

                    <div className='content-center mt-20 max-w-9xl '>
                        <div className='float-left'>
                            <div className="bg-blue-900  overflow-hidden shadow-lg text-center text-white max-w-64 px-8 py-2">Nama Anak Terdaftar</div>

                            <div className="  overflow-hidden shadow-lg max-w-64	bg-white py-36">
                                {/* kosong dulu ya gess */}
                            </div>
                        </div>
                        <div className='w-3/5 text-sm	 text-blue-900 float-right font-semibold mt-2 px-4 py-4 bg-white'>
                            <label >Berat Badan</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-5 px-5 py-5 w-32 mb-3" readOnly /><br />
                            <label >Tinggi Badan</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-5 px-5 py-5 w-32 mb-3" readOnly /><br />
                            <div className='my-5'>
                                <label className='mr-5'>Tampilkan Grafik berdasarkan riwayat</label>
                            <input type="checkbox" /><br />
                            </div>
                            <label >Deskripsi</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-48 px-5 py-5 w-full mb-3" readOnly /><br />
                            <label >Rekomendasi Makanan Penambah Nutrisi</label><br />
                            <div className='inline-grid grid-cols-4 gap-4'>
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            </div>
                        </div>           
                    </div>
                    <button className='bg-blue-900 text-white px-5 py-3 mt-8 rounded-t-xl rounded-b-xl float-right'>Kirim</button>
                </div>
            </div>
            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 fixed flex justify-center items-center">
                <p className='text-slate-50'>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}

        </>

    )
}

export default PerkembanganAnak;