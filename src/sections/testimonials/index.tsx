"use client"
import { TestimonialItemsTypes } from "@/types"
import React, { useState, useEffect, useRef, useCallback } from "react"
import styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import "./swiper.scss"
import SlideItem from "@/components/slideItem"

type Props = {
  data: TestimonialItemsTypes[]
  id:string
}

const Testimonials = ({ data, id }: Props) => {
  const [selectedSlide, setSelectedSlide] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const bulletsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bulletsRef.current) {
      const bullets = bulletsRef.current.querySelectorAll(
        ".swiper-pagination-bullet"
      )
      bullets.forEach((bullet: Element) => {
        bullet.classList.remove("swiper-pagination-bullet-active")
        if (bullet.textContent === (currentPage + 1).toString()) {
          bullet.classList.add("swiper-pagination-bullet-active")
        } else {
          bullet.classList.remove("swiper-pagination-bullet-active")
        }
      })
    }
  }, [currentPage])

  const renderBullet = useCallback((index: number, className: string) => {
    return `<span class="${className}">${index + 1}</span>`
  }, [])

  return (
    <section id={id} className={styles.container}>
      <div className={styles.testimonials}>
        <h5>Trusted by thousands of happy customers</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onNavigationNext={() => setCurrentPage(currentPage + 1)}
          onNavigationPrev={() => setCurrentPage(currentPage - 1)}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-bullets",
            renderBullet,
          }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.navigation) swiper.navigation.update()
            })
          }}
          className={styles.testimonials__cards}
        >
          {data.map((testimonial, index) => (
            <SwiperSlide
              key={`${testimonial.id}agent-${index}`}
              className={`${styles.testimonials__cards__item} ${
                selectedSlide === testimonial.id ? styles.active : ""
              }`}
            >
              <SlideItem
                {...testimonial}
                active={selectedSlide === testimonial.id}
                onClick={() => setSelectedSlide(testimonial.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.testimonials__controls}>
        <div className={styles["testimonials__controls--navigation"]}>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <div className={styles["testimonials__controls--pagination"]}>
          <div className="swiper-pagination-bullets" ref={bulletsRef}></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
