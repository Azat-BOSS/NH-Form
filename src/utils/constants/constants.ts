import { Pagination, Navigation } from "swiper"
import { TSliderOptions } from "../types/type"
import { SwiperModule } from "swiper/types/shared"

export const SliderOptions: TSliderOptions = {
  pagination: {
    el: ".swiper-pagination",
    type: null,
    clickable: true
  },
  navigation: {
    nextEl: ".slider__btns .swiper-button-next",
    prevEl: ".slider__btns .swiper-button-prev"
  },
  slidesPerView: 'auto',
  spaceBetween: 0,
}

export const EventOptions: TSliderOptions = {
  pagination: {},
  navigation: {
    nextEl: ".event__btns .swiper-button-next",
    prevEl: ".event__btns .swiper-button-prev"
  },
  slidesPerView: 'auto',
  spaceBetween: -50,
}

export let SliderModules: SwiperModule[] = [Pagination, Navigation]
export let EventModules: SwiperModule[] = [Navigation]