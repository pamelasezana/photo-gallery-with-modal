'use client'

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";


const Page = () => {

  //state que controla o modal aparecer

  const[showModal, setShowModal] = useState(false); //nao aparece
  const[imageOfModal, setImageOfModal] = useState('');


  const openModal = (id:number) => {
    const photo = photoList.find(item => item.id === id);
    if (photo){
      setImageOfModal(photo.url);
      setShowModal(true)
    }
  }

  const modalClose = () => {
    setShowModal(false)
  }


  return(
      <div className="mx-2">
          <h1 className="text-center text-3xl font-bold my-10">Fotos Intergaláticas</h1>
          <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoList.map(item => (
              <PhotoItem  key={item.id} photo={item} btnClick={() => {openModal(item.id) }}  />
            ))}
          </section>

          {showModal &&
            <Modal  image = {imageOfModal} closeModal= {modalClose}/>
          }
      </div>
  )
}

export default Page;