
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {

  return (
    <>
      <Header/>
      <h1 className=' font-mono font-bold capitalize text-2xl text-center mt-4 mb-5'> books </h1>

      <div className="flex flex-wrap " >

   <Card img="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" tittle="Soul" discription="This is best book for knowing your solul" price="22"/>

   <Card img="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://www.adobe.com/express/create/cover/media_1042ff48ca7f6d77bde5524b0b57a191dd76ee0a0.jpeg?width=400&format=jpeg&optimize=medium" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHZ45a_2idHanJy01EUrYG7LNFkDmht93XwkS4-WUeZie2-V9DvPCJM5Aq0HKAnAuG7Y&usqp=CAU" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKisw8yRhrnUYwEg75K8hHS2h3njs7rqnH-AAKxxHiJkDA8wCZOJAJFAJ4PHvV0atuvZ8&usqp=CAU" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7ekxu3OzvIQLn2K9bnYPHvNlHiVnR216eg&usqp=CAU" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
   <Card img="https://images.squarespace-cdn.com/content/v1/5ae2fce87e3c3ae275ea2c9f/1526464175408-W92Q4MSAM40I8YF4HM64/tess-cover.jpg?format=1500w" tittle="A million one" discription="this is book for knowledge of a person in million" price="12"/>
   
      </div>
      
   <Footer/>
    </>
  )
}

export default App
