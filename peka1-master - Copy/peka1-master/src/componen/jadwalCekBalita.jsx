import './css/input.css'

function JadwalCekBalita() {
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
                            Jadwal Cek Balita
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

                    <div className='content-center mt-20 w-full'>
                        <div className='float-left mb-5'>
                            <button className='bg-blue-900 text-white px-3 py-2 rounded-md mr-10'>Kalender</button>
                            <button className='bg-blue-900 text-white px-3 py-2 rounded-md '>Kegiatan</button>
                        </div>
                        <select name="filter" id="#" className='bg-blue-900 text-white px-3 py-1 rounded-full float-right mb-5'>
                            <option value="">Filter by</option>
                            <option value="">Terbaru</option>
                            <option value="">Terlama</option>
                        </select>
                    </div>

                    <div className='content-center mt-2 w-full '>
                        <div className='float-left'>
                            <div className="bg-blue-900  overflow-hidden shadow-lg max-w-80 py-5 rounded-xl mb-3">
                                <table className=' ml-5'>
                                    <tr>
                                        <td className='pl-3'><div className="text-white font-bold text-xl">Hari ini</div></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className='pl-3'><div className="text-white font-bold text-6xl">05</div></td>
                                        <td className='pl-3'><div className="text-white text-lg">Minggu</div></td>
                                    </tr>
                                    <tr>
                                        <td className='pl-3'><div className="text-white text-lg">Mei 2024</div></td>
                                    </tr>
                                </table>

                            </div>

                            <div className="  overflow-hidden shadow-lg max-w-80	bg-white py-5 rounded-xl">
                                <table className='w-10/12 m-auto'>
                                    <tr>
                                        <td><div className="font-bold text-xl mb-3">Jadwal Kamu</div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                </table>


                            </div>
                        </div>
                        <table className='max-w-7xl	text-xs	 text-blue-900 float-right text-center table-auto border-collapse mt-2 px-4 py-4 bg-white'>
                                    <tr>
                                    <th className='px-4 py-4'>No</th>
                                    <th className='px-4 py-4'>Tanggal Pendaftaran</th>
                                    <th className='px-4 py-4'>Nama Anak</th>
                                    <th className='px-4 py-4'>NIK Anak</th>
                                    <th className='px-4 py-4'>Nama Ibunda</th>
                                    <th className='px-4 py-4'>Nomor Antrian</th>
                                    </tr> 
                                     
                                    <tr>
                                        <td className='px-4 py-4'>1</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>2</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>3</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>4</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>
                                    <tr>
                                        <td className='px-4 py-4'>5</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>   
                                    <tr>
                                        <td className='px-4 py-4'>6</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>7</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>8</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>9</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>
                                    <tr>
                                        <td className='px-4 py-4'>10</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>   
                                </table>    
                    </div>
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

export default JadwalCekBalita;