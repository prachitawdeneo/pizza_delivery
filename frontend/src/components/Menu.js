import React,{useEffect,useState} from 'react'
import { addPizza, addQty, getMenu, getPizza } from '../config/Myservice'
import Navv from './Navv'
import { Card,Button,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import jwt_decode from 'jwt-decode';

export default function Menu() {
    const [pizzaMenu,setPizzaMenu]=useState([]);
    const [orderData,setOrderData]=useState([]);
    const [uid,setUid]=useState('')
    const navigate=useNavigate();
    useEffect(()=>{
        
        
        getPizza()
        .then(res=>{
          console.log(res.data.orderData)
          setOrderData(res.data.orderData)
        })
        if(localStorage.getItem('_token')!==undefined){
          let token=localStorage.getItem('_token');
          let decode=jwt_decode(token);
          console.log(decode)
          setUid(decode.uid)
          getMenu()
          .then(res=>{
          console.log(res.data)
            setPizzaMenu(res.data)
        })
        }
    },[])

    const addCart=(id,index)=>{
      alert(pizzaMenu[index].pname)
      if(orderData.length===0){
        let data={pname:pizzaMenu[index].pname,image:pizzaMenu[index].image,price:pizzaMenu[index].price,quantity:1}
        addPizza(data,id)
        .then(res=>{
          console.log(res.data)
            alert("Added to Cart")
       
         })
         navigate('/menu',{replace:true})
         
      }
      else{
        console.log(orderData.some(e=>e.pname===pizzaMenu[index].pname))
        if(orderData.some(e=>e.pname===pizzaMenu[index].pname)){
          alert("Already Added")
          // let qtyId=0
          // orderData.some(e=>e.pname===pizzaMenu[index].pname?qtyId=e._id:e.id)
          // console.log(qtyId)
          // addQty(orderData,qtyId)
          // .then(res=>{
          //   console.log(res.data)
          // })
         
        }
        else{
          let data={pname:pizzaMenu[index].pname,image:pizzaMenu[index].image,price:pizzaMenu[index].price,quantity:1}
        addPizza(data,id)
        .then(res=>{
          console.log(res.data)
            alert("Added to Cart")
       
         })
        
        }
        
      }
      
      navigate('/cart',{replace:false})
    }
    return (
        <div>
            <Navv/>
            <h1 className="text-center">Menu : {uid}</h1>
            <Container >
              <div className="row">
            {pizzaMenu.map((pizza,index)=>
                <Card style={{ width: '20rem' }} className="col-4 m-4">
                <Card.Img variant="top" src={pizza.image} height="200px" width="400px"/>
                <Card.Body className="text-center">
                  <Card.Title>{pizza.pname}</Card.Title>
                  <Card.Text>
                   Price : {pizza.price} /-
                  </Card.Text>
                  <Button variant="primary" onClick={()=>addCart(pizza._id,index)}>Add</Button>
                </Card.Body>
              </Card>)}
              </div>
              </Container>
        </div>
    )
}
