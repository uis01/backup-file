import { query } from "../database/db.js"

export const getArtikel = async(req, res)=>{
    try{
        const result = await query('Select * from tb_artikel')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertArtikel = async(req,res)=>{
    const {id_artikel, title, image, content, date, sumber}= req.body
    try {
        await query("INSERT INTO tb_artikel (id_artikel, title, image, content, date, sumber) values (?, ?, ?, ?, ?, ?, ?, ?)", [id_artikel, title, image, content, date, sumber])
        return res.status(200).json({msg:"Artikel Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateArtikel = async (req, res) => {
    const { title, image, content, date, sumber } = req.body;
    const { id_artikel } = req.params;
    try {
        await query(
            "UPDATE tb_artikel SET title=?, image=?, content=?, date=?, sumber=? WHERE id_artikel=?", 
            [title, image, content, date, sumber, id_artikel]
        );
        return res.status(200).json({ msg: "Artikel Diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}


export const deleteArtikel = async(req,res)=>{
    const {id_artikel}=req.params
    try {
        await query("DELETE FROM tb_artikel where id_artikel=?", [id_artikel])
        return res.status(200).json({msg:"Artikel Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getArtikelById = async(req,res)=>{
    const {id_artikel}=req.params
    try{
        const result = await query('Select * from tb_artikel where id_artikel=?', [id_artikel])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getArtikelTest = async(req,res)=>{
    const {id_artikel, title, image, content, date, sumber} = req.query
    console.log(id_artikel, title, image, content, date, sumber)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_artikel where id_artikel=?', [id_artikel, title, image, content, date, sumber])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
