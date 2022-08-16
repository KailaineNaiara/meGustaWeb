import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Guacamole",
      foodDetails:"Preparado com abacate, tomate, cebola, especiarias e temperos.",
      foodPrice:25,
      foodImg:"https://images.pexels.com/photos/3535380/pexels-photo-3535380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:2,
      foodName:"Tacos",
      foodDetails:"Tortilhas de milho que recebem os mais variados temperos.",
      foodPrice:13,
      foodImg:"https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:3,
      foodName:"Tortillas",
      foodDetails:"Pães assados em formato de disco, parecidas com panquecas.",
      foodPrice:17,
      foodImg:"https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:4,
      foodName:"Chilli com carne",
      foodDetails:"Carne moída trazida pelos espanhóis com feijão e molho de tomate.",
      foodPrice:24,
      foodImg:"https://i.pinimg.com/564x/36/cf/41/36cf41c01720d9bf23ddda6d5f6a53c0.jpg",
    },
    {
      id:5,
      foodName:"Burrito",
      foodDetails:"Com recheio, que variam entre carne, queijo, tomate, chilli e muitos outros",
      foodPrice:16,
      foodImg:"https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:6,
      foodName:"Nacho",
      foodDetails:"Os nachos são a versão frita dos pãezinhos de milho ou trigo. ",
      foodPrice:25,
      foodImg:"https://images.pexels.com/photos/5695878/pexels-photo-5695878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id:7,
      foodName:"Tequila",
      foodDetails:"A tequila é uma bebida tipica do mexico, desce quente ",
      foodPrice:10,
      foodImg:"https://as1.ftcdn.net/v2/jpg/04/96/48/14/1000_F_496481433_sQXrRLP6RIOBWRWRZbUTXEopWHG9Dcva.jpg",
    },
    {
      id:8,
      foodName:"Rapadura",
      foodDetails:"Deliciosa rapadura, com ingredientes vindos direto do mêxico ",
      foodPrice:10,
      foodImg:"https://as1.ftcdn.net/v2/jpg/04/59/95/98/1000_F_459959879_jypyboIHr1G6CbFF0yzpdbSaz7d4Dn66.jpg",
    },
    {
      id:9,
      foodName:"Coquetel",
      foodDetails:"Proporcionamos uma váriedade de drinks para nossos clientes ",
      foodPrice:12,
      foodImg:"https://as2.ftcdn.net/v2/jpg/03/41/03/23/1000_F_341032342_frCf0LgmYgyOPjYfDVtbWOBffLZNRQ7x.jpg",
    }
  ]
}
