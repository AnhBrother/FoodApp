const express = require('express')
const {categoryData} = require('./constant')
// const categoryData = require('./constant')

const app = express()
app.use(express.json())
// app.use(express.urlencoded())

/* 
    Method :
    Get : => Dùng để lấy dữ liệu  
    Post : => Dùng để tạo dữ liệu ( thêm , cập nhật, xoá, lấy dữ liệu)
    Update : => Chuyên dùng để cập nhật lại dữ liệu
    Delete : => Chuyên dùng để xoá dữ liệu


    POST MAN (Cách gọi tham số):
    GET : => Tab Params
    POST, PUT, DELETE: => Tab Body
     - POST TYPE : 
        - form-data : Truyền tham số có đính kèm file (Multipart Form Data)
        - url-encoded (res.body): Truyền dạng key value ( không cho phép truyền file)
        - raw (res.body): Truyền tham số với nhiều dạng khác nhau (text, json, xml) truyền dũ liệu lớn không giới
        hạn về kích thước và dung lợn
*/

app.get('/menu/:tenmenu/:loai',(res,resp)=>{
    //Nơi xử lý code
    //urlencoded ( query params) (?tentham=giatri&tenthamso=giatri): res.query
    //path params (:tenthamso/:tenthamso):  res.params

    console.log(res.params)

    resp.send(`Hello menu`)
})

app.post('/menu/add/:loai',(res,resp)=>{
    
    console.log(res.params)
    console.log(res.query)
    console.log(res.body)

    resp.send(`Add Menu`)
})

app.get('/category',(res,resp)=>{
    resp.send(categoryData)
})

app.post('/category/add',(res,resp)=>{
    const newCategory = res.body
    // console.log(categoryData)
    const newData = [...categoryData,newCategory]
    // categoryData.push(newData)
    // console.log(res.body)
    resp.send(newData)
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server listen port ${port}`)
})

/* 
 viết một URL : Hiển thị toàn bộ danh sách category (/category)
    Bước 1 : Định nghĩa được đường dẫn phương thức GET
    Bước 2 : Lấy dữ liệu category data ở file const
    Bước 3 : Trả ra dữ liệu category data

 Viết một URL : Thêm một category mới ( POST ) (/category/add) 
*/
